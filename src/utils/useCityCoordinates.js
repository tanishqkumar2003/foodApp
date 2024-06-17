import { useEffect, useState } from "react";

const useCityCoordinates = (cityName) => {
    const [coordinate, setCoordinate] = useState({});

    useEffect(() => {
        const fetchCoordinates = async () => {
            try {
                const response = await fetch(`https://api.geoapify.com/v1/geocode/search?text=${cityName}, India&format=json&apiKey=8d5ab62584304f90a4d99181c69b9f4d`);
                const data = await response.json();
                if (data.results && data.results.length > 0) {
                    setCoordinate({
                        lat: data.results[0].lat,
                        lon: data.results[0].lon,
                    });
                }
            } catch (error) {
                console.error("Error fetching coordinates:", error);
            }
        };

        fetchCoordinates();
    }, [cityName]);

    return coordinate;
};

export default useCityCoordinates;
