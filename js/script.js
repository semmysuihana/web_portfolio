
document.addEventListener('DOMContentLoaded', function() {
    const stickyTabs = document.querySelector('.sticky-tabs');
    const stickyOffset = stickyTabs.offsetTop;

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > stickyOffset) {
            stickyTabs.classList.add('sticky-active');
        } else {
            stickyTabs.classList.remove('sticky-active');
        }
    });
});
