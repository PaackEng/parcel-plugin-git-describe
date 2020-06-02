const util = require('util');
const execSync = util.promisify(require('child_process').execSync);

module.exports = function () {
  try {
    process.env.GIT_DESCRIBE = execSync('git describe --always --tags --dirty=+').toString();
  } catch (e) { console.log(e); }
}
