import { Button } from "../../field/input/inputTypes/Button";
import Fields from '../../../../dataManagments/JSON/Fields.json'
import { ClosePattern } from "../../handlers/formHandler/FormHandler";
import { usePropsContext } from "../../../../dataManagments/context/PropsContext";

export const Cancel = () => {
  const props = usePropsContext();

  const clickHandler = async () => {
    ClosePattern(props.id);
  }

  return (
    <>
      <Button parameters={Fields.buttons.cancel} onClick={clickHandler}></Button>
    </>
  )
};