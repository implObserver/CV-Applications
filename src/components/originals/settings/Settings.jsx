import { Sidebar } from './sidebar/Sidebar';
import { Container } from './container/Container';
import '../../../styles/Settings.css';
import '../../../styles/Form.css';
import '../../../styles/Icons.css';
import '../../../styles/Buttons.css';

export const Settings = () => {

  return (
    <>
      <div className='settings'>
        <Sidebar></Sidebar>
        <Container></Container>
      </div>
    </>
  )
}