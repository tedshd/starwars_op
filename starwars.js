/**
 *
 * @authors Ted Shiu (tedshd@gmail.com)
 * @date    2015-12-09 23:17:00
 * @version $Id$
 */

function starwars() {
    var audio = document.getElementById('starwars_audio');
    setTimeout(function () {
        window.scrollTo(0, 0);
        document.getElementsByTagName('html')[0].classList.add('starwars_op');
        var Y = document.body.clientHeight + 10;
        document.body.style.transform = 'rotateX(50deg) translateZ(-5em) translateY(' + Y + 'px) scaleX(.7)';
        if (audio) {
            audio.autoplay = true;
            audio.load();
        }
    }, 1);
    document.body.addEventListener('animationend',function() {
        stop();
    });
    function stop (argument) {
        document.getElementsByTagName('html')[0].classList.remove('starwars_op');
        document.body.style.transform = 'rotateX(0) translateZ(0) translateY(0) scaleX(1)';
        window.scrollTo(0, 0);
        if (audio) {
            audio.pause();
        }
    }
}
starwars();