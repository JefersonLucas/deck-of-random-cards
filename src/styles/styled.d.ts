import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      background: {
        primary: string;
        secondary: string;
        tertiary: string;
      };
      text: {
        white: string;
        black: string;
      };
      others: {
        cyan: string;
        orange: string;
      };
    };
  }
}
