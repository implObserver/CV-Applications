import { appModel } from "../../../../../../../../main";
import { State } from "../../../../../../../prototypes/state/State";

export const ColorInput = () => {
    const value = State('#ffa500');
    const resumeColors = appModel.resume.styles.colors;
    const parameters = appModel.settings.container.parameters;
    const parametersColors = parameters.styles.colors;

    Object.assign(parametersColors, { color: value })
    const inputHandler = (e) => {
        value.setState(e.target.value);
        setColorTheme(e);
    }

    const setColorTheme = (e) => {
        resumeColors.head.setState(e.target.value);
        resumeColors.education.setState(e.target.value);
        resumeColors.experience.setState(e.target.value);
        parametersColors.layoutColor.top.setState(e.target.value);
        parametersColors.layoutColor.left.setState(e.target.value);
        parametersColors.layoutColor.right.setState(e.target.value);
        parametersColors.fontsContainerColor.setState(e.target.value);
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