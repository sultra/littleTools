const matchString = require('./matchString');
const loadYaml = require('./loadYaml');
const randomStr = require('./randomStr');
const readConfig=require('./readConfig');
const mergeObj=require('./mergeObject');

module.exports = {
    matchString: matchString,
    loadYaml: loadYaml,
    randomString: randomStr,
    readConfig: readConfig,
    mergeObject: mergeObj
}
