export default {
  path: '/shop',
  component: r =>  require.ensure([], () => r(require('./shop.vue')), 'shop'),
};
