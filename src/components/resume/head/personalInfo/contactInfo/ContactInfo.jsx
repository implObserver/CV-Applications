import { Address } from "./address/Address"
import { Mail } from "./mail/Mail"
import { NumberPhone } from "./numberPhone/NumberPhone"

export const ContactInfo = ({props}) => {
    return (
        <>
            <div className="contact__info">
                <Mail props={props}></Mail>
                <NumberPhone props={props}></NumberPhone>
                <Address props={props}></Address>
            </div>
        </>
    )
}