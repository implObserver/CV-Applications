import { Button } from "../../field/input/inputTypes/Button";
import Fields from '../../../../dataManagments/JSON/Fields.json'
import { ClosePattern } from "../../handlers/formHandler/FormHandler";
import { usePropsContext } from "../../../../dataManagments/context/PropsContext";
import { later } from "../../../../../helper/Timeout";

export const Cancel = () => {
  const props = usePropsContext();

  const clickHandler = async () => {
    await ClosePattern(props.id);
    await later(300).promise;
    props.states.drawnNode.setState('button')
  }

  return (
    <>
      <Button parameters={Fields.buttons.cancel} onClick={clickHandler}></Button>
    </>
  )
};