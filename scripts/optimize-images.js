const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = 'venator_capital_website_images';
const outputDir = 'public';

// 最適化設定
const optimizationOptions = {
  quality: 80,
  format: 'webp',
  progressive: true
};

// 画像サイズ設定 - 元のアスペクト比を保持
const imageSizes = {
  small: { width: 400, height: 300 },    // 4:3 アスペクト比
  medium: { width: 800, height: 600 },   // 4:3 アスペクト比
  large: { width: 1200, height: 900 }    // 4:3 アスペクト比
};

async function optimizeImage(inputPath, outputPath, size) {
  try {
    // 元の画像のアスペクト比を取得
    const metadata = await sharp(inputPath).metadata();
    const originalAspectRatio = metadata.width / metadata.height;
    
    // 元のアスペクト比を保持してリサイズ
    let targetWidth = size.width;
    let targetHeight = size.height;
    
    if (originalAspectRatio > 1) {
      // 横長の画像の場合
      targetHeight = Math.round(size.width / originalAspectRatio);
    } else {
      // 縦長の画像の場合
      targetWidth = Math.round(size.height * originalAspectRatio);
    }
    
    await sharp(inputPath)
      .resize(targetWidth, targetHeight, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .webp(optimizationOptions)
      .toFile(outputPath);
    
    console.log(`✅ Optimized: ${path.basename(inputPath)} -> ${targetWidth}x${targetHeight} (preserving aspect ratio)`);
  } catch (error) {
    console.error(`❌ Error optimizing ${inputPath}:`, error.message);
  }
}

async function optimizeAllImages() {
  console.log('🚀 Starting image optimization with preserved aspect ratios...');
  
  // 出力ディレクトリの作成
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  const imageFiles = fs.readdirSync(inputDir).filter(file => 
    file.match(/\.(png|jpg|jpeg)$/i)
  );
  
  for (const imageFile of imageFiles) {
    const inputPath = path.join(inputDir, imageFile);
    const baseName = path.parse(imageFile).name;
    
    // 各サイズで最適化
    for (const [sizeName, dimensions] of Object.entries(imageSizes)) {
      const outputFileName = `${baseName}-${sizeName}.webp`;
      const outputPath = path.join(outputDir, outputFileName);
      
      await optimizeImage(inputPath, outputPath, dimensions);
    }
    
    // 元のPNGファイルも最適化して配置（フォールバック用）
    const fallbackPath = path.join(outputDir, `${baseName}.png`);
    await optimizeImage(inputPath, fallbackPath, imageSizes.medium);
  }
  
  console.log('🎉 Image optimization completed with preserved aspect ratios!');
  console.log('\n📁 Optimized images saved to:', outputDir);
  console.log('\n💡 Aspect ratios preserved for better container fit');
}

optimizeAllImages().catch(console.error);
