function framesReturn()

{

	framesetpage="http://www.noise2001.net.au/cocoon/noise/frames.xml";

	thispage=window.location.href;

	if (thispage.indexOf('://')<0) {thispage="://"+thispage;};

	prefix=thispage.substring(0,thispage.lastIndexOf('://'));

	suffix=thispage.substring(thispage.lastIndexOf('://')+3,thispage.length);

	//alert('return: the subpage is:['+prefix+']['+suffix+']');

	if (parent.location.href==window.location.href) {parent.location.href=framesetpage+"?"+prefix+"&&&"+suffix};

}

// 