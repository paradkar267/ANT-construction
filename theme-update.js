const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

const replacements = [
  // Backgrounds
  { from: /bg-\[#111111\]/g, to: 'bg-white' },
  { from: /bg-\[#0a0a0a\]/g, to: 'bg-gray-50' },
  { from: /bg-black/g, to: 'bg-white' },
  { from: /bg-black\/20/g, to: 'bg-white/20' }, // Overlay updates
  { from: /bg-black\/50/g, to: 'bg-white/50' },
  { from: /bg-black\/80/g, to: 'bg-white/90' }, // For text legibility
  { from: /bg-black\/90/g, to: 'bg-white/90' },
  { from: /bg-neutral-800/g, to: 'bg-gray-200' },
  { from: /bg-neutral-900/g, to: 'bg-gray-100' },
  
  // Translucent Backgrounds
  { from: /bg-white\/5/g, to: 'bg-black/5' },
  { from: /bg-white\/10/g, to: 'bg-black/10' },

  // Text colors
  { from: /text-white/g, to: 'text-gray-900' },
  { from: /text-\[#f5f5f5\]/g, to: 'text-gray-900' },
  { from: /text-neutral-300/g, to: 'text-gray-600' },
  { from: /text-neutral-400/g, to: 'text-gray-500' },
  { from: /text-neutral-500/g, to: 'text-gray-400' },
  
  // Border colors
  { from: /border-white\/5/g, to: 'border-black/5' },
  { from: /border-white\/10/g, to: 'border-black/10' },
  { from: /border-white\/20/g, to: 'border-black/20' },
  { from: /border-white/g, to: 'border-gray-900' },
  
  // Specific Gradient updates in page.tsx
  { from: /from-black\/90/g, to: 'from-white/90' },
  { from: /via-black\/50/g, to: 'via-white/50' },
  { from: /via-black\/20/g, to: 'via-white/20' },
  { from: /from-white/g, to: 'from-gray-900' }, // For text gradients
  { from: /to-neutral-500/g, to: 'to-gray-400' },
];

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let original = content;
      
      replacements.forEach(({ from, to }) => {
        content = content.replace(from, to);
      });
      
      if (content !== original) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated: ${fullPath}`);
      }
    }
  }
}

processDirectory(srcDir);
console.log('Theme migration complete.');
