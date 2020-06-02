const util = require('util');
const exec = util.promisify(require('child_process').exec);

module.exports = async function () {
  try {
    const { stdout } = await exec('git describe --always --tags --dirty=+');
    process.env.GIT_DESCRIBE = stdout.toString().split('\n', 1)[0];
  } catch (e) { console.log(e); }
}
