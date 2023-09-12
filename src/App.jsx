import Header from "../components/Header";
import Entry from "../components/Entry";
import entries from "../components/entries";
import Login from "../components/Login";
import "./App.css";
import Navbar from "../components/Navbar";

const createEntry = (entry) => {
  return (
    <Entry
      key={entry.id}
      emoji={entry.emoji}
      name={entry.name}
      meaning={entry.meaning}
    />
  );
};

let isLoggedIn = false;

const App = () => {
  // Group entries into rows with 3 columns each
  const rows = [];
  for (let i = 0; i < entries.length; i += 3) {
    const rowEntries = entries.slice(i, i + 3);
    rows.push(
      <div className="row" key={i}>
        {rowEntries.map(createEntry)}
      </div>
    );
  }

  return (
    <div className="another">
      {/* <Navbar /> */}
      <Header />
      <div className="containers">{rows}</div>

      {/* {isLoggedIn? <h1>Welcome to the future</h1> : <Login />} */}
    </div>
  );
};

export default App;
