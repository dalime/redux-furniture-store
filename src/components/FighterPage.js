import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFighters } from '../actions/FighterActions';

import FighterList from './FighterList';

@connect(
  state => ({
    fighters: state.fighters,
  }),
  dispatch => ({
    fetchFighters() {
      dispatch(fetchFighters());
    }
  })
)
export default class FighterPage extends Component {
  constructor() {
    super();
  }

  componentWillMount() {
    this.props.fetchFighters();
  }

  render() {
    let { fighters } = this.props;
    console.log ('fighters:', fighters);

    return (
      <div>
        <h1>Fighters</h1>
        <FighterList fighters={fighters}/>
      </div>
    )
  }
}
