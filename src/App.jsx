import './App.css'
import logo_red from './assets/logo_red.png'
import home_graphic from './assets/home_graphic.png'
import Header from './components/Header'

function App() {

  return (
    <>
      <Header/>
      <main>
        <div className="pageContainer">
          <div className="homepageLeft">
            <div className="infoOverview">
              <img src={logo_red} alt="Carroline Norris Logo" />
              <h2>Caroline Condon</h2>
              <h3>Recruitment</h3>
              <p>Office: +44 (0)207 183 6535</p>
              <p>Mobile: +44 (0)7909 722109</p>
              <p>Email: caroline@caroline-condon.com</p>
            </div>
          </div>
          <div className="homeGraphic">
            <img src={home_graphic} alt="Chef Graphic" />
          </div>
        </div>
      </main>
      <div className="copyright">
        <p>© Caroline Condon 2025</p>
      </div>
    </>
  )
}

export default App
