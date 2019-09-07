import React, { Component } from 'react';
import { getWorks } from "../services/worksServices";
import Like from "./like";
import Pagination from "./pagination";
import { paginate } from "../utils/paginate";


class Works extends Component {
state = {
  works: getWorks(),
  currentPage: 1,
  pageSize: 4
};

handleDelete = (work) => {
  console.log(work);
  const works = this.state.works.filter(w => w._id !== work._id);
  this.setState({works: works})
  // const newWork = this.state.works.filter( !w => w.work )
}

handleLike = (work) => {
  const works = [...this.state.works];
  const index = works.indexOf(work);
  const ano = works[index] = {...works[index]};
  console.log(ano);
  //if it is true it becomes false otherwise it is true
  works[index].liked = !works[index].liked;
  console.log(index);
  this.setState({works});
}

handlePageChange = page => {
  this.setState({ currentPage: page});
  console.log(page);
}

  render() {
    const {length: count } = this.state.works;
    const {pageSize, currentPage, works: allWorks } = this.state;

    if (count === 0) return <p>Currently no works :( </p>;

    const works = paginate(allWorks, currentPage, pageSize);
    console.log(works, "works");

    return (
      <div> Current :  {count} works
    <table className="grid">
    <thead>
    <tr>
      <th>Image</th>
      <th>Title</th>
      <th>Artist</th>
      <th>Stock</th>
      <th>Price</th>
      <th></th>
      <th></th>
      </tr>
    </thead>
    <tbody>

{works.map(work => (
  <tr key={work._id}>
 <td> <img src={work.img} /> </td>
 <td> {work.title}  </td>
 <td> {work.artist.name}  </td>
 <td> {work.numberInStock}  </td>
 <td> {work.price}  </td>
 <td> <Like liked={work.liked} onClick={()=> this.handleLike(work)}/> </td>
 <td> <button onClick={()=> this.handleDelete(work)} className="btn btn-danger btn-sm">Delete</button> </td>

        </tr>
      ))}
        </tbody>
     </table>
     {/* //clicking on the new page will raise the onPageChange */}
     <Pagination itemsCount={count} pageSize={pageSize} currentPage={currentPage} onPageChange={this.handlePageChange}/>
     </div>
   );
  }
}

export default Works;
