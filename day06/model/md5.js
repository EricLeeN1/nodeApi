var crypto = require('crypto');

module.exports = function (a) {
    var md5 = crypto.createHash('md5');
    var password = md5.update(a).digest('base64');
    return password;
};
