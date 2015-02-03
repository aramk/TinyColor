// Meteor package definition.
Package.describe({
  name: 'aramk:tinycolor',
  version: '1.1.0_1',
  summary: 'Fast, small color manipulation and conversion for JavaScript.',
  git: 'https://github.com/aramk/TinyColor.git#meteor'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@0.9.0');
  api.export('tinycolor', ['client', 'server']);
  api.addFiles(['tinycolor.js'], ['client', 'server']);
});
