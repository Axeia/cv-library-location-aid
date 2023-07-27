// ==UserScript==
// @name     CV-Library location aid
// @version  1
// @grant    none
// @match    https://www.cv-library.co.uk/job/*
// ==/UserScript==

var xpathResult = document.evaluate("//header[@class='job__header']//dd[@data-jd-location]", document.body)
firstAndOnlyResult = xpathResult.iterateNext()

var locationText = firstAndOnlyResult.innerText

var googleMapsUrl = new URL('https://www.google.com/maps/search/')
googleMapsUrl.searchParams.append('api', 1)
googleMapsUrl.searchParams.append('query', locationText)

console.log(firstAndOnlyResult)
firstAndOnlyResult.innerHTML = '<a href="'+googleMapsUrl.href+'">'+locationText+'</a>'
