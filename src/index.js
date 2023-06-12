import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import { App } from './App';
// import axios from 'axios';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


// fetch("https://randomuser.me/api/")
//     .then((response) => {
//         response.json().then(jsonresponse => {
//             console.log(jsonresponse);
//         });
//     })
//     .catch((error) => { });
// console.log("End of Code");
// axios("https://randomuser.me/api/").then(jsonresponse => {
//     console.log(jsonresponse.data);
// }).catch(error => {
//     console.log(error);
// });
// console.log("End of Code");

// async function req() {
//     const jsonresponse = await axios("https://randomuser.me/api/");
//     console.log(jsonresponse.data);
// }

// req();

console.log("End of Code");