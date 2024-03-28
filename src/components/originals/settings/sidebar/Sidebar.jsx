import '../../../../styles/Sidebar.css';
import { Content } from './content/Content';
import { Customize } from './customize/Customize';

export const Sidebar = ({ props }) => {
  return (
    <>
      <div className='sidebar'>
        <Content props={props}></Content>
        <Customize props={props}></Customize>
      </div>
    </>
  )
}