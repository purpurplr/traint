const styles = require('./checbox.web-component.css');

enum Keycode {
  Space = '62',
}

let checkboxTemplate = document.createElement('template');
checkboxTemplate.innerHTML = `
<style>${styles}</style>
<label for='one'>
  <span></span>
  <slot></slot>
</label>`;

interface WebComponent {
  connectedCallback?: () => void;
  disconnectedCallback?: () => void;
}

class CheckboxWebComponent extends HTMLElement implements WebComponent {
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

const defineComponent = () => customElements.define('jm-checkbox', CheckboxWebComponent);

export const Checkbox = {
  defineElement: defineComponent,
};
