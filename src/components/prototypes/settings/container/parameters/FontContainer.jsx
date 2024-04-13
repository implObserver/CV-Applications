import { capitalizeFirstLetter } from "../../../../../helper/StringHelper"
import { appModel } from "../../../../../main";

export const FontContainer = ({ className }) => {
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
                    "--focusBackgroundColor": appModel.settings.container.parameters.styles.colors.fontsContainerColor.getState(),
                    "--focusFontColor": `color-contrast(${appModel.settings.container.parameters.styles.colors.fontsContainerColor.getState()} vs #fff, #000 to AAA)`,
                }}
            >
                <span>Aa</span>
                <span>{capitalizeFirstLetter(className)}</span>
            </button>
        </>
    )
}