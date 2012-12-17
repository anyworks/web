	var selectedFile="";
  
    var compParts = ["G1","G2","Bass","Dr","Key","Vo"];
  
    function load_list(){
        var folderid_list = $.map(folderMap,function(folderid,k){
            var hpexp = helper.gapi.functions.createFileExplorer().addFields(["title","webContentLink"]);
             return hpexp.list(folderid).promise();
        });
        $.when.apply(null,folderid_list).done(
            function(){
                $.each(arguments,function(idx,success_dt){
                    var parentElem = "#" + success_dt.folderid;
                    
                    $.each(compParts,function(idx,compp){
                        var tgt = $(parentElem + "  ." + compp);
                        if(success_dt[compp]){
                            tgt.empty();
                            $("#compListTmpl").tmpl(success_dt[compp]).appendTo(tgt);
                        }else{
                            tgt.empty();
                            $("#closeListTmpl").tmpl({}).appendTo(tgt);
                        }
                    });

                });
            }
        );
    }
  
	