/**
 * Share Image Generator
 * 生成小红书分享图片 (900x1200px, 3:4)
 */

// Category to Outcome mapping
const outcomeMap: Record<string, string> = {
  document: '文档处理',
  design: '创意设计',
  development: '开发任务',
  marketing: '营销内容',
  automation: '流程自动化',
  productivity: '效率提升',
  security: '安全分析',
  data: '数据处理',
  meta: '工具配置',
};

interface ShareImageOptions {
  slug: string;
  skillTitle: string;
  category: string;
}

/**
 * Load an image and return a promise
 */
function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
    img.src = src;
  });
}

/**
 * Check if an image exists at the given path
 */
async function imageExists(src: string): Promise<boolean> {
  try {
    const response = await fetch(src, { method: 'HEAD' });
    return response.ok;
  } catch {
    return false;
  }
}

/**
 * Get the share image path for a skill
 * Falls back to category default if skill-specific image doesn't exist
 */
async function getShareImagePath(slug: string, category: string): Promise<string> {
  const skillImagePath = `/images/skills/share/${slug}-share.png`;
  const defaultImagePath = `/images/skills/share/default-${category}.png`;
  
  if (await imageExists(skillImagePath)) {
    return skillImagePath;
  }
  return defaultImagePath;
}

/**
 * Generate the share image
 * @returns Base64 data URL of the generated image
 */
export async function generateShareImage(options: ShareImageOptions): Promise<string> {
  const { slug, skillTitle, category } = options;
  
  // Canvas dimensions (3:4 ratio for Xiaohongshu)
  const WIDTH = 900;
  const HEIGHT = 1200;
  
  // Create canvas
  const canvas = document.createElement('canvas');
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  const ctx = canvas.getContext('2d');
  
  if (!ctx) {
    throw new Error('Failed to get canvas context');
  }
  
  // Load all images in parallel
  const shareImagePath = await getShareImagePath(slug, category);
  const [demoImage, logoImage, qrcodeImage] = await Promise.all([
    loadImage(shareImagePath),
    loadImage('/images/qoder-logo.png'),
    loadImage('/images/qrcode-qoder.png'),
  ]);
  
  // === Draw Background ===
  // Light gray background
  ctx.fillStyle = '#f4f4f4';
  ctx.fillRect(0, 0, WIDTH, HEIGHT);
  
  // === Draw Title ===
  ctx.fillStyle = '#161616';
  ctx.font = 'bold 36px Inter, -apple-system, BlinkMacSystemFont, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('✨ 今日效率分享', WIDTH / 2, 70);
  
  // === Draw Demo Image ===
  // Center the demo image, max 500x500
  const demoSize = 500;
  const demoX = (WIDTH - demoSize) / 2;
  const demoY = 110;
  
  // Draw rounded rectangle background for demo image
  ctx.fillStyle = '#ffffff';
  roundRect(ctx, demoX - 10, demoY - 10, demoSize + 20, demoSize + 20, 16);
  ctx.fill();
  
  // Draw shadow
  ctx.shadowColor = 'rgba(0, 0, 0, 0.1)';
  ctx.shadowBlur = 20;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 4;
  
  // Draw demo image with rounded corners
  ctx.save();
  roundRect(ctx, demoX, demoY, demoSize, demoSize, 12);
  ctx.clip();
  
  // Scale and center the image
  const scale = Math.max(demoSize / demoImage.width, demoSize / demoImage.height);
  const scaledWidth = demoImage.width * scale;
  const scaledHeight = demoImage.height * scale;
  const offsetX = (demoSize - scaledWidth) / 2;
  const offsetY = (demoSize - scaledHeight) / 2;
  
  ctx.drawImage(demoImage, demoX + offsetX, demoY + offsetY, scaledWidth, scaledHeight);
  ctx.restore();
  
  // Reset shadow
  ctx.shadowColor = 'transparent';
  ctx.shadowBlur = 0;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  
  // === Draw Share Text ===
  const outcome = outcomeMap[category] || '工作任务';
  const shareText1 = `我用 Qoder +「Skills: ${skillTitle}」`;
  const shareText2 = `让 AI 帮我搞定了${outcome}!`;
  
  ctx.fillStyle = '#161616';
  ctx.font = 'bold 32px Inter, -apple-system, BlinkMacSystemFont, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(shareText1, WIDTH / 2, 680);
  
  ctx.fillStyle = '#525252';
  ctx.font = '28px Inter, -apple-system, BlinkMacSystemFont, sans-serif';
  ctx.fillText(shareText2, WIDTH / 2, 725);
  
  // === Draw Separator Line ===
  ctx.strokeStyle = '#e0e0e0';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(150, 780);
  ctx.lineTo(WIDTH - 150, 780);
  ctx.stroke();
  
  // === Draw Logo ===
  // Scale logo to fit (max width 180px)
  const logoMaxWidth = 180;
  const logoScale = Math.min(logoMaxWidth / logoImage.width, 1);
  const logoWidth = logoImage.width * logoScale;
  const logoHeight = logoImage.height * logoScale;
  const logoX = (WIDTH - logoWidth) / 2;
  const logoY = 820;
  
  ctx.drawImage(logoImage, logoX, logoY, logoWidth, logoHeight);
  
  // === Draw Call to Action ===
  ctx.fillStyle = '#525252';
  ctx.font = '24px Inter, -apple-system, BlinkMacSystemFont, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('下载 Qoder 体验 ↓', WIDTH / 2, 930);
  
  // === Draw QR Code ===
  const qrSize = 140;
  const qrX = (WIDTH - qrSize) / 2;
  const qrY = 960;
  
  // Draw white background for QR code
  ctx.fillStyle = '#ffffff';
  roundRect(ctx, qrX - 10, qrY - 10, qrSize + 20, qrSize + 20, 12);
  ctx.fill();
  
  // Draw QR code
  ctx.drawImage(qrcodeImage, qrX, qrY, qrSize, qrSize);
  
  // === Draw Domain ===
  ctx.fillStyle = '#6f6f6f';
  ctx.font = '20px Inter, -apple-system, BlinkMacSystemFont, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('qoder.com', WIDTH / 2, 1150);
  
  // === Export as PNG ===
  return canvas.toDataURL('image/png', 1.0);
}

/**
 * Helper function to draw rounded rectangle
 */
function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number
): void {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

/**
 * Download the generated image
 */
export function downloadImage(dataUrl: string, filename: string): void {
  const link = document.createElement('a');
  link.download = filename;
  link.href = dataUrl;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
