import { PlayCircleIcon } from 'lucide-react';
import { Container } from './components/Container/Container';
import { CountDown } from './components/CountDown/Count';
import { Cycles } from './components/Cycles';
import { Defaultbutton } from './components/DefaultButton';
import { DefaultInput } from './components/DefaultInput';
import { Logo } from './components/Logo/Logo';
import { Menu } from './components/Menu/Menu';
import './styles/global.css';
import './styles/theme.css';
import { Footer } from './components/Footer';

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className='form' action=''>
          <div className='formRow'>
            <DefaultInput
              id='meuInput'
              type='text'
              labeText='task'
              title='task'
              placeholder='Digite uma tarefa'
            />
          </div>

          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className='formRow'>
            <Cycles />
          </div>

          <div className='formRow'>
            <Defaultbutton icon={<PlayCircleIcon />} color='green' />
          </div>
        </form>
      </Container>

      <Container>
        <Footer />
      </Container>
    </>
  );
}
