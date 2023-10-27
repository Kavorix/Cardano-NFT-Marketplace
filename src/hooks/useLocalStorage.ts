import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue) {
  // Get the stored value from local storage (if it exists)
  const storedValue = localStorage.getItem(key);

  // Initialize the state with the stored value or the provided initial value
  const [value, setValue] = useState(
    storedValue ? JSON.parse(storedValue) : initialValue
  );

  // Update local storage when the state changes
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}