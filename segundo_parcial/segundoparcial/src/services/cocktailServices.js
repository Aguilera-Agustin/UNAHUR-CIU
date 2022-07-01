import baseService from "./baseService";

const searchByName = async (name) => {
  const { data } = await baseService.get(`search.php?s=${name}`);
  return data;
};
const getRandom = async () => {
  const { data } = await baseService.get(`random.php`);
  return data;
};

const cocktailServices = {
  searchByName,
  getRandom,
};
export default cocktailServices;
