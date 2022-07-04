import { useEffect, useState } from "react";
import cocktailServices from "../services/cocktailServices";

export const useRandomData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const promisses = [
        cocktailServices.getRandom(),
        cocktailServices.getRandom(),
        cocktailServices.getRandom(),
      ];
      const random = await Promise.all(promisses);
      setData(random);
      setLoading(false);
    };

    fetchData();
  }, []);

  return {
    data,
    loading,
  };
};
