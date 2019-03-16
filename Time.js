class Time {
    
    constructor(hour, minutes) {
        this.hour = hour;
        this.minutes = minutes;
    }

    addTime(hour, minutes) {
        this.minutes += minutes;
        this.hour += hour;

        if(this.minutes > 60) {
            this.hour++;
            this.minutes = this.minutes - 60; 
        } else if (this.minutes < 0) {
            this.hour--;
            this.minutes = 60 + this.minutes; 
        }

        return new Time(this.hour, this.minutes);
    }

    printTime() {
        console.log(this.hour + ":" + this.minutes);
    }
}