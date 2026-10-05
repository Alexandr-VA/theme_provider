import React, { useMemo, useState } from 'react';
import { withTheme, type WithThemeProps } from './hoc/withTheme';
import {
  ThemedButton,
  type ThemedButtonProps,
} from './components/ThemedButton';
import type { ThemeType, ThemesMap } from './types';

type ThemedButtonWithoutTheme = Omit<ThemedButtonProps, keyof WithThemeProps>;

const ThemedButtonWithTheme = withTheme(ThemedButton);

const themes: ThemesMap = {
  light: {
    background: '#ffffff',
    text: '#1a1a1a',
    border: '#1a1a1a',
  },
  dark: {
    background: '#1a1a1a',
    text: '#ffffff',
    border: '#ffffff',
  },
};

export default function App(): JSX.Element {
  const [theme, setTheme] = useState<ThemeType>('light');

  const toggleTheme = (): void => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const colors = useMemo(() => themes[theme], [theme]);

  const pageStyles: React.CSSProperties = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '24px',
    backgroundColor: colors.background,
    color: colors.text,
    transition: 'all 0.3s ease',
    fontFamily: 'system-ui, sans-serif',
  };

  // Контейнер для двух кнопок: flex-строка, кнопки растягиваются по высоте
  const buttonsRowStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
    gap: '16px',
  };

  const buttonLabel =
    theme === 'light'
      ? 'Включить тёмную тему'
      : 'Включить светлую тему';

  return (
    <div style={pageStyles}>
      <div style={buttonsRowStyles}>
        <ThemedButtonWithTheme
          theme={theme}
          colors={colors}
          label={buttonLabel}
          subLabel={`Текущая тема: ${theme}`}
          onClick={toggleTheme}
        />

        <ThemedButtonWithTheme
          theme={theme}
          colors={colors}
          label="Кнопка с темой"
          onClick={() => console.log('clicked')}
        />
      </div>
    </div>
  );
}