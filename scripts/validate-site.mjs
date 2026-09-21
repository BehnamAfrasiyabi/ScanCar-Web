#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(process.argv[2] || '.');
const htmlPath = path.join(root, 'index.html');
const html = fs.readFileSync(htmlPath, 'utf8');
const errors = [];

const required = [
  ['lang=fa', /<html[^>]*\blang="fa"/],
  ['dir=rtl', /<html[^>]*\bdir="rtl"/],
  ['description', /<meta[^>]+name="description"/],
  ['canonical', /<link[^>]+rel="canonical"/],
  ['open graph title', /property="og:title"/],
  ['structured product data', /"@type":\s*"Product"/],
  ['main landmark', /<main\b[^>]*id="main-content"/],
  ['skip link', /href="#main-content"/],
  ['contact target', /id="contact"/],
  ['FAQ section', /id="faq"/],
  ['privacy section', /id="privacy"/],
  ['terms section', /id="terms"/],
  ['legal navigation', /aria-label="پیوندهای حقوقی"/],
];

for (const [name, pattern] of required) {
  if (!pattern.test(html)) errors.push(`missing ${name}`);
}

for (const asset of ['images/logo.png', 'images/Product_S1.png']) {
  if (!fs.existsSync(path.join(root, asset))) errors.push(`missing asset ${asset}`);
}

const jsonLd = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/i)?.[1];
if (jsonLd) {
  try { JSON.parse(jsonLd); } catch (error) { errors.push(`invalid JSON-LD: ${error.message}`); }
}

if (errors.length) {
  console.error(`Website validation failed: ${errors.length} error(s)`);
  errors.forEach(error => console.error(`- ${error}`));
  process.exit(1);
}

console.log('Website validation passed: metadata, accessibility landmarks, structured data and assets');
