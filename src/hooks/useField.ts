import { useState } from "react";

export default function useField(
  initialValue?: string
): [string, (e: any) => void] {
  const [value, setValue] = useState(initialValue ? initialValue : "");
  const handleChange = (e: any) => setValue(e.target.value);
  return [value, handleChange];
}
