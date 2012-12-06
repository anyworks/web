require([
    "/javascripts/gapi/constants.js",
],
function() {
 require([
          '/javascripts/gapi/helper_gapi.js',
          'https://apis.google.com/js/client.js',
          ],function(){
    require([
         "http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js",
         "http://ajax.aspnetcdn.com/ajax/jquery.templates/beta1/jquery.tmpl.min.js",
         "http://ajax.googleapis.com/ajax/libs/jqueryui/1.9.2/jquery-ui.min.js",
         "/javascripts/libs/validate.js"
         ],function() {
            jsLoaded();
        });
    });
}
);
