import { SetStateAction, useEffect, useState } from "react";

function useLocalStorage<T>(
  key: string,
  initialValue?: T
): [T | undefined, React.Dispatch<SetStateAction<T | undefined>>, () => void] {
  const [value, setValue] = useState<T | undefined>(
    parseJSON(localStorage.getItem(key)) || initialValue
  );

  useEffect(() => {
    if (value) {
      let valueToSet =
        typeof value === "string" ? value : JSON.stringify(value);
      localStorage.setItem(key, valueToSet);
    }
  }, [value]);

  const removeValue = () => {
    setValue(undefined);
    localStorage.removeItem(key);
  };

  return [value, setValue, removeValue];
}

export default useLocalStorage;

// A wrapper for "JSON.parse()"" to support "undefined" value
function parseJSON<T>(value: string | undefined | null): T | undefined {
  try {
    return value === "undefined" ? undefined : JSON.parse(value || "");
  } catch {
    console.log("parsing error on", { value });
    return value as any;
  }
}
