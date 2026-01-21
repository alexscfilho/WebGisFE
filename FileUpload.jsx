export default function FileUpload() {
  return (
    <div className="card">
      <h3>Upload Geoespacial</h3>
      <input type="file" multiple />
      <small>KML, KMZ, GeoJSON, Shapefile (.zip)</small>
    </div>
  )
}
