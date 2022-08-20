
import './App.css';

/* import EmojiItem from './components/EmojiItem'; */
import EmojisContainer from './components/EmojisContainer';
import Header from './components/Header';



function App() {
  return (
    <div className="App">
      {/* <h1>React Search Emoji</h1> */}
      <Header />
      <EmojisContainer />
    </div>
  );
}

export default App;
