import './InstitutionalMovieComponent.css';
import React, { Component } from 'react';

class InstitutionalMovieComponent extends Component {


    render() {

        return (
            <div className="col-md-8 col-md-offset-2">
                <div className="video-container effect7" >
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/0fWPhRDnb6U"
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                </div>
            </div>
        )
    }

}

export default InstitutionalMovieComponent;
