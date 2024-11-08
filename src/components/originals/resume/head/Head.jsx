import { PersonalInfo } from "./personalInfo/PersonalInfo"
import '../../../../styles/ResumeHead.css'
import { State } from "../../../prototypes/state/State";
import { appModel } from "../../../../main";
import { invertColor } from "../../../../helper/InvertColor";

export const ResumeHead = () => {
    const props = appModel.settings.container.sections.personalDetails;
    const backgroundColor = State('#ffa500');

    Object.assign(appModel.resume.updater, { [props.id]: {} });
    Object.assign(appModel.resume.styles.colors, { head: backgroundColor });
    return (
        <>
            <section
                className="resume__head"
                style={{
                    backgroundColor: backgroundColor.getState(),
                    color: invertColor(backgroundColor.getState(), true),
                }}>

                <PersonalInfo></PersonalInfo>
            </section>
        </>
    )
}