window.addEventListener('DOMContentLoaded', () => {

    const hour_el = document.querySelector('.hour');
    const min_el = document.querySelector('.min');
    const sec_el = document.querySelector('.sec');

    function rotateClockHands () {
        
        const now = new Date ();
        const seconds = now.getSeconds ();
        const minutes = now.getMinutes ();
        const hours = now.getHours ();

        const secRotation = seconds * 6;
        const minRotation = minutes * 6 + seconds * 0.1;
        const hourRotation = hours * 30 + minutes * 0.5;

        sec_el.style.transform = `rotate(${secRotation}deg)`;
        min_el.style.transform = `rotate(${minRotation}deg)`;
        hour_el.style.transform = `rotate(${hourRotation}deg)`;

    }

    setInterval(rotateClockHands, 1000);

});