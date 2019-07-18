import React from 'react'

function About() {
  return (
    <React.Fragment>
      <h1 style={headerStyle}>
        About
      </h1>

      <p style={paraStyle}>
        This is the TodoList app v1.0.0.
        It is part of a React crash course
      </p>
    </React.Fragment>
  )
}

const headerStyle = {
  textAlign: 'center'
}

const paraStyle = {
  textAlign: 'center'
}

export default About;
