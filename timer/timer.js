class Timer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;

        this.refs = {
            timerBox: document.querySelector('#timer-1'),
            daysTimer: document.querySelector(`${selector} span[data-value="days"]`),
            hoursTimer: document.querySelector(`${selector} span[data-value="hours"]`),
            minutesTimer: document.querySelector(`${selector} span[data-value="mins"]`),
            secondsTimer: document.querySelector(`${selector} span[data-value="secs"]`),
        };
        this.start();
    }

    start() {
        setInterval(() => {
            const deltaTime = this.targetDate - Date.now();

            this.updateClockface(this.getTimeComponents(deltaTime));
            if (deltaTime < 0) {

                this.refs.timerBox.textContent = 'Happy Birthday!';
            }
        }, 1000);

    }


    updateClockface({ days, hours, mins, secs }) {
        this.refs.daysTimer.textContent = days;
        this.refs.hoursTimer.textContent = hours;
        this.refs.minutesTimer.textContent = mins;
        this.refs.secondsTimer.textContent = secs;
    }

    getTimeComponents(time) {
        const days = (Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = (Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = (Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = (Math.floor((time % (1000 * 60)) / 1000));

        return { days, hours, mins, secs };
    }
}


const CountDownTimer = new Timer({
    selector: '#timer-1',
    targetDate: new Date('Jun 22, 2022'),
});