const React = require('react');
const GroupIndex = require('./group_index');
const SearchStore = require('../stores/search_store');
const SearchIndex = require('./search_index');
const SearchActions = require('../actions/search_actions');
const SessionStore = require('../stores/session_store');

const Splash = React.createClass({
  getInitialState() {
    return {query: "", searchObj: {}, loading: false, loggedIn: false};
  },

  componentDidMount() {
    this.storeListener = SearchStore.addListener(this.handleChange);
    this.sessionStoreListener = SessionStore.addListener(this._handleLogin);
  },

  componentWillUnmount() {
    this.storeListener.remove();
    this.sessionStoreListener.remove();
  },

  _handleLogin() {
    if (SessionStore.isUserLoggedIn()) {
      this.setState({loggedIn: true});
    } else {
      this.setState({loggedIn: false});
    }
  },

  handleChange() {
    this.setState({searchObj: SearchStore.results(), loading: SearchStore.loading()});
  },

  componentToRender() {
    if (this.state.query === "") {
      return <GroupIndex/>;
    } else if (!this.state.loading) {
      return <SearchIndex searchResults={this.state.searchObj} query={this.state.query}/>;
    } else {
      return (
        <li className="loading-container">
          <div className="loader">
            <div className="loader__bar"></div>
            <div className="loader__bar"></div>
            <div className="loader__bar"></div>
            <div className="loader__bar"></div>
            <div className="loader__bar"></div>
            <div className="loader__ball"></div>
          </div>
        </li>);
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
          <div className="search-bar-container">
            <input type="text" className="splash-page-search-bar" onChange={this._handleSearch} placeholder="Search Group, Event, and Users by Name"/>
          </div>
        </div>
        {this.componentToRender()}
      </div>
    );
  }
});

module.exports = Splash;
