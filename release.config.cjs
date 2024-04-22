const config = {
  branches: ['main', 'development'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md',
      },
    ],
    '@semantic-release/github',
    [
      '@semantic-release/git',
      {
        assets: ['package.json', 'CHAMGELOG.md'],
        message: 'message": ${nextRelease.version}',
      },
    ],
  ],
};
module.exports = config;
