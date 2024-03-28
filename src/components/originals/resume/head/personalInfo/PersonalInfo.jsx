import { ResumeUpdater } from "../../../../dataManagments/stateTemplates/ResumeUpdater";
import { ContactInfo } from "./contactInfo/ContactInfo"
import { FullName } from "./fullName/FullName"

export const PersonalInfo = ({ props }) => {

    Object.assign(ResumeUpdater[props.states.personalDetails.id], { [props.states.personalDetails.activePlace.getKey()]: {} });
    return (
        <>
            <div className="personal__info">
                <FullName props={props}></FullName>
                <ContactInfo props={props}></ContactInfo>
            </div>
        </>
    )
}