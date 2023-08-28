import { CityData, WeatherData, FiveDaysForecastData } from "../../utils/types";
import { FETCH_CITY_DATA, FETCH_WEATHER_DATA, FETCH_FIVE_DAYS_FORECAST } from "../actions";

type CityState = {
	cityData: CityData;
	weatherData: WeatherData;
	fiveDaysForecastData: FiveDaysForecastData;
  };
  
  const initialState: CityState = {
	cityData: [{ 
		country: null,
		lat: null,
		local_names: null,
		lon: null,
		name: null,
		state: null
	}],
	weatherData: 
		{
			coord: {
				lon: null,
				lat: null
			},
			weather: [
				{
					id:null,
					main: null,
					description: null,
					icon: null
				}
			],
			base: null,
			main: {
				temp: null,
				feels_like: null,
				temp_min: null,
				temp_max: null,
				pressure: null,
				humidity: null
			},
			visibility: null,
			wind: {
				speed: null,
				deg: null
			},
			clouds: {
				all: null
			},
			dt: null,
			sys: {
				type: null,
				id: null,
				country: null,
				sunrise: null,
				sunset: null
			},
			timezone: null,
			id: null,
			name: null,
			cod: null
	},
	fiveDaysForecastData: {
		cod:null ,
		message: null,
		cnt:null ,
		list: [
			{
			dt: null,
			main: {
				temp: null,
				feels_like:null ,
				temp_min:null ,
				temp_max:null ,
				pressure:null ,
				sea_level:null ,
				grnd_level: null,
				humidity: null,
				temp_kf: null
			},
			weather: [
				{
				id:null ,
				main: null,
				description:null,
				icon:null
				}
			],
			clouds: {
				all: null
			},
			wind: {
				speed: null,
				deg:null ,
				gust: null
			},
			visibility: null,
			pop: null,
			rain: {
				'3h':null
			},
			sys: {
				pod: null
			},
			dt_txt: null
			},
		]
	}
  };
  
  const cityReducer = (state = initialState, action: Action) => {
	switch (action.type) {
	  case FETCH_CITY_DATA:
		return {
		  ...state,
		  cityData: action.payload,
		};
	  case FETCH_WEATHER_DATA:
		return {
		  ...state,
		  weatherData: action.payload,
		};
	  case FETCH_FIVE_DAYS_FORECAST:
		return {
			...state,
			fiveDaysForecastData: action.payload,
		}
	  default:
		return state;
	}
  };
  
  export default cityReducer;
  