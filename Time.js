class Time {

    constructor(hour, minutes) {
        this.hour = hour;
        this.minutes = minutes;
    }

    addTime(hour, minutes) {
        this.minutes += minutes;
        this.hour += hour;

        if (this.minutes > 60) {
            this.hour++;
            this.minutes = this.minutes - 60;
        } else if (this.minutes < 0) {
            this.hour--;
            this.minutes = 60 + this.minutes;
        }

        return new Time(this.hour, this.minutes);
    }

    getTimeString(){
        var minutesString = this.minutes.toString();
        
        if (this.minutes < 10)
            minutesString = "0" + minutesString;

        return this.hour + ":" + minutesString;
    }

    printTime() {
        console.log(this.hour + ":" + this.minutes);
    }
}