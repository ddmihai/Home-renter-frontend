import './App.css';
import Header from './Components/Header/Header';
import { UserProvider } from './Context/userContext';
import RouterConfig from './RouterConfig/RouterConfig';

function App() {
  return (
    <UserProvider>

      <main className="App">
        <Header />
        <RouterConfig />
      </main>

    </UserProvider>
  );
}

export default App;
