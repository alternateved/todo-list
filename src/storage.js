// check localStorage for data
const checkData = (name) => {
  if (localStorage.getItem(string)) {
    return JSON.parse(localStorage.getItem(string));
  }
};
// store data in localStorage
const storeData = (name, variable) => {
  localStorage.setItem(name, JSON.stringify(variable));
};

export {checkData, storeData};