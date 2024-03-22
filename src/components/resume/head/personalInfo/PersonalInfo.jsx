import { ContactInfo } from "./contactInfo/ContactInfo"
import { FullName } from "./fullName/FullName"

export const PersonalInfo = ({ props }) => {
    return (
        <>
            <div className="personal__info">
                <FullName props={props}></FullName>
                <ContactInfo props={props}></ContactInfo>
            </div>
        </>
    )
}