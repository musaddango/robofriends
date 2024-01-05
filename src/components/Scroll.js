const Scroll = (props) => {
  console.log(props.children)
  return (
    <div style={{ overflow: 'scroll', border: '5px solid black', height: '450px'}}>
      {props.children}
    </div>
  );
};

export default Scroll;
