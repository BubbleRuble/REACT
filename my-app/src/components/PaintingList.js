import Painting from './painting_TEMP';

function PaintingList({items}) {
  return (
  <ul>
    {items.map(item => ( 
      <li key={item.id}>
        <Painting
          imageUrl={item.url}
          title={item.title}
          author={item.author.tag}
          profileUrl={item.author.url}
          price={item.price}
          quantity={item.quantity}
        />
      </li>
    ))}
  </ul>
  );
}

export default PaintingList;
