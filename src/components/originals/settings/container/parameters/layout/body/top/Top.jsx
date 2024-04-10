import { Props } from "../../../../../../../dataManagments/props/Global"
import { ColorSide } from "../../../../../../../prototypes/settings/container/parameters/ColorSide"
import { WhiteSide } from "../../../../../../../prototypes/settings/container/parameters/WhiteSide"

export const Top = () => {
    const clickHandler = () => {
        Props.states.resumeUpdater.resumeLayout.setState('top__layout__areas');
    }

    return (
        <>
            <div className="top__layout"
                onClick={clickHandler}>
                <ColorSide id={'top'}></ColorSide>
                <WhiteSide></WhiteSide>
            </div>
        </>
    )
}