function Botton2() {
    let Email = $("#Email").val();
    let Password = $("#Password").val();
    if (Email.length == 0 || Password.length == 0) {
        alert("No se puede abrir la cuenta por qur el Email" + Email + " o el Password" + Password + " no tiene nada")
    }
    else {
        let data = {
            "email": Email,
            "password": Password
        };
        $.post("https://cb-api-gdl.herokuapp.com/api/alumnos/login", data)
            .done(function (resp) {
                console.log(resp);
                window.location.href = "perfil.html?id="+resp.userId+"&access_token="+resp.id;
            })
            .fail(function (resp) {
                console.log(resp);
            });
    }
}
function Botton() {
    window.location = "registro.html";
}