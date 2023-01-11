import logo from './logo.svg';
import './App.css';
import HelloWorld from './Componentes/HelloWorld';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HelloWorld nome="Felipe" foto="https://scontent.fipn5-1.fna.fbcdn.net/v/t1.18169-9/12112052_927257803976398_2372817021969647818_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGboohSXLuraXVUCfJSoQ-MlBuhcisU1d-UG6FyKxTV31f_Jpo88MfqEtcBiIuOSRxPvtseBqsK5HaZP7LWA4cb&_nc_ohc=fNfJU18oAegAX9ekYXA&_nc_oc=AQkVSNAELJF_3JudnLaMJX5tXhwYz1_dNZoHRClW0slU3dHDbM5aMwyTG6I51t4xoyQ&_nc_ht=scontent.fipn5-1.fna&oh=00_AfDQcWWQs1f0Ej7-pb8sI-rz0CKZVGd0zGxM1UN1dS5vrw&oe=63E25121"/>
        <HelloWorld nome="Gislene" foto="https://scontent.fipn5-1.fna.fbcdn.net/v/t1.6435-9/125402112_3431908600263036_4850061799940056107_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGQnLZhUra6SIXmktY_HJHRF4Rr-43lHAcXhGv7jeUcBx3ii1aycUz-txwpUrNepYaU-RuUhSYA-egEbJSgUSl9&_nc_ohc=1pvB4Pled5EAX_KG7cj&_nc_ht=scontent.fipn5-1.fna&oh=00_AfAwcryppZ_h20RHtKn-xJFDrcv059Q9aQF0AWoQmyzdwQ&oe=63E241CD"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
