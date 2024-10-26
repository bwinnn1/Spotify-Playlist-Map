import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { Router } from './components/Router/Router';
import { theme } from './theme';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { MusicMap } from './pages/MusicMap.page';
import { Insights } from './pages/Insights.page';


export default function App() {
  return (
    <MantineProvider theme={theme}>
      <BrowserRouter>
      <Router />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/musicmap" element={<MusicMap />} />
        <Route path="/insights" element={<Insights />} />
        {/* Add more routes here */}
      </Routes>
    </BrowserRouter>
    </MantineProvider>
  );
}
