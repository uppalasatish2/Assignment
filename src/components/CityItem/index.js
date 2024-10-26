import './index.css'

const CityItem = props => {
  const {CityDetails} = props
  const {city, weather} = CityDetails
  return (
    <li className="listItem">
      <h1 className="header">{city}</h1>
      <p>
        Temperature: <span className="span">{weather} C</span>
      </p>
    </li>
  )
}

export default CityItem
