import axios from "axios";

const baseService = axios.create({
  baseURL: "https://thecocktaildb.com/api/json/v1/1/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default baseService;
