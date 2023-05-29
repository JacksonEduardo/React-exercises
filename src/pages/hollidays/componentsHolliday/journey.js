import React, { useState, useEffect } from "react";
import SingleHolliday from "./singleHolliday";
import axios from "axios";
const url = "https://react--course-api.herokuapp.com/api/v1/data/vacanze";

const Journey = () => {
  const [data, setData] = useState([]);

  const [selected, setSelected] = useState(0);

  // FUNCTION TO SKIP FORDWARE
  const nextHoliday = () => {
    setSelected((preValue) => {
      if (preValue + 1 === data.data.length) {
        return 0;
      } else {
        return preValue + 1;
      }
    });
  };

  const previousHoliday = () => {
    setSelected((preValue) => {
      if (preValue - 1 < 0) {
        return data.data.length - 1;
      } else {
        return preValue - 1;
      }
    });
  };
  // FUNCTION TO FETCH INFORMATION FROM API
  const getData = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  if (data.success) {
    return (
      <>
        {data.data.length > 0 ? (
          <SingleHolliday
            {...data.data[selected]}
            next={nextHoliday}
            previous={previousHoliday}
          />
        ) : (
          <h4>No hollidays</h4>
        )}
      </>
    );
  } else {
    return <div>...Loading</div>;
  }
};

export default Journey;
