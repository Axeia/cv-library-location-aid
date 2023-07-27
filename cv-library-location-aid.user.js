// ==UserScript==
// @name     		CV-Library location aid
// @namespace		https://www.cv-library.co.uk
// @description	Turns the location text on job pages into a google maps link
// @version  		1
// @grant    		none
// @match    		https://www.cv-library.co.uk/job/*
// @downloadURL https://raw.githubusercontent.com/Axeia/cv-library-location-aid/main/cv-library-location-aid.js
// @installURL 	https://raw.githubusercontent.com/Axeia/cv-library-location-aid/main/cv-library-location-aid.js
// @homepageURL	https://github.com/Axeia/cv-library-location-aid/
// ==/UserScript==

var xpathResult = document.evaluate("//header[@class='job__header']//dd[@data-jd-location]", document.body)
firstAndOnlyResult = xpathResult.iterateNext()

var locationText = firstAndOnlyResult.innerText

var googleMapsUrl = new URL('https://www.google.com/maps/search/')
googleMapsUrl.searchParams.append('api', 1)
googleMapsUrl.searchParams.append('query', locationText)

firstAndOnlyResult.innerHTML = '<a href="'+googleMapsUrl.href+'">'+locationText+'</a>'
