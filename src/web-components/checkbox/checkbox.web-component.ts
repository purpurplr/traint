import { Connectable } from '../bootstrap/web-component.interface';

const styles = require('./checbox.web-component.css');
import { Keycode } from '../../models/keycode';
import { WebComponent } from '../bootstrap/web-component.decorator';

let checkboxTemplate = document.createElement('template');
checkboxTemplate.innerHTML = `
<style>${styles}</style>
<label class='checkbox-container'>
  <div class='checkbox'></div>
  <slot></slot>
</label>`;

@WebComponent({ selector: 'jm-checkbox' })
// @ts-ignore
export class CheckboxWebComponent extends HTMLElement implements Connectable {
  // TODO just an example. checkbox eventually must be implemented using just global styles
  // TODO upgrade property
  set checked(isChecked: boolean) {
    if (isChecked) this.setAttribute('checked', '');
    else this.removeAttribute('checked');
  }

  get checked() {
    return this.hasAttribute('checked');
  }

  constructor() {
    super();
    let shadowRoot = this.attachShadow({ mode: 'closed' });
    shadowRoot.appendChild(checkboxTemplate.content.cloneNode(true));
  }

  public connectedCallback() {
    this.addEventListener('keyup', this.onKeyUp);
    this.addEventListener('click', this.onClick);
  }

  public disconnectedCallback() {
    this.removeEventListener('keyup', this.onKeyUp);
    this.removeEventListener('click', this.onClick);
  }

  private onKeyUp(event: KeyboardEvent): void {
    if (event.key !== Keycode.Space) return;

    event.preventDefault();
    this.toggleChecked();
  }

  private onClick(): void {
    this.toggleChecked();
  }

  private toggleChecked(): void {
    this.checked = !this.checked;
    const event = new CustomEvent('change', {
      bubbles: true,
      detail: { returnValue: this.checked },
    });
    this.dispatchEvent(event);
  }
}
