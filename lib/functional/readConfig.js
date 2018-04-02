const loadYaml=require('./loadYaml');
const fs=require('fs');

/**
 * 读取配置文件 参数文件类型，文件路径，文件名
 * @param {obj} option {fileType,configPath,defaultFileName}
 */
function handleConfig(option) {
    //文件类型，json,yaml,yml
    const fileType=option.fileType;
    //配置文件所在路径
    const configPath = option.configPath;
    const defaultFileName=option.defaultFileName;

    const defaultConfigFile = `${configPath}/${defaultFileName}.${fileType}`;
    let configFile = process.env.NODE_ENV || defaultFileName;
    configFile = `${configPath}/${configFile}.${fileType}`;

    let _loadConfig;
    if (fileType == 'yaml' || fileType == 'yml') {
        _loadConfig = loadYaml;
    }else{
        _loadConfig = _loadJson;
    }
    let defaultConfig = _loadConfig(defaultConfigFile);
    //如果指定的配置文件不是默认的，则和默认的合并
    if (configFile != defaultConfigFile) {
        let config = _loadConfig(configFile);
        //合并默认的配置文件
        defaultConfig = Object.assign(config,defaultConfig);
    }
    return readConf(defaultConfig);
}

function readConf(config) {
    // const nodes = Reflect.ownKeys(config);
    for (const nodeName in config) {
        const node = config[nodeName];
        if (node.constructor === Object){
            readConf(node);
        }else{
            let temp = process.env[node];
            if (temp) {
                config[nodeName] = temp;
            }
        }
    }
    return config;
}

//由于require方法不能跨模块加载，比如，（A 调用 B模块 require A中的 文件）该场景下，直接用fs读取文件
function _loadJson(path) {
    return JSON.parse(fs.readFileSync(path));
}


module.exports = handleConfig;