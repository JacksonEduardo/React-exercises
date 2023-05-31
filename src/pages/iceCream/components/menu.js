import React, { useEffect, useState } from "react";
import Gelato from "../components/gelato";
import axios from "axios";
import data from "../../../data/iceCreamData";

const url = "https://react--course-api.herokuapp.com/api/v1/data/gelateria";

const Menu = () => {
  // Loadgin state
  const [isLoading, setIsLoading] = useState(true);

  // error landing state
  const [isError, setIsError] = useState(false);

  // All products
  const [prodotti, setProdotti] = useState();

  //   Active button selected
  const [selected, setSelected] = useState(0);

  // filter products
  const [filterProducts, setFilterProducts] = useState();

  //   Categories products
  const [category, setCategory] = useState([]);

  //   const category = Array.from(new Set(prodotti.map((el) => el.categoria)));
  //   category.unshift("all");

  const filtraProdotti = (categoria, index) => {
    setSelected(index);
    if (categoria === "all") {
      setFilterProducts(prodotti);
    } else {
      setFilterProducts(
        prodotti.filter((el) => (el.categoria === categoria ? el : ""))
      );
    }
  };

  React.useEffect(() => {
    // function start imidiatly
    (async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const response = await axios.get(url);
        console.log(response.data);
        setProdotti(response.data.data.default);
        setFilterProducts(response.data.data.default);

        // Array categories
        const nuoveCategorie = Array.from(
          new Set(response.data.data.default.map((el) => el.categoria))
        );
        nuoveCategorie.unshift("all");
        setCategory(nuoveCategorie);

        setIsLoading(false);
        setIsError(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
      }
    })();
  }, []);

  return (
    <div className="container">
      <h4 style={{ textAlign: "center", textTransform: "uppercase" }}>
        Le nostre varietà
      </h4>
      {!isLoading && !isError ? (
        <>
          <div className="lista-categorie">
            {category.map((categoria, index) => {
              return (
                <button
                  onClick={() => filtraProdotti(categoria, index)}
                  key={index}
                  className={` btn btn-selector  ${
                    index === selected && "active"
                  } `}
                >
                  {categoria}
                </button>
              );
            })}
          </div>
          <div className="vetrina">
            {filterProducts.map((el) => (
              <Gelato key={el.id} {...el} />
            ))}
          </div>
        </>
      ) : !isLoading && isError ? (
        <h4
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          Error...
        </h4>
      ) : (
        <h4
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          Loading...
        </h4>
      )}
    </div>
  );
};

export default Menu;
