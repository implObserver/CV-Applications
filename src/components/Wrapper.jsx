export const Wrapper = ({ name }, children) => {
  const render = () => {
    return (
      <>
        <div className={name}>{children}</div>
      </>
    );
  }
  return { render }
};
