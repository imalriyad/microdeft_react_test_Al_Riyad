const Card = ({ cardInfo }) => {
  console.log(cardInfo);
  return (
    <>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img src={cardInfo?.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-blue-600 font-bold py-4">{cardInfo?.title}</h2>
          <div className="card-actions justify-end">
            <button className="badge badge-primary">
              Price {cardInfo?.price}
            </button>
            <button className="badge badge-primary">
              Discount {cardInfo?.discount}
            </button>
            <button className="badge badge-primary">
              Stock {cardInfo?.stock}
            </button>
            <div className="pt-6">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;