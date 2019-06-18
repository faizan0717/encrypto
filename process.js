function starting(){
    var output;
    if(document.getElementById('myselect').value=="encryption")
        output=encryption();
    else
        output=decryption();
    return output;
}

function encryption(){
    var key = Math.floor(Math.random() * 4) + 1;
    var input=document.getElementById('input').value;
    var ascii_real;
    var cypher="";
    for(i=0; i<input.length;i++)
        {
            cypher=cypher+String.fromCharCode((input.charCodeAt(i))+key);
        }
    return cypher+key;
}

function decryption(){
    var key=document.getElementById('key').value;
    var input=document.getElementById('input').value;
    var plain="";
        for(i=0; i<input.length;i++)
        {
            plain=plain+String.fromCharCode((input.charCodeAt(i))-key);
        }
    return plain;
}