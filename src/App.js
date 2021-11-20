import './App.css';
// import SomeClassComponent from './components/SomeClassComponent';
// import PropsComponent from './components/PropsComponent';
// import PersonCard from './components/PersonCard';
import PersonCard1 from './components/PersonCard1';
function App() {


  
return (
    <div className="App">
      <>
      <PersonCard1 lastName = "Doe" firstName = "Jane" age = {45} hairColor = "Black" />
      <PersonCard1 lastName = "Smith" firstName = "John" age = {88} hairColor = "Brown" />
      <PersonCard1 lastName = "Fillmore" firstName = "Millard" age = {50} hairColor = "Brown" />
      <PersonCard1 lastName = "Smith" firstName = "Maria" age = {62} hairColor = "Brown" />
      </>
    </div>
  );
}

export default App;
