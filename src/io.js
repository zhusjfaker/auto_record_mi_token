const fs = require('fs');
const path = require('path');

function writeFile(obj) {
  const fileDir = path.join(__dirname, '../token.txt');
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
