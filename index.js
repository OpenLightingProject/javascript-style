/**
 * @param {Configuration} conf
 */
module.exports = function (conf) {
    conf.registerPreset('OLP', require('./presets/common.json'));
};