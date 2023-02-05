const fs=require('fs')
const esprima=require('esprima')
const estraverse=require('estraverse')
const escodegen=require('escodegen')
const iconv=require('iconv-lite')
var content=fs.readFileSync('root.js',{encoding:'binary'});
var buf=new Buffer.from(content,'binary')
var code=iconv.decode(buf,'utf-8')
var ast=esprima.parse(code)
// console.log(ast)//写入文件位置
//大数组+解密function(直接从混淆JS里复制就行了)
//var _0x5c85=function(...){...} //解密函数
//大数组+解密function结束
var encode_version = 'jsjiami.com.v5'
    , bokcl = '__0xd1206'
    , __0xd1206 = ['w6NAdMORBA==', 'JmnCnMONZA==', 'c8Oawr3Dtg==', 'w6zDqsKZw7xq', 'ABdwA8Od', 'w5TDrQHCgVMnw5TDnQ==', 'PsOOwqw=', 'B8OvJw==', 'w6NAYg==', 'wpzDrcKoLy0=', 'w5JjL1LDng==', 'Xn3Ch8OHwr8=', '5Yq16ZmC54qQ5p2J5Y+V7761XcKd5Ly45a6g5p6Z5byt56qK', 'wqnDtMK/', 'w7h4cn4h', 'wq7Dp8K/asKF', 'DXAfXcKnMxYBwozDkwpIwrVr', 'w5sWw4vCqsKW', 'w7ZLZkIN', 'wqfDl8KzGgI=', 'WVbCjRoTwoJ5w5M/KsKPF8Ky', 'FkU5w5vCr2XDpBY=', 'C2wWVcKyNxBB', 'w71JwqsR', 'GsKYwrzCpsKkwpzCtA0=', 'w6NywpHDkmfDr8KnwrI=', 'FsOZCsKWfA==', 'BR1tPMOh', 'FxxfOMOa', 'w5JdHVXDlQ==', 'wpd3K0DDkcKt', 'wrBFbxQF', 'ecOqw6IOw7zDiMO9wqk=', 'w7ACIAlQw75HOQ==', 'wqQUwrsBR8OfUMKPQFk=', 'G8ORHcODEsOaAcK4w4wZw4nDssK3QcKZZ8OOA8Kcw4VsOQ==', 'w5PDsj7CnFU=', 'w7VGN8KQ', 'Ihh8Mw==', 'J8OCBg==', 'I1LCh0M='];
(function(_0x990a58, _0x37c73c) {
    var _0x17e457 = function(_0x24fcff) {
        while (--_0x24fcff) {
            _0x990a58['push'](_0x990a58['shift']());
        }
    };
    _0x17e457(++_0x37c73c);
}(__0xd1206, 0x10a));
var _0x5843 = function(_0x56fcc8, _0x513b3d) {
    _0x56fcc8 = _0x56fcc8 - 0x0;
    var _0x47fe8d = __0xd1206[_0x56fcc8];
    if (_0x5843['initialized'] === undefined) {
        (function() {
            var _0x58a508 = typeof window !== 'undefined' ? window : typeof process === 'object' && typeof require === 'function' && typeof global === 'object' ? global : this;
            var _0xdf89d4 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            _0x58a508['atob'] || (_0x58a508['atob'] = function(_0x93d9cd) {
                    var _0x141a44 = String(_0x93d9cd)['replace'](/=+$/, '');
                    for (var _0x13a8c6 = 0x0, _0x5d51e4, _0x333bc7, _0x59cce3 = 0x0, _0x5cc2d5 = ''; _0x333bc7 = _0x141a44['charAt'](_0x59cce3++); ~_0x333bc7 && (_0x5d51e4 = _0x13a8c6 % 0x4 ? _0x5d51e4 * 0x40 + _0x333bc7 : _0x333bc7,
                    _0x13a8c6++ % 0x4) ? _0x5cc2d5 += String['fromCharCode'](0xff & _0x5d51e4 >> (-0x2 * _0x13a8c6 & 0x6)) : 0x0) {
                        _0x333bc7 = _0xdf89d4['indexOf'](_0x333bc7);
                    }
                    return _0x5cc2d5;
                }
            );
        }());
        var _0xe8d774 = function(_0x12bd05, _0x2daa9a) {
            var _0x3a8ccb = [], _0x32342f = 0x0, _0x4d1718, _0xa54725 = '', _0x12bea8 = '';
            _0x12bd05 = atob(_0x12bd05);
            for (var _0x33f30e = 0x0, _0x2bc809 = _0x12bd05['length']; _0x33f30e < _0x2bc809; _0x33f30e++) {
                _0x12bea8 += '%' + ('00' + _0x12bd05['charCodeAt'](_0x33f30e)['toString'](0x10))['slice'](-0x2);
            }
            _0x12bd05 = decodeURIComponent(_0x12bea8);
            for (var _0x2f7117 = 0x0; _0x2f7117 < 0x100; _0x2f7117++) {
                _0x3a8ccb[_0x2f7117] = _0x2f7117;
            }
            for (_0x2f7117 = 0x0; _0x2f7117 < 0x100; _0x2f7117++) {
                _0x32342f = (_0x32342f + _0x3a8ccb[_0x2f7117] + _0x2daa9a['charCodeAt'](_0x2f7117 % _0x2daa9a['length'])) % 0x100;
                _0x4d1718 = _0x3a8ccb[_0x2f7117];
                _0x3a8ccb[_0x2f7117] = _0x3a8ccb[_0x32342f];
                _0x3a8ccb[_0x32342f] = _0x4d1718;
            }
            _0x2f7117 = 0x0;
            _0x32342f = 0x0;
            for (var _0x499899 = 0x0; _0x499899 < _0x12bd05['length']; _0x499899++) {
                _0x2f7117 = (_0x2f7117 + 0x1) % 0x100;
                _0x32342f = (_0x32342f + _0x3a8ccb[_0x2f7117]) % 0x100;
                _0x4d1718 = _0x3a8ccb[_0x2f7117];
                _0x3a8ccb[_0x2f7117] = _0x3a8ccb[_0x32342f];
                _0x3a8ccb[_0x32342f] = _0x4d1718;
                _0xa54725 += String['fromCharCode'](_0x12bd05['charCodeAt'](_0x499899) ^ _0x3a8ccb[(_0x3a8ccb[_0x2f7117] + _0x3a8ccb[_0x32342f]) % 0x100]);
            }
            return _0xa54725;
        };
        _0x5843['rc4'] = _0xe8d774;
        _0x5843['data'] = {};
        _0x5843['initialized'] = !![];
    }
    var _0x2a4c83 = _0x5843['data'][_0x56fcc8];
    if (_0x2a4c83 === undefined) {
        if (_0x5843['once'] === undefined) {
            _0x5843['once'] = !![];
        }
        _0x47fe8d = _0x5843['rc4'](_0x47fe8d, _0x513b3d);
        _0x5843['data'][_0x56fcc8] = _0x47fe8d;
    } else {
        _0x47fe8d = _0x2a4c83;
    }
    return _0x47fe8d;
};

ast=estraverse.replace(ast,{
    enter:function(node,parent){
        if(node.type=='CallExpression' &&
            node.callee.name=='_0x5843' && //解密function name= _0x5c85
            node.arguments.length==2){
            var val=_0x5843(node.arguments[0].value,node.arguments[1].value); //执行解密函数_0x5c85
            return{
                type:esprima.Syntax.Literal,
                value:val,
                raw:val
            }
        }
    }
})
code=escodegen.generate(ast)
console.log('完成.')
fs.writeFile("de_1.js",code,(err)=>{})