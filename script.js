function myFunction() {

// XMR Object
var xhttp = new XMLHttpRequest();

// Event listener
xhttp.onreadystatechange = function() {

    if(this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(this.responseText);
        var mySno = "";
        var myName = "";
        var myQuant = "";
        var myUnit = "";
        var myDept = "";
        var myNotes = "";
        for(var i = 0;i<response.length;i++) {
            mySno += "<p>" + response[i].SNo + "</p>";
        }
        document.getElementById("mySerial").innerHTML = mySno;

        for(var j = 0;j<response.length;j++) {
            myName += "<p>" + response[j].Name + "</p>";
        }
        document.getElementById("myName").innerHTML = myName;

        for(var j = 0;j<response.length;j++) {
            myQuant += "<p>" + response[j].Quantity + "</p>";
        }
        document.getElementById("myQuant").innerHTML = myQuant;

        for(var j = 0;j<response.length;j++) {
            myUnit += "<p>" + response[j].Unit + "</p>";
        }
        document.getElementById("myUnit").innerHTML = myUnit;

        for(var j = 0;j<response.length;j++) {
            myDept += "<p>" + response[j].Department + "</p>";
        }
        document.getElementById("myDept").innerHTML = myDept;

        for(var j = 0;j<response.length;j++) {
            myNotes += "<p>" + response[j].Notes + "</p>";
        }
        document.getElementById("myNotes").innerHTML = myNotes;
    }

}
xhttp.open("GET" , "list.json" , true);
xhttp.send();

}
