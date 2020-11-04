

const cryptoTS = require('crypto-ts')


const dd_cript = {
    algorithm: 'aes256',
    password: 'key',
    type: 'hex'
};

// const cipher = crypto.createCipheriv(dd_cript.algorithm, dd_cript.password);
// cipher.update(senha)
// cipher.final(dd_cript.type)

function criptografar(senha) {
    const cipher = crypto.createCipheriv(dd_cript.algorithm, dd_cript.password);
    cipher.update(senha);
    return cipher.final(dd_cript.type);
};
