$(document).ready(function () {
    let url = "https://cb-api-gdl.herokuapp.com/api/alumnos/"
    let search = new URLSearchParams(window.location.search)
    url += search.get("id")
    url += "?access_token=" + search.get("access_token")

    $.getJSON(url)
        .done(function (resp) {
            $("#nombre").text(resp.nombre);
            $("#Github").text(resp.github);
            $("#musica").text(resp.musica);
            $("#contenedor img").text("src", resp.foto);
            $("#bio").text(resp.bio);
    }).fail(function(resp){
        window.location.href="index.html"
    });
});