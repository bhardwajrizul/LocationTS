import { useState } from "react";
import type { Place } from "./API/Place";

import Map from "./components/Map";
import LocationSearch from "./components/LocationSearch";


function App(): JSX.Element {
  const [place, setPlace] = useState<Place | null>(null);
  return (
    <div className='h-screen w-screen grid grid-cols-12'>
      <div className="col-span-3 p-2">
        <LocationSearch onPlaceClick={(p : Place) => setPlace(p)} />
      </div>
      <div className="col-span-9">
        <Map place={place} />
      </div>
    </div>
  )
}

export default App
