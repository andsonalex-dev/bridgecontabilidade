function GetXMLHttp() {
    if(navigator.appName == "Microsoft Internet Explorer") {
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    else {
        xmlHttp = new XMLHttpRequest();
    }
    return xmlHttp;
}
 
var xmlRequest = GetXMLHttp();
 
function abrirPag(valor){
    var url = valor;
 
    xmlRequest.open("GET",url,true);    
    xmlRequest.onreadystatechange = alterarPag;
    xmlRequest.send(null);
 
        if (xmlRequest.readyState == 1) {
            document.getElementById("content");
            //document.getElementById("content").innerHTML = "<img src='images/loader.gif'>";
        }
 
    return url;
}
function alterarPag(){
    if (xmlRequest.readyState == 4){
        document.getElementById("content").innerHTML = xmlRequest.responseText;
    }
}