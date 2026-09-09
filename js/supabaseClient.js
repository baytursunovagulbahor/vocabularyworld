/**
 * Supabase Client Integration for Vocabulary World
 * Provides real-time synchronization with remote Supabase database.
 */

export const SUPABASE_CONFIG = {
  url: 'https://ogrtifhgomqyvvdvkbza.supabase.co',
  anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ncnRpZmhnb21xeXZ2ZHZrYnphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg5NTc4NzQsImV4cCI6MjEwNDUzMzg3NH0.hXgQ2oDnV6-1onPgdpGSeqCKhdYQ-YmNNjqrSXG7-2Y',
  publishableKey: 'sb_publishable_ByZSwu2myV4I5vXIufEWPA_McX8mo0P'
};

class SupabaseService {
  constructor() {
    this.url = SUPABASE_CONFIG.url;
    this.key = SUPABASE_CONFIG.anonKey;
    this.headers = {
      'apikey': this.key,
      'Authorization': `Bearer ${this.key}`,
      'Content-Type': 'application/json',
      'Prefer': 'return=representation'
    };
    this.deviceId = this.getOrCreateDeviceId();
  }

  getOrCreateDeviceId() {
    let id = localStorage.getItem('vw_device_id');
    if (!id) {
      id = 'dev_' + Math.random().toString(36).substring(2, 15) + Date.now().toString(36);
      localStorage.setItem('vw_device_id', id);
    }
    return id;
  }

  async query(endpoint, options = {}) {
    try {
      const res = await fetch(`${this.url}/rest/v1/${endpoint}`, {
        ...options,
        headers: {
          ...this.headers,
          ...(options.headers || {})
        }
      });
      if (!res.ok) {
        console.warn(`Supabase query warning [${endpoint}]:`, res.status, res.statusText);
        return null;
      }
      return await res.json();
    } catch (err) {
      console.warn(`Supabase network error [${endpoint}]:`, err);
      return null;
    }
  }

  /* Levels & Topics */
  async getLevels() {
    return await this.query('levels?select=*&order=order_index.asc');
  }

  async getTopics(levelCode) {
    const filter = levelCode ? `&level_code=eq.${levelCode}` : '';
    return await this.query(`topics?select=*${filter}&order=order_index.asc`);
  }

  /* Words with 3 Example Sentences */
  async getWordsByTopic(topicId) {
    return await this.query(`words?topic_id=eq.${topicId}&select=*,word_examples(*)&order=created_at.asc`);
  }

  /* Placement Questions */
  async getPlacementQuestions() {
    return await this.query('placement_questions?select=*&order=id.asc');
  }

  /* Student Profile & Progress Sync */
  async syncStudentProfile(profileData = {}) {
    const payload = {
      device_id: this.deviceId,
      ...profileData,
      updated_at: new Date().toISOString()
    };
    return await this.query('user_profiles', {
      method: 'POST',
      headers: { 'Prefer': 'resolution=merge-duplicates' },
      body: JSON.stringify(payload)
    });
  }

  async recordLearnedWord(wordId) {
    try {
      // First ensure profile exists
      let profile = await this.query(`user_profiles?device_id=eq.${this.deviceId}&select=id`);
      let profileId = profile && profile[0] ? profile[0].id : null;
      if (!profileId) {
        const created = await this.syncStudentProfile();
        if (created && created[0]) profileId = created[0].id;
      }
      if (profileId) {
        await this.query('user_learned_words', {
          method: 'POST',
          headers: { 'Prefer': 'resolution=ignore-duplicates' },
          body: JSON.stringify({ profile_id: profileId, word_id: wordId })
        });
      }
    } catch (e) {
      console.warn("Error recording learned word to Supabase:", e);
    }
  }

  async recordQuizResult(topicId, score, totalQuestions) {
    try {
      let profile = await this.query(`user_profiles?device_id=eq.${this.deviceId}&select=id`);
      let profileId = profile && profile[0] ? profile[0].id : null;
      const percentage = Math.round((score / totalQuestions) * 100);
      await this.query('quiz_results', {
        method: 'POST',
        body: JSON.stringify({
          profile_id: profileId,
          topic_id: topicId,
          score: score,
          total_questions: totalQuestions,
          percentage: percentage
        })
      });
    } catch (e) {
      console.warn("Error recording quiz result to Supabase:", e);
    }
  }
}

export const supabaseService = new SupabaseService();
