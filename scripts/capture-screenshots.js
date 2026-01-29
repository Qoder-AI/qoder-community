/**
 * Screenshot Capture Script
 * 使用 Playwright 对所有 demo 页面截图
 * 
 * 统一 16:9 尺寸 (1920x1080)
 * 
 * 用法: npm run capture
 */

import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// ES module __dirname workaround
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 配置
const DEMOS_DIR = path.join(__dirname, '../public/demos');
const OUTPUT_DIR = path.join(__dirname, '../public/screenshots');
const VIEWPORT_WIDTH = 1920;   // 16:9 宽度
const VIEWPORT_HEIGHT = 1080;  // 16:9 高度
const DEVICE_SCALE_FACTOR = 1; // 1x (1920x1080 已足够清晰)

async function captureScreenshots() {
  console.log('📸 Starting screenshot capture (16:9 - 1920x1080)...\n');

  // 确保输出目录存在
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    console.log(`✅ Created output directory: ${OUTPUT_DIR}\n`);
  }

  // 获取所有 demo HTML 文件
  const demoFiles = fs.readdirSync(DEMOS_DIR)
    .filter(f => f.endsWith('.html'))
    .sort();

  console.log(`Found ${demoFiles.length} demo files to capture:\n`);

  // 启动浏览器
  const browser = await chromium.launch({
    headless: true,
  });

  // 创建统一的浏览器上下文 (所有截图使用相同尺寸)
  const context = await browser.newContext({
    viewport: { width: VIEWPORT_WIDTH, height: VIEWPORT_HEIGHT },
    deviceScaleFactor: DEVICE_SCALE_FACTOR,
  });

  let successCount = 0;
  let errorCount = 0;

  for (let i = 0; i < demoFiles.length; i++) {
    const file = demoFiles[i];
    const filePath = path.join(DEMOS_DIR, file);
    const screenshotName = file.replace('.html', '.png');
    const screenshotPath = path.join(OUTPUT_DIR, screenshotName);

    try {
      const page = await context.newPage();
      
      // 使用 file:// 协议加载本地 HTML
      const fileUrl = `file://${filePath}`;
      await page.goto(fileUrl, { waitUntil: 'networkidle' });
      
      // 等待一小段时间确保动画/渲染完成
      await page.waitForTimeout(300);

      // 截图 - 固定 1920x1080 尺寸
      await page.screenshot({
        path: screenshotPath,
        type: 'png',
      });

      await page.close();

      successCount++;
      console.log(`  [${i + 1}/${demoFiles.length}] ✅ ${file} → ${screenshotName}`);
    } catch (error) {
      errorCount++;
      console.log(`  [${i + 1}/${demoFiles.length}] ❌ ${file} - Error: ${error.message}`);
    }
  }

  await context.close();
  await browser.close();

  // 输出统计
  console.log('\n' + '='.repeat(50));
  console.log(`📊 Capture complete!`);
  console.log(`   ✅ Success: ${successCount}`);
  console.log(`   ❌ Failed: ${errorCount}`);
  console.log(`   📁 Output: ${OUTPUT_DIR}`);
  console.log(`   📐 Size: ${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}px (16:9)`);
  console.log('='.repeat(50));
}

// 运行
captureScreenshots().catch(console.error);
