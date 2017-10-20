import React, { Component } from 'react';
import './App.css';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import Profile from './Profile';
import Gallery from './Gallery';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            query: "",
            artist: null,
            tracks: []
        }
    }

    

    search() {
        const BASE_URL = 'https://api.spotify.com/v1/search?';
        let FETCH_URL = `${BASE_URL}q=${this.state.query}&type=artist&limit=1`;
        const TRACKS_URL = 'https://api.spotify.com/v1/artists/';
        let accessToken = "BQBRs6vq4saXCMHQx-H6TLxgw_XJCuXY5mL2AIrLfyDPMXBqZuy00G7CgnPRM4eg7VsEQ36tplG-wcSaYeMcoA";

        let myOptions = {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + accessToken
            },
            mode: 'cors',
            cache: 'default',
        };

        fetch("https://accounts.spotify.com/api/token", {
            body: "grant_type=client_credentials",
            headers: {
                Authorization: "Basic YTQ3ZDlmMzAzZTQwNDY4ODg5OGM4N2JmOTcxOWYyYzQ6Y2JkOGMzODk4NjA2NDBiYTlkMmMxNGIzNzM1MTNmOTA=",
                "Content-Type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            mode: 'cors'
          })
            .then(response => response.json())
            .then(json => {
                console.log(json);
            });

        fetch(FETCH_URL, myOptions)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                const artist = json.artists.items[0];
                this.setState({artist});
                FETCH_URL = `${TRACKS_URL}${artist.id}/top-tracks?country=US&`;
                fetch(FETCH_URL, myOptions)
                    .then(response => response.json())
                    .then(json => {
                        const { tracks } = json;
                        this.setState({tracks});
                    })
            })
    }

    render() {
        return (
            <div className="app">
                <div className="app_title">Music Master</div>
                <FormGroup>
                    <InputGroup>
                        <FormControl 
                            type="text"
                            placeholder="Search for an Artist"
                            value={this.state.query}
                            onChange={event => {this.setState({query: event.target.value})}}
                            onKeyPress={event => {
                                if (event.key === "Enter"){
                                    this.search()
                                }
                            }}
                        /> 
                        <InputGroup.Addon onClick={() => this.search()} >
                            <Glyphicon glyph="search"></Glyphicon>
                        </InputGroup.Addon>
                    </InputGroup>
                </FormGroup>
                {
                    this.state.artist !== null 
                    ? <div>
                        <Profile 
                            artist={this.state.artist}
                        />
                        <Gallery
                            tracks={this.state.tracks}
                        />
                    </div>
                    : <div></div>
                }
            </div>
        )
    }
}

export default App;