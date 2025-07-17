import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { Defaultbutton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';

export function MainForm() {
  return (
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
        <p>Digite uma tarefa acima!</p>
      </div>

      <div className='formRow'>
        <Cycles />
      </div>

      <div className='formRow'>
        <Defaultbutton icon={<PlayCircleIcon />} color='green' />
      </div>
    </form>
  );
}
