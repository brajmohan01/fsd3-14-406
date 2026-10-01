import Pen from "./components/Pen.jsx";

const b1 = {
  picUrl:
    "https://m.media-amazon.com/images/I/41uIlYtv1GL._SY445_SX342_FMwebp_.jpg",
  bname: "React Design Pattern",
  price: 1199,
  quantity: 10,
  rating: 5.0,
};
const b2 = {
  picUrl: "https://m.media-amazon.com/images/I/51PzX0ZSULL._AC_SF480,480_.jpg",
  bname: "Intro to PYTHON",
  price: 11939,
  quantity: 10,
  rating: 5.0,
};

const p1 = {
  penComp: "Reynolds",
  penPrice: 10,
  penImg:
    "https://5.imimg.com/data5/SELLER/Default/2022/9/VR/ZA/JS/1221877/reynolds-pen-500x500.jpg",
};
const p2 = {
  penComp: "Cello",
  penPrice: 15,
  penImg:
    "https://5.imimg.com/data5/SELLER/Default/2022/9/VR/ZA/JS/1221877/reynolds-pen-500x500.jpg",
};

function Book(props) {
  const { picUrl, bname, price, quantity, rating } = props.book;
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

export default function App() {
  return (
    <>
      <h1>online book store</h1>
      <div className="container">
        <Book book={b1} />
        <Book book={b2} />
        <Pen pen={p1} />
        <Pen pen={p2} />
      </div>
    </>
  );
}
