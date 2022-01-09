import React from 'react'

const Notification = ({ message }) => {
  const notificationStyle =
    {
      fontStyle: 'italic',
      fontSize: 20,
      border: '2px solid #A9A9A9',
      borderRadius: '5px',
      margin: '10px',
      padding: '10px'
    }

  if (message === null) {
    return null
  }

  return (
    <div className="error" style={notificationStyle}>
      {message}
    </div>
  )
}

export default Notification