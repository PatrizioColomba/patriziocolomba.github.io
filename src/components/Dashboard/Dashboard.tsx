import { Firebase } from "App";
import { FlexGrid, FlexGridItem, FlexGridProps } from "baseui/flex-grid";
import StackCard from "components/Stack/StackCard/StackCard";
import { useFetch } from "components/useFetch";
import { useState } from "react";

interface DashboardCard {
  name: string;
  image: string;
}

export default function Dashboard({ ...overrides }: Exclude<FlexGridProps, "justifyContent" | "gridTemplateColumns" | "display" | "gridGap">) {
  const [cards, setCards] = useState<DashboardCard[]>([]);

  useFetch<DashboardCard[]>(Firebase.Stacks, []).then(setCards);

  return (
    <FlexGrid justifyContent={"center"} display={"grid"} gridGap={"1em"} gridTemplateColumns={"repeat(auto-fit, 20em)"} {...overrides}>
      {cards.map((c) => (
        <FlexGridItem key={c.name}>
          <StackCard
            title={c.name}
            headerImage={{
              src: c.image,
              style: { width: "20em", height: "10em", objectFit: "cover" },
            }}
          />
        </FlexGridItem>
      ))}
    </FlexGrid>
  );
}
