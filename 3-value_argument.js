const args = process.argv.slice(2);

if (!args[0]) {
    console.log("no argument");
} else {
    console.log(args[0]);
}