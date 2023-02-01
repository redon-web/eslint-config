import { fetch } from 'zx';

const requestUrl = 'https://npmmirror.com/sync/eslint-config-redon';

const pkgs = ['base', 'ts', '', 'vue', 'react', 'react-native', 'svelte', 'solid'];

const requestUrls = pkgs.map(item => requestUrl + (item ? `-${item}` : ''));

async function sync() {
  await Promise.all(requestUrls.map(url => fetch(url)));
}

sync();
