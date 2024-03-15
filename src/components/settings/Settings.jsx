import { Sidebar } from './sidebar/Sidebar';
import { Container } from './container/Container';
import '../../styles/Settings.css';
import '../../styles/Form.css';
import '../../styles/Icons.css';
import '../../styles/Buttons.css';

export const Settings = () => {

  const container = Container();
  const sidebar = Sidebar();

  const render = () => {
    return (
      <>
        <div className='settings'>
          {sidebar.render()}
          {container.render()}
        </div>
      </>
    )
  }

  return { render }
}
