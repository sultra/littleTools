const yaml = require('yamljs');
const fs = require('fs');

module.exports = loadYaml;



/**
 * 加载yaml文件
 * @param {string} filePath 文件路径
 */
function loadYaml(filePath) {
    return yaml.parse(fs.readFileSync(filePath).toString());
}


