import React, { Component } from 'react';
import Nav from './Nav';
import { CloudinaryContext, Video } from 'cloudinary-react';
import axios from 'axios';
import { Share } from 'react-twitter-widgets'

class Display extends Component {

    state = {
        videos: []
    }

    getVideos(){
        axios.get('http://res.cloudinary.com/unicodeveloper/video/list/miniflix.json')
        .then( res => {
            this.setState({ videos: res.data.resources});
        }).catch(err => {
            console.log("Error occured", err);
        })
    }

    componentDidMount(){
        this.getVideos();
    }

    render() {

        const { videos } = this.state;

        return (
            <div>
                <Nav />
                <h3 className="text-center"> Latest uploaded videos </h3>
                <hr/>

                <div className="col-sm-12">
                    <CloudinaryContext cloudName="unicodeveloper">
                        {
                            videos.map((data, index) => (
                            <div className="col-sm-4" key={index}>
                                <div className="embed-responsive embed-responsive-4by3">
                                    <Video publicId={data.public_id} width="300" height="300" controls></Video>
                                </div>
                                <div> Created at {data.created_at} </div>
                                <Share url={`http://res.cloudinary.com/unicodeveloper/video/upload/${data.public_id}.mp4`} />
                            </div>
                        ))
                        }
                    </CloudinaryContext>
                </div>
            </div>
        )
    }
}

export default Display;