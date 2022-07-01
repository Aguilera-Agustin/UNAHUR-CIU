import { useEffect, useState } from "react";
import cocktailServices from "../services/cocktailServices";

export const useRandomData = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const promisses = [
        cocktailServices.getRandom(),
        cocktailServices.getRandom(),
        cocktailServices.getRandom(),
      ];
      const random = await Promise.all(promisses);
      setData(random);
    };

    fetchData();
  }, []);

  return {
    data,
  };
};
