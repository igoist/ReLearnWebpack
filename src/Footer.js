import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <div style={{position: 'fixed', bottom: '0px', left: '0px', paddingLeft: '40px', width: '100%', background: '#333',}}>
        <h1 style={{color: '#fff'}}>Footer</h1>
      </div>
    );
  }
}

export default Footer;