
import './App.css';
import { Settings } from './components/originals/settings/Settings';
import { Resume } from './components/originals/resume/Resume';
import { appModel } from './main';

export const App = () => {
  console.log(appModel)

  return (
    <>
      <Settings></Settings>
      <Resume></Resume>
    </>
  );
}

export default App;
