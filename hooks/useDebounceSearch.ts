import { useState } from "react";
import { useDebounce } from "use-debounce";

export const useDebouncedSearch = () => {
  const [inputText, setInputText] = useState<string>("");

  const [searchQuery] = useDebounce(inputText, 500);

  return {
    inputText,
    debouncedInputValue: searchQuery,
    setInputText,
  };
};
