import { useReducer } from "react";
import { TRAVEL_TYPE_ACTION } from "./TRAVEL_TYPE";
import { TravelContext } from "@/context/TravelContext";

const initialState = {
  buses: [],
  hotels: [],
};

function travelReducer(currentState, action) {
  const elId = action.payload;

  let newState;

  switch (action.type) {
    case TRAVEL_TYPE_ACTION.TOGGLE_BUS:
      newState = {
        ...currentState,
        buses: currentState.buses.includes(elId)
          ? currentState.buses.filter((id) => id !== elId)
          : [...currentState.buses, elId],
      };
      break;
    case TRAVEL_TYPE_ACTION.TOGGLE_HOTEL:
      newState = {
        ...currentState,
        hotels: currentState.hotels.includes(elId)
          ? currentState.hotels.filter((id) => id !== elId)
          : [...currentState.hotels, elId],
      };
      break;

    default:
      newState = currentState;
      break;
  }
  return newState;
}

function TravelProvider({ children }) {
  const [state, dispatch] = useReducer(travelReducer, initialState);
  return (
    <TravelContext.Provider value={{ state, dispatch }}>
      {children}
    </TravelContext.Provider>
  );
}

export default TravelProvider;
