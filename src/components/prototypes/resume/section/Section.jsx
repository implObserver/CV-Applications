import { ResumeSectionBody } from "./body/Body"
import { ResumeSectionHead } from "./head/Head"
import Sections from '../../../JSON/Sections.json'

export const ResumeSection = ({ id, props }) => {
    const name = Sections[id].head;
    return (
        <>
            <section className="resume__section__info">
                <ResumeSectionHead name={name}></ResumeSectionHead>
                <ResumeSectionBody id={id} props={props}></ResumeSectionBody>
            </section>
        </>
    )
}