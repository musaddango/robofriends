const Scroll = (props) => {
  return (
    <div style={{ overflow: 'scroll', border: '5px solid black', height: '400px'}}>

      {props.children}
    </div>
  );
};

export default Scroll;
