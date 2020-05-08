export default {
  path: '/shop/aiqinghai',
  component: r =>  require.ensure([], () => r(require('./aiqinghai.vue')), 'aiqinghai'),
};
