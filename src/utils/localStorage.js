const addNewJokeToLocalStorage = (newJoke) => {
  const oldLocalStoreJokes = JSON.parse(localStorage.getItem("jokes")) || [];
  const newLocalStoreJokes = [...oldLocalStoreJokes, newJoke];
  const stringifiedNewJokes = JSON.stringify(newLocalStoreJokes);
  localStorage.setItem("jokes", stringifiedNewJokes);
};

const setCartoons = (newCartoons) => {
  const stringifiedCartoons = JSON.stringify(newCartoons);
  localStorage.setItem("cartoons", stringifiedCartoons);
};

const getItems = (itemsName) => {
  return JSON.parse(localStorage.getItem(itemsName)) || [];
};

export { addNewJokeToLocalStorage, setCartoons, getItems };
