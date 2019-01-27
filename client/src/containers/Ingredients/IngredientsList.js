import React from 'react';
import Button from '../../components/Button';


export default class IngredientsList extends React.Component {
  render() {
    if (this.props.items.length < 1) return ('Нет игредиентов');

    const ingredients = this.props.items.map(item => {
      return (
        <li key={item.id}>
          <Button onClick={() => {this.props.onSelect(item.id)}} className={item.active ? 'active' : ''}>{item.text}</Button>
        </li>
      );
    })

    return (<ul className='ingredientsList'>{ingredients}</ul>);
  }
}


