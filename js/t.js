(function() {
    var h = $(window).height();
    var l = $("#tclass").find("a").length;
    var v = (h - h * .4) / l;
    var d = h - (h - h * .4);
    var s = (h - (h - h * .4))+ v;
    var b = $(".tclass_item");
    var t = $("#tclass");
    var changee = true;
    var changeee = true;

    var mybody = document.getElementsByTagName('body')[0];
    console.log(v,s);
    function forlist(){
        for(i = 1; i < l; i++ ){
            b.eq(i).css("transform","translateY("+Math.floor((v * i)+d)+"px)");
            b.eq(i).addClass("onchange");
            }

    }
    function forlist2(){
        for(i = 1; i < l; i++ ){
            b.eq(i).css("transform","translateY("+Math.floor(v * i)+"px)");
            b.eq(i).removeClass("onchange");
        }
    }
    forlist();


    var startX, startY, moveEndX, moveEndY, X, Y;   
    mybody.addEventListener('touchstart', function(e) {
        e.preventDefault();
        startX = e.touches[0].pageX;
        startY = e.touches[0].pageY;
    }, false);
    mybody.addEventListener('touchmove', function(e) {
        e.preventDefault();
        moveEndX = e.changedTouches[0].pageX;
        moveEndY = e.changedTouches[0].pageY;
        X = moveEndX - startX;
        Y = moveEndY - startY;

        if (changee && Math.abs(Y) > Math.abs(X) && Y > 0) {
            touchDown();
            changee = false;
            //console.log("向下");
            setTimeout(function(){changee = true},500);
        }else if (changeee && Math.abs(Y) > Math.abs(X) && Y < 0 ) {
            touchUp();
            changeee = false;
            //console.log("向上");
            setTimeout(function(){changeee = true},500);
        }

    });  
    function touchUp(){
        var oc = $(".onchange");
        if(b.hasClass("onchange")){
            var ish = oc.eq(0).css("transform");
            ishh = parseInt(ish.replace(/[^0-9]/ig,""));
            // console.log(oc);
            oc.eq(0).css("transform","translateY("+Math.floor(ishh - d)+"px)");
            oc.eq(0).removeClass("onchange");
        }else{
            forlist();
        }
        changeee = true;
    }  
    function touchDown(){
        var oc = $(".onchange");
        var onl = oc.length;
        // console.log(onl);
        if(onl == l-1){
            forlist2();
            //console.log(2);
        }else if(onl == 0){
            var lsh = $(".tclass_item:last-child").css("transform");
            lshh = parseInt(lsh.replace(/[^0-9]/ig,""));
            //console.log(lshh);
            $(".tclass_item:last-child").css("transform","translateY("+Math.floor(lshh + d)+"px)");
            $(".tclass_item:last-child").addClass("onchange");
        }else{
            var br = oc.eq(0).prev();
            var bro = oc.eq(0).prev().css("transform");
            broo = parseInt(bro.replace(/[^0-9]/ig,""));
            br.addClass("onchange");
            br.css("transform","translateY("+Math.floor(broo + d)+"px)");
        }
        changee = true;
    }     
})();