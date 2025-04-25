import './App.css';
import Table from './Components/Table/Table';
import WebSocketSim from './WebSocketSim';
import 'primereact/resources/themes/lara-light-indigo/theme.css'; 
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';



function App() {
  

  return (
    <>
      <div className='page'>
        <div className='nav w-100 mb-5'>
            <Navbar className="bg-body-tertiary w-100" bg="dark" data-bs-theme="dark">
            <Container>
              <Navbar.Brand  href="#home">XivTech</Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-center">
                <Navbar.Text>
                  <p className='m-0 fs-5 text-light'>Real-Time Crypto Price Tracker</p>
                </Navbar.Text>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        <WebSocketSim />
        <Table />
      </div>
    </>
  )
}

export default App
