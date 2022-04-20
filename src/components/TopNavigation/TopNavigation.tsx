import { routes } from "App";
import { ALIGN, HeaderNavigation, StyledNavigationItem as NavigationItem, StyledNavigationList as NavigationList } from "baseui/header-navigation";
import { HeadingXSmall } from "baseui/typography";
import { themes } from "components/AppContext";
import AppSearch from "components/AppSearch/AppSearch";
import ThemeSwitch from "components/ThemeSwitch/ThemeSwitch";
import useAppContext from "components/useAppContext";
import useWindowSize from "components/useWindowSize";
import { Link } from "react-location";
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
  const { theme } = useAppContext(),
    size = useWindowSize();

  return (
    <HeaderNavigation overrides={{ Root: { style: { paddingRight: "24px", ...overrides } } }}>
      <NavigationList $align={ALIGN.left}>
        <NavigationItem>
          <HeadingXSmall margin={0}>Patrizio Colomba on GitHub Pages</HeadingXSmall>
        </NavigationItem>
      </NavigationList>
      <NavigationList $align={ALIGN.center} />
      {size && size.width > themes[theme].breakpoints.medium + 100 ? (
        <NavigationList $align={ALIGN.right}>
          {routes.map((r) => (
            <NavigationItem key={r.path}>
              <Link to={r.path} getInactiveProps={getInactiveProps} getActiveProps={getActiveProps}>
                {r.title}
              </Link>
            </NavigationItem>
          ))}
          {size && size.width > themes[theme].breakpoints.large ? (
            <>
              <NavigationItem>
                <ThemeSwitch />
              </NavigationItem>
              <NavigationItem style={{ width: "200px" }}>
                <AppSearch />
              </NavigationItem>
            </>
          ) : (
            ""
          )}
        </NavigationList>
      ) : (
        ""
      )}
    </HeaderNavigation>
  );
}
