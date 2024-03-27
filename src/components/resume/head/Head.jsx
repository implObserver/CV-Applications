import { PersonalInfo } from "./personalInfo/PersonalInfo"
import '../../../styles/ResumeHead.css'
import { ResumeUpdater } from "../ResumeUpdater";
export const ResumeHead = ({ props }) => {
    console.log(props)
    Object.assign(ResumeUpdater, { [props.states.personalDetails.id]: {} });
    return (
        <>
            <section className="resume__head">
                <PersonalInfo props={props}></PersonalInfo>
            </section>
        </>
    )
}