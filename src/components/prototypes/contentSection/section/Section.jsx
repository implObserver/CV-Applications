import { State } from '../../toggle/Toggle';

export const Section = (buttonWrapper, placesWrapper) => {
  const drawnNode = State();
  const childs = [placesWrapper, buttonWrapper];

  const startDrawAnimation = () => {
    setTimeout(() => {
      changeStateChilds();
    }, 10);
  }

  const drawIt = (val) => {
    drawnNode.setState(val);
    startDrawAnimation();
  };

  const changeState = () => {
    changeStateChilds();
  };

  const changeStateChilds = () => {
    buttonWrapper.changeVisible();
  };

  const isFormOpen = () => {
    return drawnNode.getState() === 'form';
  };

  const getDrawStatus = () => {
    return drawnNode.getState();
  };

  const getChilds = () => {
    return childs;
  };

  const render = (form) => (
    <>
      <div className={`section__body`}>
        {(() => {
          if (getDrawStatus() === 'form') {
            return <>{form.render(drawIt, placesWrapper)}</>;
          } else {
            return (
              <>
                {childs.map((child) => {
                  return child.render(drawIt, form);
                })}
              </>
            )
          }
        })()}
      </div>
    </>
  );

  return {
    changeState,
    isFormOpen,
    drawIt,
    changeStateChilds,
    getDrawStatus,
    getChilds,
    render
  };
};
