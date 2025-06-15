

import fs from 'fs';
import path from 'path';
import { slugify } from 'transliteration';

// 从命令行获取文章标题
const title = process.argv[2];

if (!title) {
  console.error('❌ 请提供文章标题！');
  console.log('用法: bun run new-post "你的文章标题"');
  process.exit(1);
}

// 将中文标题转换为拼音slug
// 例如："读书" -> "du-shu"
const slug = slugify(title, {
  lowercase: true,
  separator: '-'
});

// 定义新文章的路径
// 通常Astro的博客内容存放在 `src/content/blog`
const postPath = path.join(process.cwd(), 'src', 'content', 'blog', slug);

// 检查文件夹是否已存在
if (fs.existsSync(postPath)) {
  console.error(`❌ 文件夹 "${slug}" 已存在！`);
  process.exit(1);
}

// 创建文件夹
fs.mkdirSync(postPath, { recursive: true });

// 创建Markdown文件并写入基本内容
const today = new Date().toISOString().split('T')[0];
const frontmatter = `---
title: "${title}"
description: 'Write your description here.'
publishDate: ${today}
tags: ['tag1', 'tag2']
---

Write your content here.
`;

const filePath = path.join(postPath, 'index.md');
fs.writeFileSync(filePath, frontmatter);

console.log(`✅ 成功创建新博文:`);
console.log(filePath);