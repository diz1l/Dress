import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Categories, SortPopup, DressBlock, LoadingBlock } from '../components';

import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchDresss } from '../redux/actions/dresss';
import { addDressToCart } from '../redux/actions/cart';

const categoryNames = ['Топы', 'Свитеры', 'Платья', 'Юбки', 'Брюки',];
const sortIems = [
  { name: 'популярности', type: 'popular', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавит', type: 'name', order: 'asc' },
];

function Home() {

  const dispatch = useDispatch();
  const items = useSelector(({ dress }) => dress.items);
  const cartItems = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({ dress }) => dress.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters); 

  React.useEffect(() => {
    dispatch(fetchDresss(sortBy, category));
  }, [category, sortBy]);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  const handleAddDressToCart = (obj) => {
    dispatch({
      type: 'ADD_DRESS_CART',
      payload: obj,
    });
  };

  return (
    <div className="container">
          <div className="content__top">

          <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={categoryNames}
        />
            <SortPopup
          activeSortType={sortBy.type}
          items={sortIems}
          onClickSortType={onSelectSortType}
        />

          </div>
          <h2 className="content__title">Вся Колекция</h2>
          <div className="content__items">

          {isLoaded
          ? items.map((obj) => (
              <DressBlock
                onClickAddDress={handleAddDressToCart}
                key={obj.id}
                addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
                {...obj}
              />
            ))
          : Array(12)
              .fill(0)
              .map((_, index) => <LoadingBlock key={index} />)}

        </div>
        </div>
  )
}

export default Home


