import React, {useEffect, useState} from 'react';
import GoodsCard from "../goodsCard/GoodsCard";

function GoodsGallery() {
  const [goods, setGoods] = useState([]);
  useEffect(() => {
    fetch('https://dummyjson.com/products/category/sunglasses')
        .then(response => response.json())
        .then(data =>
            setGoods(data.products))
  }, []);
  return (
    <div className="container">
      <div className="row">
        {goods.slice(1, 10).map((good, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <GoodsCard photo={good.images[1] || good.images} name={good.title} price={good.price} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default GoodsGallery;