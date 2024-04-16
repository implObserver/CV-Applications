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
  const list = props.dropdownLists[`${props.id}__places`];
  const form = props.forms[parameters.formId];

  const clickHandler = async () => {
    if (list.objects.activeElement === 'new') {
      const place = IdealPlace(list, form);
      list.objects.elements.push(place);
      appModel.resume.updater[props.id].trigger.switchState();
    } else {
      list.objects.activeElement.update(form);
    }
    ClosePattern(props.id);

    list.states.containerUpdate.switchState();
  }

  return (
    <>
      <Button parameters={Fields.buttons.save} onClick={clickHandler}></Button>
    </>
  )
};