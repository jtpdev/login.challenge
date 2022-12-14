import axios from 'axios'

const url = 'http://api.weatherapi.com/v1/current.json'

export default {

  async getWeather () {
    let q = 'Brazil'
    try {
      const res = await axios.get('https://api.db-ip.com/v2/free/self')
      q = res.data.ipAddress
    } catch (error) {
      console.error(error)
    }
    return axios.get(`${url}?key=${process.env.VUE_APP_WEATHER_API_KEY}&q=${q}`).then((res: any) => res.data)
  }

}
