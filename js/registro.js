function Botton(){
    let Email1=$("#Email1").val();
    let Email2=$("#Email2").val();
    let Password=$("#Password").val();
    let Nombre=$("#Nombre").val();
    let Foto=$("#Foto").val();
    let Github=$("#Github").val();
    if(Email2.length ==0 || Email1.length ==0 || Password.length ==0 || Nombre.length ==0 || Foto.length ==0 ||Github.length ==0){
        alert("No has pesto el correo"+Email1+" el Nombre"+Nombre+", URL de la foto"+Foto+", el Github"+Github+" o el password"+Password+" por favor colocalo muy importante");
    }
    else{
        let mail=$("#Email1").val();
        let mail2=$("#Email2").val();
        if(Email1!==Email2){
            alert("El Email1"+Email1+"no coinside con el Email2"+Email2+"por favor verificelo")
        }
        else{
            let data={
                "nombre":Nombre,
                "foto":Foto,
                "github":Github,
                "email":Email1,
                "password":Password
            };
            $.post("https://cb-api-gdl.herokuapp.com/api/alumnos",data)
                .done(function(resp){
                    console.log(resp);
                    window.location="index.html";
                })
                .fail(function(resp){
                    console.log(resp);
                })
        }
    }
}     