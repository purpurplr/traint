import { RefObject } from 'preact';
import { useEffect, useLayoutEffect, useRef } from 'preact/hooks';

declare global {
  interface WindowEventMap {
    'local-storage': CustomEvent;
  }
}

export function useEventListener<K extends keyof WindowEventMap>(
  eventName: K,
  handler: (event: WindowEventMap[K]) => void,
  element?: undefined,
  options?: boolean | AddEventListenerOptions,
): void;

export function useEventListener<K extends keyof HTMLElementEventMap, T extends HTMLElement = HTMLDivElement>(
  eventName: K,
  handler: (event: HTMLElementEventMap[K]) => void,
  element: RefObject<T>,
  options?: boolean | AddEventListenerOptions,
): void;

export function useEventListener<K extends keyof DocumentEventMap>(
  eventName: K,
  handler: (event: DocumentEventMap[K]) => void,
  element: RefObject<Document>,
  options?: boolean | AddEventListenerOptions,
): void;

export function useEventListener<
  KW extends keyof WindowEventMap,
  KH extends keyof HTMLElementEventMap,
  T extends HTMLElement | undefined = undefined,
>(
  eventName: KW | KH,
  handler: (event: WindowEventMap[KW] | HTMLElementEventMap[KH] | Event) => void,
  element?: RefObject<T>,
  options?: boolean | AddEventListenerOptions,
): void {
  const savedHandler = useRef(handler);

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useLayoutEffect(() => {
    const targetElement: T | Window = element?.current ?? window;

    const eventListener: typeof handler = (event) => savedHandler.current(event);

    targetElement.addEventListener(eventName, eventListener, options);

    return () => {
      targetElement.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element, options]);
}
