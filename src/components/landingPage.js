import React, { Component } from 'react';
import $ from 'jquery';



class LandingPage extends Component {




  render() {


    return (

      <div className="landingPagge intro">
      <h1 className="parallax h1Parallax">CourageWorks </h1>

      <img src="https://images.unsplash.com/photo-1552084117-56a987666449?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" className="parallax  skyline" />
      <img src="https://images.unsplash.com/photo-1516146544193-b54a65682f16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" className="parallax  blimp" />
      <img src="https://images.unsplash.com/photo-1549490349-8643362247b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" className="parallax  gherkin" />
      <img src="https://images.unsplash.com/photo-1542789828-6c82d889ed74?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" className="parallax  dino" />
      <img src="https://images.unsplash.com/photo-1561214115-f2f134cc4912?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" className="parallax  bull" />

      <div className="box">
        <p className="parap">Established in 1971, the Gallery is proud to present fine international and Australian art. </p>
    <p className="parap">We aim to be a place of experience and inspiration, through our collection, exhibitions, programs and research.  </p>
    <p className="parap"> Admission to the Gallery is free, as are our permanent galleries and most exhibitions and events.</p>
      </div>

      </div>
);
  }

}

export default LandingPage;
