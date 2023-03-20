const myCountrie=()=>{
      fetch('https://restcountries.com/v3.1/all')
      .then(res=>res.json())
      .then(data=>displayCountries(data))
}



const displayCountries=countries=>{
      const countriesContainer=document.getElementById('add')

      countries.forEach(country=>{
            const countryDiv=document.createElement('div')
            countryDiv.classList.add('country')
            countryDiv.innerHTML=`
            <h3>Name:${country.name.common}</h3>
            <p>Capital:${country.capital ? country.capital[0] :'no capital'}</p>
            <button onclick="displayCountriesCode('${country.cca2}')">Details</button>
            `
            countriesContainer.appendChild(countryDiv)
      })
}

const displayCountriesCode=(code)=>{
//    https://restcountries.com/v3.1/alpha/{code}
 const url=`https://restcountries.com/v3.1/alpha/${code}`
 fetch(url)
 .then(res=>res.json())
 .then(data=>showCountryDetail(data[0]))
}

const showCountryDetail=countrys=>{
      console.log(countrys);
      const detailContainer=document.getElementById('country-Detail')
      console.log(detailContainer);
      detailContainer.innerHTML=`
      <h3>Name:${countrys.name.common}</h3>
      <img src="${countrys.flags.png}">
      
      `
}
myCountrie()