function starting(){
    var output;
    if(document.getElementById('myselect').value=="encryption")
        output=encryption();
    else
        output=decryption();
    return output;
}

function encryption(){
    var key=document.getElementById('key').value;
    var input=document.getElementById('input').value;
    return "enc";
}

function decryption(){
    var key=document.getElementById('key').value;
    var input=document.getElementById('input').value;
    return "xxx";
}