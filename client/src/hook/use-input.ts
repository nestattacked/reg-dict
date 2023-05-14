import { ChangeEvent, KeyboardEvent, RefObject, useRef, useState } from 'react';
import { isFocused } from '../util/is-focused';

interface Return {
  input: RefObject<HTMLInputElement>;
  type: string;
  pattern: string;
  keyboardOpened: boolean;
  toggleType: () => void;
  toggleKeyboard: () => void;
  update: (event: ChangeEvent<HTMLInputElement>) => void;
  enter: (event: KeyboardEvent<HTMLInputElement>) => void;
  ins: (character: string) => void;
  del: () => void;
}

const useInput = (
  search: (type: string, pattern: string) => Promise<void>
): Return => {
  const input = useRef<HTMLInputElement>(null);
  const [type, setType] = useState('alphabet');
  const [pattern, setPattern] = useState('');
  const [keyboardOpened, setKeyboardOpened] = useState(false);

  const toggleType = (): void => {
    setType(type === 'alphabet' ? 'phonogram' : 'alphabet');
  };

  const toggleKeyboard = (): void => {
    setKeyboardOpened(!keyboardOpened);
  };

  const update = (event: ChangeEvent<HTMLInputElement>): void => {
    setPattern(event.target.value);
  };

  const enter = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      search(type, pattern);
    }
  };

  const ins = (character: string): void => {
    if (input.current === null || !isFocused(input.current)) {
      return;
    }

    const start = input.current.selectionStart;
    const end = input.current.selectionEnd;
    if (start === null || end === null) {
      return;
    }

    setPattern(pattern.slice(0, start) + character + pattern.slice(end));
    setTimeout(() => {
      const cursorIndex = start + character.length;
      input.current?.setSelectionRange(cursorIndex, cursorIndex);
    }, 0);
  };

  const del = (): void => {
    if (input.current === null || !isFocused(input.current)) {
      return;
    }

    const start = input.current.selectionStart;
    const end = input.current.selectionEnd;
    if (start === null || end === null) {
      return;
    }

    if (start === end) {
      setPattern(pattern.slice(0, Math.max(start - 1, 0)) + pattern.slice(end));
      setTimeout(() => {
        const cursorIndex = Math.max(start - 1, 0);
        input.current?.setSelectionRange(cursorIndex, cursorIndex);
      }, 0);
    } else {
      setPattern(pattern.slice(0, start) + pattern.slice(end));
      setTimeout(() => {
        const cursorIndex = start;
        input.current?.setSelectionRange(cursorIndex, cursorIndex);
      }, 0);
    }
  };

  return {
    input,
    type,
    pattern,
    keyboardOpened,
    toggleType,
    toggleKeyboard,
    update,
    enter,
    ins,
    del
  };
};

export { useInput };
