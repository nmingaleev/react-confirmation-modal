import './App.css';

import { useModal } from './modal/useModal';

function App() {
  const { open } = useModal();

  const onClick = async () => {
    const result = await open({
      header: <h3>Do you like the article?</h3>,
      content: (
        <div>
          <p>Followe me on Medium and clap the Article!</p>
        </div>
      ),
      confirmText: 'Of Course :)',
      rejectText: 'No :(',
    });
    
    console.log(result ? 'Confirmed' : 'Rejected');
  }

  return (
    <div className="App">
      <button onClick={onClick}>Confirm popup</button>
    </div>
  );
}

export default App;
