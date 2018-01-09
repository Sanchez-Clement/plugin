var conversation;
Front.on('conversation', function (data) {

    conversation = data.conversation;
});

$.ajax({
    url: 'fichier.php',
    data: 'maVariable='+ conversation,
   /* success: function(reponse) {
        alert(reponse); // reponse contient l'affichage du fichier PHP (soit echo)
    }*/
});

