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

    case "LOGIN_REQUEST":
      return {
        ...state,
        user: action.payload,
      };

    case "LOGOUT_REQUEST":
      return {
        ...state,
        user: action.payload,
      };

    case "REGISTER_REQUEST":
      return {
        ...state,
        user: action.payload,
      };

    case "GET_VIDEO_SOURCE":
      return {
        ...state,
        playing:
          state.trends.find((item) => item.id === Number(action.payload)) ||
          state.originals.find((item) => item.id === Number(action.payload)) ||
          [],
      };

    case "SEARCH_VIDEO":
      if (action.payload === "") {
        return {
          ...state,
          search: [],
        };
      }

      const all = state.trends.concat(state.originals);

      return {
        ...state,
        search:
          all.filter((items) =>
            items.title.toLowerCase().includes(action.payload.toLowerCase())
          ) || [],
      };

    default:
      return state;
  }
};

export default reducer;
