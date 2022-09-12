import { useEffect, useState } from 'react';

export default function useStorage(storage, key, jsonify = false) {
  const [value, setValue] = useState(jsonify ? JSON.parse(storage.getItem(key)) : storage.getItem(key));

  useEffect(() => {
    if (!value) {
      storage.removeItem(key);
      return;
    }
    storage.setItem(key, jsonify ? JSON.stringify(value) : value);
  }, [value, storage, key, jsonify]);

  return [value, setValue];
}