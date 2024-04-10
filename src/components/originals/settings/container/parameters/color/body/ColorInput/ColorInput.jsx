import { Props } from "../../../../../../../dataManagments/props/Global";
import { State } from "../../../../../../../prototypes/state/State";

export const ColorInput = () => {
    const value = State(Props.states.resumeUpdater.colorTheme.head.getState());
    Object.assign(Props.states.parameters.states.color, value)
    const inputHandler = (e) => {
        value.setState(e.target.value);
        setColorTheme(e);
    }

    const setColorTheme = (e) => {
        Props.states.resumeUpdater.colorTheme.head.setState(e.target.value);
        Props.states.resumeUpdater.colorTheme.education.setState(e.target.value);
        Props.states.resumeUpdater.colorTheme.experience.setState(e.target.value);
        Props.states.parameters.states.layoutColor.top.setState(e.target.value);
        Props.states.parameters.states.layoutColor.left.setState(e.target.value);
        Props.states.parameters.states.layoutColor.right.setState(e.target.value);
        Props.states.parameters.states.fontsContainerColor.setState(e.target.value);
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