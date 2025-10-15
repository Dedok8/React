import BusesList from "@/components/buses/bussesList";
import { TravelContext } from "@/context/TravelContext";
import { TravelDataContext } from "@/context/TravelDataContext";
import { useContext } from "react";

function Busses() {
  const travelState = useContext(TravelContext);
  const travelData = useContext(TravelDataContext);

  const { state } = travelState;
  const { buses } = travelData;

  return <BusesList busesList={buses} selectedCount={state.buses.length} />;
}

export default Busses;
