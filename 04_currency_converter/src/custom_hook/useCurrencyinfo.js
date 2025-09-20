

import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/0bc7943df69133e9ec603230/latest/${currency}`)
            .then((res) => res.json())
            .then((res) => {
                if (res.result === "success") {
                    setData(res.conversion_rates);
                } else {
                    console.error("API error:", res);
                    setData({});
                }
            })
            .catch((err) => {
                console.error("Fetch error:", err);
                setData({});
            });
    }, [currency]);

    return data;
}

export default useCurrencyInfo;
