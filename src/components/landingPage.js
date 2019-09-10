import React, { Component } from 'react';
import $ from 'jquery';



class LandingPage extends Component {




  render() {


    return (
      
      <div className="intro">
      <h1 className="parallax h1Parallax">CourageWorks </h1>

      <img src="https://images.unsplash.com/photo-1505995433366-e12047f3f144?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=764&q=80" className="parallax  skyline" />
      <img src="https://images.unsplash.com/photo-1516146544193-b54a65682f16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" className="parallax  blimp" />
      <img src="https://images.unsplash.com/photo-1549490349-8643362247b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" className="parallax  gherkin" />
      <img src="https://images.unsplash.com/photo-1542789828-6c82d889ed74?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" className="parallax  dino" />
      <img src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" className="parallax  bull" />

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
