describe('example test', function() {
    it('should be true', function() {
        expect('foo').toBe('foo');
    });
});

describe('MainController', function() {
  beforeEach(module('app'));
  
  var $controller;

  beforeEach(inject(function(_$controller_) {
    $controller = _$controller_;
  }));

  it('should have Steve Jobs name', function() {
    var $scope = {};
    var controller = $controller('MainController', { $scope: $scope});
    expect(controller.name).toEqual('Steve Jobs')
  })
});