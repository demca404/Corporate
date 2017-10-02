$(function () {
    triangle();
    $(window).resize(function () {
        $('.design_right .triangle').hide();
        triangle();
    });
});

function triangle() {
    var height = $('.design_right').height() - 200;
    var width = $('.design_right').width();
    $('.design_right .triangle').css({
        borderLeft: width + 'px solid transparent',
        borderRight: '0 solid transparent',
        borderBottom: height + 'px solid #FF8181',
        display: 'block'
    });
}


$(function () {
    angle();
    $(window).resize(function () {
        $('.left_description .angle').hide();
        angle();
    });
});

function angle() {
    var height = $('.left_description').height();
    var width = $('.left_description').width() - 150;
    $('.left_description .angle').css({
        borderLeft: '0 solid FF8181',
        borderRight: width + 'px solid transparent',
        borderBottom: height + 'px solid #FF8181',
        display: 'block'
    });
}

if($(window).width() > 1440) {
    $(function () {
        macbook();
        $(window).resize(function () {
            $('.left_description .macbook').hide();
            macbook();
        });
    });

    function macbook() {
        var height = $('.left_description').height();
        var width = $('.left_description').width();
        $('.left_description .macbook').css({
            width: width + 'px',
            height: height + 'px',
            display: 'block',
            "background-size": 'contain'
        });
    }
} else {
    $(function () {
        macbook();
        $(window).resize(function () {
            $('.left_description .macbook').hide();
            macbook();
        });
    });

    function macbook() {
        var height = $('.left_description').height();
        var width = $('.left_description').width();
        $('.left_description .macbook').css({
            width: width + 'px',
            height: height + 'px',
            display: 'block'
        });
    }
}

if($(window).width() < 769) {
    $(function () {
        safari();
        $(window).resize(function () {
            $('.browser .safari_browser').hide();
            safari();
        });
    });

    function safari() {
        var width = $('.browser').width();
        $('.browser .safari_browser').css({
            height: width / 2.18 + 'px',
            display: 'block'
        });
    }
}