import { EducationButtonWrapper } from './buttonWrapper/ButtonWrapper';
import { Section } from '../../../../../prototypes/contentSection/section/Section';

export const EducationSection = () => {
    const prototype = Section(EducationButtonWrapper());

    const render = (form) => (
        <>
            <div className={`education__section`}>
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
