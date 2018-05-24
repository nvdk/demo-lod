import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | datasets/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:datasets/index');
    assert.ok(route);
  });
});
