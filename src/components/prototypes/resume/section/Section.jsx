import { ResumeSectionBody } from "./body/Body"
import { ResumeSectionHead } from "./head/Head"
import Sections from '../../../dataManagments/JSON/Sections.json'

export const ResumeSection = ({ id }) => {
    const name = Sections[id].head;
    return (
        <>
            <section className="resume__section__info">
                <ResumeSectionHead name={name}></ResumeSectionHead>
                <ResumeSectionBody id={id}></ResumeSectionBody>
            </section>
        </>
    )
}