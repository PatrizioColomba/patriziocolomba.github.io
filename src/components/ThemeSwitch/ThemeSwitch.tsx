import { Block, BlockProps } from "baseui/block";
import { AppTheme } from "components/AppContext";
import useAppContext from "components/useAppContext";

interface ThemeSwitchProps {}

export default function ThemeSwitch({ ...props }: ThemeSwitchProps & BlockProps) {
  const { theme, setTheme } = useAppContext();

  const color = (theme: AppTheme) => {
    switch (theme) {
      case AppTheme.light:
        return "#000000";
      case AppTheme.dark:
        return "#FFFFFF";
    }
  };

  return (
    <Block {...props}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        aria-hidden="true"
        cursor="pointer"
        onClick={() => {
          setTheme(switchTheme(theme));
        }}
      >
        <g transform="matrix( 1 0 0 1 4 1 )">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.3999 11C15.7999 10.1 16 9 16 8C16 3.6 12.4 0 8 0C3.6 0 0 3.6 0 8C0 9.1 0.200098 10.1 0.600098 11L2.19995 15L13.8 15L15.3999 11ZM11 22L12.6001 18L3.3999 18L5 22L11 22Z"
            fill={color(theme)}
            opacity="1"
          ></path>
        </g>
      </svg>
    </Block>
  );
}

function switchTheme(theme: AppTheme): AppTheme {
  switch (theme) {
    case AppTheme.dark:
      return AppTheme.light;
    case AppTheme.light:
      return AppTheme.dark;
  }
}
