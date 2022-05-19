import { routes } from "App";
import { ALIGN, HeaderNavigation, StyledNavigationItem as NavigationItem, StyledNavigationList as NavigationList } from "baseui/header-navigation";
import ThemeSwitch from "components/ThemeSwitch/ThemeSwitch";
import { Link } from "react-location";
import useWindowSize from "components/useWindowSize";
import { StyleObject } from "styletron-standard";

const getInactiveProps = () => {
  return {
    style: {
      fontWeight: "bold",
      color: "white",
      textDecoration: "none",
    },
  };
};

const getActiveProps = () => {
  return {
    style: {
      fontWeight: "bold",
      color: "#999999",
      textDecoration: "none",
    },
  };
};

/** A lot of literals in this component, need to revisit it */
export default function TopNavigation({ ...overrides }: StyleObject) {
  return (
    <HeaderNavigation overrides={{ Root: { style: { ...overrides } } }}>
      <NavigationList $align={ALIGN.right}>
        {routes.map((r) => (
          <NavigationItem key={r.path}>
            <Link to={r.path} getInactiveProps={getInactiveProps} getActiveProps={getActiveProps}>
              {r.title}
            </Link>
          </NavigationItem>
        ))}
      </NavigationList>
      {useWindowSize().width > 640 && (
        <>
      <NavigationList $align={ALIGN.center} />
      <NavigationList $align={ALIGN.right}>
        <NavigationItem>
          <ThemeSwitch />
        </NavigationItem>
      </NavigationList>
        </>
      )}
    </HeaderNavigation>
  );
}
