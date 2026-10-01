const Pen = (props) => {
    const { penComp , penPrice , penImg } = props.pen;
    const qtyStyle = {
        fontSize: "20px",
        color:"blue",
        textAlign:"center",
        backgroundColor:"yellow",
        borderRadius:"10px",
        width:"100px",
        margin:"auto"
    }
    return (
        <div>
            <img src={penImg} alt={penComp} srcset="" />
            <h1>{penComp}</h1>
            <h2>Price : {penPrice}</h2>
        </div>
    );
}

export default Pen;