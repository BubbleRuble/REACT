import ReactDOM from 'react-dom/client';
import App from './App'
import paintings from './paintings.json';


// const span1 = <span>Hello</span>
// const span2 = <span>world</span>
// const jsxElements = (
// <div>
//   {span1}
//   {span2}
// </div>
// );
// console.log(jsxElements)

// const root = ReactDOM.createRoot(document.getElementById('root')); <-- ТЕ ЯК ВИКОРИСТОВУВАТИ ReactDOM.render

// function Painting({ url, title, authorName, profileUrl, price }) {
//   return (
//     <div>
//       <img src={url} alt={title} width="480" />
//       <h2>{title}</h2>
//       <p>
//         Автор:<a href={profileUrl}>{authorName}</a>
//       </p>
//       <p>Ціна: {price} кредитів</p>
//       <p>Доступність: закінчується чи є у наявності</p>
//       <button type="button">Додати в кошик</button>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById('root'));

// const painting = paintings[1];

//  <Painting
//     url={painting.url}
//     title={painting.title}
//     authorName={painting.author.tag}
//     profileUrl={painting.author.url}
//     price={painting.price}
//   />

root.render(<App />);





// ========================================================
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
