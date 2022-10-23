import './user.component.scss';

import { IconButton } from '@material-ui/core';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

export const User = (): JSX.Element => {
  return (
    <IconButton aria-label="Login">
      <PersonAddIcon className="login__icon" />
    </IconButton>
  );
};
