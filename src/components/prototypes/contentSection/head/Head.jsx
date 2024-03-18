import { later } from '../../../helper/Timeout';
import { Arrow } from '../../arrow/Arrow';

export const Head = ({ name, props }) => {
  const style = props.states.open.getState() ? 'open__head' : 'close__head';
  const hundleClick = async () => {
    props.states.open.switchState();
    if (props.states.drawnNode.getState() === 'form') {
      changeVisibleFields(props)
    }
  }

  const switchVisibleFields = async (props) => {
    const fieldsStyles = Object.entries(props.states.fieldsStyles);

    for (const style of fieldsStyles) {
      let timeout = later(500);
      await timeout.promise;
      style[1].switchState();
    }
  }

  const changeVisibleFields = async (props) => {
    //timer.cancel();
    props.states.open.getState() ? removeFields(props) : addFields(props);
  };

  const pause = async (ms) => {
    let timer = later(ms);
    //setTimer(timer);
    return timer.promise;
  }


  const addFields = async (props) => {
    const fieldsStyles = Object.entries(props.states.fieldsStyles);
    console.log(fieldsStyles)
    const addedFields = props.addedFields;
    for (const style of fieldsStyles) {
      if (!addedFields.includes(style[0])) {
        props.addedFields.push(style[0])
        style[1].switchState();
        let timeout = later(50);
        await timeout.promise;
      }
    }

    /* for (let field of fields) {
         let label = field.getLabel();
         if (!labels.includes(label)) {
             await pause(50);
             field.changeVisible();
             labels.push(label);
         }
     }
     setLabel(labels);*/
  };

  const removeFields = async (props) => {
    const fieldsStyles = Object.entries(props.states.fieldsStyles).reverse();
    const addedFields = props.addedFields;
    for (const style of fieldsStyles) {
      if (addedFields.includes(style[0])) {
        props.addedFields.pop(style[0])
        style[1].switchState();
        let timeout = later(50);
        await timeout.promise;
      }
    }

    /*let newFields = fields.reverse();
    for (let field of newFields) {
        let label = field.getLabel();
        if (labels.includes(label)) {
            await pause(50);
            field.changeVisible();
            labels.splice(labels.indexOf(label), 1);
        }
    }
    setLabel(labels);*/
  };

  return (
    <>
      <button className={`section__head ${style}`}
        onClick={hundleClick}>
        <h2>{name}</h2>
        <Arrow state={props.states.open.getState()}></Arrow>
      </button>
    </>
  );
};
