import { Dispatch } from 'redux';
export const CITY = "CITY";
const auth = "62d27c813f254c1c799dabc5dfdd9ada";

export const fetchCityData = (search: string) => async (dispatch: Dispatch) => {
    try {
      const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${search}&appid=${auth}`);
      if (response.ok) {
        const data = await response.json();
        dispatch({ type: CITY, payload: data });
        console.log(data);
      } else {
        alert('Something went wrong, try again');
      }
    } catch (error) {
      console.log(error);
    }
  };