import { Wrapper } from "../../../../../../prototypes/details/wrapper/Wrapper"
import { Left } from "./left/Left"
import { Right } from "./right/Right"
import { Top } from "./top/Top"

export const LayoutBody = () => {
    return (
        <>
            <div className="layout__body">
                <Wrapper name="layout__type__wrapper">
                    <Top></Top>
                    <span>Top</span>
                </Wrapper>
                <Wrapper name="layout__type__wrapper">
                    <Left></Left>
                    <span>Left</span>
                </Wrapper>
                <Wrapper name="layout__type__wrapper">
                    <Right></Right>
                    <span>Right</span>
                </Wrapper>
            </div>
        </>
    )
}