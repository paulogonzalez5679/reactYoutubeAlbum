import React from "react";
import axios from 'axios';

const VideoDetail = ({ video }) => {
  
  // app.get('/cors', (req, res) => {
  //   res.set('Access-Control-Allow-Origin', '*');
  //   res.send({ "msg": "This has CORS enabled 🎈" })
  //   })
 const data= axios.get('https://g7shr1rha6.execute-api.us-east-1.amazonaws.com/default/servelesssAppFunction', {}).then(function (response) {console.log(response);})

  if (!video) {
    //recuperar de la base de datos
    return (
      <div>
       
      </div>
    );
  }

  const videoId = video.id.videoId;
  //const url = "https://www.youtube.com/embed/" + videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} />
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;