import { Anchor, Text, Title } from '@mantine/core';
import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        gogogo{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          Spotify Map 
        </Text>
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        i think we will use mantine now... check this out:{' '}
        <Anchor href="https://mantine.dev/guides/vite/" size="lg">
          link
        </Anchor>
      </Text>
    </>
  );
}
