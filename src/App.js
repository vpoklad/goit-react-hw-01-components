// import './App.css';

import PaintingList from './components/PaintingsList';
import Section from './components/Section';
import paintings from './paintings.json';

function App() {
  return (
    <div>
      <Section title="hello">
        {' '}
        <PaintingList items={paintings} />{' '}
      </Section>
    </div>
  );
}

export default App;
