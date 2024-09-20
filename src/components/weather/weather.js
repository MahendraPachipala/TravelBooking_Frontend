import React, { useState, useEffect } from "react";
import axios from "axios";
import Days from "./Days";

export default function Weather({ city }) {
  const [data, setData] = useState(null);
  const [weatherLocation, setWeatherLocation] = useState(city);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let locationName = city;

        // If no city is passed, use geolocation
        if (!city) {
          const position = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
          });

          const lat = position.coords.latitude;
          const lon = position.coords.longitude;

          const locationResponse = await axios.get(
            `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=e7cbec4493a84f6b89744cb2d587f992`
          );

          const { village, state, state_district } = locationResponse.data.results[0].components;
          locationName = `${village || ""}, ${state_district || ""}, ${state || ""}`;
        }

        setWeatherLocation(locationName);

        // Fetch weather data based on the resolved location
        const weatherResponse = await axios.get(
          `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locationName}?unitGroup=metric&key=6BHXV54C28F5FRDLHZ8T46ARU&contentType=json`
        );

        setData(weatherResponse.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [city]);

  if (loading) {
    return <div className="text-center p-4">Loading...</div>;
  }

  // Render the upcoming 7-day forecast horizontally
  return (
    <div className="flex flex-col p-4 bg-gray-100 rounded-md shadow-sm">
      <div className="text-gray-700 text-sm mb-4">
        <p>{data.resolvedAddress}</p>
      </div>
      <div className="flex overflow-x-auto space-x-4">
        {data.days.slice(0, 7).map((day, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-32 p-4 bg-white rounded-md shadow-sm"
          >
            <Days img={day.icon} climate={day.conditions} temp={day.temp} date={day.datetime} />
          </div>
        ))}
      </div>
    </div>
  );
}
