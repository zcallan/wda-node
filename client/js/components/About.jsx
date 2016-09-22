import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';


let style = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '100px',
};

class About extends Component {
  render() {
    return (
      <div style={{height: '100%'}}>
        <PageHeader>
          $ ls ~/about
        </PageHeader>

        <h1 style={style}>Gotcha!</h1>
      </div>
    );
  }
}

export default About;