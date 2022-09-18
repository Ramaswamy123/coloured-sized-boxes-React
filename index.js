const Box = (props) => {
  const { text, box } = props;
  return (
    <div className={`unique-box ${box}`}>
      <p className="name">{text}</p>
    </div>
  );
};

const element = (
  <div className="bg-container">
    <h1 className="heading">Boxes</h1>
    <div className="boxes-container">
      <Box text="Small" box="small-box" />
      <Box text="Medium" box="medium-box" />
      <Box text="Large" box="large-box" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
