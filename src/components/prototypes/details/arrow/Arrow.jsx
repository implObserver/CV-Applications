import '../../../../styles/Arrow.css';

export const Arrow = ({ state }) => {
  console.log(state)
  const pozition = state ? 'down' : 'right';
  return (
    <>
      <div className={`arrow ${pozition}`}></div>
    </>
  );
};
