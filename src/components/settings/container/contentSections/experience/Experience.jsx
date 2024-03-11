import { ExperienceForm } from '../../../../forms/experienceForm/ExperienceForm';
import { ExperienceHead } from './head/ExperienceHead';
import { ExperienceSection } from './section/ExperienceSection';

export const Experience = () => {
    const section = ExperienceSection();
    const form = ExperienceForm(section);
    const head = ExperienceHead({ section, form });

    return (
        <>
            <div className='experience'>
                {head.render(section, form)}
                {section.render(form)}
            </div>
        </>
    );
};