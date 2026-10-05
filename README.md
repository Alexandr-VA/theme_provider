# theme_provider

Демонстрация управления темой (light/dark) в React через **HOC `withTheme`** без использования React Context API.

## Стек

- React 18
- TypeScript
- Vite

## Как работает

1. `App` хранит состояние `theme: 'light' | 'dark'`.
2. Кнопка-переключатель меняет тему.
3. `withTheme` оборачивает `ThemedButton`, добавляя ему проп `theme`.
4. Стили кнопок обновляются автоматически при смене темы.
