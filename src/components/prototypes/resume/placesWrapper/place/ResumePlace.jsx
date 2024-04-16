import { appModel } from "../../../../../main";
import { Context } from "../../../../dataManagments/context/Context";
import { useFieldContext } from "../../../../dataManagments/context/FieldParametersContext";
import { usePropsContext } from "../../../../dataManagments/context/PropsContext";
import { LeftSection } from "./leftSection/LeftSection"
import { RightSection } from "./rightSection/RightSection"

export const ResumePlace = () => {
    const props = usePropsContext();
    const section = useFieldContext();
    Object.assign(
        appModel.resume.updater[props.id],
        { [section.getKey()]: {} }
    );

    return (
        <>
            <div className="resume__place">
                <Context.Provider
                    value={appModel.resume.updater[props.id][section.getKey()]}>
                    <LeftSection></LeftSection>
                    <RightSection></RightSection>
                </Context.Provider>
            </div>
        </>
    )
}