$(document).ready(function(){
    var tree = $('.tree');
    var treeClicks = 0;

    $('nav a').hide();
    tree.click(function(){
        tree.jrumble({
            rumbleEvent: 'constant',
            rangeX: 2,
            rangeY: 3,
            rumbleSpeed:9,
            rangeRot: 1,
            rumbleTime:2000
        });

        switch(treeClicks){
            //used to be more actions, just keeping it simple for now.
            case 3:
                window.open('http://www.youtube.com/watch?v=oHg5SJYRHA0');
                break;
        }
        treeClicks++;
    });

    setTimeout(function(){
        $('.tree').trigger('click');
        setTimeout(function(){
            $('body').jrumble({
                rumbleEvent: 'constant',
                rangeX: 3,
                rangeY: 3,
                rumbleSpeed:8,
                rangeRot: 0,
                rumbleTime:1000
            });
            var i=0;
            $('nav a').each(function(){
                var self = $(this);
                setTimeout(function(){self.show();},100*i);
                i++;
            });
            var i=0;
            $('.article').each(function(){
                var self = $(this);
                setTimeout(function(){self.show();},100*i);
                i++;
            });
        },800);
    },1200);

});
