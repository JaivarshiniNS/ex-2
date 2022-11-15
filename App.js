import pic from './Images/images.jfif';
import './App.css';
import './Style.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <center>
          <h1>Exercise 2</h1>
          <h1>card view </h1>
      <div class="cards">
    <article class="card">
        <header>
            <h2>ROSE QUOTES</h2>
        </header>    
        <center>
        <img src={pic} alt="logo"/>
        </center>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><div class="content"><p>1.The more you love roses the more you must bear with thorns.</p>
        <p>2.Roses do not bloom hurriedly; for beauty, like any masterpiece, takes time to blossom.</p>
        <p>3.If you enjoy the fragrance of a rose, you must accept the thorns which it bears.</p>
            <footer>
        <button className='button'>To be continue</button>
        </footer>
        <br></br>
        </div>
            
    </article>           
   
</div>
            
</center>
<br></br>
<br></br>
      </header>
    </div>
  );
}

export default App;







