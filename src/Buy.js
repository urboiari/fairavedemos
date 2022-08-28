// Component for the buy button on a Focus page
import Paragraph from './Paragraph';
import React from 'react';

const Buy = (prop) => {
  const price = prop.num.toString();
  return (
    <div className='buy'>
      <p>Reserve Price</p>
      <div className='price'>
        <Paragraph text={price + ' eth'}></Paragraph>
      </div>
    </div>
  );
};

export default Buy;
