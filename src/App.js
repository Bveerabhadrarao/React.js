import logo from './logo.svg';
import './App.css';
import CompA from './CompA';
import CompB from './CompB';
import CompC from './CompC';
import CompD from './CompD';
import Image from './image';
import Person from './person';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Trainees from './Trainees';
import Trainees1 from './Trainees1';
import Cssstyles from './cssstyles';
import Clicks from './clicks';
import Imageover from './Imageover';
import Hooks from './hooks';
import Task from './task';
import Task2 from './task2';
import ImageSliding from './imagesliding';
import Calculator from './calculator';
import Form from './form';
import Newform from './newform';
import Courses from './courses';
import Datalist from './getdata';
import Editform from './editform';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/CompA' element={<CompA/>}/>
        <Route path='/CompB' element={<CompB/>}/>
        <Route path='/CompC' element={<CompC/>}/>
        {/* <Route path='/CompC' element={<CompC/>}/> */}
        <Route path='/CompD' element={<CompD/>}/>
        <Route path='/Image' element={<Image/>}/>
        <Route path='/Trainees' element={<Trainees/>}/>
        <Route path='/Trainees1' element={<Trainees1/>}/>
        <Route path='/Cssstyles' element={<Cssstyles/>}/>
        <Route path='/Clicks' element={<Clicks/>}/>
        <Route path='/Imageover' element={<Imageover/>}/>
        <Route path='/Hooks'element={<Hooks/>}/>
        <Route path='/Task' element={<Task/>}/>
        <Route path='/Task2' element={<Task2/>}/>
        <Route path='/ImageSliding' element={<ImageSliding/>}/>
        <Route path='/Calculator' element={<Calculator/>}/>
        <Route path='/Form' element={<Form/>}/>
        <Route path='/Editform' element={<Editform/>}/>
        <Route path='/Newform' element={<Newform/>}/>
        <Route path='/Courses' element={<Courses/>}/>
        <Route path='/Person' element={<Person name="veera" and is an rollno="12345"/>}/>
        <Route path='/datalist' element={<Datalist/>}/>

      </Routes>
      </BrowserRouter>
      {/* <h1>Hello Wrold</h1> */}
      {/* <CompA/>
      <CompB/>
      <CompC/>
      <CompD/>
      <Image/> 
       <Person name="bhadrarao" rollno="1234"/> */}
    </div>
  );
}

export default App;
