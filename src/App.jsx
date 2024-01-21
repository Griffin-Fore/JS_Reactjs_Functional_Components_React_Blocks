// Needs Components Folder
// Needs css folder
// App /
// Inside App:
// Header /
  // Header css /
// Navigation /
  // Navigation css /
// Maincontent /
  // Maincontent css /
  // Subcontent x 3 /
    // Subcontent css /
  // Advetisement /
    // Advertisement css /
// Import components:
import './App.css'
import Header from './components/Header'
import Navigation from './components/Navigation'
import MainContent from './components/MainContent'
function App() {
  return (
    <div className="appBorderStyle">
      {/* Use the components */}
      <Header />
      <div className="appItemsStyle">
        <Navigation />
        <MainContent />
      </div>
    </div>
  )
}

export default App
