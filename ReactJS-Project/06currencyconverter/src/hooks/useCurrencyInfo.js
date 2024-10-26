import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({}); // Initial state set to null
    useEffect(() => {
      fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@2024.10.26/${currency}.json`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then((res) => setData(res[currency]))
            .catch((error) => console.error('There was a problem with the fetch operation:', error));
    }, [currency]);

    console.log(data);
    return data;
}

export default useCurrencyInfo;