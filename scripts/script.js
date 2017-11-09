/* js my portfolio proyect*/

$(function(){

    navbar();
    footer();
    menuSlider();
    clientesSlider();
    pensamientoDelDia();
});




function menuSlider(){
    var clickEvent = false;
    $('#myCarousel').on('click', '.nav a', function() {
        clickEvent = true;
        $('.nav li').removeClass('active');
        $(this).parent().addClass('active');		
    }).on('slid.bs.carousel', function(e) {
        if(!clickEvent) {
            var count = $('.nav').children().length -1;
            var current = $('.nav li.active');
            current.removeClass('active').next().addClass('active');
            var id = parseInt(current.data('slide-to'));
            if(count == id) {
                $('.nav li').first().addClass('active');	
            }
        }
        clickEvent = false;
    })
}

function clientesSlider(){

    $('#carousel-item').carousel({
        interval: 2000
    });

    $('.carousel-multiItem  .item').each(function() {
        var itemToClone = $(this);

        for (var i = 1; i < 3; i++) {
            itemToClone = itemToClone.next();

            if (!itemToClone.length) {
                itemToClone = $(this).siblings(':first');
            }

            itemToClone.children(':first-child').clone()
                .addClass("cloneditem-" + (i))
                .appendTo($(this));

            $(".carousel-multiItem ").find(".item").css("transition", "200ms ease-in-out all  ").css("transition", "200ms ease-in-out all").css("backface-visibility", "visible").css("transform", "none!important")


        }
    })
}

function navbar(){
    $( "#menuclass" ).load( "/html/load.html #menuclass" );
}

function footer(){
    $( "#footer" ).load( "/html/load.html #footer" );

};

function pensamientoDelDia(elementIndex){
    var pensamientos=$("#pensamientos");
    console.log(pensamientos);
    var info = thoughtoftheday[0].thought;

    var sentence= info[elementIndex].frase;
    var autor =info[elementIndex].nombre;

    var todo = $("<div class='center'></div>");
    var frase = $("<h2 class='frase'></h2>");
    var nombre = $("<p class='autor'></p>");

    
    //seleccion random de las frases------------------------------
    
    nombre.append(autor);
    frase.append(sentence);

    todo.append(frase);
    todo.append(nombre);

    pensamientos.append(todo);


};

