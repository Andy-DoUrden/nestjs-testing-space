/**
 * @type {import('semantic-release').GlobalConfig}
 */
module.exports = {
  branches: ['master', 'development'],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'angular',
        releaseRules: [
          {
            breaking: true,
            release: 'major',
          },
          {
            type: 'feat',
            release: 'minor',
          },
          {
            type: 'fix',
            release: 'patch',
          },
          {
            type: 'docs',
            scope: 'README',
            release: 'patch',
          },
          {
            type: 'chore',
            release: 'patch',
          },
        ],
        parserOpts: {
          noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES', 'BREAKING'],
        },
      },
    ],
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md',
      },
    ],
    '@semantic-release/npm',
    '@semantic-release/github',
    [
      '@semantic-release/git',
      {
        assets: ['package.json', 'CHANGELOG.md'],
        message: 'Verion: ${nextRelease.version}',
      },
    ],
  ],
};
