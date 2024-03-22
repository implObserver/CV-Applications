
import './App.css';
import { Resume } from './components/resume/Resume';
import { Settings } from './components/settings/Settings';

export const App = () => {
  const props = {
    states: {}
  }

  return (
    <>
      <Settings props={props}></Settings>
      <Resume props={props}></Resume>
    </>
  );
}

export default App;
