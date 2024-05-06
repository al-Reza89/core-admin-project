import React, { createContext, useContext, useReducer } from "react";

// Define your initial state
const initialState = {
  items: [
    {
      id: 1,
      title: "Automated Invoice receive",
      description: "Description comes here. Description comes here.  ",
      location: {
        color: "#EFEFEF",
        counter: "Gmail",
      },
      actionDescription:
        "whenever email with Invoice as subject is received. Or attachment/body contains “Invoice”",
    },
    {
      id: 2,
      title: "Automated Invoice receive",
      description: "Description comes here. Description comes here.  ",
      location: {
        color: "#EFEFEF",
        counter: "Gmail",
      },
      actionDescription:
        "whenever email with Invoice as subject is received. Or attachment/body contains “Invoice”",
    },
    {
      id: 3,
      title: "Automated Invoice receive",
      description: "Description comes here. Description comes here.  ",
      location: {
        color: "#EFEFEF",
        counter: "Gmail",
      },
      actionDescription:
        "whenever email with Invoice as subject is received. Or attachment/body contains “Invoice”",
    },
  ],
};

// Define action types
const ActionTypes = {
  UPDATE_ITEM: "UPDATE_ITEM",
  DELETE_ITEM: "DELETE_ITEM",
  ADD_ITEM: "ADD_ITEM",
};

// Define reducer function to manage state updates
const reducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_ITEM:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, ...action.payload.update }
            : item
        ),
      };
    case ActionTypes.DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };
    case ActionTypes.ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload.item],
      };

    case ActionTypes.ADD_ITEM_AFTER_ID:
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      const newArray = [...state.items];
      newArray.splice(index + 1, 0, action.payload.newItem);
      return {
        ...state,
        items: newArray,
      };
    default:
      return state;
  }
};

// Create context
const ItemsContext = createContext();

// Custom hook to use ItemsContext
export const useItems = () => useContext(ItemsContext);

// Provider component to wrap your app and provide the context
export const ItemsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ItemsContext.Provider value={{ state, dispatch }}>
      {children}
    </ItemsContext.Provider>
  );
};
