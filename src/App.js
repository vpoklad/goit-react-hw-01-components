// import './App.css';

import user from './components/Profile/user.json';
import statisticalData from './components/Statistics/statistic-data.json';
import friends from './components/FriendList/friends.json';
import transactions from './components/TransactionHistory/transactions.json';

import Profile from './components/Profile/Profile';
import Section from './components/Section/Section';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

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

      <Section title="Список друзей">
        <FriendList friends={friends} />
      </Section>

      <Section title="Список транзакций">
        <TransactionHistory items={transactions} />
      </Section>
    </div>
  );
}

export default App;
