import React, {Component} from 'react';

import {
    Link
} from "react-router-dom";
import DeleteMusician from "./DeleteMusician";

class Home extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            musicians: []
        }
    }
    componentDidMount() {
        this.showMusicians()
    }

    showMusicians =() => {
        fetch('/musicians/')
            .then(data=>data.json())
            .then(dataResponse=> {
                let newMusicians = dataResponse.map((eachMusician) => {
                    return(
                        <div key={eachMusician.id}>
                            <Link to={"/edit/"+ eachMusician.id}>
                                <h3> {eachMusician.artistName} </h3>
                            </Link>
                            <h3> Genre:{eachMusician.genre} </h3>
                            <h3> Popular Song: {eachMusician.popularSong}</h3>
                             <h3>Favorite Album: {eachMusician.favoriteAlbum}</h3>
                            <DeleteMusician each={this.state.musicians} getinfo={this.showMusicians}/>
                            <hr/>
                </div>
                )
                });
                this.setState({musicians:newMusicians})
            })
    };
    render()
    {
        return (
            <div>
                <h1>{this.state.musicians}</h1>

            </div>
        );
    }
}

export default Home;