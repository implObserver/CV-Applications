import { ColorSide } from "../../../../../../../prototypes/settings/container/parameters/ColorSide"
import { WhiteSide } from "../../../../../../../prototypes/settings/container/parameters/WhiteSide"

export const Left = () => {

    return (
        <>
            <div className="left__layout">
                <ColorSide id={'left'}></ColorSide>
                <WhiteSide></WhiteSide>
            </div>
        </>
    )
}