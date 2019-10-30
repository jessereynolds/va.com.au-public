defaultsubpage="https://www.va.com.au/archives/noise2001/www.noise2001.net.au/cocoon/noise/home_new.xml.html";



if (location.search) {subpage=location.search.substring(1)}



else {subpage=defaultsubpage}







if (subpage.indexOf('&&&')>=0) {



	prefix=subpage.substring(0,subpage.indexOf('&&&'))+"://";



	suffix=subpage.substring(subpage.indexOf('&&&')+3,subpage.length);



	subpage=prefix+suffix;



}



// 



