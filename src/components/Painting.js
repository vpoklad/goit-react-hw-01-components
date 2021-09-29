import PropTypes from 'prop-types';

export default function Painting({
  imageURL,
  title,
  price,
  author,
  authorURL,
  quantity,
}) {
  return (
    <div>
      <img src={imageURL} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Автор: <a href={authorURL}>{author}</a>
      </p>
      <p>Цена:{price} кредитов</p>
      <p>Доступность: {quantity < 10 ? 'заканчивается' : 'есть в наличии'} </p>
      <button type="button">Добавить в корзину</button>
    </div>
  );
}

Painting.propTypes = {
  quantity: PropTypes.number,
  imageURL: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  author: PropTypes.string,
  authorURL: PropTypes.string,
};
