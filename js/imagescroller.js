$(document).ready(function () {
    var isDragging, leftMove, curX;

    $('#container').mousedown(function (e) {
        e.preventDefault;
    });

    $('#imageContainer').mousedown(function (e) {
        isDragging = true;
        curX = e.pageX;
        e.preventDefault;
    });

    $(document).mouseup(function (e) {
        isDragging = false;

        e.preventDefault;
    });

    $('#imageContainer').mousemove(function (e) {
        console.log(isDragging);
        if (!isDragging) {
            return;
        }

        leftMove = e.pageX - curX;

        $('#imageContainer').animate({
            left: '+=' + leftMove
        }, 10);
    });
});
