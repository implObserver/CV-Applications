import { AddressField } from "./address/Address"
import { DatesField } from "./dates/Dates"

export const LeftSection = () => {
    return (
        <>
            <div className="resume__place__left-section">
                <DatesField></DatesField>
                <AddressField></AddressField>
            </div>
        </>
    )
}