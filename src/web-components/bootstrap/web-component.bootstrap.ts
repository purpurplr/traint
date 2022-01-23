import { COMPONENT_METADATA } from './define-web-component.symbol';
import { Connectable } from './web-component.interface';

export function defineWebComponents(components: Connectable[]): void {
  components.forEach((component) => {
    const metadata = (component as any)[COMPONENT_METADATA];
    if (!metadata) throw new Error(`Attempt to define web component ${component} with no metadata`);
    customElements.define(metadata.selector, component);
  });
}
