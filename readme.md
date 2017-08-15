# 简介
本示例展示了Webpack打包Web前端应用的基本用法。

## 技术路线
* Webpack打包
* 生产环境和开发环境的构建
* 代码分离-依赖库和应用代码分离
* 代码分离-CSS、Less与代码分离
* React组件热更新
* CSS热更新

# 使用

clone代码以后  
```
npm install
```

命令行启动：
```
npm start
```

Visual Studio Code：
```
F5
```

打开浏览器访问 [http://localhost:8000]()

# 生成生产环境代码

```
npm run build
```
文件将输出到`/dist/`目录

## 测试生产环境代码
生产环境代码生成的文件名会自动加上hash值，避免浏览器缓存造成代码不能即使更新。npm start命令和Visual Studio Code中运行都是开发环境运行，要运行生产环境代码需按以下步骤执行。

```cmd
npm run build
xcopy /s /y dist wwwroot\dist\
```
删除`wwwroot\dist`所有文件就恢复测试环境。
