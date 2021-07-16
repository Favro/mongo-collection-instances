Package.describe({
  name: 'dburles:mongo-collection-instances',
  summary: 'Access your Mongo instances',
  version: '0.3.5',
  git: 'https://github.com/dburles/mongo-collection-instances.git'
});

Package.onUse(function(api) {
  api.versionsFrom('2.3');
  api.use([
    'mongo',
    'underscore',
    'lai:collection-extensions']);
  api.addFiles('mongo-instances.js');
});

Package.onTest(function(api) {
  api.use([
    'tinytest',
    'accounts-base',
    'mongo',
    'dburles:mongo-collection-instances']);
  api.addFiles('mongo-instances-tests.js');
});
