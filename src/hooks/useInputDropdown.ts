import { useState } from "react";

interface useInputDropdownData {
  selectedInput: string;
  handleChangeSelectedInput: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function useInputDropdown(): useInputDropdownData {
  const [selectedInput, setSelectedInput] = useState<string>("New Input");

  function handleChangeSelectedInput(
    e: React.ChangeEvent<HTMLSelectElement>
  ): void {
    setSelectedInput(e.target.value);
  }

  return { selectedInput, handleChangeSelectedInput };
}
