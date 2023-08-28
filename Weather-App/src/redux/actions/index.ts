import { Dispatch } from 'redux';
import { CityData } from '../../utils/types';

export const FETCH_CITY_DATA = "FETCH_CITY_DATA";
export const FETCH_WEATHER_DATA = "FETCH_WEATHER_DATA";
export const FETCH_FIVE_DAYS_FORECAST = "FETCH_FIVE_DAYS_FORECAST";

const auth = "62d27c813f254c1c799dabc5dfdd9ada";

export const fetchCityData = (search: string) => async (dispatch: Dispatch) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${search}&appid=${auth}`);
      if (response.ok) {
        const cityData = await response.json();
        dispatch({ type: FETCH_CITY_DATA, payload: cityData });
      } else {
        throw new Error('Something went wrong, try again 1');
      }
    } catch (error) {
      console.log(error);
    }
  };

export const weatherFetch = async (dispatch: Dispatch, city: CityData) => {
  try {
    const weatherObj = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${city[0].lat}&lon=${city[0].lon}&appid=${auth}&units=metric`);
    if (weatherObj.ok) {
      const weatherData = await weatherObj.json();
      dispatch({ type: FETCH_WEATHER_DATA, payload: weatherData });
    } else {
      throw new Error('Something went wrong, try again 2');
    }
  } catch (error) {
    console.log(error);
  }
};

export const fiveDaysForecast = async (dispatch: Dispatch, city: CityData) => {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${city[0].lat}&lon=${city[0].lon}&appid=${auth}&units=metric`)
            if(response.ok){
                const fiveDaysForecastData = await response.json()
                dispatch({ type: FETCH_FIVE_DAYS_FORECAST, payload: fiveDaysForecastData });
            }else{
              throw new Error('Something went wrong, try again 3');
            }
  } catch (error) {
    console.log(error);
  }
}