import { PersonalInfo } from "./personalInfo/PersonalInfo"
import '../../../../styles/ResumeHead.css'

import { Props } from "../../../dataManagments/props/Global"
import { State } from "../../../prototypes/state/State";

export const ResumeHead = () => {
    const props = Props.states.personalDetails;
    const backgroundColor = State('#ffa500');

    Object.assign(Props.states.resumeUpdater, { [props.id]: {} });
    Object.assign(Props.states.resumeUpdater.colorTheme.head, backgroundColor);

    return (
        <>
            <section className="resume__head" style={{ backgroundColor: backgroundColor.getState() }}>
                <PersonalInfo></PersonalInfo>
            </section>
        </>
    )
}