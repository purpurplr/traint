import { JSX } from 'preact';

import { useTheme } from '../../global-features/theme/theme.hook';
import { ThemeName } from '../../global-features/theme/models/theme-name.enum';

export function ThemeToggler(): JSX.Element {
  const [theme, setTheme] = useTheme();

  const toggleTheme = (): void => {
    setTheme((prevTheme) => {
      return prevTheme === ThemeName.Light ? ThemeName.Dark : ThemeName.Light;
    });
  };

  return <button onClick={toggleTheme}>{theme}</button>;
}
