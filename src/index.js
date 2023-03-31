import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const quoteUrl = 'https://api.quotable.io/random';
const colors = ["red" , "blue", "orange", "green", "pink", "salmon", "brown", "teal" ,"silver","purple","magenta"];

const  getQuote = async (e) =>{
  e.preventDefault();
  const response = await fetch(quoteUrl ,{mode:"cors"});
  response.json().then((val)=>{
    let text = document.getElementById("text");
    text.innerText = val.content;
    let author = document.getElementById("author");
    author.innerText = val.author;
    let color = colors[Math.floor(Math.random() * colors.length)];
    document.documentElement.style.setProperty('--color', color);
  })
  
  
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App click={getQuote} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
