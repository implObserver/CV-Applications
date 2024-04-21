import { invertColor } from "../../../../../helper/InvertColor";
import { capitalizeFirstLetter } from "../../../../../helper/StringHelper"
import { appModel } from "../../../../../main";

export const FontContainer = ({ className }) => {
    const parametersColors = appModel.settings.container.parameters.styles.colors;

    const blurHandler = (e) => {
        if (e.relatedTarget === null || e.relatedTarget.className === 'color__input') {
            e.target.focus();
        }
    }

    const clickHandler = () => {
        appModel.resume.styles.font.setState(`font__family__${className}`);
    }

    return (
        <>
            <button
                className={`${className}`}
                onBlur={blurHandler}
                onClick={clickHandler}
                style={{
                    "--focusBackgroundColor": parametersColors.fontsContainerColor.getState(),
                    "--focusFontColor": invertColor(parametersColors.fontsContainerColor.getState(), true),
                }}
            >
                <span>Aa</span>
                <span>{capitalizeFirstLetter(className)}</span>
            </button>
        </>
    )
}