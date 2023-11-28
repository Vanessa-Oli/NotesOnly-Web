import { InputHTMLAttributes } from 'react';
import { FiPlus, FiX } from 'react-icons/fi';
import { NoteItemContainer } from "./styles";

interface NoteItemProps extends InputHTMLAttributes<HTMLInputElement> {
  isNew?: boolean;
  value?: string;
  onClick?: () => void;
}

export function NoteItem({ isNew = false, value, onClick, ...rest }: NoteItemProps) {
  return (
    <NoteItemContainer isNew={isNew}>
      <input
        type="text"
        value={value}
        readOnly={!isNew}
        {...rest}
      />

      <button
        type="button"
        onClick={onClick}
        className={ isNew ? 'button-add' : 'button-delete'}
      >
        { isNew ? <FiPlus /> : <FiX />}
      </button>
    </NoteItemContainer>
  );
}