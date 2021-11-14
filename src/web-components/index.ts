import { Checkbox } from './checkbox/checkbox.web-component';

const components = [Checkbox];

export function defineWebComponents(): void {
  components.forEach((component) => component.defineElement());
}
