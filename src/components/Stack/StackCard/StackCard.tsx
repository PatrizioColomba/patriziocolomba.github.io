import { Block } from "baseui/block";
import { Button, SHAPE, SIZE } from "baseui/button";
import { ButtonGroup } from "baseui/button-group";
import { Card, CardOverrides, StyledAction, StyledContents } from "baseui/card";
import { PropsWithChildren } from "react";
import { StyleObject } from "styletron-standard";

interface StackCardProps {
  title?: React.ReactNode;
  headerImage?: string | React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> | undefined;
}

const cardOverrides: CardOverrides = {
  Root: {
    style: ({ $theme }) => {
      return {
        boxShadow: $theme.lighting.shadow500,
      };
    },
  },
};

export default function StackCard({ title, headerImage, children, ...overrides }: PropsWithChildren<StackCardProps> & StyleObject) {
  return (
    <Card title={title} headerImage={headerImage} overrides={{ ...cardOverrides, Root: { style: overrides } }}>
      <StyledContents>
        <Block>{children}</Block>
      </StyledContents>
      <StyledAction>
        <ButtonGroup shape={SHAPE.pill} size={SIZE.compact}>
          <Button>Visualizza</Button>
        </ButtonGroup>
      </StyledAction>
    </Card>
  );
}
