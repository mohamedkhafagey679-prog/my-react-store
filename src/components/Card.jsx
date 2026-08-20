const Products = ({ card }) => {
  return (
    <div>
      {products.map((product, index) => {
        return (
          <div key={index}>
            <h1>Title: {product.title}</h1>
            <p>Desc: {product.desc}</p>
            <strong style={{ display: 'block' }}>Price: {product.price}</strong>
            <span>Rate: {product.rate}</span>
          </div>
        );
      })}
    </div>
  );
};

export default card;
