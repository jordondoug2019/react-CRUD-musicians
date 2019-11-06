import React, {Component} from 'react';
import {Link} from "react-router-dom";

class DeleteMusician extends Component
{
    deleteFunction =() => {
        fetch("/musicians/" +this.props.each.id ,{
            method: "Delete"
        })
            .then(data=>data.text())
            .then(data => console.log(data))
            .then(data=> this.props.getinfo)
    };
    render()
    {
        return (
            <div>
                <button onClick={this.deleteFunction}> Delete</button>
            </div>
        );
    }
}

export default DeleteMusician;