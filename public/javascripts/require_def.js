(function(){
    'use strict';
    
    var module = {
        uses : [],
        useDefault:function(cb){
            define([ 'jquery','jquery.ascensor'],cb);
        }
    }

    requirejs.config({
        shim: {
         'jquery.ascensor': ['jquery']
        ,'jquery.easing': ['jquery']
        ,'jquery.scrollTo': ['jquery']
        ,'jquery.tmpl': ['jquery']
        ,'jquery.splmenu': ['jquery']
        ,'jquery.pnotify':['jquery']
        ,'any.gapi.util' : ['gapi','any.gapi.const']
        },
        baseUrl : '/javascripts',
        paths : {
             'jquery' : 'http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min'
            ,'any.gapi.const' : "/gapi/dist/gapi/constants" 
            ,'any.gapi.util' : "/gapi/dist/gapi/helper_gapi" 
            ,'mdn' : 'libs/modernizr'
            ,'jquery.splmenu' : 'libs/plugins/jqsimplemenu'

            ,'jquery.ascensor' : 'libs/plugins/jquery.ascensor'
            ,'jquery.easing' : 'libs/plugins/jquery.easing'
            ,'jquery.pnotify' : 'libs/pnotify-1.2.0/jquery.pnotify.min'
            //CDN
            ,'jquery.tmpl' : 'http://ajax.aspnetcdn.com/ajax/jquery.templates/beta1/jquery.tmpl.min'
            ,'gapi' : "https://apis.google.com/js/client"
        }
    });
    
    require_use(module);

})();

