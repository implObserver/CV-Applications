import Sections from '../../../../dataManagments/JSON/Sections.json'
import { usePropsContext } from '../../../../dataManagments/context/PropsContext';
import { Props } from '../../../../dataManagments/props/Global';
import { State } from '../../../state/State';

export const ResumeSectionHead = () => {
    const props = usePropsContext();
    const color = State(Props.states.resumeUpdater.colorTheme.head.getState());
    const name = Sections[props.id].head;
    Object.assign(Props.states.resumeUpdater.colorTheme, { [props.id]: color });
    return (
        <>
            <div className="resume__section__head"
                style={{
                    color: color.getState(),
                    backgroundColor: `color-contrast(${Props.states.resumeUpdater.colorTheme.head.getState()} vs #4a607d, #e8f2ff)`
                }}>
                <span>{name}</span>
            </div>
        </>
    )
}