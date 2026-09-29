const b1 = {
  picurl: "https://m.media-amazon.com/images/I/41uIlYtv1GL._SY445_SX342_FMwebp_.jpg",
  bname : "React Design Pattern",
  price: 1199,
  quantity: 10,
  rating : 5.0

}

function Book() {
  return (
    <div>
      <img src="" alt="" srcset="" />
      <h1>Lets us react</h1>
      <h2>Price : 765</h2>
      <h3>Quantity : 5</h3>
      <h4>Rating : 8 / 10</h4>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Book />
      <h1>Hello World</h1>
      <Book />
    </>
  );
}
