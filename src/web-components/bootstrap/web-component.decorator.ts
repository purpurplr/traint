import { COMPONENT_METADATA } from './define-web-component.symbol';
import { WebComponentMetadata } from './web-component.interface';

export function WebComponent(metadata: WebComponentMetadata) {
  return (constructor: CustomElementConstructor) => {
    (constructor as any)[COMPONENT_METADATA] = metadata;
  };
}
