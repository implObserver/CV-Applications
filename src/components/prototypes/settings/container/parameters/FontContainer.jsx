import { capitalizeFirstLetter } from "../../../../../helper/StringHelper"
import { Props } from "../../../../dataManagments/props/Global"

export const FontContainer = ({ className }) => {
    const blurHandler = (e) => {
        if (e.relatedTarget === null || e.relatedTarget.className === 'color__input') {
            e.target.focus();
        }
    }

    const clickHandler = () => {
        Props.states.resumeUpdater.resumeFont.setState(`font__family__${className}`);
    }

    return (
        <>
            <button
                className={`${className}`}
                onBlur={blurHandler}
                onClick={clickHandler}
                style={{
                    "--focusBackgroundColor": Props.states.parameters.states.fontsContainerColor.getState(),
                    "--focusFontColor": `color-contrast(${Props.states.parameters.states.fontsContainerColor.getState()} vs #fff, #000 to AAA)`,
                }}
            >
                <span>Aa</span>
                <span>{capitalizeFirstLetter(className)}</span>
            </button>
        </>
    )
}