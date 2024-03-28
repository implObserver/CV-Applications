import { ResumePlace } from "./place/ResumePlace"

export const ResumePlacesWrapper = ({ id, section }) => {
    return (
        <>
            <div className="resume__places__wrapper">
                <ResumePlace id={id} section={section}></ResumePlace>
            </div>
        </>
    )
}