import AsyncStorageModule, {
  AsyncStorageStatic,
} from '@react-native-async-storage/async-storage';
import { Storage } from 'expo-storage-universal';

const AsyncStorage = ((AsyncStorageModule as any).default ??
  AsyncStorageModule) as AsyncStorageStatic;
/**
 * NativeRegularStorage class implementing the Storage interface for native platforms.
 * Utilizes AsyncStorage for non-secure data storage on iOS and Android.
 */
export class NativeRegularStorage implements Storage {
  /**
   * Creates a new instance of NativeRegularStorage.
   */
  constructor() {}

  /**
   * Retrieves a value from AsyncStorage.
   * @param {string} key - The key of the item to retrieve.
   * @returns {Promise<string | undefined>} - A promise that resolves to the retrieved value or undefined if not found.
   * @example
   * const value = await storage.find('userId');
   */
  async find(key: string): Promise<string | undefined> {
    try {
      return (await AsyncStorage.getItem(key)) ?? undefined;
    } catch (error) {
      console.error('Error finding item in AsyncStorage:', error);
      throw error;
    }
  }

  /**
   * Saves a value to AsyncStorage.
   * @param {string} key - The key under which the value should be stored.
   * @param {string} value - The value to store.
   * @returns {Promise<void>} - A promise that resolves when the value has been saved.
   * @example
   * await storage.save('userId', '12345');
   */
  async save(key: string, value: string): Promise<void> {
    await AsyncStorage.setItem(key, value);
  }

  /**
   * Removes a value from AsyncStorage.
   * @param {string} key - The key of the item to remove.
   * @returns {Promise<void>} - A promise that resolves when the value has been removed.
   * @example
   * await storage.remove('userId');
   */
  async remove(key: string): Promise<void> {
    await AsyncStorage.removeItem(key);
  }
}
