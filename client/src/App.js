import logo from './logo.svg';
import './App.css';

function App({ socket }) {
  socket.on('game::start', () => {
    console.log('Game started !')
  })

  function join(game) {
    socket.emit('game::join', { game })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button onClick={() => join('WordAndFurious') }> Join WordAndFurious </button>
    </div>
  );
}

export default App;
