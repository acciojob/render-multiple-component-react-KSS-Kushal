import React from 'react'

const Card = ({name, description}) => {
  return (
    <div className='ns-wrapper'>
        <h1 data-ns-test="project-name">{name}</h1>
        <h6 data-ns-test="project-description">{description}</h6>
    </div>
  )
}

export default Card