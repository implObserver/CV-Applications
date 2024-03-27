import { ResumePlace } from "./place/ResumePlace"

export const ResumePlacesWrapper = ({ id, props, section }) => {
    return (
        <>
            <div className="resume__places__wrapper">
                <ResumePlace id={id} props={props} section={section}></ResumePlace>
            </div>
        </>
    )
}