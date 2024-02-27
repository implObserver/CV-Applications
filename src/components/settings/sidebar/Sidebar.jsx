import '../../../styles/Sidebar.css';
import { Content } from './content/Content';
import { Customize } from './customize/Customize';

export const Sidebar = () => {
  return (
    <>
      <div className='sidebar'>
        <Content></Content>
        <Customize></Customize>
      </div>
    </>
  );
};
