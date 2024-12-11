import React from "react";
import { useState } from "react";
import type { Place } from "../API/Place";
import { search } from "../API/Search"

interface LocationSearchProps {
    onPlaceClick: (place: Place) => void;
}

export default function LocationSearch({ onPlaceClick }: LocationSearchProps): JSX.Element {

    const [term, setTerm] = useState<string>("")
    const [places, setPlaces] = useState<Place[]>([])

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const result = await search(term);
        setPlaces(result);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="term" className="font-bold">
                    Enter place name
                </label>
                <input
                    className="border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 px-4 py-2 w-full"
                    id="term"
                    value={term}
                    onChange={e => setTerm(e.target.value)}
                />
                <button className="bg-green-400 rounded outline mt-2 p-2">
                    Search
                </button>
            </form>

            <h1 className="font-bold mt-6">
                Found Locations
            </h1>
            <div className="grid grid-cols-[1fr_40px] gap-2 mt-2 items-center">
                {!places.length ? <div className="text-red-700"> No Locations Found</div> : 
                    places.map(place => {
                        return <React.Fragment key={place.id}>
                <p className="text-sm">{place.name}</p>
                <button
                    className="bg-blue-500 text-xs text-white font-bold py-1 px-1 rounded"
                    onClick={() => onPlaceClick(place)}
                >
                    Go
                </button>
                <div className="border-b w-full col-span-2" />
            </React.Fragment>
                    })
                }
        </div>
        </div >
    );
}