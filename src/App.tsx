import { Block } from "baseui/block";
import { AppProvider } from "components/AppContext";
import Dashboard from "components/Dashboard/Dashboard";
import Snippets from "components/Snippets/Snippets";
import Stack from "components/Stack/Stack";
import TopNavigation from "components/TopNavigation/TopNavigation";
import { Outlet, ReactLocation, Router } from "react-location";
export enum Firebase {
  Stacks = "https://patriziocolomba-c5ef8.firebaseio.com/stacks.json",
  Posts = "https://patriziocolomba-c5ef8.firebaseio.com/posts.json",
}

interface AppRoute {
  itemId: string;
  title: string;
  path: string;
  element: JSX.Element;
}

export const routes: AppRoute[] = [
  { itemId: "repositories", title: "Repositories", path: "/", element: <Dashboard /> },
  { itemId: "stack", title: "Stack", path: "/stack", element: <Stack /> },
  { itemId: "snippets", title: "Code Snippets", path: "/snippets", element: <Snippets /> },
];

const location = new ReactLocation();
export default function App() {
  return (
    <Router location={location} routes={routes}>
      <AppProvider>
        <Block backgroundImage="url(/assets/images/banner.jpg)" backgroundPosition="center" backgroundSize="cover" height="20em" />
        <TopNavigation position="sticky" top={0} />
        <Block marginTop={"1em"}>
          <Outlet />
        </Block>
      </AppProvider>
    </Router>
  );
}
