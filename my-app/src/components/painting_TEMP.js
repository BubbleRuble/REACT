export default function Painting({ url, title, authorName = 'John Doe', profileUrl, price }) {
  return (
    <div>
      <img src={url} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Автор:<a href={profileUrl}>{authorName}</a>
      </p>
      <p>Ціна: {price} кредитів</p>
      <p>Доступність: закінчується чи є у наявності</p>
      <button type="button">Додати в кошик</button>
    </div>
  );
}