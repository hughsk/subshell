# subshell [![Flattr this!](https://api.flattr.com/button/flattr-badge-large.png)](https://flattr.com/submit/auto?user_id=hughskennedy&url=http://github.com/hughsk/subshell&title=subshell&description=hughsk/subshell%20on%20GitHub&language=en_GB&tags=flattr,github,javascript&category=software)[![experimental](http://hughsk.github.io/stability-badges/dist/experimental.svg)](http://github.com/hughsk/stability-badges) #

Boot an interactive subshell from node. Useful for custom command-line
environments.

## Usage ##

[![subshell](https://nodei.co/npm/subshell.png?mini=true)](https://nodei.co/npm/subshell)

### `subshell([cwd], [env], [exit])` ###

Spawns a subshell appropriate for your system, and wires up node's stdio
to the shell. Optionally, you can also pass:

* A `cwd` string, for the directory to run your shell from.
* An `env` object, to override the shell's environment variables.
* An `exit` callback with the signature `(err, code)`, called when the shell
  closes.

## License ##

MIT. See [LICENSE.md](http://github.com/hughsk/subshell/blob/master/LICENSE.md) for details.
