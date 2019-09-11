import React, { Component } from 'react';
import { getWorks } from "../services/worksServices";


class WorkForm extends Component {
constructor(props) {
  super(props);
  this.state = {
    works: getWorks().filter(w => w._id === this.props.match.params.id)
}



}

  render() {
    return (
      <div class="wrapper">
        <div class="product-img">
         {this.state.works.map(work => ( <img className="workimg" src={work.img} height="512" width="317"/>
 ))}
    </div>
    <div class="product-info">
      <div class="product-text">

    <h1 class="titleWeight">
      {this.state.works.map(work => ( <div className="titleWeight"> "{work.title}"</div>
      ))}
   </h1>
   <p> {this.state.works.map(work => ( <div> Artist: {work.artist.name}</div>
     ))} </p>
   <p> {this.state.works.map(work => ( <div> Frame: {work.frame}</div>
     ))} </p>

   <p> {this.state.works.map(work => ( <div> Price: {work.price}</div>
          ))}</p><div class="product-price-btn">
        <button type="button">buy now</button>
        </div>
            </div>
          </div>
        </div>


    );
  }

}

export default WorkForm;
