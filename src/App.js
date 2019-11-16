import React from 'react';
import ChampionList from './ChampionList';
import ItemList from './ItemList';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1
    };

    this.goToPage = this.goToPage.bind(this);
  }

  goToPage(page) {
    this.setState(state => ({
      page: page
    }));
  }

  render() {
    let page;

    switch (this.state.page) {
      case 1:
        page = <ChampionList />;
        break;
      case 2:
        page = <ItemList />;
        break;
      case 3:
        page = <h1>Page 3</h1>;
        break;

      default:
        page = <h1>ERROR</h1>;
        break;
    }

    return (
      <div className="App container">
        <button onClick={this.goToPage.bind(this, 1)}>Page 1</button>
        <button onClick={this.goToPage.bind(this, 2)}>Page 2</button>
        <button onClick={this.goToPage.bind(this, 3)}>Page 3</button>
        {page}
      </div>
    );
  }
}

export default App;
