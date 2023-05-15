import './App.css';
import MovieComponent from './Component/MovieComponent';
function App() {
  const pets = [
    {
      name: 'Dolly',
      type: 'cat',
      description: 'DOlly is funny and loves to be aroung people',
      skills: ['fetch', 'play dead', 'roll over'],
      image: 'https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      name: 'Molly',
      type: 'cat',
      description: 'DOlly is sweet and cuddly  cat stretch a lot',
      skills: ['play dead', 'meow', 'purr'],
      image: 'https://images.unsplash.com/flagged/photo-1557427161-4701a0fa2f42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
    }
  ];
  return (
    <div className='App'>
     <MovieComponent />
    </div>
  )
}

export default App;
