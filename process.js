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
    document.getElementById('G_key').value = key;
    return cypher;
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

function form_select(){
    if(document.getElementById('myselect').value=="encryption"){
        document.getElementById("output_area").style.display='block';
        document.getElementById("input_area").style.display='block';
        document.getElementById("key_block").style.display='none';
        document.getElementById("gkey_block").style.display='block';
        
        document.getElementById("input").value="";
        document.getElementById("output").value="";
    }
    else{
        document.getElementById("output_area").style.display='block';
        document.getElementById("input_area").style.display='block';
        document.getElementById("key_block").style.display='block';
        document.getElementById("gkey_block").style.display='none';
        document.getElementById("input").value="";
        document.getElementById("output").value="";
    }
}

function hide(){
    document.getElementById("output_area").style.display='none';
    document.getElementById("input_area").style.display='none';
    document.getElementById("key_block").style.display='none';
    document.getElementById("gkey_block").style.display='none';
}