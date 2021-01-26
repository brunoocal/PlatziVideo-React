const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FAVORITE":
      if (state.myList.filter((item) => item.id !== action.payload.id)) {
        const tEdit = state.trends.find((item) => item.id == action.payload.id);
        const oEdit = state.originals.find(
          (item) => item.id == action.payload.id
        );

        if (tEdit !== undefined) {
          tEdit.isInMyList = true;
        }
        if (oEdit !== undefined) {
          oEdit.isInMyList = true;
        }
      }

      return {
        ...state,
        myList: [
          ...state.myList.filter((item) => item.id !== action.payload.id),
          action.payload,
        ],
      };

    case "DELETE_FAVORITE":
      if (state.myList.filter((item) => item.id === action.payload)) {
        console.log(action.payload);
        const tEdit = state.trends.find((item) => item.id === action.payload);
        const oEdit = state.originals.find(
          (item) => item.id === action.payload
        );

        console.log(tEdit);
        console.log(oEdit);

        if (tEdit !== undefined) {
          tEdit.isInMyList = false;
        }
        if (oEdit !== undefined) {
          oEdit.isInMyList = false;
        }
      }

      return {
        ...state,
        myList: state.myList.filter((items) => items.id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
