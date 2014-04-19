var spawn = require('child_process').spawn
    , stdout = ""
    , stderr = ""
    , node = process.execPath

var child = spawn('npm', ['conf', 'list'])


child.stderr.on("data", function (chunk) {
  stderr += chunk
})

child.stdout.on("data", function (chunk) {
  stdout += chunk
})

child.on("close", function (code) {
  console.log("----------------")
  console.log(stdout)
})
