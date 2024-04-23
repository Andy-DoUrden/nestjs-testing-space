/**
 * @type {import('semantic-release').GlobalConfig}
 */
module.exports = {
  branches: ['master', 'development'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    '@semantic-release/github',
    [
      '@semantic-release/git',
      {
        assets: ['package.json', 'CHANGELOG.md'],
        message: 'chore(release): ${nextRelease.version}',
      },
    ],
  ],
};
