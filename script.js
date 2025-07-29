async function getCountryInfo() {
  const name = document.getElementById("countryInput").value.trim();
  const resultDiv = document.getElementById("result");

  if (!name) {
    resultDiv.innerHTML = `<p style="color:red;">Please enter a country name.</p>`;
    return;
  }

  // ✅ Custom block for Somaliland
  if (name.toLowerCase() === "somaliland") {
    resultDiv.innerHTML = `
      <h2>Somaliland (Country)</h2>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Flag_of_Somaliland.svg/320px-Flag_of_Somaliland.svg.png" alt="Flag of Somaliland" />
      <p><strong>Capital:</strong> Hargeisa</p>
      <p><strong>Region:</strong> East Africa</p>
      <p><strong>Population:</strong> ~5,700,000</p>
      <p><strong>Currency:</strong> Somaliland shilling</p>
      <p><strong>Language:</strong> Somali, Arabic, English</p>
    `;
    return;
  }

  resultDiv.innerHTML = "Loading...";

  try {
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`);

    if (!response.ok) {
      throw new Error("Country not found");
    }

    const data = await response.json();
    const country = data[0];

    resultDiv.innerHTML = `
      <h2>${country.name.common}</h2>
      <img src="${country.flags.svg}" alt="Flag of ${country.name.common}" />
      <p><strong>Capital:</strong> ${country.capital}</p>
      <p><strong>Region:</strong> ${country.region}</p>
      <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
      <p><strong>Currency:</strong> ${Object.values(country.currencies)[0].name}</p>
      <p><strong>Language:</strong> ${Object.values(country.languages).join(", ")}</p>
    `;
  } catch (error) {
    resultDiv.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
  }
}