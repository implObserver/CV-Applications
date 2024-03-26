import { ResumePlace } from "./place/ResumePlace"

export const ResumePlacesWrapper = ({ id }) => {
    return (
        <>
            <div className="resume__places__wrapper">
                <ResumePlace id={id}></ResumePlace>
            </div>
        </>
    )
}