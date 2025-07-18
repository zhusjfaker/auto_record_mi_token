const puppeteer = require('puppeteer');
const { writeFile } = require('./io');

async function main() {

  const user = process.env['MI_USER'];
  const password = process.env['MI_PASS'];

  if (!user || !password) {
    throw new Error('请设置环境变量 MI_USER 和 MI_PASS');
  }else{
    console.log(`使用账号: ${user} ${password}`);
    console.log('正在自动填写登录信息...');
  }

  const browser = await puppeteer.launch({
    headless: 'new', // 或者 true（Node >= 18 建议用 'new'）
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  //  const browser = await puppeteer.launch({
  //   headless: false
  //  });

  const page = await browser.newPage();

  await page.goto(
    'https://account.xiaomi.com/fe/service/login/password?_locale=zh_CN'
  );

  console.log('请手动登录小米账号...');

  // 填写手机号
  await page.waitForSelector('input[type="text"]');
  await page.type('input[type="text"]', user, { delay: 100 });

  // 填写密码
  await page.waitForSelector('input[type="password"]');
  await page.type('input[type="password"]', password, { delay: 100 });

  // 勾选“同意协议”复选框（如果没勾选）
  const checkbox = await page.$('input[type="checkbox"]');
  const checked = await page.$eval(
    'input[type="checkbox"]',
    (el) => el.checked
  );
  if (!checked && checkbox) {
    await checkbox.click();
  }

  // 点击登录按钮
  const loginButton = await page.$('button[type="submit"]');
  if (loginButton) {
    await loginButton.click();
  }

  await page.waitForNavigation({ waitUntil: 'networkidle2' });

  const cookies = await page.cookies();
  const usefulCookies = cookies.filter((c) =>
    ['passToken', 'userId', 'serviceToken'].includes(c.name)
  );

  console.log('✅ 获取到的 Cookie：');
  console.log(JSON.stringify(usefulCookies, null, 2));

  writeFile(usefulCookies);

  await browser.close();
}

main().catch((error) => {
  console.error('发生错误:', error);
  process.exit(1);
});
