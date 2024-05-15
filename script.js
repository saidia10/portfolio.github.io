$(document).ready(function() {
    $('.section').each(function(index) {
        $(this).delay(index * 300).addClass('show');
    });
});
