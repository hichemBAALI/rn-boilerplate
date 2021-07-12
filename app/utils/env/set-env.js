const _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
const _shelljs = _interopRequireDefault(require('shelljs'));

const _os = _interopRequireDefault(require('os'));

const isOSWin = function isOSWin() {
  return _os.default.type() === 'Windows_NT';
};

const getArgs = function getArgs() {
  const args = process.argv.slice(2);
  const env = args.filter((item) =>
    ['--staging', '--production'].includes(item),
  );
  const separator = ['--'];
  return env.length ? env[env.length - 1].split('--')[1] : null;
};

const getEnvScript = function getEnvScript(_ref) {
  const env = _ref;
  let script = isOSWin() ? 'copy /Y ' : 'cp -f -v ';
  script += env === 'staging' ? './app/utils/env/staging/env.js ' : '';
  script += env === 'production' ? './app/utils/env/prod/env.js ' : '';
  script += './app/utils/env.js ';
  return script;
};

const env = getArgs();

const envScript = getEnvScript(env);

console.log('executing script: ', envScript);
if (envScript != '') {
  _shelljs.default.exec(envScript);
}
