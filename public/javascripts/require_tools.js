require([
     "javascripts/gapi/constants.js"
    ,"javascripts/libs/modernizr.js"
    ,"http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"
    ,'https://apis.google.com/js/client.js'
],
function() {
    require([
        "javascripts/libs/jquery-ui-1.9.2.custom/js/jquery-ui-1.9.2.custom.min.js"
        ,'javascripts/gapi/helper_gapi.js'
    ],function(){
        require([
            ,"http://ajax.aspnetcdn.com/ajax/jquery.templates/beta1/jquery.tmpl.min.js"
            ,"javascripts/libs/pnotify-1.2.0/jquery.pnotify.min.js"
        ],function() {
            require([
            ],function(){
                require_tools_finish();
            })
        });
    });
}
);
