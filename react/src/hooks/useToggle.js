import { useCallback, useState } from 'react';

// Простой хук для булевых состояний: открыт/закрыт, показан/скрыт.
// Возвращает [value, toggle], чтобы в компонентах не писать
// инверсию состояния вручную в каждом месте отдельно.
export function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  const toggle = useCallback(() => setValue((v) => !v), []);
  return [value, toggle];
}

export default useToggle;
