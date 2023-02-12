// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, onClickEvent} = props
  const {id, imageUrl, name, location} = eventDetails

  const sendImageId = () => {
    onClickEvent(id)
  }

  return (
    <li className="each-list">
      <button type="button" className="button" onClick={sendImageId}>
        <img src={imageUrl} alt="event" className="image" />
      </button>
      <p className="img-heading">{name}</p>
      <p className="img-heading location">{location}</p>
    </li>
  )
}

export default EventItem
