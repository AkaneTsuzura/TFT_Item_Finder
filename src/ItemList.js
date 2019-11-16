import React from 'react';
import items from './assets/items';

function ItemList() {
  const itemArray = items.map(itemItem);
  return (
    <div class="list-group">
      {itemArray}
    </div>
  );
}


export default ChampionList;