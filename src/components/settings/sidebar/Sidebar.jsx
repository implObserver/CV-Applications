import '../../../styles/Sidebar.css';
import { Content } from './content/Content';
import { Customize } from './customize/Customize';

export const Sidebar = () => {
  const content = Content();
  const customize = Customize();

  const render = () => {
    return (
      <>
        <div className='sidebar'>
          {content.render()}
          {customize.render()}
        </div>
      </>
    )
  }

  return { render }
};
