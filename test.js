const cylon = require('./index.js');


console.log('turning cylon on');
// vvvvvvvvv
cylon.run();
setTimeout(function () {
	// vvvvvvvvv
    cylon.off();
	// vvvvvvvvv
    cylon.conf({
        color: '#281fdd',
        msg: '\n\njibberish\n    for\n        my \ntest\n\n',
		msgColor: '#4bd64c',
        width: 25,
        pre: 16,
        ms: 40
    });
    console.log('cylon is off');
    setTimeout(function () {
        console.log('turning cylon on');
		// vvvvvvvvv
        cylon.run();
        setTimeout(function () {

			// vvvvvvvvv
            cylon.off();
			cylon.conf({
		        color: '#bc1fdd',
		        msg: '\n\njibberish\n    for\n        my \ntest\n\n',
				msgColor: '#d6b84b',
		        width: 25,
		        pre: 16,
		        ms: 40
		    });
            cylon.run();
			setTimeout(function(){
				console.log('this line exists 3 times, and serves as a warning of this very thing');
				console.log('this line exists 3 times, and serves as a warning of this very thing');
				console.log('this line exists 3 times, and serves as a warning of this very thing');

			},500);
	        setTimeout(function () {

				// vvvvvvvvv
	            cylon.off();
	            console.log('cylon is off');
				console.log('you need to turn the cylon off, or he\'ll overwrite terminal lines');
	        }, 13000);
	    }, 2000);
    }, 2000);
}, 7000);
