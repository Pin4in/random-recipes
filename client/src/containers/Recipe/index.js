import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

import H1 from '../../components/H1';

class Recipe extends React.Component {
  componentDidMount() {
    this.props.makeRecipe();
  }

  render() {
    console.log(this.props.randomRecipe)
    if (!this.props.randomRecipe) {
      return ('Тут ничего нет');
    }

    return (
      <div>
        <H1>Рецепт боула</H1>
        <h3>Основа</h3>
        {this.props.randomRecipe.base}
        <h3>Полезные жири</h3>
        {this.props.randomRecipe.fats}
        <h3>Для сытости</h3>
        {this.props.randomRecipe.fullness}
        <h3>Готовые овощи</h3>
        {this.props.randomRecipe.vagCooked}
        <h3>Свежие овощи</h3>
        {this.props.randomRecipe.vagFresh}
        
      </div>
      );
  }
}
function mapStateToProps(state) {
  return { randomRecipe: state.randomRecipe };
}

export default connect(mapStateToProps, actions)(Recipe);