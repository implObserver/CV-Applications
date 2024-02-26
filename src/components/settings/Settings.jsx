import { Sidebar } from "./sidebar/Sidebar"
import { Container } from "./container/Container"
import '../../styles/Settings.css'

export const Settings = () => {
    return (
        <>
            <div className="settings">
                <Sidebar></Sidebar>
                <Container></Container>
            </div>
        </>
    )
}