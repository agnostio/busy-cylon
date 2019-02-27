const xcon = require('x-con');
const fs = require('fs');
const defaultCylon = {
    color: '#ff0000',
    msg: 'DEFAULT CYLON',
    msgColor: '#ffffff',
    width: 18,
    pre: 8,
	post: 8,
    ms: 80
};
const rep = (char, times) => {
    let a = '';
    for (i = 0; i < times; i++) {
        a += char;
    }
    return a;
};
const eyes = JSON.parse(fs.readFileSync(`${__dirname}/eyeArray.json`, 'utf8'));
const indent = (str, size, width) => {

    let arr = str.split('\n');
    let ind = rep(' ', size);
    let newArr = [];
	let a,b,c;
    for (let i = 0; i < arr.length; i++) {
		if(arr[i] === ''){
			newArr.push(rep(' ', width));
		}
		else{
			let tail = 'tail';
			tail+= '----end';

			let lineText = `${ind}${arr[i]}`;
			newArr[i] = `${lineText}${rep(' ', width - lineText.length)}`;
		}
    }
	a=b=null;
    str = newArr.join('\n');
    return str;
};
let eyeWidth = eyes[0].length;
let currentEye = 0;
let lastEye = eyes.length - 1;
let warehouse = {};
let theCylon = null;
const buildCylon = (obj) => {
    let mainWidth = obj.width - eyeWidth;
    theCylon = {
        color: obj.color,
        direction: 1,
        position: Math.round((obj.width / 2) - (eyeWidth / 2)),
        max: mainWidth,
        ms: obj.ms,
        pupil: eyes[0],
        pre: obj.pre,
        msg: indent(obj.msg, obj.pre, (obj.pre + mainWidth + eyeWidth + obj.post + 4)),
        msgColor: obj.msgColor,
        post: obj.post,
        fullWidth: mainWidth + obj.pre + obj.post
    };
};
const renderCylon = (cylon) => {
    let pref = rep(' ', cylon.position);
    let suf = rep(' ', (cylon.max - cylon.position));
    let ind = rep(' ', cylon.pre);
	let end = '\n'+indent('', theCylon.pre, (theCylon.pre + theCylon.max + eyeWidth + theCylon.post + 4));
    xcon.back();
    xcon.up(3);
    xcon.post([{
        txt: '\n'
    }, {
        txt: `${ind}[ `,
        color: '#8e8ee3',
        bg: '#111111',
        bold: true
    }, {
        txt: pref+theCylon.pupil+suf,
		color: theCylon.color,
        bg: '#000000',
    }, {
        txt: ' ]'+rep(' ', theCylon.post),
        color: '#8e8ee3',
        bg: '#111111',
        bold: true
    }, {
        txt: end,
        color: '#ccccee',
        bg: '#111111',
        bold: true
    }, {
        txt: '\n'
    }], () => {});
};
const stepCylon = () => {
    if (theCylon.position >= theCylon.max || theCylon.position <= 0) theCylon.direction *= -1;
    theCylon.position += theCylon.direction;
    if (currentEye < lastEye) currentEye++;
    else currentEye = 0;
    theCylon.pupil = eyes[currentEye];
};
let inter = null;
const exp = {
    conf: (obj) => {
        for (var prop in defaultCylon) {
            if (!obj.hasOwnProperty(prop)) obj[prop] = defaultCylon[prop];
        }
        buildCylon(obj);
    },
    run: () => {
        if (!theCylon) buildCylon(defaultCylon);

		xcon.back();
        xcon.post([{
            txt: theCylon.msg+'\n',
            color: theCylon.msgColor,
            bg: '#111111',
            bold: true
        }, {
            txt: '\n\n'
        }, ], () => {
            renderCylon(theCylon);
            inter = setInterval(function () {
                stepCylon(theCylon);
                renderCylon(theCylon);
            }, theCylon.ms);
        });
    },
    off: () => {
        if (inter) clearInterval(inter);
    },
};
module.exports = exp;
