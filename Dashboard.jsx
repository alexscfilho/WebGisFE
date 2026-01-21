import PropertySelector from '../components/PropertySelector'
import FileUpload from '../components/FileUpload'
import MapView from '../components/MapView'
import AnalysisPanel from '../components/AnalysisPanel'
import ReportButton from '../components/ReportButton'

export default function Dashboard() {
  return (
    <div className="layout">
      <aside className="sidebar">
        <PropertySelector />
        <FileUpload />
        <AnalysisPanel />
        <ReportButton />
      </aside>

      <main className="map-area">
        <MapView />
      </main>
    </div>
  )
}
