import { State } from "../../../../prototypes/toggle/Toggle"
import { DefaultResume, ResumeUpdater } from "../../../ResumeUpdater";


import Fields from '../../../../JSON/Fields.json'

export const FullName = () => {
    const update = State(DefaultResume.fullName);
    Object.assign(ResumeUpdater, { [Fields.detailsForm.fullName.id]: update });
    console.log(update.getState())
    return (
        <>
            <div className="full__name">
                <h1>{update.getState()}</h1>
            </div>
        </>
    )
}