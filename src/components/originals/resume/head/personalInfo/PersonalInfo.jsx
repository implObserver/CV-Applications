import { Props } from "../../../../dataManagments/props/Global";
import { ContactInfo } from "./contactInfo/ContactInfo"
import { FullName } from "./fullName/FullName"

export const PersonalInfo = () => {
    const props = Props.states.personalDetails;
    Object.assign(Props.states.resumeUpdater[props.id], { [props.activePlace.getKey()]: {} });

    return (
        <>
            <div className="personal__info">
                <FullName></FullName>
                <ContactInfo></ContactInfo>
            </div>
        </>
    )
}