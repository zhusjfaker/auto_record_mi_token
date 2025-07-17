# mi_token

自动化获取小米账号的 `passToken` 并保存到本地文件。

## 项目结构

```
.gitignore
package.json
readme.md
token.txt
src/
  src/index.js
  src/io.js
```

## 使用方法

1. 安装依赖：

   ```sh
   yarn install
   ```

2. 设置环境变量：

   ```sh
   export MI_USER=你的手机号
   export MI_PASS=你的密码
   ```

3. 运行脚本：

   ```sh
   yarn dev
   ```

   或者直接运行：

   ```sh
   node src/index.js --file /Users/zhushijie/Desktop/github/mi_token/token.txt
   ```

4. 登录后，`passToken` 会自动保存到 `token.txt` 文件。

## 依赖

- [puppeteer](https://pptr.dev/)

## 注意事项

- 请勿将 `token.txt` 文件上传到公共仓库。
- 登录过程需要人工辅助完成验证码等操作。

##