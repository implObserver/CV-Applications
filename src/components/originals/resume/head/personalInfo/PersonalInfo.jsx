import { Props } from "../../../../dataManagments/props/Global";
import { ContactInfo } from "./contactInfo/ContactInfo"
import { FullName } from "./fullName/FullName"

export const PersonalInfo = () => {
    const props = Props.states.personalDetails;
    console.log(Props.states.resumeUpdater.colorTheme.head.getState())
    Object.assign(Props.states.resumeUpdater[props.id], { [props.objects.activePlace.getKey()]: {} });
    return (
        <>
            <div className="personal__info" style={{ color: `color-contrast(${Props.states.resumeUpdater.colorTheme.head.getState()} vs #fff, #000 to AAA)` }}>
                <FullName></FullName>
                <ContactInfo></ContactInfo>
            </div>
        </>
    )
}