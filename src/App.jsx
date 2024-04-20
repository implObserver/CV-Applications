
import './App.css';
import { Settings } from './components/originals/settings/Settings';
import { Resume } from './components/originals/resume/Resume';
import { appModel } from './main';
import { Helmet, HelmetProvider } from 'react-helmet-async';

export const App = () => {
  console.log(appModel)

  return (
    <HelmetProvider>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>CV-Application</title>
        <meta charset="UTF-8" />
      </Helmet>
      <Settings></Settings>
      <Resume></Resume>
    </HelmetProvider>
  );
}

export default App;
