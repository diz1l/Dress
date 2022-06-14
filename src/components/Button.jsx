import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({ onClick, className, outline, children }) => {
  return (
    <button
      onClick={onClick}
      className={classNames('button', className, {
        'button--outline': outline,
      })}>
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
};

// экспортировали файл что бы использовать его в другs файле 
export default Button;


// из библиотеки реакт нужно вытащить класс компонент для получения параметров.

// class Button extends React.Component {
//     // метод который возвращает батон
// render() {
//     // проверка условия
//     return <button className={className('button', 
//     {
//         'button--outline' : this.props.outline,
//     },
//     )}>
//         {this.props.children}
//     </button>;
// }   
// }


