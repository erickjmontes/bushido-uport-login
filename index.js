const fs = require('fs');
const { Credentials } = require('uport-credentials');
const file_pk = "priv_key.txt";
const file_credential = 'credential.txt'
const new_credential = Credentials.createIdentity();

fs.writeFile(file_pk, new_credential.privateKey, (err) =>{
    if(err) throw err;
    console.log(`PK almacenada '${file_pk}'`);
})

fs.writeFile(file_credential, new_credential, (err) =>{
    if(err) throw err;
    console.log(`Credencial almacenada '${file_credential}'`);
})