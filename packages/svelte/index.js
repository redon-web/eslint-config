module.exports = {
  plugins: ['svelte3'],
  extends: ['redon-ts'],
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3'
    }
  ]
};
