import { useState } from 'preact/hooks';

export function useForceUpdate(): () => void {
  const [, update] = useState({});
  return () => update({});
}
