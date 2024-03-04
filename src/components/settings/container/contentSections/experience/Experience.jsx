import '../../../../../styles/Experience.css'
import { ExperienceHead } from './head/ExperienceHead';
import { ExperienceSection } from './section/ExperienceSection';

export const Experience = () => {
    const section = ExperienceSection();
    return (
        <>
            <div className='education'>
                <ExperienceHead section={section}></ExperienceHead>
                {section.render}
            </div>
        </>
    );
};