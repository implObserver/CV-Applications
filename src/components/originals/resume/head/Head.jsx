import { PersonalInfo } from "./personalInfo/PersonalInfo"
import '../../../../styles/ResumeHead.css'
import { State } from "../../../prototypes/state/State";
import { appModel } from "../../../../main";

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
                    "--color": backgroundColor.getState()
                }}>

                <PersonalInfo></PersonalInfo>
            </section>
        </>
    )
}