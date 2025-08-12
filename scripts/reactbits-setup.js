#!/usr/bin/env node

/**
 * ReactBits Component Setup Script
 * 
 * 使用方法:
 * node scripts/reactbits-setup.js <component-name>
 * 
 * 例:
 * node scripts/reactbits-setup.js Beams
 */

const fs = require('fs');
const path = require('path');

const componentName = process.argv[2];

if (!componentName) {
  console.log('使用方法: node scripts/reactbits-setup.js <component-name>');
  console.log('例: node scripts/reactbits-setup.js Beams');
  process.exit(1);
}

const reactbitsDir = path.join(__dirname, '../src/components/reactbits');
const componentFile = path.join(reactbitsDir, `${componentName}.tsx`);

if (fs.existsSync(componentFile)) {
  console.log(`⚠️  コンポーネント ${componentName} は既に存在します`);
  process.exit(1);
}

const componentTemplate = `import React from 'react';

interface ${componentName}Props {
  // プロパティをここに定義
}

export const ${componentName}: React.FC<${componentName}Props> = (props) => {
  return (
    <div>
      {/* ReactBitsから取得したコンポーネントのコードをここに配置 */}
      <h1>${componentName} Component</h1>
    </div>
  );
};

export default ${componentName};
`;

try {
  fs.writeFileSync(componentFile, componentTemplate);
  console.log(`✅ コンポーネント ${componentName} を作成しました`);
  console.log(`📁 ファイル: ${componentFile}`);
  console.log(`\n📝 次の手順:`);
  console.log(`1. ReactBits (https://reactbits.dev) で ${componentName} コンポーネントを検索`);
  console.log(`2. コードをコピーして ${componentFile} に貼り付け`);
  console.log(`3. 必要に応じてプロジェクトの要件に合わせてカスタマイズ`);
} catch (error) {
  console.error(`❌ エラー: ${error.message}`);
  process.exit(1);
}
