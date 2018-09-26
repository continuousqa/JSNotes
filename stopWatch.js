/**
 Implement a stopwatch:
 methods start(), stop(), reset()
 **/


function StopWatch() {
    let startTime, endTime, duration = 0;

    this.start = function () {
        startTime = new Date();
        return startTime;
    };
    this.stop = function () {
        endTime = new Date();
        return endTime;
    };
    this.reset = function () {
        startTime = 0;
        endTime = 0;
    };
    Object.defineProperty(this, 'duration', {
        get: function () {
            return endTime-startTime;
        }
    });
}

// Testing the work:
let sw = new StopWatch();
sw.start();
let i = 1;  // We'll wait for some time.
while(i < 90900000){ i++ }     // This lets us get some time between our start and stop of the stopwatch.
sw.stop();
console.log(sw.duration);
sw.reset();
console.log(sw.duration);