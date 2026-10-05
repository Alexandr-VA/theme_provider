export type ThemeType = 'light' | 'dark';

export interface ThemeColors {
  background: string;
  text: string;
  border: string;
}

export type ThemesMap = Record<ThemeType, ThemeColors>;