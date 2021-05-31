import { useState } from "react";

export default function useField(): [string, (e: any) => void] {
  const [value, setValue] = useState("");
  const handleChange = (e: any) => setValue(e.target.value);
  return [value, handleChange];
}
