import { Button } from "../../field/input/inputTypes/Button";
import Fields from '../../../../dataManagments/JSON/Fields.json'
import { ClosePattern } from "../../handlers/formHandler/FormHandler";

export const Cancel = ({ id }) => {
  const clickHandler = async () => {
    ClosePattern(id);
  }

  return (
    <>
      <Button id={id} parameters={Fields.buttons.cancel} onClick={clickHandler}></Button>
    </>
  )
};