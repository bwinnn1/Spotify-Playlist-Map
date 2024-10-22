import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';
import { Router} from '../components/Router/Router';

export function HomePage() {
  return (
    <>
      <Router />
      <Welcome />
      <ColorSchemeToggle />
    </>
  );
}
