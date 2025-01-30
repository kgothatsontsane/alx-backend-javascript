process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', function(data) {
    console.log(`Your name is: ${data.toString().trim()}`);
});
process.on('exit', function() {
    console.log('This important software is now closing\r');
});
process.stdin.on('end', function() {
    process.exit();
});