import { PersonalInfo } from "./personalInfo/PersonalInfo"
import '../../../../styles/ResumeHead.css'

import { Props } from "../../../dataManagments/props/Global"

export const ResumeHead = () => {
    const props = Props.states.personalDetails;

    Object.assign(Props.states.resumeUpdater, { [props.id]: {} });
    return (
        <>
            <section className="resume__head">
                <PersonalInfo></PersonalInfo>
            </section>
        </>
    )
}