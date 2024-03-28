import { AddressField } from "./address/Address"
import { DatesField } from "./dates/Dates"

export const LeftSection = ({ section }) => {
    return (
        <>
            <div className="resume__place__left-section">
                <DatesField section={section}></DatesField>
                <AddressField section={section}></AddressField>
            </div>
        </>
    )
}