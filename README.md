# expo-storage-universal-native

Native implementation of [expo-storage-universal](https://github.com/higayasuo/expo-storage-universal).

## Features

- `NativeRegularStorage`: Non-secure storage implementation using `@react-native-async-storage/async-storage`
- `NativeSecureStorage`: Secure storage implementation using `expo-secure-store`

## Installation

```bash
npm install expo-storage-universal-native expo-storage-universal
```

## Usage

```typescript
import {
  NativeRegularStorage,
  NativeSecureStorage,
} from 'expo-storage-universal-native';

// For regular storage (non-secure)
const regularStorage = new NativeRegularStorage();
await regularStorage.save('userId', '12345');
const userId = await regularStorage.find('userId');
await regularStorage.remove('userId');

// For secure storage
const secureStorage = new NativeSecureStorage();
await secureStorage.save('authToken', 'your-token');
const token = await secureStorage.find('authToken');
await secureStorage.remove('authToken');
```

## API

### NativeRegularStorage

- `find(key: string): Promise<string | undefined>` - Retrieves a value from AsyncStorage
- `save(key: string, value: string): Promise<void>` - Saves a value to AsyncStorage
- `remove(key: string): Promise<void>` - Removes a value from AsyncStorage

### NativeSecureStorage

- `find(key: string): Promise<string | undefined>` - Retrieves a value from SecureStore
- `save(key: string, value: string): Promise<void>` - Saves a value to SecureStore
- `remove(key: string): Promise<void>` - Removes a value from SecureStore

## Development

```bash
# Install dependencies
npm install

# Run tests
npm test

# Build
npm run build

# Type checking
npm run typecheck

# Linting
npm run lint
```

## License

MIT
