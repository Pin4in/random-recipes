import React from 'react';
import { connect } from 'react-redux';

import H1 from '../../components/H1';
import IngredientsList from './IngredientsList';
import * as actions from '../../store/actions/index';


class Ingredients extends React.Component {
  componentDidMount() {
    this.props.fetchIngredients();
  }
  onSelect(id) {
    this.props.selectIngredient(id);
  }

  render() {
    if (!this.props.ingredients) return (<div>loading</div>)

    return (
      <div>
        <H1>Выбор ингредиентов</H1>
        <IngredientsList items={this.props.ingredients} onSelect={this.onSelect.bind(this)}></IngredientsList>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { ingredients: state.ingredients };
}

export default connect(mapStateToProps, actions)(Ingredients);