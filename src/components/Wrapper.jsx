export const Wrapper = ({ name, children }) => {
  return (
    <>
      <div className={name}>{children}</div>
    </>
  );
};
