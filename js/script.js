document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', function() {
       if (window.scrollY > 715) {
            document.getElementById('homeNav').classList.add('fixed-top');
            document.getElementById('aboutMeNav').classList.add('active');
            document.getElementById('homePageNav').classList.remove('active');
       }
       else {
        document.getElementById('homeNav').classList.remove('fixed-top');
        document.getElementById('homePageNav').classList.add('active');
        document.getElementById('aboutMeNav').classList.remove('active');
       }
    });
});
