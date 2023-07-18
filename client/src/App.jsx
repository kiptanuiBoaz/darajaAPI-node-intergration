import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./index.css";
import Axios from "axios";

function App() {
  const [phone, setPhone] = useState();
  const [amount, setAmount] = useState();
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [buttonText, setButtonText] = useState("Pay")


  const payHandler = (event) => {
    event.preventDefault();
    setButtonText("Processing")
    Axios.post("http://localhost:5000/token", {
      amount,
      phone,
    })
      .then((res) => {
        setData(res.data.CustomerMessage);
        console.log(res)
        setButtonText("Pay")

      })
      .catch((error) => {
        console.log(error);
        setButtonText("Pay")

      });
  };

  return (
    <div className="  mt-10 justify-center items-center  flex flex-col">
      <h1 className="text-2xl">
        Pay with <span className="text-green-600  font-bold">Mpesa</span>
      </h1>
      <form className="flex flex-col space-y-5">
        {" "}
        <input
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          className=" bg-slate-100 py-1 outline-none text-center rounded-xl"
        />
        <input
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone"
          className=" bg-slate-100 py-1 px-2 outline-none text-center rounded-xl"
        />
        <button
          onClick={payHandler}
          className="bg-green-600 text-white px-2 py-1 rounded-2xl"
        >
          {buttonText}
        </button>
      </form>

      <p className="mt-4">{data}</p>

      <p className=" mt-40">Mpesa playground(Stk Push with Nodejs)</p>
      <p className="">@KiptanuiBoaz</p>
    </div>
  );
}

export default App;
