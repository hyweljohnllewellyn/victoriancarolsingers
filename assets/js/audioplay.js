$("map[name=my_image] area").on('click', function () {
var $this = $(this);
var id = $this.attr('id');

$.each($('audio'), function () {
   this.pause();
});

    $this.toggleClass('active');
    if($this.hasClass('active')){
        $this.text('pause');
        id.play();
    } else {
        $this.text('play');
        id.pause();
    }
});
