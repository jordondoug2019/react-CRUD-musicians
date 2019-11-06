import React, {Component} from 'react';

class AddMusician extends Component
{
    submitForm =(e) =>{
        e.preventDefault();
        fetch('/musicians/', {
            method: "post",
            headers: {
                "Accept": 'application/json',
                "Content-Type": 'application/json'
            },
            body:JSON.stringify({
                "artistName": document.getElementById('artistName').value,
                "genre": document.getElementById('genre').value,
                "popularSong": document.getElementById('popularSong').value,
                "favoriteAlbum": document.getElementById('favoriteAlbum').value
            })
        })
            .then(data=>data.json())
            .then(dataResponse=>{
                console.log(dataResponse)
            })
            .then(() =>{
                    document.getElementById('artistName').value=' ';
                    document.getElementById('genre').value=' ';
                    document.getElementById('popularSong').value=' ';
                    document.getElementById('favoriteAlbum').value= ' ';
            })

    };
    render()
    {
        return (
            <div>
                <h1> Add Musician Below:</h1>
                <form onSubmit={this.submitForm}>
                    <label htmlFor='artistName'> Enter Artist Name:</label>
                    <input type='text' id='artistName' />
                    <br/>
                    <label htmlFor='genre'> Enter Genre:</label>
                    <input type='text' id='genre'/>
                    <br/>
                    <label htmlFor='popularSong'> Enter Popular Song:</label>
                    <input type='text' id='popularSong'/>
                    <br/>
                    <label htmlFor='favoriteAlbum'> Enter Favorite Album:</label>
                    <input type='text' id='favoriteAlbum'/>
                    <button>Submit</button>
                </form>
            <h2> Return to Home Page to See Updated List</h2>
            </div>
        );
    }
}

export default AddMusician;