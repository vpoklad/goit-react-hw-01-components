// import './App.css';

import user from './data/user.json';
import statisticalData from './data/statistic-data.json';

import Profile from './components/Profile/Profile';
import Section from './components/Section/Section';
import Statistics from './components/Statistics/Statistics';

function App() {
  return (
    <div>
      <Section title="Профиль социальной сети">
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>

      <Section title="Статистика">
        <Statistics title="Upload stats" stats={statisticalData} />
        <Statistics stats={statisticalData} />
      </Section>
    </div>
  );
}

export default App;
