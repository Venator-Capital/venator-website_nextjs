#!/usr/bin/env node

/**
 * 既存コンポーネント復元スクリプト
 * 
 * 使用方法:
 * node scripts/restore-components.js <component-name>
 * 
 * 例:
 * node scripts/restore-components.js HeroSection
 * node scripts/restore-components.js all
 */

const fs = require('fs');
const path = require('path');

const componentName = process.argv[2];

if (!componentName) {
  console.log('使用方法: node scripts/restore-components.js <component-name>');
  console.log('例: node scripts/restore-components.js HeroSection');
  console.log('例: node scripts/restore-components.js all');
  process.exit(1);
}

const backupDir = path.join(__dirname, '../backup');
const componentsDir = path.join(__dirname, '../src/components');
const sectionsDir = path.join(__dirname, '../src/app');

function restoreComponent(name) {
  const backupFile = path.join(backupDir, 'components', `${name}.tsx`);
  const targetFile = path.join(componentsDir, `${name}.tsx`);
  
  if (!fs.existsSync(backupFile)) {
    console.log(`⚠️  バックアップファイル ${name}.tsx が見つかりません`);
    return false;
  }
  
  try {
    fs.copyFileSync(backupFile, targetFile);
    console.log(`✅ ${name} コンポーネントを復元しました`);
    return true;
  } catch (error) {
    console.error(`❌ ${name} の復元中にエラーが発生しました: ${error.message}`);
    return false;
  }
}

function restoreSection(name) {
  const backupFile = path.join(backupDir, 'sections', `${name}.tsx`);
  const targetFile = path.join(sectionsDir, `${name}.tsx`);
  
  if (!fs.existsSync(backupFile)) {
    console.log(`⚠️  バックアップファイル ${name}.tsx が見つかりません`);
    return false;
  }
  
  try {
    fs.copyFileSync(backupFile, targetFile);
    console.log(`✅ ${name} セクションを復元しました`);
    return true;
  } catch (error) {
    console.error(`❌ ${name} の復元中にエラーが発生しました: ${error.message}`);
    return false;
  }
}

function restoreAll() {
  console.log('🔄 すべてのコンポーネントとセクションを復元しています...');
  
  const components = ['HeroSection', 'AboutSection', 'TechStackSection', 'CapabilitiesSection', 'ContactSection', 'Navbar', 'Layout', 'Footer'];
  const sections = ['page', 'layout'];
  
  let restoredCount = 0;
  
  // コンポーネントを復元
  components.forEach(comp => {
    if (restoreComponent(comp)) restoredCount++;
  });
  
  // セクションを復元
  sections.forEach(sec => {
    if (restoreSection(sec)) restoredCount++;
  });
  
  console.log(`\n✅ 復元完了: ${restoredCount} 個のファイルを復元しました`);
  console.log('\n📝 次の手順:');
  console.log('1. npm run dev で開発サーバーを起動');
  console.log('2. サイトが正常に表示されることを確認');
  console.log('3. 必要に応じて個別のコンポーネントを調整');
}

function restoreSpecific(name) {
  // セクションかコンポーネントかを判定
  if (['page', 'layout'].includes(name)) {
    restoreSection(name);
  } else {
    restoreComponent(name);
  }
}

// メイン処理
if (componentName === 'all') {
  restoreAll();
} else {
  restoreSpecific(componentName);
}

console.log('\n📁 バックアップディレクトリ:', backupDir);
console.log('💡 個別復元が必要な場合: node scripts/restore-components.js <component-name>');
