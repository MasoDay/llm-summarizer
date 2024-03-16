

async function fetchData() {
    const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities/Q100/nearbyCities?radius=100';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '9ad33a5f7emsh5bf504064de98a9p16e3e4jsn6d60b88b5d1f',
            'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
        }
    };

    const response = await fetch(url, options);
    const result = await response.json()

    document.getElementById("bulletPoints").innerHTML =
    result.data.map(item => `<li>${item.name}</li>`).join("");
}
fetchData();
