$(document).ready(function () {
    function getRandomSize(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
    for (var i = 0; i < 10; i++) {
        var width = getRandomSize(200, 300);
        var height = getRandomSize(200, 300);
        $('#photos').append('<img src="http://www.lorempixel.com/' + width + '/' + height + '/cats" alt="pretty kitty">');
    }
});
