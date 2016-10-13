$(document).ready(function() {

    var i = 0;                         // compteur
    var $img = $('#carousel img');     // cible les images du carousel
    var indexImg    = $img.length - 1; // index du dernier élément
    var $currentImg = $img.eq(i);      // cible l'image courante

    // Masquage de toutes les images et affichage de l'image courante
    $img.hide();
    $currentImg.show();

    // Ajout des boutons contrôles
    $('#carousel').append(
        $('<div/>', {class:"carousel-nav"}).append(
            $('<button/>', {class:"prev ui-button ui-widget ui-corner-all"}).text('<<'),
            $('<span/>', {class:"carousel-btn"}),
            $('<button/>', {class:"next ui-button ui-widget ui-corner-all"}).text('>>')
        )
    );
    $.each( $img, function( i, val ) {
        $('.carousel-btn').append($('<button/>', {'id': i}).text(i+1));
    });

    $('.carousel-btn button').button();
    $('.carousel-btn button').click(function(event) {
        event.preventDefault();
        $img.hide();
        $currentImg = $img.eq(event.target.id);
        $currentImg.show();
    });

    // Action : image suivante
    $('.next').click(function() {
        if(i < indexImg) { i++; } else { i = 0; }
        $img.hide();
        $currentImg = $img.eq(i);
        $currentImg.show();
    });

    // Action : immage suivante
    $('.prev').click(function() {
        if(i > 0) { i--; } else { i = indexImg; }
        $img.hide();
        $currentImg = $img.eq(i);
        $currentImg.show();
    });

    //
    function slideImg() {
        setTimeout(function() { // on utilise une fonction anonyme
            if(i < indexImg) { i++;
            } else           { i = 0;
            }
        	$img.hide();
        	$currentImg = $img.eq(i);
        	$currentImg.show();
        	slideImg(); // relance la fonction à la fin
        }, 7000);       // intervalle (7s)
    }
    slideImg(); // lance la fonction une 1ère fois
});
