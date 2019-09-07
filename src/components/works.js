import React, { Component } from 'react';
import { getWorks } from "../services/worksServices";


class Works extends Component {
state = {
  works: getWorks()
};

handleDelete = (work) => {
  console.log(work);
  const works = this.state.works.filter(w => w._id !== work._id);
  this.setState({works: works})
  // const newWork = this.state.works.filter( !w => w.work )
}

  render() {


    return (
      <div>
      Current :  {this.state.works.length} works
    <table className="grid">
    <thead>
    <tr>
      <th>Image</th>
      <th>Title</th>
      <th>Artist</th>
      <th>Stock</th>
      <th>Price</th>
      <th></th>
      </tr>
    </thead>
    <tbody>

{this.state.works.map(work => (
  <tr key={work._id}>
 <td> <img src={work.img} /> </td>
 <td>{work.title}  </td>
 <td> {work.artist.name}  </td>
 <td> {work.numberInStock}  </td>
 <td> {work.price}  </td>
 <td> <button onClick={()=> this.handleDelete(work)} className="btn btn-danger btn-sm">Delete</button> </td>
        </tr>
      ))}
        </tbody>
     </table>
     </div>
   );
  }
}

export default Works;
