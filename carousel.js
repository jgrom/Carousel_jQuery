$(document).ready(function() {

    var imgID = 0;
    var $img = $('#carousel img');     // cible les images du carousel
    var indexImg    = $img.length - 1; // index du dernier élément
    var $currentImg = $img.eq(imgID);     // cible l'image courante

    // Masquage de toutes les images et affichage de l'image courante
    $img.hide();
    $currentImg.show();

    // Ajout des boutons contrôles
    $('#carousel').append(
        $('<div/>', {class:"carousel-nav"}).append(
            $('<button/>', {class:"prev ui-button ui-widget ui-corner-all"}).text('<<'),
            $('<span/>'  , {class:"carousel-btn"}),
            $('<button/>', {class:"next ui-button ui-widget ui-corner-all"}).text('>>')
        )
    );
    $.each( $img, function( i, val ) {
        $('.carousel-btn').append($('<button/>', {'id': i}).text(i + 1));
    });

    $('.carousel-btn button').button();
    $('.carousel-btn button').click(function(event) {
        event.preventDefault();
        imgID = Number(event.target.id); //convertir en nombre
        changeImg(imgID, 0);
    });

    $('.next').click(function() { changeImg(imgID, 1); });
    $('.prev').click(function() { changeImg(imgID,-1); });

    //
    function changeImg(_imgID, dir) {
        imgID = _imgID + dir;
        if(imgID < 0)        { imgID = indexImg; }
        if(imgID > indexImg) { imgID = 0; }

        $img.hide();
        $currentImg = $img.eq(imgID);
        $currentImg.show();
    }

    // Auto
    function slideImg() {
        setTimeout(function() {
            changeImg(imgID, 1);
        	slideImg();
        }, 7000);
    }
    slideImg();
});
