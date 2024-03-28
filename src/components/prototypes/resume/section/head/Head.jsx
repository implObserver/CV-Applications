import Sections from '../../../../dataManagments/JSON/Sections.json'
import { usePropsContext } from '../../../../dataManagments/context/PropsContext';

export const ResumeSectionHead = () => {
    const props = usePropsContext();
    const name = Sections[props.id].head;
    return (
        <>
            <div className="resume__section__head">
                <span>{name}</span>
            </div>
        </>
    )
}