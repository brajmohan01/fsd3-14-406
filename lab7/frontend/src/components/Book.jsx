export default function Book(props) {
    const { picUrl, bname, price, quantity, rating } = props.book;
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
            <img src={picUrl} alt={bname} srcset="" />
            <h1>{bname}</h1>
            <h2>Price : {price}</h2>
            <h3>Quantity : {quantity}</h3>
            <h4>Rating : {rating}</h4>
        </div>
    );
}