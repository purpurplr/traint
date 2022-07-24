import { UnknownFunction } from '@typings/utility-types/function.types';

export interface Timer {
  pause: () => number;
  resume: () => void;
}

export function setTimer(callback: UnknownFunction, delay: number): Timer {
  let timeoutId: number | null;
  let startedAt: number;
  let timeLeft = delay;

  const pause = (): number => {
    if (!timeoutId) return 0;

    window.clearTimeout(timeoutId);
    timeoutId = null;
    const timePassed = Date.now() - startedAt;
    timeLeft -= timePassed;
    console.log(timeLeft);
    return timeLeft;
  };

  const resume = (): void => {
    if (timeoutId) return;

    startedAt = Date.now();
    timeoutId = window.setTimeout(callback, timeLeft);
  };

  resume();

  return { pause, resume };
}
