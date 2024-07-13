import axios from "axios";
import { useState } from "react";

function App() {
  const [cardData, setCardData] = useState([]);
  const getCardData = async () => {
    const data = await axios.get(
      "https://react-interview.1putym.easypanel.host/api/product?email=naim.microdeft@gmail.com"
    );
    console.log(data.data);
  };
  getCardData();
  return (
    <>
      <div className="">
        <img src="./" alt="" />
      </div>
    </>
  );
}

export default App;
