import axios from "axios";
import { useEffect, useState } from "react";
import "./index.css";
import ProductAdd from "./ProductAdd";
import Card from "./Card/Card";

function App() {
  const [cardData, setCardData] = useState([]);
  const getCardData = async () => {
    const data = await axios.get(
      "https://react-interview.1putym.easypanel.host/api/product?email=naim.microdeft@gmail.com"
    );
    setCardData(data?.data.data);
  };
  useEffect(() => {
    getCardData();
  }, []);
console.log(cardData);
  return (
    <>
    
      
      <ProductAdd></ProductAdd>
      <div className="grid md:grid-cols-3 grid-cols-2 gap-5 pt-10 mx-auto max-w-screen-xl px-4 ">
        {
          cardData.map((item)=> <Card key={item.id} cardInfo={item}></Card>)
       }
      </div>
    </>
  );
}

export default App;
