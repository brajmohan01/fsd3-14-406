const b1 = {
  picUrl: "https://m.media-amazon.com/images/I/41uIlYtv1GL._SY445_SX342_FMwebp_.jpg",
  bname : "React Design Pattern",
  price: 1199,
  quantity: 10,
  rating : 5.0

}
const b2 = {
  picUrl: "https://m.media-amazon.com/images/I/51PzX0ZSULL._AC_SF480,480_.jpg",
  bname : "Intro to PYTHON",
  price: 11939,
  quantity: 10,
  rating : 5.0

}

function Book(props) {
  return (
    <div>
      <img src={props.book.picUrl} alt={props.book.bname} srcset="" />
      <h1>{props.book.bname}</h1>
      <h2>Price : {props.book.price}</h2>
      <h3>Quantity : {props.book.quantity}</h3>
      <h4>Rating : {props.book.rating}</h4>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Book book={b1}/>
      <h1>Hello World</h1>
      <Book book={b2}/>
    </>
  );
}
