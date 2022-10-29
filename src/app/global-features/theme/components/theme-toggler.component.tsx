import { IconButton } from '@mui/material';

import SunIcon from '@mui/icons-material/WbSunnyTwoTone';
import MoonIcon from '@mui/icons-material/Brightness2';

import { useTheme } from '../use-theme.hook';
import { ThemeName } from '../models/theme-name.enum';

import './theme-toggler.component.scss';

export const ThemeToggler = (): JSX.Element => {
  const { theme, setTheme } = useTheme();

  const Icon = {
    [ThemeName.Light]: SunIcon,
    [ThemeName.Dark]: MoonIcon,
  }[theme];

  const toggleTheme = (): void => {
    setTheme((prevTheme) => {
      return prevTheme === ThemeName.Light ? ThemeName.Dark : ThemeName.Light;
    });
  };

  return (
    <IconButton aria-label="Theme toggler" onClick={toggleTheme}>
      <Icon className="theme-toggler__icon" />
    </IconButton>
  );
};
