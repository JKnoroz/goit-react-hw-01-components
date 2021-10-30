import Profile from './components/social-profile/profile';
import user from './data/user.json';

import Statistics from './components/statistics/statistics';
import statisticalData from './data/statistical-data.json';

import './App.css';

function App() {
  return (
    <div className="App">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
    </div>
  );
}

export default App;
