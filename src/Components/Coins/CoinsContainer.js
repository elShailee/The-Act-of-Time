import React, { Component } from 'react';
import './CoinsContainer.css';
import CoinsButton from './CoinsButton';
import CoinsTab from './CoinsTab';

export default class CoinsContainer extends Component {
  state = {
    isCoinsTabsDisplayed: false,
  };

  render() {
    let coinsTab;
    let shouldCatchRandomClicksAsExits;
    if (this.state.isCoinsTabsDisplayed) {
      coinsTab = <CoinsTab />;
      shouldCatchRandomClicksAsExits = 'shouldCatchRandomClicksAsExits';
    }
    return (
      <div id="coinsContainer" className={shouldCatchRandomClicksAsExits}>
        <CoinsButton showOrHideCoinsTab={() => this.showOrHideCoinsTab()} />
        {coinsTab}
      </div>
    );
  }
}
