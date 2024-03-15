import '../../../../styles/TemplateLoader.css';
import { ClearResume } from './clearResume/ClearResume';
import { LoadExample } from './loadExample/LoadExample';

export const TemplateLoader = () => {
  const clearResume = ClearResume();
  const loadExample = LoadExample();

  const render = () => {
    return (
      <>
        <div className='template__loader'>
          {clearResume.render()}
          {loadExample.render()}
        </div>
      </>
    )
  }
  return { render }
};
