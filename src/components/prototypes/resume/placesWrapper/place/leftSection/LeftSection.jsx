import { AddressField } from "./address/Address"
import { DatesField } from "./dates/Dates"

export const LeftSection = ({ id, props, section }) => {
    return (
        <>
            <div className="resume__place__left-section">
                <DatesField id={id} props={props} section={section}></DatesField>
                <AddressField id={id} props={props} section={section}></AddressField>
            </div>
        </>
    )
}