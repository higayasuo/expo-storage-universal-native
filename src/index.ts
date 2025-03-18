/**
 * Native implementation of expo-storage-universal
 */

export interface Storage {
  getItem(key: string): Promise<string | null>;
  setItem(key: string, value: string): Promise<void>;
  removeItem(key: string): Promise<void>;
  clear(): Promise<void>;
}

export class NativeStorage implements Storage {
  async getItem(): Promise<string | null> {
    return null;
  }

  async setItem(): Promise<void> {
    // Empty implementation
  }

  async removeItem(): Promise<void> {
    // Empty implementation
  }

  async clear(): Promise<void> {
    // Empty implementation
  }
}