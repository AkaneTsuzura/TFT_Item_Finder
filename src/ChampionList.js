import React from 'react';
import champions from './assets/champions';

function ChampionList() {
  const champArray = champions.map(ChampionItem);
  return (
    <div class="list-group">
      {champArray}
    </div>
  );
}

function ChampionItem(c) {
  // This creates a list of the traits of the champion
  const traitList = c.traits.map((trait) => <small class="d-block">{trait}</small>);

  return (
    <div class="list-group-item list-group-item-action">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">{c.champion}</h5>
        <small>{c.cost}</small>
      </div>
      {traitList}
    </div>
  );
}

export default ChampionList;