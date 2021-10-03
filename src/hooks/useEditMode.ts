import { useState } from "react";

interface useEditModeData {
  toggleEditMode: () => void;
  editMode: boolean;
}

export default function useEditMode(): useEditModeData {
  const [editMode, setEditMode] = useState(false);

  function toggleEditMode(): void {
    setEditMode(!editMode);
  }

  return { editMode, toggleEditMode };
}
