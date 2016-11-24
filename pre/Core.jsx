var React = require('react');
var Helmet = require('react-helmet');
var Link = require('react-router').Link;

module.exports = React.createClass({
  render: function(){
    return(
      <div id="NooBoss-Core">
        <nav>
          <ul>
            <li><Link to="/pupup.html">Home</Link></li>
            <li><Link to="/related">Related</Link></li>
            <li><Link to="/manage">Manage</Link></li>
            <li><Link to="/update">Update</Link></li>
          </ul>
        </nav>
        <Helmet
          title="NooBoss"
        />
        {this.props.children}
        <div>
          <ul>
            <li><Link to="/options">Options</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>
      </div>
    );
  }
});
