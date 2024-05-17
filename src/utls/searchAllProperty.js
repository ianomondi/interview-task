const searchAllProperty = (arr, searchTerm) => {
  const filteredDataBasedOnSearchTerm = searchTerm
    ? arr.filter((item) =>
        Object.values(item).some((val) =>
          String(val).toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    : arr;

  return filteredDataBasedOnSearchTerm;
};

export default searchAllProperty;
