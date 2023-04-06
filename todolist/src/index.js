import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Edit from './components/Edit';
import { Provider } from 'react-redux';
import store from './store/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Provider store={store}>
    <BrowserRouter>
   
    <Routes>
      <Route index element={  <App />}/>
      <Route path="/Edit/:id" element={<Edit/>}/>
      
    </Routes>
    
    </BrowserRouter>
    </Provider>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
