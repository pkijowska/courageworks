import React, { Component } from 'react';
import { getWorks } from "../services/worksServices";

{/* eventhandler ondragstart and pass any information I needed to persist while the drag/drop is happening.In the onDragStart handler, I grabbed the parameter and store that within the dataTransfer object. The above handler will ensure that the element being dragged is stored in the event object and is available for use when required. */}
export default class AppDragDropDemo extends Component {
    state = {
        works: getWorks(),
    }



    onDragStart = (ev, id) => {
        console.log('dragstart:',id);
        ev.dataTransfer.setData("id", id);
    }

    onDragOver = (ev) => {
        ev.preventDefault();
    }

    onDrop = (ev, cat) => {
       let id = ev.dataTransfer.getData("id");
       console.log(id, "i");
       let paintings = this.state.works.filter((painting) => {
           if (painting.title == id) {
               painting.category = cat;
           }
           return painting;
           console.log(painting);
       });

       this.setState({
           ...this.state,
           paintings
       });
    }

    render() {
        var paintings = {
            before: [],
            after: []
        }

        {/* looping through all data from works() and creating a div for every picture item and storing it in the respective categories (before or after). All pics have before tag*/}

        {/* I am using title as a unique value to identify the picture. */}
        this.state.works.forEach ((t) => {
            paintings[t.category].push(
                <div key={t.title}
                    onDragStart = {(e) => this.onDragStart(e, t.title)}
                    draggable
                    className="draggable"
                >
                <img src={t.link} height="150"  alt="" />
                </div>
            );
        });

{/* in order to create droppable container I created an dragover event*/}

        return (
            <div className="container-drag">

                <div className="before"
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>{this.onDrop(e, "before")}}>
                    <span className="painting-header">All paintings</span>
                    {paintings.before}
                </div>

                {/*add the drop event handler, and pass the required category complete as an argument. This indicates we are dropping the element from the before state to the after state (category). */}
                <div className="droppable"
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>this.onDrop(e, "after")}>
                     <span className="painting-header">Wish List</span>
                     {paintings.after}
                </div>


            </div>
        );
    }
}
