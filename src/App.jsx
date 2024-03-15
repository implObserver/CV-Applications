import { Settings } from './components/settings/Settings';
import { Resume } from './components/resume/Resume';
import './App.css';

export const App = () => {
  const settings = Settings();
  const resume = Resume();
  console.log('d')
 return (
      <>
        {settings.render()}
        {resume.render()}
      </>
    );
}

export default App;
