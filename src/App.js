import "./styles/App.css";
import { Navbar, Sidebar } from "./components";
import { AppRoutes } from "./routes/AppRoutes";

function App() {
  return (
    <>
      <Navbar />
      <div className="main-template">
        <Sidebar />
        <div className="notes-section">
          <AppRoutes />
        </div>
      </div>
    </>
  );
}

export default App;
