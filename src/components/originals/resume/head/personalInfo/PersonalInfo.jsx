import { appModel } from "../../../../../main";
import { Context } from "../../../../dataManagments/context/Context";
import { ContactInfo } from "./contactInfo/ContactInfo"
import { FullName } from "./fullName/FullName"

export const PersonalInfo = () => {
    const props = appModel.settings.container.sections.personalDetails;
    const places = props.dropdownLists[`${props.id}__places`];
    const activePlace = places.objects.activeElement;
    const key = activePlace.getKey();
    const color = appModel.resume.styles.colors.head;

    Object.assign(appModel.resume.updater[props.id], { [key]: {} });

    const context = {
        label: activePlace.getValues(),
        updater: appModel.resume.updater[props.id][key],
    }

    return (
        <>
            <div
                className="personal__info"
                style={{
                    color: `color-contrast(${color.getState()} vs #fff, #000 to AA)`
                }}>
                    
                <Context.Provider value={context}>
                    <FullName></FullName>
                    <ContactInfo></ContactInfo>
                </Context.Provider>
            </div>
        </>
    )
}