let xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.responseType = "json";
xhr.send();
xhr.onload = function () {
    let responseObj = xhr.response;
    console.log(responseObj);
    let AsiaCOunties = responseObj.filter((item) => { return item.continents[0] === "Asia" })
    let pop = responseObj.filter((item) => { return item.population < 200000 })
    console.log(`Country NAme: ${AsiaCOunties.map((item) => { return item.name.common })}`);
    console.log(`Population less than 2 lakhs: ${pop.map((item) => { return item.name.common })}`);

    responseObj.forEach(element => {
        console.log(`Name: ${element.name.common}`);
        console.log(`Capital: ${element.capital}`);
        console.log(`Flag: ${element.flag.svg}`);

    });
    let popArray = responseObj.map((item) => { return item.population });
    console.log(popArray);

    let totalPopulation = responseObj.reduce((sum, item) =>
        sum + item.population, 0
        // return sum;
    );
    console.log(totalPopulation);

    let countriesCurrencies = responseObj.filter((item) => { return item.currencies });
    let countriesUSDCurrencies = countriesCurrencies.filter((item) => item.currencies.USD).map((item) => item.name.common);
    console.log(countriesUSDCurrencies);

}