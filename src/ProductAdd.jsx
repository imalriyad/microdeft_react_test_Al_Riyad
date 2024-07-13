import axios from "axios";

const ProductAdd = () => {
  const handleAddProuduct = async (e) => {
    e.preventDefault();
    const title = e.target?.title.value;
    const stock = parseInt(e.target?.stock.value);
    const discount = parseFloat(e.target?.discount.value);
    const price = parseInt(e.target?.price.value);

    const newProduct = {
      title,
      stock,
      discount,
      price,
    };

    const res = await axios.post(
      "https://react-interview.1putym.easypanel.host/api/product?email=naim.microdeft@gmail.com",
      newProduct
    );
    console.log(res.data);
  };

  return (
    <>
      <div className="max-w-screen-sm px-4 mx-auto">
        <form onSubmit={handleAddProuduct} className="flex flex-col gap-6">
          <h1 className="text-4xl text-center font-bold text-blue-500 py-4">
            Add Product Form{" "}
          </h1>
          <span className="flex gap-3 flex-col">
            <label htmlFor="Title" className="text-primary text-lg font-bold">
              Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="Type here"
              className="input  input-bordered w-full "
            />
          </span>{" "}
          <span className="flex gap-3 flex-col">
            <label htmlFor="stock" className="text-primary text-lg font-bold">
              Stock
            </label>
            <input
              type="number"
              name="stock"
              placeholder="Type here"
              className="input  input-bordered w-full "
            />
          </span>{" "}
          <span className="flex gap-3 flex-col">
            <label htmlFor="price" className="text-primary text-lg font-bold">
              Price
            </label>
            <input
              name="price"
              type="number"
              placeholder="Type here"
              className="input  input-bordered w-full "
            />
          </span>{" "}
          <span className="flex gap-3 flex-col">
            <label
              htmlFor="discount"
              className="text-primary text-lg font-bold"
            >
              Discount
            </label>
            <input
              type="number"
              name="discount"
              placeholder="Type here"
              className="input  input-bordered w-full "
            />
          </span>{" "}
          <button type="submit" className="btn btn-primary">
            Add Product
          </button>
        </form>
      </div>
    </>
  );
};

export default ProductAdd;
