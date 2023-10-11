import React from 'react'
import '../styles/App.css';
import NavigationBar from './NavigationBar';
import Registration from './RegistrationForm';
import LoginForm from './LoginForm';
import Home from './Home';
 import ContentDetails from './ContentDetails';
const App = () => {

  return (
    <div id="main">
      <NavigationBar />
      <Registration />
      <LoginForm />
      {/* <Home /> */}
      <ContentDetails />
      
    </div>
  )
}


export default App;
