import React, {Component} from 'react';

class EditMusician extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            musicianID: this.props.match.params.musicianID,
            musicianObject: " "
        }
    }
    componentDidMount() {
        fetch(`/musicians/${this.state.musicianID}/`)
            .then(data=>data.json())
            .then(dataResponse=> this.setState({musicianObject:dataResponse}))
    }
    updateForm =(e) => {
        e.preventDefault();
        let newInfo= {
            "id": this.state.musicianID,
            "artistName": document.getElementById('artistName').value,
            "genre": document.getElementById('genre').value,
            "popularSong": document.getElementById('popularSong').value,
            "favoriteAlbum": document.getElementById('favoriteAlbum').value
        };
        fetch(`/musicians/${this.state.musicianID}/`, {
            method: "put",
            headers: {
                "Content-Type": 'application/json'
            },
            body:JSON.stringify(newInfo)
        })
            .then(data=>data.json())
            .then(dataResponse=>console.log(dataResponse))
            .then(this.props.history.push('/'))
    };

    render()
    {
        return (
            <div>
                <h2> Edit: {this.state.musicianObject.artistName}</h2>
                <form onSubmit={this.updateForm}>
                    <label htmlFor='artistName'> Artist Name:</label>
                    <input type='text' id='artistName' defaultValue={this.state.musicianObject.artistName}/>
                        <br/>
                    <label htmlFor='genre'> Genre:</label>
                    <input type='text' id='genre' defaultValue={this.state.musicianObject.genre}/>
                        <br/>
                    <label htmlFor='popularSong'> Popular Song:</label>
                    <input type='text' id='popularSong' defaultValue={this.state.musicianObject.popularSong}/>
                        <br/>
                    <label htmlFor='favoriteAlbum'> Favorite Album:</label>
                    <input type='text' id='favoriteAlbum' defaultValue={this.state.musicianObject.favoriteAlbum}/>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default EditMusician;