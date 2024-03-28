
import './App.css';
import { Settings } from './components/originals/settings/Settings';
import { Resume } from './components/originals/resume/Resume';

export const App = () => {
  const props = {
    states: {}

  }
  console.log(props)
  return (
    <>
      <Settings props={props}></Settings>
      <Resume props={props}></Resume>
    </>
  );
}

export default App;
