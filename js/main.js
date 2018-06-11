$('.name').on('mouseenter', function () {
   const $this = $(this),
       $iconArrow = $this.find('i');
   $iconArrow.addClass('icon-rotate');
});

$('.name').on('mouseleave', function () {
    const $this = $(this),
        $iconArrow = $this.find('i');
    $iconArrow.removeClass('icon-rotate');
});