const apiCall = async (url, value) => {
  return await fetch(url + value)
    .then((value) => value.json())
    .then((data) => data)
    .catch((error) => console.log(error));
};

export { apiCall };
