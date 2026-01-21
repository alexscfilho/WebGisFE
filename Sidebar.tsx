export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>WebGIS Ambiental</h2>

      <div className="card">
        <label>Propriedade</label>
        <select>
          <option>Fazenda Exemplo</option>
        </select>
      </div>

      <div className="card">
        <label>Upload Geoespacial</label>
        <input type="file" />
        <small>KML, KMZ, GeoJSON, Shapefile (.zip)</small>
      </div>

      <div className="card">
        <button className="primary">
          Gerar Book (PDF)
        </button>
      </div>
    </aside>
  );
}
