import { Divider } from 'src/models/divider.interface';

export const DividerComponent = {
  createRepresentation: (divider: Divider): void => {
    const dividerAnchor = document.querySelector(`[data-divider=${divider.className}]`);
    const dividerAnchorNode = dividerAnchor?.parentNode;
    const dividerElement = document.createElement('div');

    dividerElement.className = divider.className;
    dividerElement.innerText = divider.displayText;

    dividerAnchorNode?.insertBefore(dividerElement, (dividerAnchor as Element).nextSibling);
  },
};
