import React, { forwardRef } from 'react';
import type { ThemeType, ThemeColors } from '../types';

export interface ThemedButtonProps {
  theme: ThemeType;
  colors: ThemeColors;
  label: string;
  /** Дополнительная подпись под основным текстом кнопки */
  subLabel?: string;
  onClick?: () => void;
}

export const ThemedButton = forwardRef<HTMLButtonElement, ThemedButtonProps>(
  ({ theme, colors, label, subLabel, onClick }, ref) => {
    const buttonStyles: React.CSSProperties = {
      backgroundColor: colors.background,
      color: colors.text,
      border: `2px solid ${colors.border}`,
      padding: '12px 24px',
      borderRadius: '8px',
      fontSize: '16px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '4px',
      // Растягиваем кнопку по высоте родителя (flex-контейнера)
      height: '100%',
      boxSizing: 'border-box',
    };

    const subLabelStyles: React.CSSProperties = {
      color: colors.text,
      fontSize: '13px',
      opacity: 0.75,
    };

    return (
      <button
        ref={ref}
        style={buttonStyles}
        onClick={onClick}
        data-theme={theme}
        aria-label={`Кнопка темы ${theme}`}
      >
        <span>{label}</span>
        {subLabel && <span style={subLabelStyles}>{subLabel}</span>}
      </button>
    );
  }
);

ThemedButton.displayName = 'ThemedButton';