import { ResumeSectionBody } from "./body/Body"
import { ResumeSectionHead } from "./head/Head"

export const ResumeSection = () => {
    return (
        <>
            <section className="resume__section__info">
                <ResumeSectionHead></ResumeSectionHead>
                <ResumeSectionBody></ResumeSectionBody>
            </section>
        </>
    )
}