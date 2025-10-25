import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/cartSlice/cartSlice";

function ProductPage() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  const airPurifyingPlantsCards = [
    {
      id: 1,
      name: "Snake Plant",
      image:
        "https://m.media-amazon.com/images/I/21OFbpriaZL._UF1000,1000_QL80_.jpg",
      price: 15,
      description: "Produces oxygen at night, improving air quality.",
      isSale: true,
    },
    {
      id: 2,
      name: "Spider Plant",
      image: "https://m.media-amazon.com/images/I/61aGPR4SmoL.jpg",
      price: 12,
      description: "Filters formaldehyde and xylene from the air.",
      isSale: true,
    },
    {
      id: 3,
      name: "Peace Lily",
      image:
        "https://m.media-amazon.com/images/I/51s3u3K5oOL._UF1000,1000_QL80_.jpg",
      price: 18,
      description: "Removes mold spores and purifies the air.",
      isSale: true,
    },
    {
      id: 4,
      name: "Boston Fern",
      image: "https://m.media-amazon.com/images/I/71FHDU5MZpL.jpg",
      price: 20,
      description: "Adds humidity to the air and removes toxins.",
      isSale: true,
    },
    {
      id: 5,
      name: "Rubber Plant",
      image: "https://m.media-amazon.com/images/I/81k40+fPZgL.jpg",
      price: 17,
      description: "Easy to care for and effective at removing toxins.",
      isSale: true,
    },
    {
      id: 6,
      name: "Aloe Vera",
      image: "https://m.media-amazon.com/images/I/61wpOosCnUL.jpg",
      price: 14,
      description: "Purifies the air and has healing properties for skin.",
      isSale: true,
    },
  ];

  const aromaticFragrantCards = [
    {
      id: 1,
      name: "Lavender",
      image:
        "https://m.media-amazon.com/images/I/71loacrqnjL._AC_UL480_FMwebp_QL65_.jpg",
      price: 20,
      description:
        "Calming scent, widely used in aromatherapy and stress relief.",
      isSale: true,
    },
    {
      id: 2,
      name: "Jasmine",
      image: "https://m.media-amazon.com/images/I/51tnH63nnhL.jpg",
      price: 18,
      description: "Sweet fragrance, promotes relaxation and improves mood.",
      isSale: true,
    },
    {
      id: 3,
      name: "Rosemary",
      image:
        "https://m.media-amazon.com/images/I/61PaSO+nwsL._AC_UL480_FMwebp_QL65_.jpg",
      price: 15,
      description:
        "Invigorating scent, commonly used in cooking and herbal remedies.",
      isSale: true,
    },
    {
      id: 4,
      name: "Mint",
      image:
        "https://m.media-amazon.com/images/I/51wlDX4H5GL._AC_UL480_FMwebp_QL65_.jpg",
      price: 12,
      description: "Refreshing aroma, ideal for teas and culinary use.",
      isSale: true,
    },
    {
      id: 5,
      name: "Lemon Balm",
      image:
        "https://m.media-amazon.com/images/I/51iwsDmBfWL._AC_UL480_FMwebp_QL65_.jpg",
      price: 14,
      description:
        "Citrusy scent, known to calm nerves and support mental clarity.",
      isSale: true,
    },
    {
      id: 6,
      name: "Hyacinth",
      image:
        "https://m.media-amazon.com/images/I/51YiOTotwsL._AC_UL480_FMwebp_QL65_.jpg",
      price: 22,
      description: "Vibrant floral scent, used to freshen indoor spaces.",
      isSale: true,
    },
  ];

  return (
    <div className="bg-gray-50 px-28 min-h-screen">
      <section className="">
        <div className="text-center my-6">
          <h2 className="text-3xl font-semibold border-y border-gray-400 inline-block px-6 py-2">
            Air Purifying Plants
          </h2>
        </div>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 pb-10">
          {airPurifyingPlantsCards.map((plant) => {
            const inCart = cart.find((item) => item.id === plant.id);

            return (
              <li
                key={plant.id}
                className="relative p-4 text-center bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
              >
                {plant.isSale && (
                  <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-sm rounded-tl-none rounded-br-none">
                    SALE
                  </span>
                )}

                <h3 className="font-semibold text-lg">{plant.name}</h3>

                <figure className="p-4">
                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="w-full h-48 object-contain"
                  />
                </figure>

                <div className="px-4 pb-4 text-center">
                  <p className="text-red-500 font-bold text-md mt-1">
                    ${plant.price}
                  </p>
                  <p className="text-gray-600 text-sm mt-1 italic">
                    {plant.description}
                  </p>

                  <button
                    className={`mt-3 w-fit py-2 px-3 text-white font-medium transition cursor-pointer ${
                      inCart
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-green-500 hover:bg-green-600"
                    }`}
                    disabled={!!inCart}
                    onClick={() =>
                      dispatch(
                        addItem({
                          id: plant.id,
                          image: plant.image,
                          name: plant.name,
                          price: plant.price,
                        })
                      )
                    }
                  >
                    {inCart ? "Added to Cart" : "Add to Cart"}
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="">
        <div className="text-center my-6">
          <h2 className="text-3xl font-semibold border-y border-gray-400 inline-block px-6 py-2">
            Aromatic Fragrant Plants
          </h2>
        </div>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 pb-10">
          {aromaticFragrantCards.map((plant) => {
            const inCart = cart.find((item) => item.id === plant.id);

            return (
              <li
                key={plant.id}
                className="relative p-4 text-center bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
              >
                {plant.isSale && (
                  <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-sm rounded-tl-none rounded-br-none">
                    SALE
                  </span>
                )}

                <h3 className="font-semibold text-lg">{plant.name}</h3>

                <figure className="p-4">
                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="w-full h-48 object-contain"
                  />
                </figure>

                <div className="px-4 pb-4 text-center">
                  <p className="text-red-500 font-bold text-md mt-1">
                    ${plant.price}
                  </p>
                  <p className="text-gray-600 text-sm mt-1 italic">
                    {plant.description}
                  </p>

                  <button
                    className={`mt-3 w-fit py-2 px-3 text-white font-medium transition cursor-pointer ${
                      inCart
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-green-500 hover:bg-green-600"
                    }`}
                    disabled={!!inCart}
                    onClick={() =>
                      dispatch(
                        addItem({
                          id: plant.id,
                          name: plant.name,
                          price: plant.price,
                        })
                      )
                    }
                  >
                    {inCart ? "Added to Cart" : "Add to Cart"}
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default ProductPage;
