const fs = require('node:fs');
const path = require('node:path');

const NODE_MODULES_MOCK_PACKAGE_PATH = path.join(__dirname, '../../node_modules/import-resolution-test');
const CURRENT_DIRECTORY_PATH = path.join(__dirname, '.');

const IMPORTABLE_FILE_NAME = 'main';
const IMPORTABLE_JS_FILE_NAME = `${IMPORTABLE_FILE_NAME}.js`;
const IMPORTABLE_SCSS_FILE_NAME = `${IMPORTABLE_FILE_NAME}.scss`;

/* If one does not already exist,
 * create a path to the node_modules mock package. */
if (!fs.existsSync(NODE_MODULES_MOCK_PACKAGE_PATH)) {
  fs.mkdirSync(NODE_MODULES_MOCK_PACKAGE_PATH);
}

/* Copy the specified file with the .js extension
 * to the node_modules mock package. */
fs.copyFile(
  `${CURRENT_DIRECTORY_PATH}/${IMPORTABLE_JS_FILE_NAME}`,
  `${NODE_MODULES_MOCK_PACKAGE_PATH}/${IMPORTABLE_JS_FILE_NAME}`,
  error => {
    if (error) {
      console.log(error);
    }
  }
)

/* Copy the specified file with the .scss extension
 * to the node_modules mock package. */
fs.copyFile(
  `${CURRENT_DIRECTORY_PATH}/${IMPORTABLE_SCSS_FILE_NAME}`,
  `${NODE_MODULES_MOCK_PACKAGE_PATH}/${IMPORTABLE_SCSS_FILE_NAME}`,
  error => {
    if (error) {
      console.log(error);
    }
  }
)