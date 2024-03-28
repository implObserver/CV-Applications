import '../../../../styles/ResumeBody.css'
import { ResumeSections } from './sections/Sections'

export const ResumeBody = () => {
    return (
        <>
            <section className="resume__body">
                <ResumeSections></ResumeSections>
            </section>
        </>
    )
}