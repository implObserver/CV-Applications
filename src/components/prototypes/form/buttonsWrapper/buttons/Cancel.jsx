import { Button } from "../../input/Button";
import Fields from '../../../../dataManagments/JSON/Fields.json'
import { ClosePattern } from "../../FormHandler";

export const Cancel = ({ props, id }) => {
  const clickHandler = async () => {
    ClosePattern(props);
  }

  return (
    <>
      <Button id={id} parameters={Fields.buttons.cancel} onClick={clickHandler}></Button>
    </>
  )
};