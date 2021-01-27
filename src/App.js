import './App.css';
import { Router, Link, navigate } from '@reach/router';
import PageOne from './components/Page1'
import PageTwo from './components/Page2'
import PageThree from './components/Page3'
import PageFour from './components/Page4'


function App() {

  const goPageHome = (e) => {
    navigate('/Home');
  }
  const goPageHello = (e) => {
    navigate('/:word');
  }
  const goPageId = (e) => {
    navigate('/:id');
  }
  const goPageFour = (e) => {
    navigate('/:id/:color/:background');
  }


  return (
    <div className="App">
      <h1>Welcome to App.js page</h1>
        {/* only one can be active at a time depending on URL state */}
      <Link to='/Home'>Page 1 Home</Link> | <Link to='/:word'>page 2 Word</Link> <br/>
      <Link to='/:id'>page 3 ID</Link> | <Link to='/:id/:color/:background'>page4 color</Link> <br/>
      
      <button onClick={goPageHome}>go to Page Home</button> | <nr/>
      <button onClick={goPageHello}>go to Page Word</button> | <nr/>
      <button onClick={goPageId}>go to Page Id</button> | <nr/>
      <button onClick={goPageFour}>go to Page 4</button> 

      <Router>
        <PageOne path='/Home'/>
        <PageTwo path='/:word'/>
        <PageThree path='/:id'/>
        <PageFour path='/:word/:color/:background'/>
      </Router>
    </div>
  );
}

export default App;
