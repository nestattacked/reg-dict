## regdict

regdict是一个开源的英语词典，支持类似于正则表达式规则的查询方式

[demo](https://app.nestattacked.com/regdict)

## 前置准备

项目需要使用 `node18` 以上版本，可以使用 `nvm` 管理多个 `node` 版本

如果你使用 `vscode` ，可以安装这些插件：`eslint`、`stylelint`，以开启代码检查功能

在项目根目录执行 `yarn`

## 客户端

### 快速上手

进入客户端代码目录

`cd client`

安装依赖

`yarn`

准备配置文件

拷贝一份 `client/src/config.example.ts` 到 `client/src/config.ts`

编译

`yarn build`

编译结果存放于 `client/build` 目录下，将里面的所有文件拷贝到你的 Web 服务器上就行

开发

`yarn dev`

支持热加载，修改代码后，自动刷新页面

## 服务端

### 快速上手

进入服务端代码目录

`cd server`

准备数据

参考 `server/data` 准备好你的字典数据

安装依赖

`yarn`

准备配置文件

拷贝一份 `server/src/config.example.mts` 到 `server/src/config.mts`

编译

`yarn build`

编译结果存放于 `server/build` 目录下，`index.mjs` 可以直接被运行

开发

`yarn dev`

支持热加载，修改代码后，自动重新加载

调试

`yarn debug`

执行命令后，在 `vscode` 调试界面启动调试