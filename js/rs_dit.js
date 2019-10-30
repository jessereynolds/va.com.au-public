var dit_window;
var dit_window_properties = "toolbar=0,location=0,resizable=1,status=1,scrollbars=1,width=800,height=550";
var dit_key = 'bDiB8QMjTkTRlCgTkRa6';
var dit_URL = 'http://new.dnhd.net';

function OpenPopUp(dit_program, dit_session, form_handle) {
   if (dit_window && !dit_window.closed) {
      dit_window.close()
   }
   var dit_fields="&REF="+document.domain+"&";

   var dit_ofields = dit_program.split("?");
   if ( dit_ofields[1] ) {
      dit_fields+=dit_ofields[1]+"&";
   }

   /* if form is passed then get all fields */
   if (arguments.length == 3) {
      for (var i = 0; i < form_handle.elements.length; i++) {
         dit_fields += form_handle.elements[i].name + "=" + form_handle.elements[i].value +"&";
      }
   }
   if ( dit_session == 1 ) {
      dit_fields+="LOC="+dit_program;
      dit_window=window.open(dit_URL+"/cgi-bin/session.pl?APK=" + dit_key + dit_fields,'DIT',dit_window_properties);
   }
   else {
      dit_window=window.open(dit_URL+dit_program+"?APK=" + dit_key + dit_fields,'DIT',dit_window_properties);
   }
   dit_window.focus()
}
function ClosePopUp() {if (dit_window && !dit_window.closed) {dit_window.close()}}

function OpenPage(dit_program, dit_session, form_handle) {
   var dit_fields="&REF="+document.domain+"&";

   var dit_ofields = dit_program.split("?");
   if ( dit_ofields[1] ) {
      dit_fields+=dit_ofields[1]+"&";
   }

   /* if form is passed then get all fields */
   if (arguments.length == 3) {
      for (var i = 0; i < form_handle.elements.length; i++) {
         dit_fields += form_handle.elements[i].name + "=" + form_handle.elements[i].value +"&";
      }
   }
   if ( dit_session == 1 ) {
      dit_fields+="LOC="+dit_program;
      location.href=dit_URL+"/cgi-bin/session.pl?APK=" + dit_key + dit_fields;
   }
   else {
      location.href=dit_URL+dit_program+"?APK=" + dit_key + dit_fields;
   }
}

function OpenIFrame(iframe_name, dit_program, dit_session) {
   var dit_fields="&REF="+document.domain+"&";

   var dit_ofields = dit_program.split("?");
   if ( dit_ofields[1] ) {
      dit_fields+=dit_ofields[1]+"&";
   }

   if ( dit_session == 1 ) {
      dit_fields+="LOC="+dit_program;
      frames[iframe_name].location.href = dit_URL+"/cgi-bin/session.pl?APK=" + dit_key + dit_fields;
   }
   else {
      frames[iframe_name].location.href = dit_URL+dit_program+"?APK=" + dit_key + dit_fields;
   }
}
