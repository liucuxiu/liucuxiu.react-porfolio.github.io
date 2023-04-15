import  ReactDOM  from 'react-dom/client';
import React from 'react'
import SideBar from './components/SideBar/SideBar';
import Content from './components/Content/Content';
import './styles/style.css';

const App = () => {
  return (
    <div className="wrapper">
      <SideBar/>
      <Content/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);