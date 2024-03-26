import '../../../styles/ResumeBody.css'
import { ResumeSections } from './sections/Sections'

export const ResumeBody = ({ props }) => {
    return (
        <>
            <section className="resume__body">
                <ResumeSections props={props}></ResumeSections>
            </section>
        </>
    )
}