const React = require('react');
const GroupIndex = require('./group_index');
const SearchStore = require('../stores/search_store');
const SearchIndex = require('./search_index');
const SearchActions = require('../actions/search_actions');

const Splash = React.createClass({
  getInitialState() {
    return {query: "", searchObj: {}};
  },

  componentDidMount() {
    this.storeListener = SearchStore.addListener(this.handleChange);
  },

  componentWillUnmount() {
    this.storeListener.remove();
  },

  handleChange() {
    this.setState({searchObj: SearchStore.results()});
  },

  componentToRender() {
    if (this.state.query === "") {
      return <GroupIndex/>;
    } else {
      return <SearchIndex searchResults={this.state.searchObj} />;
    }
  },

  _handleSearch(e) {
    this.setState({query: e.currentTarget.value}, this.fireSearch);
  },

  fireSearch() {
    SearchActions.fetchSearch(this.state.query);
  },


  render() {
    return(
      <div id="splash-page">
        <div className="splash-pic-container">
          <input type="text" className="splash-page-search-bar" onChange={this._handleSearch} placeholder="Search Site"/>
        </div>
        {this.componentToRender()}
      </div>
    );
  }
});

module.exports = Splash;
