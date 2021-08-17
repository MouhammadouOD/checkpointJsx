
import './App.css';
import './style.css';
import myWonderfulImage from "./imageInSrc.png";

function App() {
  return (
    <div style={{border:"solid 1px black" ,maxWidth:'100vw'}}>

      <h1 className="title red">Mouhammadou Oury Diallo</h1>

      <br></br>

      <img src={myWonderfulImage} alt="img1" ></img>

      <br></br> <br></br>

      <img src="imageInPublic.png" alt="img2"></img>


      <video width="320" height="240" controls>

      <source src="myVideo.mp4" type="video/mp4" ></source>

      </video>

    </div>
  );
}

export default App;
