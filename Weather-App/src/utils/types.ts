export type CityData = [{
    country: null,
    lat: null,
    local_names: null,
    lon: null,
    name: null,
    state: null
  }]
  export type WeatherData = 
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
  }