import React, { Component } from 'react';
import $ from 'jquery';



class LandingPage extends Component {




  render() {


    return (

      <div className="landingPagge intro">
      <h1 className="h1Parallax">CourageWorks </h1>

      <img src="https://images.unsplash.com/photo-1552084117-56a987666449?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" className="parallax  skyline" />
      <img src="https://images.unsplash.com/photo-1516146544193-b54a65682f16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" className="parallax  blimp" />
      <img src="https://images.unsplash.com/photo-1549490349-8643362247b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" className="parallax  gherkin" />
      <img src="https://images.unsplash.com/photo-1542789828-6c82d889ed74?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" className="parallax  dino" />
      <img src="https://images.unsplash.com/photo-1561214115-f2f134cc4912?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" className="parallax  bull" />

      <div className="box">
    <p className="parap">We are an art gallery specialising in contemporary and modern art. </p>
    <p className="parap"> We have built a reputation for sourcing and exhibiting exclusive, cutting-edge art from internationally-acclaimed and emerging artists. </p>
      </div>

      </div>
);
  }

}

export default LandingPage;
