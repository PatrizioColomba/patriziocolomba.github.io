import { Block } from "baseui/block";
import { AppProvider } from "components/AppContext";
import Dashboard from "components/Dashboard/Dashboard";
import Snippets from "components/Snippets/Snippets";
import Stack from "components/Stack/Stack";
import TopNavigation from "components/TopNavigation/TopNavigation";
import { createHashHistory, Outlet, ReactLocation, Router } from "react-location";
export enum Firebase {
  Stacks = "https://patriziocolomba-c5ef8.firebaseio.com/stacks.json",
  Posts = "https://patriziocolomba-c5ef8.firebaseio.com/posts.json",
  Snippets = "https://patriziocolomba-c5ef8.firebaseio.com/snippets.json",
}

interface AppRoute {
  itemId: string;
  title: string;
  path: string;
  element: JSX.Element;
}

export const routes: AppRoute[] = [
  { itemId: "home", title: "Home", path: "/", element: <Dashboard /> },
  { itemId: "snippets", title: "Snippets", path: "/snippets", element: <Snippets /> },
  { itemId: "tags", title: "Tags", path: "/stack", element: <Stack /> },
  { itemId: "repositories", title: "Repositories", path: "/repositories", element: <Dashboard /> },
];

const location = new ReactLocation({
  history: createHashHistory(),
});

export default function App() {
  return (
    <Router location={location} routes={routes}>
      <AppProvider>
        <TopNavigation position="sticky" top={0} />
        <Block marginTop={"1em"}>
          <Outlet />
        </Block>
      </AppProvider>
    </Router>
  );
}
