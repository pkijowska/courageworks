import React, { Component } from 'react';
import { getWorks } from "../services/worksServices";
import Like from "./like";
import Pagination from "./pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./listGroup";
import { getArtists } from "../services/artistsServices";
import { Link } from 'react-router-dom';




class Works extends Component {
state = {
  works: [],
  artists: [],
  currentPage: 1,
  pageSize: 3
};



componentDidMount() {
  this.setState({works: getWorks(), artists: getArtists() });
}

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

handleArtistSelect = artist => {
  console.log(artist);
  this.setState({ selectedArtist: artist });
};


  render() {

    const {length: count } = this.state.works;
    const {pageSize, currentPage, works: allWorks, selectedArtist } = this.state;

    if (count === 0) return <p>Currently no works :( </p>;

    const filtered = selectedArtist ? allWorks.filter(w => w.artist._id === selectedArtist._id) : allWorks;
    console.log(filtered);

    const works = paginate(filtered, currentPage, pageSize);
    console.log(works, "works");

    return (
      <div class="container"> <h1 className="courageworks"> CourageWorks </h1>
      <div className="row">
      <div className="col-2.5">

          { /* // <img src={banksy} alt="" /> */}
        <ListGroup items={this.state.artists} selectedItem={selectedArtist} onItemSelect={this.handleArtistSelect}/>
      </div>
      <div className="col">
      <p> Total :  {filtered.length} works </p>
    <table className="grid">
    <thead>
    <tr>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      </tr>
    </thead>
    <tbody>
{works.map(work => (
  <tr key={work._id}>
 <td> <Link to={`/works/${work._id}`}><img className="img" src={work.img} /> </Link>

 </td>
 <td> {work.title} </td>
 <td> {work.artist.name}  </td>
 <td> {work.price}  </td>
 <td> <Like liked={work.liked} onClick={()=> this.handleLike(work)}/> </td>
 <td> <button onClick={()=> this.handleDelete(work)} className="btn btn-danger btn-sm">Add to cart</button> </td>

        </tr>
      ))}
        </tbody>
     </table>
     {/* //clicking on the new page will raise the onPageChange */}
     <Pagination itemsCount={filtered.length} pageSize={pageSize} currentPage={currentPage} onPageChange={this.handlePageChange}/>
     </div>
     </div>
   </div>
   );
  }
}

export default Works;
