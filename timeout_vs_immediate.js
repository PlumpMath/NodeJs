// timeout_vs_immediate.js
// setImmediate() is designed to execute a script once the current poll phase completes.
// setTimeout() schedules a script to be run after a minimum threshold in ms has elapsed.

// the order of timeout and imediate are non-deterministic
setTimeout(function timeout () {
  console.log('timeout');
},0);

setImmediate(function immediate () {
  console.log('immediate');
});


// the immediate callback is always executed first within a I/O cycle
var fs = require('fs')

fs.readFile(__filename, () => {
  setTimeout(() => {
    console.log('timeout within I/O cycle')
  }, 0)
  setImmediate(() => {
    console.log('immediate within I/O cycle')
  })
})