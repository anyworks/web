require([
     "gapi/dist/gapi/constants.js"
    ,"javascripts/libs/modernizr.js"
    ,"http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"
    ,'https://apis.google.com/js/client.js'
],
function() {
    require([
        "javascripts/libs/jquery-ui-1.9.2.custom/js/jquery-ui-1.9.2.custom.min.js"
        ,'gapi/dist/gapi/helper_gapi.js'
        ,'javascripts/libs/jqsimplemenu.js'
    ],function(){
        require([
            "http://ajax.aspnetcdn.com/ajax/jquery.templates/beta1/jquery.tmpl.min.js"
            ,"javascripts/libs/pnotify-1.2.0/jquery.pnotify.min.js"
        ],function() {
            require([
            ],function(){
                $(document.body).css("display","");
                $('.jq-menu').jqsimplemenu();
                $.pnotify.defaults.styling = "jqueryui";
                if (!('console' in window)) {
                        window.console = {};
                        window.console.log = function(str){
                        return str;
                    };
                }
                require_tools_finish();
            })
        });
    });
}
);
