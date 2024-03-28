import { AddressField } from "./address/Address"
import { DatesField } from "./dates/Dates"

export const LeftSection = ({ id, section }) => {
    return (
        <>
            <div className="resume__place__left-section">
                <DatesField id={id} section={section}></DatesField>
                <AddressField id={id} section={section}></AddressField>
            </div>
        </>
    )
}