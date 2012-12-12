google APIs(javascript call) Test
========
  
dependencies

1. require.js (2.1.2)
2. google APIs
3. jQuery

1st step (loaded callback:jsLoad)
--------

Synchronously load　"js libs"

```javascript
require([
    "gapi/constants.js",
],
function() {
 require([
          'gapi/helper_gapi.js',
          'http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js',
          'https://apis.google.com/js/client.js',
          ],function(){
    require([
        'http://ajax.aspnetcdn.com/ajax/jquery.templates/beta1/jquery.tmpl.min.js',
        'http://ajax.googleapis.com/ajax/libs/jqueryui/1.9.2/jquery-ui.min.js'
         ],function() {
            require_tools_finish();
        });
    });
}
);
```

2nd step
--------

google APIs client load( **use jQuery.Deferred** )

1. Synchronously load "oauth"
2. **a**synchronously load "client APIs"

```javascript
	function jsLoaded(){
		helper.gapi.functions.authorize(["drive","calendar"]).done(function(res){
		  var apis = [
		      helper.gapi.functions.loadBy("drive","v2"),
		      helper.gapi.functions.loadBy("calendar","v3")
		  ];
		  
		  $.when.apply(null,apis).then(function(data){
		  	//use gapi client code here.
		  })    
		});
	}
```

    