/* Disable right-click context menus. */
$(document).bind("contextmenu", function() {
    return false;
});

/* GREY SOULS */

/* Left-click to activate the icon, left-click again to disable it.
 * I copy-pasted this setup for every icon except for the Hint Card counter.
 */
$("#grave-keeper").on("click", function() {
    if ($("#grave-keeper").hasClass("grayscale") === true) {
        $("#grave-keeper").removeClass("grayscale");
    } else {
        $("#grave-keeper").addClass("grayscale");
    }
});

$("#malphas").on("click", function() {
    if ($("#malphas").hasClass("grayscale") === true) {
        $("#malphas").removeClass("grayscale");
    } else {
        $("#malphas").addClass("grayscale");
    }
});

$("#skeleton-blaze").on("click", function() {
    if ($("#skeleton-blaze").hasClass("grayscale") === true) {
        $("#skeleton-blaze").removeClass("grayscale");
    } else {
        $("#skeleton-blaze").addClass("grayscale");
    }
});

$("#kicker-skeleton").on("click", function() {
    if ($("#kicker-skeleton").hasClass("grayscale") === true) {
        $("#kicker-skeleton").removeClass("grayscale");
    } else {
        $("#kicker-skeleton").addClass("grayscale");
    }
});

$("#hippogryph").on("click", function() {
    if ($("#hippogryph").hasClass("grayscale") === true) {
        $("#hippogryph").removeClass("grayscale");
    } else {
        $("#hippogryph").addClass("grayscale");
    }
});

$("#galamoth").on("click", function() {
    if ($("#galamoth").hasClass("grayscale") === true) {
        $("#galamoth").removeClass("grayscale");
    } else {
        $("#galamoth").addClass("grayscale");
    }
});

/* YELLOW SOULS */

$("#undine").on("click", function() {
    if ($("#undine").hasClass("grayscale") === true) {
        $("#undine").removeClass("grayscale");
    } else {
        $("#undine").addClass("grayscale");
    }
});

$("#skula").on("click", function() {
    if ($("#skula").hasClass("grayscale") === true) {
        $("#skula").removeClass("grayscale");
    } else {
        $("#skula").addClass("grayscale");
    }
});

/* BLUE SOULS */

$("#flying-armor").on("click", function() {
    if ($("#flying-armor").hasClass("grayscale") === true) {
        $("#flying-armor").removeClass("grayscale");
    } else {
        $("#flying-armor").addClass("grayscale");
    }
});

$("#rush-soul").on("click", function() {
    if ($("#rush-soul").hasClass("grayscale") === true) {
        $("#rush-soul").removeClass("grayscale");
    } else {
        $("#rush-soul").addClass("grayscale");
    }
});

$("#giant-bat").on("click", function() {
    if ($("#giant-bat").hasClass("grayscale") === true) {
        $("#giant-bat").removeClass("grayscale");
    } else {
        $("#giant-bat").addClass("grayscale");
    }
});

$("#black-panther").on("click", function() {
    if ($("#black-panther").hasClass("grayscale") === true) {
        $("#black-panther").removeClass("grayscale");
    } else {
        $("#black-panther").addClass("grayscale");
    }
});

/* BOOKS & SOULS */

$("#red-book").on("click", function() {
    if ($("#red-book").hasClass("grayscale") === true) {
        $("#red-book").removeClass("grayscale");
    } else {
        $("#red-book").addClass("grayscale");
    }
});

$("#red-soul").on("click", function() {
    if ($("#red-soul").hasClass("grayscale") === true) {
        $("#red-soul").removeClass("grayscale");
    } else {
        $("#red-soul").addClass("grayscale");
    }
});

$("#blue-book").on("click", function() {
    if ($("#blue-book").hasClass("grayscale") === true) {
        $("#blue-book").removeClass("grayscale");
    } else {
        $("#blue-book").addClass("grayscale");
    }
});

$("#blue-soul").on("click", function() {
    if ($("#blue-soul").hasClass("grayscale") === true) {
        $("#blue-soul").removeClass("grayscale");
    } else {
        $("#blue-soul").addClass("grayscale");
    }
});

$("#yellow-book").on("click", function() {
    if ($("#yellow-book").hasClass("grayscale") === true) {
        $("#yellow-book").removeClass("grayscale");
    } else {
        $("#yellow-book").addClass("grayscale");
    }
});

$("#yellow-soul").on("click", function() {
    if ($("#yellow-soul").hasClass("grayscale") === true) {
        $("#yellow-soul").removeClass("grayscale");
    } else {
        $("#yellow-soul").addClass("grayscale");
    }
});