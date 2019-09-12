import React, { Component } from 'react';
import { getWorks } from "../services/worksServices";

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
       let tasks = this.state.works.filter((task) => {
           if (task.title == id) {
               task.category = cat;
           }
           return task;
       });

       this.setState({
           ...this.state,
           tasks
       });
    }

    render() {
        var tasks = {
            wip: [],
            complete: []
        }

        this.state.works.forEach ((t) => {
            tasks[t.category].push(
                <div key={t.title}
                    onDragStart = {(e) => this.onDragStart(e, t.title)}
                    draggable
                    className="draggable"
                >
                <img src={t.link} height="150" alt="" />
                </div>
            );
        });

        return (
            <div className="container-drag">
                <h2 className="header">CourageWorks</h2>
                <div className="wip"
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>{this.onDrop(e, "wip")}}>
                    <span className="task-header">All paintings</span>
                    {tasks.wip}
                </div>
                <div className="droppable"
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>this.onDrop(e, "complete")}>
                     <span className="task-header">Wish List</span>
                     {tasks.complete}
                </div>


            </div>
        );
    }
}
