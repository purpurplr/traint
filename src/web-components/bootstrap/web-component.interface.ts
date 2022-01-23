export interface Connectable extends CustomElementConstructor {
  connectedCallback?: () => void;
  disconnectedCallback?: () => void;
}

export interface WebComponentMetadata {
  selector: string;
}
