import { PersonalInfo } from "./personalInfo/PersonalInfo"
import '../../../styles/ResumeHead.css'
export const ResumeHead = ({ props }) => {
    return (
        <>
            <section className="resume__head">
                <PersonalInfo props={props}></PersonalInfo>
            </section>
        </>
    )
}