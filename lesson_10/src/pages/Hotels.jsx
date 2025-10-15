import HotelList from "@/components/hotels/HotelList";
import { TravelContext } from "@/context/TravelContext";
import { TravelDataContext } from "@/context/TravelDataContext";
import { useContext } from "react";

function Hotels() {
  const travelState = useContext(TravelContext);
  const travelData = useContext(TravelDataContext);

  const { state } = travelState;
  const { hotels } = travelData;
  return <HotelList hotelList={hotels} selectedCount={state.hotels.length} />;
}

export default Hotels;
