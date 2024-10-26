import { Card, Grid, Skeleton, Title } from '@mantine/core';
import { ReactNode } from 'react';

interface FeatureCardProps {
  title: string;
  loading: boolean;
  span: number; // Adjust if you need to support non-number values here
  children?: ReactNode;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ title, loading, span, children }) => (
  <Grid.Col span={span}>
    <Skeleton height={200} radius="md" animate={true} visible={loading}>
      <Card h={200} radius="md" padding="md" withBorder={true}>
        <Title size="1.2rem" mb="md">{title}</Title>
        {children}
      </Card>
    </Skeleton>
  </Grid.Col>
);
