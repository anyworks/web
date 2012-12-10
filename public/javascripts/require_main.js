require([
     "javascripts/gapi/constants.js"
    ,"javascripts/libs/modernizr.js"
],
function() {
 require([
          '/javascripts/gapi/helper_gapi.js',
          'https://apis.google.com/js/client.js',
          "http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"
          ],function(){
    require([
                "/javascripts/libs/jquery-ui-1.9.2.custom/js/jquery-ui-1.9.2.custom.min.js",
                "http://ajax.aspnetcdn.com/ajax/jquery.templates/beta1/jquery.tmpl.min.js"
         ],function() {
            require([
                "/javascripts/libs/pnotify-1.2.0/jquery.pnotify.min.js"
            ],function(){
                jsLoaded();
            })
        });
    });
}
);
