const countries = {
    Asia: "China",
    Africa: "Nigeria",
    America: "The USA",
    Europe: "France",
    Oceania: "Antarctica",
   
    countries: (country) => {
        return `I travelled to ${country} yesterday!`
    }
}

console.log(countries.countries("England"));