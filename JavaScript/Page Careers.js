// To display X open positions
let numberOfTotalOffers = document.getElementsByClassName("offers").length;
document.getElementById("offersTotal").innerHTML = numberOfTotalOffers;
let XOpenPositions = document.getElementById("XOpenPositions");
if (numberOfTotalOffers === 0) {
    XOpenPositions.innerHTML = "We currently do not have any open position.";
} else if (numberOfTotalOffers === 1) {
    XOpenPositions.innerHTML = numberOfTotalOffers + "open position";
}

// Get all titles and put them in an array and add an onclick event on every open position title
let offersTitles = document.getElementsByClassName("offersTitles");
let offersTitlesAll = Array.from(offersTitles);
offersTitlesAll.forEach((offerTitle) => offerTitle.onclick = openOffer);

// When a title is clicked
function openOffer() {
    let thisOfferContent = this.nextSibling;
    let thisOfferClosed = this.getElementsByTagName('div')[0].getElementsByTagName('div')[0];
    let thisOfferOpen = this.getElementsByTagName('div')[0].getElementsByTagName('div')[1];

    // Show its content or hide it
    if (thisOfferContent.getAttribute("display") === null || thisOfferContent.getAttribute("display") === "null" || thisOfferContent.getAttribute("display") === "block") {
        thisOfferContent.style.display = "block";
        thisOfferClosed.style.display = "none";
        thisOfferOpen.style.display = "inline";
        // Reminder: setAttribute and style.display do not do that same!
        // We do this so we can enter the else loop next time
        thisOfferContent.setAttribute("display", "none");
    } else {
        thisOfferContent.style.display = "none";
        thisOfferClosed.style.display = "inline";
        thisOfferOpen.style.display = "none";
        // We do this so we can enter the if loop next time
        thisOfferContent.setAttribute("display", "block");
    }
}