import { appModel } from '../../../../../main';
import Sections from '../../../../dataManagments/JSON/Sections.json'
import { usePropsContext } from '../../../../dataManagments/context/PropsContext';
import { State } from '../../../state/State';

export const ResumeSectionHead = () => {
    const props = usePropsContext();
    const color = State(appModel.resume.styles.colors.head.getState());
    const name = Sections[props.id].head;

    Object.assign(appModel.resume.styles.colors, { [props.id]: color });
    return (
        <>
            <div className="resume__section__head"
                style={{
                    color: color.getState(),
                    backgroundColor: `color-contrast(${color.getState()} vs #4a607d, #e8f2ff)`
                }}>
                <span>{name}</span>
            </div>
        </>
    )
}