//The purpose of this is to redirect old football-courses URLs from spring-summer-football-courses to summer-football-courses, and removing the extra -2 at the end of some slugs
//This snippet only applies to Spring/Summer Football Courses because they are the only products to have URLs containing "spring-summer-football-courses"
//We must search for "spring-summer-football-courses" to be precise because there are other similar URLs on the website that we definitely don't want to involve here.
//This snippet doesn't serve anything but redirecting URLs, so a customer using an old one can access the correct one.
//Since the URLs have been updated by removing "spring-" and "-2" and customers may still use old URLs, we must redirect.  

//load a page
window.addEventListener("load", function() {
	let URL = window.location.href;

	//if the user accesses the old URL containing spring-summer-football-courses, then remove "spring-"
	if (URL.includes("spring-summer-football-courses-2")) {
		let newURLReplace = URL.replace("spring-summer-football-courses-2", "summer-football-courses");
		let newURL = newURLReplace;
		history.replaceState(null, '', newURL);
		window.location.href = newURL;
	};
	
	//Now, we went from intersoccer.ch/shop/lausanne-spring-summer-football-courses-2/ to intersoccer.ch/shop/lausanne-summer-football-courses/
});