const crypto = require('crypto');
const fs = require('fs');

module.exports = path => {
  const packageJson = JSON.parse(fs.readFileSync(path));
  const modules = Object.keys(packageJson.dependencies);
  const groups = {};

  for (const module of modules) {
    const hash = crypto.createHash('md5').update(module).digest('hex').slice(0, 8);
    groups[module] = {
      name: `chunk-vendor-${hash}`,
      test: new RegExp(`node_modules/${module}/`),
      enforce: true,
    };
  }

  return groups;
};
