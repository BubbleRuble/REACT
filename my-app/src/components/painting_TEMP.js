import PropTypes from 'prop-types';
import defaultImage from './default-image.webp';

export default function Painting({
  imageUrl = defaultImage,
  title,
  authorName = 'John Doe',
  profileUrl,
  price,
}) {
  return (
    <div>
      <img src={imageUrl} alt={title} width="480" />
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

Painting.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  authorName: PropTypes.string,
  profileUrl: PropTypes.string,
  price: PropTypes.string,
};
