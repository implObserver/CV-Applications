import { appModel } from "../../../../../../../../main"
import { ColorSide } from "../../../../../../../prototypes/settings/container/parameters/ColorSide"
import { WhiteSide } from "../../../../../../../prototypes/settings/container/parameters/WhiteSide"

export const Left = () => {
    const clickHandler = () => {
        appModel.resume.styles.layout.setState('left__layout__areas');
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