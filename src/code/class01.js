var argvs = process.argv.slice(2);

switch (argvs[0]) {
    case 'init':
        console.log('init');
        break;
    case 'install':
        console.log('install');
        break;
    case 'uninstall':
        console.log('uninstall');
        break;
}