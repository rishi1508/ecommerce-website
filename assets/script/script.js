document.addEventListener("DOMContentLoaded", function() {
    const backToTopButton = document.getElementById("button");

    window.addEventListener('scroll', function() {
        var button = document.getElementById('button');
        if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
            button.classList.add('show');
        } else {
            button.classList.remove('show');
            button.classList.add('hide');
            setTimeout(function() {
                button.classList.remove('hide');
            }, 300); 
        }
    });

    backToTopButton.addEventListener("click", function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
