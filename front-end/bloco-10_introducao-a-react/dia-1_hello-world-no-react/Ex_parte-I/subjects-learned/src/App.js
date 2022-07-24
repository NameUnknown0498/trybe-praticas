import './App.css';
import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

class App extends React.Component {
  render () {
    return (
      <main>
        <Header/>
        <Content/>
        <Footer/>
      </main>
    )
  };
}

export default App;