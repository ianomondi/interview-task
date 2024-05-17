const getUniqueProperty = (array, property) => {
  const items = array.map((item) => item[property]);
  const uniqueItems = [...new Set(items)];
  return uniqueItems;
};

export default getUniqueProperty;
