import { useEffect, useLayoutEffect, useRef } from 'preact/hooks';

import { useForceUpdate } from '@hooks/use-force-update.hook';
import { ExternalStore, Instance } from '@hooks/external-store/external-store.types';

function checkIfSnapshotChanged<T>(inst: Instance<T>): boolean {
  const prevValue = inst.value;
  try {
    const currentValue = inst.getSnapshot();
    return !Object.is(prevValue, currentValue);
  } catch (error) {
    return true;
  }
}

export function useExternalStore<T>({ subscribe, getSnapshot }: ExternalStore<T>): T {
  const value = getSnapshot();

  const instance = useRef<Instance<T>>({ value, getSnapshot });
  const forceUpdate = useForceUpdate();

  useLayoutEffect(() => {
    instance.current.value = value;
    instance.current.getSnapshot = getSnapshot;

    if (checkIfSnapshotChanged(instance.current)) forceUpdate();
  }, [subscribe, value, getSnapshot]);

  useEffect(() => {
    if (checkIfSnapshotChanged(instance.current)) forceUpdate();

    const handleStoreChange = (): void => {
      if (checkIfSnapshotChanged(instance.current)) forceUpdate();
    };

    return subscribe(handleStoreChange);
  }, [subscribe]);

  return value;
}
