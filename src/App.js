import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './components/Header'
import Section from './components/Section'
import Footer from './components/Footer'
import { ContextProvider } from './components/context/Context'

function App() {
  return (
     <div className="App">
      <ContextProvider>
        <div>
          <Router>
            <Header />
            <Section />
            <Footer />
          </Router>
        </div>
      </ContextProvider>
    </div>
  );
}
export default App;
