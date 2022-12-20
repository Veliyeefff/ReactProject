import './App.css';
import Header from './Components/Header'
import Orange_Side from './Components/Orange_Side';
import Service from './Components/Service';
import Cards from './Components/Cards';
import Find from './Components/Find';
import Input from './Components/Input';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Orange_Side></Orange_Side>
      <Service></Service>
      <Cards></Cards>
      <Find></Find>
      <Input></Input>
      <Footer></Footer>
    </div>
  );
}

export default App;
