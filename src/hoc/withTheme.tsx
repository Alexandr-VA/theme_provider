import React, { forwardRef, type ComponentType, type RefAttributes } from 'react';
import type { ThemeType } from '../types';

/** Пропсы, которые HOC добавляет оборачиваемому компоненту */
export interface WithThemeProps {
  theme: ThemeType;
}

/**
 * HOC withTheme:
 * - принимает компонент (функциональный или классовый),
 * - возвращает новый компонент, который получает проп theme
 *   и прокидывает его вместе с остальными пропсами в исходный компонент.
 */
export function withTheme<P extends WithThemeProps>(
  WrappedComponent: ComponentType<P>
): React.ForwardRefExoticComponent<
  React.PropsWithoutRef<Omit<P, keyof WithThemeProps>> &
    WithThemeProps &
    RefAttributes<unknown>
> {
  type OuterProps = Omit<P, keyof WithThemeProps> & WithThemeProps;

  const WithThemeComponent = forwardRef<unknown, OuterProps>((props, ref) => {
    const { theme, ...rest } = props;

    // Собираем пропсы для оборачиваемого компонента
    const componentProps = {
      ...(rest as Omit<P, keyof WithThemeProps>),
      theme,
    } as P;

    return <WrappedComponent ref={ref as never} {...componentProps} />;
  });

  // Сохраняем имя исходного компонента для удобства отладки
  const wrappedName =
    WrappedComponent.displayName ||
    WrappedComponent.name ||
    'Component';

  WithThemeComponent.displayName = `withTheme(${wrappedName})`;

  return WithThemeComponent;
}