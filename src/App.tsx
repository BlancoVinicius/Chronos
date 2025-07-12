import { Container } from './components/Container/Container';
import { Logo } from './components/Logo/Logo';
import { Menu } from './components/Menu/Menu';
import './styles/global.css';
import './styles/theme.css';

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>
    </>
  );
}
