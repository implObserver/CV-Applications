import { Props } from "../../../../../../../dataManagments/props/Global"
import { ColorSide } from "../../../../../../../prototypes/settings/container/parameters/ColorSide"
import { WhiteSide } from "../../../../../../../prototypes/settings/container/parameters/WhiteSide"

export const Left = () => {
    const clickHandler = () => {
        Props.states.resumeUpdater.resumeLayout.setState('left__layout__areas');
    }

    return (
        <>
            <div className="left__layout"
                onClick={clickHandler}>
                <ColorSide id={'left'}></ColorSide>
                <WhiteSide></WhiteSide>
            </div>
        </>
    )
}