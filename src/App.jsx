
import './App.css';
import { Settings } from './components/originals/settings/Settings';
import { Resume } from './components/originals/resume/Resume';
import { FillDefaultDatas } from './components/dataManagments/dataFill/fillSections';

export const App = () => {
  //FillDefaultDatas
  return (
    <>
      <Settings></Settings>
      <Resume></Resume>
    </>
  );
}

export default App;
