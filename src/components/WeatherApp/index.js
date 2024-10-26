import {Component} from 'react'
import CityItem from '../CityItem'
import './index.css'

const CitiesWeatherList = [
  {
    city: 'HYDERABAD',
    weather: 40,
  },
  {
    city: 'MUMBAI',
    weather: 50,
  },
  {
    city: 'VIZAG',
    weather: 37,
  },
  {
    city: 'DELHI',
    weather: 40,
  },
  {
    city: 'CHENNAI',
    weather: 34,
  },
  {
    city: 'BANGALORE',
    weather: 37,
  },
  {
    city: 'KERALA',
    weather: 30,
  },
  {
    city: 'SIKKIM',
    weather: 28,
  },
  {
    city: 'JAMMU AND KASMIR',

    weather: 27,
  },
  {
    city: 'ASSAM',
    weather: 30,
  },

  {
    city: 'BHOPAL',
    weather: 43,
  },
]

class WeatherApp extends Component {
  state = {
    searchInput: '',
    cityList: CitiesWeatherList,
  }

  changeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput, cityList} = this.state

    const filteredList = cityList.filter(each =>
      each.city.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="container">
        <h1 className="heading">Open Weather</h1>
        <p className="para">
          Open Weather that displays the current weather conditions of a city.
        </p>
        <input
          type="text"
          value={searchInput}
          placeholder="Enter the city Name"
          onChange={this.changeSearchInput}
        />
        <ul className="unorderList">
          {filteredList.map(each => (
            <CityItem key={each.id} CityDetails={each} />
          ))}
        </ul>
      </div>
    )
  }
}

export default WeatherApp
