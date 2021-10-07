// import './App.css';

import user from './data/user.json';
import Profile from './components/Profile/Profile';
import Section from './components/Section/Section';

function App() {
  return (
    <div>
      <Section title="hello">
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>
    </div>
  );
}

export default App;
