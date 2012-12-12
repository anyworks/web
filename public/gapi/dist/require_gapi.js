(function(){
    var root = "../dist";
    var load_1st = [
        root+"/gapi/constants.js"
        ,"http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"
        ,'https://apis.google.com/js/client.js'
    ];
    var load_2nd = [
        ,root+'/gapi/helper_gapi.js'
    ];
    var load_3rd =[
        "http://ajax.aspnetcdn.com/ajax/jquery.templates/beta1/jquery.tmpl.min.js"
    ];
 
    require(load_1st,function() {
        require(load_2nd,function(){
            require(load_3rd,function() {
                require_gapi_finish();
            })
        });
    }
    );
})();