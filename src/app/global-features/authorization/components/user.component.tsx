import './user.component.scss';

import { IconButton } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

export const User = (): JSX.Element => {
  return (
    <IconButton aria-label="Login">
      <PersonAddIcon className="login__icon" />
    </IconButton>
  );
};
