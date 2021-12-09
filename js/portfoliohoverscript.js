let imageRun = new Image();
imageRun.src = "../images/runnerclub.gif";

let imageGit = new Image();
imageGit.src = "../images/github.gif";

let imageThis = new Image();
imageThis.src = "../images/thisVerySite.gif";

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("runningClub").addEventListener('mouseover', function() {
        addImage("url('../images/runnerclub.gif')");

    });
    document.getElementById("runningClub").addEventListener('mouseout', function() {
        killImage();
    });
    document.getElementById("runningClub").addEventListener('focus', function() {
        addImage("url('../images/runnerclub.gif')");

    });
    document.getElementById("runningClub").addEventListener('blur', function() {
        killImage();
    });

    document.getElementById("gitHub").addEventListener('mouseover', function() {
        addImage("url('../images/githubscrollingbanner.gif')");

    });
    document.getElementById("gitHub").addEventListener('mouseout', function() {
        killImage();
    });
    document.getElementById("gitHub").addEventListener('focus', function() {
        addImage("url('../images/githubscrollingbanner.gif')");

    });
    document.getElementById("gitHub").addEventListener('blur', function() {
        killImage();
    });
    document.getElementById("thisVerySite").addEventListener('mouseover', function() {
        addImage("url('../images/thisVerySite.gif')");

    });
    document.getElementById("thisVerySite").addEventListener('focus', function() {
        addImage("url('../images/thisVerySite.gif')");;

    });
    document.getElementById("thisVerySite").addEventListener('mouseout', function() {
        killImage();
    });
    document.getElementById("thisVerySite").addEventListener('blur', function() {
        killImage();
    });
});

const addImage = (url) => {
    document.getElementById("frameWindow").style.backgroundImage = url;
}

const killImage = (url) => {
    document.getElementById("frameWindow").style.backgroundImage = "url('')";
}