process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
    // metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
    var input = process.stdin.read();
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
			default: 
				process.stderr.write('Wrong instruction! \n');
		}
    }
});