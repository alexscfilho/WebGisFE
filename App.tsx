import Sidebar from "./components/Sidebar.tsx";
import MapView from "./components/MapView";
import "./styles/layout.css";

export default function App() {
  return (
    <div className="app">
      <Sidebar />

      <main className="main">
        <div className="map-card">
          <MapView />
        </div>
      </main>
    </div>
  );
}
