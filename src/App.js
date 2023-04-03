
import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
const App=()=> {
  const pageSize=5;
  const apiKey='bc6b77b86e5c4cae97ddad90ef5e7f8f';
  const[progress,setProgress]=useState(0)
   
 
    return (
      <div>
        <Router>
        <NavBar/>
        <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}        
      />
        <Routes>
        <Route path='/'  element={<News setProgress={setProgress} apiKey={apiKey}  key="General" pageSize={pageSize} country="in" category='General'/>}/>
        <Route path='/General'  element={<News setProgress={setProgress} apiKey={apiKey}  key="General" pageSize={pageSize} country="in" category='General'/>}/>
        <Route path='/Business'   element={<News setProgress={setProgress} apiKey={apiKey}  key="Business" pageSize={pageSize} country="in" category='Business'/>}/>
        <Route path='/Entertainment'   element={<News setProgress={setProgress} apiKey={apiKey}  key="Entertainment" pageSize={pageSize} country="in" category='Entertainment'/>}/>
        <Route path='/Health'   element={<News setProgress={setProgress} apiKey={apiKey}  key="Health" pageSize={pageSize} country="in" category='Health'/>}/>
        <Route path='/Science'   element={<News setProgress={setProgress} apiKey={apiKey}  key="Science" pageSize={pageSize} country="in" category='Science'/>}/>
        <Route path='/Sports'   element={<News setProgress={setProgress} apiKey={apiKey}  key="Sports" pageSize={pageSize} country="in" category='Sports'/>}/>
        <Route path='/Technology'   element={<News setProgress={setProgress} apiKey={apiKey}  key="Technology" pageSize={pageSize} country="in" category='Technology'/>}/>
       
        </Routes>
      
        </Router>
      
      </div>
      
    )
  }
  export default App;




