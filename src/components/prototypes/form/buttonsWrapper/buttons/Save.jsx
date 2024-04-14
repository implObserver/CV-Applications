import Fields from '../../../../dataManagments/JSON/Fields.json'
import { IdealPlace } from '../../../settings/container/contentSection/section/placesWrapper/place/IdealPlace';
import { ClosePattern } from '../../handlers/formHandler/FormHandler';
import { Button } from '../../field/input/inputTypes/Button';
import { usePropsContext } from '../../../../dataManagments/context/PropsContext';
import { useFieldContext } from '../../../../dataManagments/context/FieldParametersContext';
import { appModel } from '../../../../../main';

export const Save = () => {
  const props = usePropsContext();
  const parameters = useFieldContext();
  const clickHandler = async () => {
    if (props.dropdownLists[`${props.id}__places`].objects.activeElement === 'new') {
      const place = IdealPlace(props.id, parameters.formId);
      props.dropdownLists[`${props.id}__places`].objects.elements.push(place);
      appModel.resume.updater[props.id].trigger.switchState();
    } else {
      props.dropdownLists[`${props.id}__places`].objects.activeElement.update();
    }
    ClosePattern(props.id);

    props.dropdownLists[`${props.id}__places`].states.containerUpdate.switchState();
  }

  return (
    <>
      <Button parameters={Fields.buttons.save} onClick={clickHandler}></Button>
    </>
  )
};