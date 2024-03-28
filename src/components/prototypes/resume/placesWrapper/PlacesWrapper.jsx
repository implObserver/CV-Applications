import { ResumePlace } from "./place/ResumePlace"

export const ResumePlacesWrapper = ({ section }) => {
    return (
        <>
            <div className="resume__places__wrapper">
                <ResumePlace section={section}></ResumePlace>
            </div>
        </>
    )
}