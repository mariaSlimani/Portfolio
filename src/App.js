import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from './Container/Home';
import ConatctMe from './Container/ContactMe';
import Hobbies from './Container/Hobbies';
import Projects from './Container/Projects';
import Skills from './Container/Skills';
import Studies from './Container/Studies';
import WhatsNext from './Container/WhatsNext';
import WorkExp from './Container/WorkExp';
import NotFound from './Container/404';
function App() {
  return (
    
    <Router>
    <div className="App">
      <Routes>
        <Route
          caseSensitive={false}
          path="/accueil"
          element={<Home />}
        />
        <Route
          caseSensitive={false}
          path="/education"
          element={<Studies />}
        />
        <Route
          caseSensitive={false}
          path="/experience"
          element={<WorkExp />}
        />
        <Route
          caseSensitive={false}
          path="/projets"
          element={<Projects />}
        />
        <Route
          caseSensitive={false}
          path="/competences"
          element={<Skills />}
        />
        <Route
          caseSensitive={false}
          path="/interets"
          element={<Hobbies />}
        />
        <Route
          caseSensitive={false}
          path="/la-suite"
          element={<WhatsNext />}
        />
        <Route
          caseSensitive={false}
          path="/contactez-moi"
          element={<ConatctMe />}
        />
        <Route caseSensitive={false} path="/404" element={<NotFound />} />
        <Route path="" element={<Navigate replace to="/accueil" />} />
        <Route path="/" element={<Navigate replace to="/accueil" />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
