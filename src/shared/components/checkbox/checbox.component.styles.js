// TODO come up with a better way about the styles
export const checkboxComponentStyles = `

* {
  box-sizing: border-box;
}

input[type='checkbox'] {
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
  cursor: pointer;
}

input[type='checkbox'] + label {
  position: relative;
  display: flex;
  margin: 0.6em 0;
  align-items: center;
  color: var(--color-font-default);
  transition: color 250ms cubic-bezier(0.4, 0, 0.23 ,1);
}

input[type='checkbox'] + label > span {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1em;
  width: 1em;
  height: 1em;
  background: transparent;
  border: 2px solid #9E9E9E;
  border-radius: 2px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(.4,.0,.23,1);
}

input[type='checkbox'] + label:hover, input[type='checkbox']:focus + label {
  color: var(--color-font-default);
}

input[type='checkbox'] + label:hover > span, input[type='checkbox']:focus + label > span {
  background: rgba(255,255,255,.1);
}

input[type='checkbox']:checked + label > span {
  border: .5em solid #FFEB3B;
  animation: shrink-bounce 200ms cubic-bezier(.4,.0,.23,1);
}

input[type='checkbox']:checked + label > span:before {
  content: "";
  position: absolute;
  top: 0.6em;
  left: 0.2em;
  border-right: 3px solid transparent;
  border-bottom: 3px solid transparent;
  transform: rotate(45deg);
  transform-origin: 0 100%;
  animation: checkbox-check 125ms 250ms cubic-bezier(0.4, 0, 0.23, 1) forwards;
}

@keyframes shrink-bounce {
  0%{
    transform: scale(1);
  }
  33%{
    transform: scale(.85);
  }
  100%{
    transform: scale(1);
  }
}

@keyframes checkbox-check {
  0%{
    width: 0;
    height: 0;
    border-color: #212121;
  transform: translate3d(0,0,0) rotate(45deg);
}
  33%{
    width: .2em;
    height: 0;
    transform: translate3d(0,0,0) rotate(45deg);
}
  100%{
    width: .2em;
    height: .5em;
    border-color: #212121;
  transform: translate3d(0,-.5em,0) rotate(45deg);
}
}
`;
