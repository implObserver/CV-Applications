
import './App.css';
import { Settings } from './components/settings/Settings';

export const App = () => {
  const props = {
    states: {}
  }

  return (
    <>
      <Settings props={props}></Settings>
    </>
  );
}

export default App;
