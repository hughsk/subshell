#!/usr/bin/env node

var spawn = require('child_process').spawn
var shell = process.platform === 'win32'
  ? process.env.ComSpec || 'cmd'
  : process.env.SHELL || 'bash'

module.exports = subshell

function subshell(cwd, env, callback) {
  if (typeof env === 'function') {
    callback = env
    env = process.env
  }
  if (typeof cwd === 'object') {
    env = cwd
    cwd = process.cwd()
  }

  return spawn(shell, [], {
      env: env || process.env
    , cwd: cwd || process.cwd()
    , customFds: [0, 1, 2]
  }).on('exit', function(code) {
    process.stdin.setRawMode(false)
    callback && callback(null, code)
  })
}

if (!module.parent) {
  process.env.PS1 = 'subshell> '
  subshell(process.env, function(err, code) {
    if (err) throw err
    process.exit(code)
  })
}
