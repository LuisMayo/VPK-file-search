const { execSync } = require("child_process");
const fs = require("fs");

const files = fs.readdirSync(process.cwd());
const vpkfiles = files.filter(file => file.endsWith('.vpk'));
const matches = [];
for (const file of vpkfiles) {
    const stdout = execSync('vpk -l ' + file)
    if (stdout.includes(process.argv[2])) {
        matches.push(file);
    }
}
console.log(matches.join('\n'));
