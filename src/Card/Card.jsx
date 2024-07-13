const Card = ({ cardInfo }) => {
  console.log(cardInfo);
  return (
    <>
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <img src={cardInfo?.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{cardInfo?.title}</h2>
                  <div className="card-actions justify-end">
                      
                      <button className="btn btn-primary">Price { cardInfo?.price}</button>
                      <button className="btn btn-primary">Discount { cardInfo?.discount}</button>
                      <button className="btn btn-primary">Stock { cardInfo?.stock}</button>
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;