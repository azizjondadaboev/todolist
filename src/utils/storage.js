export const getItemFromLocalStorage = (key) => {
  try {
    const data = window.localStorage.getItem(key);

    return data ? JSON.parse(data) : null;
  } catch (e) {
    console.log('getItemFromLocalStorage() error', e);
  }
};

export const setItemToLocalStorage = (key, value) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.log('setItemToLocalStorage() error', e);
  }
};

export const removeItemFromLocalStorage = (key) => {
  try {
    window.localStorage.removeItem(key);
  } catch (e) {
    console.log('removeItemFromLocalStorage() error', e);
  }
};
