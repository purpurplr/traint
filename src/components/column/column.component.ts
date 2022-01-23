export const ColumnComponent = {
  getRepresentation: (content: (HTMLElement | DocumentFragment)[] = []): HTMLElement => {
    const containerElement = document.createElement('div');
    containerElement.style.display = 'flex';
    containerElement.style.flexDirection = 'column';
    return content.reduce((fragment: HTMLDivElement, item: HTMLElement | DocumentFragment) => {
      fragment.appendChild(item);
      return fragment;
    }, containerElement);
  },
};
