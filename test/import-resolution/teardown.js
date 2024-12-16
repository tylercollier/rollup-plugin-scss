const fs = require('node:fs');
const path = require('node:path');

const NODE_MODULES_MOCK_PACKAGE_PATH = path.join(__dirname, '../../node_modules/import-resolution-test');

/* Now that it has served its purpose,
 * remove the node_modules mock package. */
fs.rm(
  NODE_MODULES_MOCK_PACKAGE_PATH,
  { recursive: true, force: true },
  error => {
    if (error) {
      throw error;
    }
  }
);