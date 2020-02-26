import { REST_COUNTRIES_URL, EXHANGE_URL } from "../constants";

export const fetchCountryArr = async () => {
  const resCountries = await fetch(REST_COUNTRIES_URL);
  return await resCountries.json();
};

export const fetchExchangeArr = async () => {
  const resExchange = await fetch(EXHANGE_URL);
  return await resExchange.json();
};
