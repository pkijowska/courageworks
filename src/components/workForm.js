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
      <div>
         {this.state.works.map(work => (  <div> <img src={work.img} /> </div>
      ))}
    </div>
    );
  }

}

export default WorkForm;
