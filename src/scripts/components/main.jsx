/** @jsx React.DOM */

var MyNewProjectApp = require('./MyNewProjectApp');
var React = require('react');
var {DefaultRoute, Route, Routes} = require('react-router');

React.renderComponent((
  <Routes location="history">
    <Route path="/" handler={MyNewProjectApp}>
    </Route>
  </Routes>
), document.getElementById('content'));
