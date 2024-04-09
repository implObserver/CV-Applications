import { ColorInput } from "./ColorInput/ColorInput"

export const ColorBody = () => {
    return (
        <>
            <div className="color__body">
                <span>Accent Color</span>
                <ColorInput></ColorInput>
            </div>
        </>
    )
}