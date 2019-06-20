const initState = {
  dataDisplay: [],
  displayName: "",
  displayPrice: "",
  url1: "",
  url2: "",
  url3: "",
  dataWaiting: [],
  noWait: 0
};

const pdReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_PRODUCT_DETAIL":
      return {
        ...state,
        dataDisplay: action.data[1],
        displayName: action.data[1][0].productName,
        displayPrice: action.data[1][0].unitPrice,
        url1: `http://localhost:8080/picture/${action.data[0][0].img}`,
        url2: `http://localhost:8080/picture/${action.data[0][1].img}`,
        url3: `http://localhost:8080/picture/${action.data[0][2].img}`
      };

    case "WAITING":
      return {
        ...state,
        dataWaiting: action.data,
        noWait: action.data.filter(a => {
          return a.stockDisplay !== 0;
        }).length
      };
    default:
      return state;
  }
};

export default pdReducer;
