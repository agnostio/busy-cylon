const xcon = require('x-con');
const con = require('funccon');
const cylon = require('./index.js');
const indent = '       ';
let dotBuf = '';
let dots = () => {
    if (dotBuf.length > 5) {
        dotBuf = '';
        return dotBuf;
    }
    dotBuf += ' .';
    return dotBuf;
};
con({
    size: 1,
    funcs: [
        (complete) => {
            xcon.post({
                chunks: [{
                    txt: `\n\n\n\n${indent}This is my demo of funccon and x-con\n`,
                    color: '#62d57b',
                    bg: 'black',
                    bold: true
                }],
                done: () => {
                    complete();
                }
            });
        },
        (complete) => {
            setTimeout(function () {
                xcon.post({
                    chunks: [{
                        txt: `\n${indent}Funccon is a simple sytax for procedural and concurent code structuring\n`,
                        color: '#62d57b',
                        bg: 'black',
                        bold: true
                    }],
                    done: () => {
                        complete();
                    }
                });
            }, 4000);
        },
        (complete) => {
            setTimeout(function () {
                xcon.post({
                    chunks: [{
                        txt: `\n${indent}x-con is a command line styling and animation library based on chalk\n\n\n\n\n\n`,
                        color: '#62d57b',
                        bg: 'black',
                        bold: true
                    }],
                    done: () => {
                        complete();
                    }
                });
            }, 4000);
        },
        (complete) => {
            setTimeout(function () {
                xcon.on(50, 3);
                xcon.post({
                    chunks: [{
                        txt: `\nBasicaly...\n`,
                        color: '#ad62d5',
                        bg: 'blue',
                        bold: true
                    }],
                    done: () => {
                        let a = setInterval(function () {
                            xcon.post({
                                chunks: [{
                                    txt: `\nBasicaly${dots()}\n`,
                                    color: '#ad62d5',
                                    bg: 'blue',
                                    bold: true
                                }],
                                done: () => {}
                            });
                        }, 600);
                        setTimeout(function () {
                            clearInterval(a);
                            complete();
                        }, 9000);
                    }
                });
            }, 5000);
        }
    ],
    done: () => {
        xcon.off();
        xcon.post({
            chunks: [{
                txt: `${indent}Look `,
                color: '#96bed7',
                bg: 'black',
                bold: true
            }, {
                txt: `what `,
                color: '#62d57b',
                bg: 'red',
                bold: true
            }, {
                txt: `I `,
                color: '#222222',
                bg: 'green',
                bold: true
            }, {
                txt: `can `,
                color: '#222222',
                bg: 'yellow',
                bold: true
            }, {
                txt: `do`,
                color: '#444444',
                bg: 'cyan',
                bold: true
            }, {
                txt: `!`,
                color: '#eeeeee',
                bg: 'black',
                bold: true
            }, {
                txt: `!`,
                color: '#b462d5',
                bg: 'blue',
                bold: true
            }, {
                txt: `!\n\n\n`,
                color: '#62d57b',
                bg: 'magenta',
                bold: true
            }],
            done: () => {
				con({
					size: 2,
					funcs:[
						(complete)=>{
							let c = 0;
							let a = setInterval(function () {
								c++;
	                            xcon.post({
	                                chunks: [{
	                                    txt: `\ncounter 1    -  ${c}`,
	                                    color: '#ad62d5',
	                                    bg: 'blue',
	                                    bold: true
	                                }],
	                                done: () => {}
	                            });
								if(c>4){
										clearInterval(a);
										xcon.off();
										complete();
								}
	                        }, 1000);
						},
						(complete)=>{
							let c = 0;
							let a = setInterval(function () {
								c++;
	                            xcon.post({
	                                chunks: [{
	                                    txt: `\ncounter 2    -  ${c}`,
	                                    color: '#aae3ac',
	                                    bg: 'red',
	                                    bold: true
	                                }],
	                                done: () => {}
	                            });
								if(c>4){
										clearInterval(a);
										xcon.off();
										complete();
								}
	                        }, 2000);
						},
						(complete)=>{
							let c = 0;
							let a = setInterval(function () {
								c++;
	                            xcon.post({
	                                chunks: [{
	                                    txt: `\ncounter 3    -  ${c}`,
	                                    color: '#b6c680',
	                                    bg: 'blue',
	                                    bold: true
	                                }],
	                                done: () => {}
	                            });
								if(c>4){
										clearInterval(a);
										xcon.off();
										complete();
								}
	                        }, 500);
						}
					],
					done:()=>{
						console.log('all done!!!');
					}
				});
			}
        });
    }
});
// 		background colors:
// 				black
// 				red
// 				green
// 				yellow
// 				blue
// 				magenta
// 				cyan
// 				white
// 				blackbright
// 				redbright
// 				greenbright
// 				yellowbright
// 				bluebright
// 				magentabright
// 				cyanbright
// 				whitebright
