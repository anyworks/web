helper = {};helper.gapi={};
helper.gapi.functions = {};
helper.gapi.helpers = {};

//helpers
helper.gapi.newMultipartHelper = function(boundary){
    return {
        _val : "",
        _boundary : boundary || '-------314159265358979323846',
        crlf : function(){
            this._val += '\r\n';
            return this;
        },
        boundary:function(){
            this._val += this._boundary;
            return this;
        },
        delimiter:function(){
            this.crlf()
            this._val += "--";
            this.boundary();
            this.crlf()
            return this;
        },
        delimiter_close:function(){
            this.crlf()
            this._val += "--";
            this.boundary()
            this._val += "--";
            return this;
        },
        initial_body_request : function(file_name,file,folderid){
           type_content =  'application/octet-stream';
           var json_meta = {
                title : file_name,
                mimeType : type_content,
                parents : [
                    {"id":folderid}
                ]
           }
            //build first part       
            this.delimiter();
            this._val += 'Content-Type: application/json';
            this.crlf().crlf();
            this._val += JSON.stringify(json_meta);
            //build second part
            this.delimiter();
    
           this._val += 'Content-Type: ' + type_content;
           this.crlf();
           this._val += 'Content-Transfer-Encoding: base64';
           this.crlf();
           this.crlf();
    
           this._val += btoa(file);       
           this.delimiter_close();
           return this._val;
        },
        content_type_multipart : function(){
            return 'multipart/mixed; boundary="' + this._boundary + '"';
        }
    }
}

//short cut functions
helper.gapi.functions.authorize = function(scopeNames,force){
    scopeNames = scopeNames || ['drive'];   //test code default drive
    var scopesAry = $.map(scopeNames,function(v,idx){
        return "https://www.googleapis.com/auth/" + v;
    });
    var scopes = scopesAry.join(" ");
    
    console.log("auth request:" + scopes);
    var df = $.Deferred();
    gapi.auth.authorize(
    {client_id: constants.gapi.client_id, scope: scopes, immediate: true}, function(res){
        if((!gapi.auth || !gapi.auth.getToken())){
            console.log("!!!auth fail!!!");
            if(!force){
                df.reject("gapi.auth not exists:" + scopes);
            }else{
                console.log("auth fail[force mode]");
                df.resolve("auth fail[force mode]");
            }
        }else{
            console.log("auth success[token]" + gapi.auth.getToken());
            df.resolve(res);
        }
    });
    return df.promise();
}

        
helper.gapi.functions.loadBy = function(api,v){
    var df = $.Deferred();
    gapi.client.setApiKey(constants.gapi.api_key);
    gapi.client.load(api, v, function(){
        console.log("load success:" + api);
        df.resolve("loaded:" + api);
        });
    return df.promise();
}

/*
* google drive file list( filter:folder id )
*/
helper.gapi.functions.listFilesBy = function (gcond){
    console.log("query:" + gcond["q"]);
    var df = $.Deferred();
    var initialRequest = gapi.client.drive.files.list(gcond);
    var val=[];
    initialRequest.execute(function(resp){
        $(resp.items).each(function(ix,v){
            val.push(v);
        });
        console.log(val);
        df.resolve(val);
    });
    return df.promise();
}

//filder not use
helper.gapi.functions.uploadFile = function (fileName,uploadFile,folderid){
    var df = new $.Deferred();
    var reader = new FileReader();
    reader.onload = function(e) {
       var mth = helper.gapi.newMultipartHelper();
       var multipartRequestBody = mth.initial_body_request(fileName,reader.result,folderid);
    
       var request = gapi.client.request({
           'path': '/upload/drive/v2/files',
           'method': 'POST',
           'params': {
                       'uploadType': 'multipart'
                     },
           'headers': {
             'Content-Type': mth.content_type_multipart()
           },
           'body': multipartRequestBody
       });                
       request.execute(function(e){
          console.log(e);
          if(e.error){
              df.reject(e);
          }else{
              df.resolve(e);
          }
       });
    }
    reader.readAsBinaryString(uploadFile);
    return df.promise();
}

/**
 * sample: google drive create folder 
 */
helper.gapi.functions.createFolder = function(folderName){
    var body = {
      'title': folderName,
      'mimeType': "application/vnd.google-apps.folder"
    };
    var request = gapi.client.drive.files.insert({
      'resource': body
    });
    request.execute(function(resp) {
      console.log('Folder ID: ' + resp.id);
    });
}
  
  
//gapi.client.calendar.events.insert
helper.gapi.functions.addScheduler = function (calendarId){
    
    var module = {
        "calendarId":calendarId,
        data :function (start,end){
            return {
                "calendarId":calendarId,
                "resource" : {
                    "end":{
                        "date":start
                    },
                    "start":{
                        "date":end
         //               "timeZone": "GMT+9"
                    }
                }
            }
        },
        now : function(){
            this.at(new Date);
            return this;
        },
        at : function(dt){
            this.init(dt)
            return this;
        },
        init : function(dt){
            this.pdate = [dt.getFullYear(),dt.getMonth()+1,dt.getDate()];
            this.ptime = [dt.getHours(),dt.getMinutes()+1,dt.getSeconds()];
            this.pmsec = [dt.getMilliseconds];

            var startDate = this.pdate.join("-");
            var params = this.data(startDate,startDate);
            this.json = params;
            return this;
        },
        addR :function (k,v){
            this.json.resource[k] = v;
            return this;
        },
        getJson : function(title,descripion){
            return this.json;
        }
    }
    return module;
};