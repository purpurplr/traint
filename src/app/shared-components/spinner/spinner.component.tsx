import { JSX } from 'preact';

import './spinner.component.scss';

// TODO нормальный спиннер сделать блять
export const SpinnerComponent = (): JSX.Element => (
  <div className="spinner">
    <div className="spinner__blob spinner__blob_top" />
    <div className="spinner__blob spinner__blob_bottom" />
    <div className="spinner__blob spinner__blob_left" />

    <div className="spinner__blob spinner__blob_move" />
  </div>
);
