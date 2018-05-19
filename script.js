
let library = JSON.parse(info);



document.write("<div class = \"container\">");




document.write("<div class=\"row\">");
document.write("<div id=\"topTitle\" class=\"col-md-12\">");
document.write("<h1>" + "MediaThek" + "<h1>");
document.write("<br>");
document.write("</div>");
document.write("</div>");




for (var i = 0; i < library.length; i++) {

    document.write("<div class=\"col-lg-4 col-md-6 col-sm-6\">");
    document.write("<div class=\"vid\">");
    document.write('<img src="' + library[i].img + '">' + '<br>');
    document.write("<b>" + "Type: " + "</b>" + library[i].Type + "<br>");
    document.write("<b>" + "Title: " + "</b>" + library[i].Title + "<br>");
    document.write("<b>" + "Rating: " + "</b>");
    for (var j = 0; j < library[i].Rating; j++) {
        document.write("<span>" + '&starf;' + "</span>");
    }
    document.write("<br></br>");

    document.write("<div class=\"popup\">");




    document.write("<label>" + "More details" + "</label>");
    document.write("</div>");

    document.write("</div>");
    document.write("</div>");



}
document.write("</div>");
document.write("<hr>");

document.write("<footer>" + "All right reserved &copy; 2018" + "<br>" + "Alexander Hardo" + "</footer>");