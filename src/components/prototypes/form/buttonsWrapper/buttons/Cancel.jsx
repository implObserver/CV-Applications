import { Button } from "../../field/input/inputTypes/Button";
import Fields from '../../../../dataManagments/JSON/Fields.json'
import { ClosePattern, FillResumeSection } from "../../handlers/formHandler/FormHandler";
import { usePropsContext } from "../../../../dataManagments/context/PropsContext";

export const Cancel = () => {
  const props = usePropsContext();
  const list = props.dropdownLists[`${props.id}__places`];
  const clickHandler = async () => {
    await ClosePattern(props.id);

    if (list.objects.activeElement !== 'new') {
      const values = list.objects.activeElement.getValues();
      const sortValues = [values[2], values[3], values[4], values[0], values[1], values[5]];
      FillResumeSection(props, sortValues);
    }
  }

  return (
    <>
      <Button parameters={Fields.buttons.cancel} onClick={clickHandler}></Button>
    </>
  )
};