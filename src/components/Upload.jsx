import React, { Component } from 'react';
import Nav from './Nav';

class Upload extends Component {

    uploadWidget = () => {
        window.cloudinary.openUploadWidget(
            {
                cloud_name: 'cloud_name',
                upload_preset: '<unsigned-preset>',
                tags: ['minishare'],
                sources: ['local', 'url', 'google_photos', 'facebook', 'image_search']
            },
             (error, result) => {
                console.log("This is the result of the last upload", result);
            });
    }    

    render() {

        return (
            <div>
                <Nav />
                <h3 className="text-center"> Upload your videos on MiniShare </h3>
                <hr />

                <div className="col-sm-12">
                    <div className="jumbotron text-center">
                        <button onClick={this.uploadWidget()} className="btn btn-lg btn-info">Upload video</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Upload;