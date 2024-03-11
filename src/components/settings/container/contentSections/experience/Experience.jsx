import { ExperienceForm } from '../../../../forms/experienceForm/ExperienceForm';
import { ExperienceHead } from './head/ExperienceHead';
import { ExperienceSection } from './section/ExperienceSection';

export const Experience = () => {
    const form = ExperienceForm();
    const section = ExperienceSection(form);
    const head = ExperienceHead({ section, form });

    return (
        <>
            <div className='experience'>
                
                
            </div>
        </>
    );
};