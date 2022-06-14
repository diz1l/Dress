import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../Button';

function DressBlock({ id, name, opis, imageUrl, price, types, sizes, onClickAddDress, addedCount }) {
  const availableTypes = ['доставка', 'Самовывоз'];
  const availableSizes = ["S", "M" , "L"];

  const [activeType, setActiveType] = React.useState(types[0]);
  const [activeSize, setActiveSize] = React.useState(0);

  const onSelectType = (index) => {
    setActiveType(index);
  };

  const onSelectSize = (index) => {
    setActiveSize(index);
  };

  const onAddDress = () => {
    const obj = {
      id,
      name,
      opis,
      imageUrl,
      price,
      size: availableSizes[activeSize],
      type: availableTypes[activeType],
    };
    onClickAddDress(obj);
  };

  return (
    <div className='dress-block-wrapper'>
      <div className="dress-block">
      <img className="dress-block__image" src={imageUrl} alt="Dress" />
      <h4 className="dress-block__title">{name}</h4>
      <h5 className="dress-block__opis">{opis}</h5>
      <div className="dress-block__selector">
        <ul>
          {availableTypes.map((type, index) => (
            <li
              key={type}
              onClick={() => onSelectType(index)}
              className={classNames({
                active: activeType === index,
                disabled: !types.includes(index),
              })}>
              {type}
            </li>
          ))}
        </ul>
        <ul>
          {availableSizes.map((size, index) => (
            <li
              key={size}
              onClick={() => onSelectSize(index)}
              className={classNames({
                active: activeSize === index,
                disabled: !sizes.includes(size),
              })}>
              {size}
            </li>
          ))}
        </ul>
      </div>
      <div className="dress-block__bottom">
        <div className="dress-block__price">от {price} Тенге</div>
        <Button onClick={onAddDress} className="button--add" outline>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          {addedCount && <i>{addedCount}</i>}
        </Button>
      </div>
    </div>
    </div>
  );
}

DressBlock.propTypes = {
  name: PropTypes.string,
  opis: PropTypes.string,
  imageUrl: PropTypes.string,
  price: PropTypes.number,
  types: PropTypes.arrayOf(PropTypes.number),
  sizes: PropTypes.arrayOf(PropTypes.number),
  onClickAddDress: PropTypes.func,
  addedCount: PropTypes.number,
};

DressBlock.defaultProps = {
  name: '---',
  opis: '---',
  price: 0,
  types: [],
  sizes: [],
};

export default DressBlock;