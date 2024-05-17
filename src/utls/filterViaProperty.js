const filterViaProperty = (arr, queryVariable, property) => {
  const filteredData = queryVariable
    ? arr.filter((item) => item[property] === queryVariable)
    : arr;

  return filteredData;
};

export default filterViaProperty;
