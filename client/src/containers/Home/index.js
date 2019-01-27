import React from 'react';
import H1 from '../../components/H1';

export default class Ingredients extends React.Component {
  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <H1>Выбор блюда</H1>
      );
  }
}