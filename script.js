// Select all elements with the class "tab-links" and "tab-contents"
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

// Function to switch between tabs
function opentab(tabname) {
    // Remove "active-link" class from all tab links
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    // Remove "active-tab" class from all tab contents
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    // Add "active-link" class to the clicked tab link
    event.currentTarget.classList.add("active-link");

    // Add "active-tab" class to the corresponding tab content
    document.getElementById(tabname).classList.add("active-tab");
}


           /* ------sidemenu-----*/
var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.display = "block";
}

function closemenu() {
    sidemenu.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function() {
    sidemenu.style.display = "none";
});


