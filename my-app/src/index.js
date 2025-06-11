import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import React from 'react';
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

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// const painting = paintings[1];

//  <Painting
//     url={painting.url}
//     title={painting.title}
//     authorName={painting.author.tag}
//     profileUrl={painting.author.url}
//     price={painting.price}
//   />




