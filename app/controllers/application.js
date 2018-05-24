import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
export default Controller.extend({
  router: service(),
  breadCrumb: computed('router.currentRouteName', function() {
    const names = this.get('router.currentRouteName').split('.').filter((name) => name !== 'index');
    var path = '';
    return names.map((name) => {
      path = path.length == 0 ? name : path + '.' + name;
      return {
        name: name,
        path: path
      };
    });
  })
});
