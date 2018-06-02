var os = require('os');
var OSinfo = require('../modules/OSinfo');

process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
    // metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
    var input = process.stdin.read();
	console.log('wpisz: /exit, /info, /sayhello, getOSinfo, ...');
    if (input !== null) {
        var instruction = input.toString().trim(); //trim pozbywa się białych znaków
		switch (instruction) {
			case '/exit': 
				process.stdout.write('Quitting app!\n');
            	process.exit();
				break;
			case '/info':
				console.log('Język: ' + process.env.LANG + ', wersja: '+ process.versions.node);
				break;
			case '/sayhello':
                process.stdout.write('hello!\n');
                break;
			case '/getOSinfo':
				process.stdout.write('Info o systemie: \n');
				OSinfo.print();
				break;
			default: 
				process.stderr.write('Wrong instruction! \n');
		}
    }
});

