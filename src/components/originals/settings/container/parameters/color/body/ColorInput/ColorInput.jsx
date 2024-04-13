import { appModel } from "../../../../../../../../main";
import { State } from "../../../../../../../prototypes/state/State";

export const ColorInput = () => {
    const value = State(appModel.resume.styles.colors.head.getState());
    Object.assign(appModel.settings.container.parameters.styles.colors, { color: value })
    const inputHandler = (e) => {
        value.setState(e.target.value);
        setColorTheme(e);
    }

    const setColorTheme = (e) => {
        appModel.resume.styles.colors.head.setState(e.target.value);
        appModel.resume.styles.colors.education.setState(e.target.value);
        appModel.resume.styles.colors.experience.setState(e.target.value);
        appModel.settings.container.parameters.states.layoutColor.top.setState(e.target.value);
        appModel.settings.container.parameters.states.layoutColor.left.setState(e.target.value);
        appModel.settings.container.parameters.states.layoutColor.right.setState(e.target.value);
        appModel.settings.container.parameters.styles.colors.fontsContainerColor.setState(e.target.value);
    }

    return (
        <>
            <div className="color__input__wrapper">
                <input
                    type="color"
                    className="color__input"
                    value={value.getState()}
                    onInput={inputHandler}
                />
            </div>
        </>
    )
}