import baseService from "./baseService";

const searchByName = async (name) => {
  const { data } = await baseService.get(`search.php?s=${name}`);

  return data;
};

const cocktailServices = {
  searchByName,
};
export default cocktailServices;
