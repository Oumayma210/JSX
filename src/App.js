import './App.css';
import R from './R.jfif'
function App() {
  return (
    <div className="Ouma">
      <div className="oua"style={{border:'solid 1px black',maxWidth:'80vw'}}>
        <h1 className="titlered">Graphene battery</h1>
        <br />
        <img src={R} width='500px' height='250px' />
        <br />
        <img src="./images/oumayma.jpg" alt='' width='500px' height='250px' />
        </div>
        <video width="520" height="420" controls>
          <source src="./battery.mp4" type="video/mp4" />
          </video>
    </div>
  );
}
export default App;