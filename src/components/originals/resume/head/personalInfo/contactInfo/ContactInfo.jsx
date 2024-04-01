import { Address } from "./address/Address"
import { Mail } from "./mail/Mail"
import { NumberPhone } from "./numberPhone/NumberPhone"

export const ContactInfo = () => {
    return (
        <>
            <div className="contact__info">
                <Mail></Mail>
                <NumberPhone></NumberPhone>
                <Address></Address>
            </div>
        </>
    )
}