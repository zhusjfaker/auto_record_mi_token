const fs = require('fs');
const path = require('path');

function writeFile(obj) {
  const list = process.argv;
  const index = list.findIndex((item) => item === '--file');
  if (index === -1) {
    throw new Error('未指定文件路径，请使用 --file 参数');
  }
  const fileDir = list[index + 1];
  if (!fileDir) {
    throw new Error('未指定文件路径，请使用 --file 参数');
  }
  if (!fs.existsSync(path.dirname(fileDir))) {
    throw new Error('指定的目录不存在，请检查路径');
  }
  const item = obj.find((item) => item.name === 'passToken');
  if (!item) {
    throw new Error('未找到 passToken，请检查 Cookie 是否正确');
  }
  fs.writeFileSync(fileDir, item.value, 'utf-8');
  console.log(`✅ 成功写入文件：${fileDir}`);
}

module.exports = {
  writeFile,
};
