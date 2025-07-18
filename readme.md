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
   node src/index.js
   ```

4. 登录后，`passToken` 会自动保存到 `token.txt` 文件。

## Docker 使用示例

你可以通过 Docker 快速运行本项目。请将 `你的手机号` 和 `你的密码` 替换为你自己的小米账号信息。

```sh
docker run -d \
  --name mi-token \
  --restart=always \
  -e MI_USER=你的手机号 \
  -e MI_PASS=你的密码 \
  -v /mnt/sda3/mi_account/token.txt:/usr/src/work_dir/auto_record_mi_token/token.txt \
  zsj439453290/record_mi_passtoken:1.0.0-linux-amd64
```

> 注意：请勿将账号和密码明文暴露在公共环境中。

## 依赖

- [puppeteer](https://pptr.dev/)

## 注意事项

- 请勿将 `token.txt` 文件上传到公共仓库。
- 登录过程需要人工辅助完成验证码等操作。

##