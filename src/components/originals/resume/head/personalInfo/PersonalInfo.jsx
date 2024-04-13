import { appModel } from "../../../../../main";
import { ContactInfo } from "./contactInfo/ContactInfo"
import { FullName } from "./fullName/FullName"

export const PersonalInfo = () => {
    const props = appModel.settings.container.sections.personalDetails;
    Object.assign(appModel.resume.updater[props.id], { [props.dropdownLists[`${props.id}__places`].objects.activeElement.getKey()]: {} })
    return (
        <>
            <div className="personal__info" style={{ color: `color-contrast(${appModel.resume.styles.colors.head.getState()} vs #fff, #000 to AAA)` }}>
                <FullName></FullName>
                <ContactInfo></ContactInfo>
            </div>
        </>
    )
}