function myFunction() {
    document.getElementById("dot-animation").style.display = "none";
    document.getElementById("space").style.display = "none";

    // XMR Object
    var xhttp = new XMLHttpRequest();

    // Event listener
    xhttp.onreadystatechange = function() {

        if(this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
            var tableContents = "";

            for (var x in response) {
                tableContents += `<tr class='tableRow'>
                                <td class='colm'> ${response[x].SNo} </td>
                                <td class='colm'> ${response[x].Name} </td>
                                <td class='colm'> ${response[x].Quantity} </td>
                                <td class='colm'> ${response[x].Unit} </td>
                                <td class='colm'> ${response[x].Department} </td>
                                <td class='colm'> ${response[x].Notes} </td>
                                </tr>`;
            }
        document.getElementById("tableBody").innerHTML = tableContents;
        console.log(response);
        }

    }
    xhttp.open("GET" , "list.json" , true);
    xhttp.send();

}
