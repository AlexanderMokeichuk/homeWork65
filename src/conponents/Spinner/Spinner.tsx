const Spinner = () => {

  return (
    <div className={"spinner-border  text-primary position-fixed end-50 mt-5"} role={"status"}>
      <span className={"visually-hidden"}>Loading...</span>
    </div>
  );
};

export default Spinner;