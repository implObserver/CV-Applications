import { ExperienceButtonWrapper } from './buttonWrapper/ButtonWrapper';
import { Section } from '../../../../../prototypes/contentSection/section/Section';

export const ExperienceSection = () => {
  const prototype = Section(ExperienceButtonWrapper());

  const render = (form) => (
    <>
      <div className={`experience__section`}>
        {(() => {
          if (prototype.getDrawStatus() === 'form') {
            return (<>
              {form.render(prototype.drawIt)}
            </>)
          } else {
            return (<>
              {prototype.getChilds()[0].render(prototype.drawIt, form)}
            </>)
          }
        })()}
      </div>
    </>
  );

  return Object.assign(prototype, { render });
};
