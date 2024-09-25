import './App.css';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>davangere</h1>
        <p>your prefferd store</p>
      
      
        <Profile firstname="chandana" lastname="hr"  />
        </header>
        <main>
          
        <Home></Home>
     </main>
    </div>
  );
}

export default App;
