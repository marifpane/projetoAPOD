$("form").submit(function (event) {
    event.preventDefault();

    var data = document.querySelector("#data").value;
    console.log(data);
    

    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=qB1MOvbomL5FCXN0Agy8otHAKdV8afAXUH0ykbhd&date=${data}`,
        success: function (data){
            $("#imagem").attr(`src`, data.url);
            $("#titulo").text(data.title);
            $("#explicar").text(data.explanation);
            $("#autor").text(data.autor);

        },
    })

})
