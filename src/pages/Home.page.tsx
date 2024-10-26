import { useState } from 'react';
import { AppShell, Card, Text, Title, Container, Grid, Skeleton} from '@mantine/core';
import classes from './HomePage.module.css';
import { Router } from '../components/Router/Router';
import { FeatureCard } from '@/components/FeatureCard/FeatureCard';

export function HomePage() {
  // true/false --> display skeleton/load content
  // TODO: usestate function to determine when content loads
  const [loading, setLoading] = useState(false);
  
  // feature card data here
  // i decided to map a list instead of hardcoding every single feature card
  // this made the code more readable so i stuck with this change
  // NOTE: you can edit content as just pure HTML
  // if this helps you include images & stuff
  const featureCards = [
    { 
      title: 'we should write', 
      span: { base: 12, xs: 8 },
      content: <Text>This is some content for the first card</Text>
    },
    { 
      title: 'some cool stuff here', 
      span: { base: 12, xs: 4 },
      content: <div>
        <Text>You can add multiple elements</Text>
        <Text c="dimmed">Including styled ones</Text>
      </div>
    },
    { 
      title: 'and maybe include', 
      span: { base: 12, xs: 3 },
      content: <Text>Third card content</Text>
    },
    { 
      title: 'some icons', 
      span: { base: 12, xs: 3 },
      content: <Text>Fourth card content</Text>
    },
    { 
      title: 'and also images', 
      span: { base: 12, xs: 6 },
      content: <Text>Fifth card content</Text>
    }
  ];
  return (
    <>
      {/* using appshell to create a sticky header */}
      <AppShell
        header={{ height: 100 }} 
        padding="md"
      >
        <AppShell.Header>
          <Router />
        </AppShell.Header>

        <AppShell.Main>
          <Container ta="left" size="lg" maw={1000}>
            <Container ta="left" mt={0} size="lg" maw={1000}>
              <Text className={classes.adlibs} size="sm" fw="700">
                VIBEMAP FOR SPOTIFY
              </Text>

              <Title className={classes.title}>
                discover musical insights with <br />
                <Text inherit variant="gradient" component="span" gradient={{ from: 'darkgreen', to: 'green' }}>
                  VibeMap 
                </Text>
              </Title>

              <Text size="lg" mt={30} maw={1000}>
              See the rhythm behind your favorite songs. Dive into personalized insights that reveal the unique patterns of your music taste, 
              connect with like-minded listeners who share your vibe, and explore fresh sounds to expand your playlist. 
              Let Spotify VibeMap reveal your new favorite songs.
              </Text>

              <Grid mt={100}>
                {featureCards.map((card, index) => (
                  <FeatureCard
                    key={index}
                    title={card.title}
                    loading={loading}
                    span={card.span}
                  >
                  {card.content}
                </FeatureCard>
                ))}

              </Grid>
            </Container>
          </Container>
        </AppShell.Main>
      </AppShell>
    </>
  );
}