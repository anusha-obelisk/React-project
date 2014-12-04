'use strict';

describe('Main', function () {
  var MyNewProjectApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    MyNewProjectApp = require('../../../src/scripts/components/MyNewProjectApp.jsx');
    component = MyNewProjectApp();
  });

  it('should create a new instance of MyNewProjectApp', function () {
    expect(component).toBeDefined();
  });
});
