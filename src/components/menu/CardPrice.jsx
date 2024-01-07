export const CardPrice = ({ cantidad, precio }) => {
  return (
    <div className="flex justify-between my-1 mx-3">
      <p>{cantidad}</p>
      <b>{precio}</b>
    </div>
  );
};
