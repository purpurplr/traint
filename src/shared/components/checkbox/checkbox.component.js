import { checkboxComponentStyles } from './checbox.component.styles.js';
import styles from './checbox.component.styles.css';

console.log('aaaaaaaaaaa', styles);

let checkboxTemplate = document.createElement('template');
checkboxTemplate.innerHTML = `
<style>${checkboxComponentStyles}</style>
<input id='one' type='checkbox' />
<label for='one'>
  <span></span>
  <slot></slot>
</label>`;

export class CheckboxComponent extends HTMLElement {
  constructor() {
    super();
    let shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(checkboxTemplate.content.cloneNode(true));
  }
}

customElements.define('jm-checkbox', CheckboxComponent);
