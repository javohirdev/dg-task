var scrollProgress = document.getElementById('scrollbarProgress');
var heightDoc = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener('scroll', () => {
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    scrollProgress.style.width = `${(scrollTop / heightDoc) * 100}%`
})