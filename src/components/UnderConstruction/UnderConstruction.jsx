import React, {Component} from 'react';
import Footer from '../Footer/Footer.jsx';
import {Link} from 'react-router-dom';

import './style.scss'

class UnderConstruction extends Component {

  generateTopButtons(){
    return (
      <div className="top-buttons">
        <Link to="/">
          <img className="logo" src="src/assets/icons/JobHax-logo-white.svg" alt="JobHax-logo"/>
        </Link>
          {this.props.isUserLoggedIn ?
            <Link to="/dashboard">
              <button>
                Dashboard
              </button>
            </Link>
              :
            <Link to="/">
              <button>
                Home
              </button>
            </Link>
          }
      </div>
    )
  }
  
  generateHeaderArea(){
    return(
      <section className="header_area">
        {this.generateTopButtons()}
        <div >
          <h2>sorry</h2>
        </div>
      </section>
    )
  }

  generateInfo () {
    return (
      <div className="info-area">
        <h2>This page is under construction!</h2>
      </div>
    )
  }



  render() {
    return (
      <div className="under_constrution-container">
        <div>
            {this.generateHeaderArea()}
            {this.generateInfo()}
        </div>
        <div className="footer-bottom">
            <Footer/>
        </div>
      </div>
    );
  }
}

export default UnderConstruction;