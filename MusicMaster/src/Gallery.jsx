import React, { Component } from 'react';
import './App.css';

class Gallery extends Component {
    constructor(props){
        super(props)
        this.state = {
            playingUrl: '',
            audio: null,
            playing: false
        }

    }

    playAudio(audioUrl) {
        let audio = new Audio(audioUrl);
        if (!this.state.playing) {
            audio.play()
            this.setState({
                playing: true,
                playingUrl: audioUrl,
                audio
            })
        } else {
            this.state.audio.pause();
            if (this.state.playingUrl === audioUrl) {
                this.setState({playing: false});
            } else {
                audio.play();
                this.setState({
                    audio, playing: true, playingUrl: audioUrl
                });
            }
        }
    }

    render() {
        const {tracks} = this.props;
        return (
            <div>
                {tracks.map((track, k) => {
                    const trackImg = track.album.images[0].url;
                    console.log(track);
                    return (
                        <div
                            key={k}
                            className="track"
                            onClick={() => this.playAudio(track.preview_url)}
                        >
                            <div className="track_play">
                                <div className="track_play_inner">
                                    {
                                        (this.state.playingUrl === track.preview_url & this.state.playing)
                                            ? <span>&#9208;</span>
                                            : <span>&#9654;</span>
                                    }
                                </div>

                            </div>
                            <img 
                            src={trackImg} 
                            alt="track"
                            className="track_image"
                            />
                            <p className="track_text">
                                {track.name}
                            </p>
                        </div>
                    )
                    
                }
                )}
            </div>
        )
    }
}

export default Gallery;