require([
    "javascripts/libs/modernizr.js"
    ,"http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"
],
function() {
    var requires = [];
//    requires.push("javascripts/libs/mobile/jquery.jcarousel.min.js");
//    if(Modernizr.touch){
        //requires.push("javascripts/libs/mobile/jquery.mobile-1.2.0.min.js");
//    }
    require(requires,function(){
        require_check_client_finish();
    });
}
);
