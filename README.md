# @redon-web eslint config presets with prettier

## 总览

- 集成了 prettier，自动修复并格式化
- 多种预设的配置: JavaScript, TypeScript, Vue, React, ReactNative, Svelte and Solid
- 同样也可以格式化 html、json、yaml、markdown

### 安装

- 首先安装 eslint 和 typescript 依赖

```bash
pnpm i -D eslint
pnpm i -D typescript
```

- 然后根据项目中使用的技术，安装下面的其中一个

```bash
pnpm i -D eslint-config-redon               # 等同于 redon-ts
pnpm i -D eslint-config-redon-base          # 基础的
pnpm i -D eslint-config-redon-ts            # TypeScript
pnpm i -D eslint-config-redon-vue           # Vue3
pnpm i -D eslint-config-redon-react         # React
pnpm i -D eslint-config-redon-react-native  # ReactNative
pnpm i -D eslint-config-redon-svelte        # Svelte
pnpm i -D eslint-config-redon-solid         # Solid
```

### eslint 配置文件

创建.eslintrc.js、.eslintrc.json、.eslintrc 任意一个文件即可

- .eslintrc.js

```js
module.exports = {
  extends: "redon", // redon-base | redon-ts | redon-vue | redon-react | redon-react-native | redon-svelte | redon-solid
};
```

- .eslintrc.json、.eslintrc

```json
{
  "extends": "redon" // redon-base | redon-ts | redon-vue | redon-react | redon-react-native | redon-svelte | redon-solid
}
```

通常不需要添加 .eslintignore 配置文件，因为已经预设了一些配置，如果项目需要，可以自行添加

### 别名配置

下面是默认的别名配置(不需要添加)，如果需要更改，请自行在 eslint 配置文件中按照下面的代码格式去变更别名

```json
{
  "settings": {
    "import/resolver": {
      "alias": {
        "map": [
          ["~", "."],
          ["@", "./src"]
        ],
        "extensions": [".js", ".jsx", ".mjs", ".ts", ".tsx", "mts", ".d.ts"]
      }
    }
  }
}
```

### 在 package.json 里添加脚本命令

```json
{
  "scripts": {
    "lint": "eslint . --fix"
  }
}
```

然后在项目中可以使用下面的命令对代码进行格式化修复

```bash
npm run lint    # npm
yarn lint       # yarn
pnpm lint       # pnpm

```

### 致谢

本项目参照 [eslint-config-soybeanjs](https://github.com/honghuangdc/eslint-config-soybeanjs) 和 [@antfu/eslint-config](https://github.com/antfu/eslint-config)
