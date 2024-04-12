import Fields from '../../../../dataManagments/JSON/Fields.json'
import { Props } from '../../../../dataManagments/props/Global';
import { IdealPlace } from '../../../settings/container/contentSection/section/placesWrapper/place/IdealPlace';
import { ClosePattern } from '../../handlers/formHandler/FormHandler';
import { Button } from '../../field/input/inputTypes/Button';
import { usePropsContext } from '../../../../dataManagments/context/PropsContext';
import { useFieldContext } from '../../../../dataManagments/context/FieldParametersContext';

export const Save = () => {
  const props = usePropsContext();
  const parameters = useFieldContext();
  const clickHandler = async () => {
    if (props.objects.activePlace === 'new') {
      const place = IdealPlace(props.id, parameters.formId);
      props.dropdownLists[`${props.id}__places`].objects.elements.push(place);
      Props.states.resumeUpdater[props.id].trigger.switchState();
    } else {
      props.objects.activePlace.update();
    }
    ClosePattern(props.id);
  }

  return (
    <>
      <Button parameters={Fields.buttons.save} onClick={clickHandler}></Button>
    </>
  )
};