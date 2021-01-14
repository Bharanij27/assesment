import "./RandomNumber.css";

const RandomNumber = ({ number }) => {
  return (
    <>
      <div className="subtitle fancy">
      <span className="fading">
      <div className="circle m-3">
        <div className="num">{number}</div>
      </div>
      </span>
      </div>
    </>
  );
};

export default RandomNumber;
