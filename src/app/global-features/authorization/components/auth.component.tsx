import { IconButton } from '@material-ui/core';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

import { useTheme } from '@global-features/theme/use-theme.hook';

export const Auth = (): JSX.Element => {
  const { themeConfig } = useTheme();

  return (
    <IconButton aria-label="Login">
      <PersonAddIcon htmlColor={themeConfig.basicPalette?.['color-basic-900']} />
    </IconButton>
  );
};
