document.getElementById("testButton").addEventListener("click", function () {
    const nextClassElement = document.getElementById("nextClass");
    nextClassElement.textContent = getNextPeriod();
});
const timetable = [
        { subject: "Mathematics", startTime: "07:07", endTime: "10:00 " },
        { subject: "Operating System", startTime: "10:00 AM", endTime: "10:45 AM" },

        { subject: "DBMS", startTime: "11:00", endTime: "11:45 AM" },
        { subject: "Break", startTime: "11:45", endTime: "1:00" },

        { subject: "COA", startTime: "01:00", endTime: "01:45" },
        { subject: "CI", startTime: "01:45", endTime: "02:30" },
        { subject: "Digital Lab", startTime: "02:30", endTime: "03:15" },
        { subject: "OS Lab", startTime: "3:15", endTime: "04:00" },



    ];


function getNextPeriod() {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const currentMinutes = currentTime.getMinutes();
    const currentTotalMinutes = currentHour * 60 * currentMinutes;

    for (const period of timetable) {
        const [startHour, startMinutes] = period.startTime.split(":");
        const periodstartTime = parseInt(startHour) * 60 + parseInt(startMinutes);

         console.log(period.startTime.slice(0, 2),'1');
        //  console.log(periodStartTime,'2');
        //  console.log(periodendTime,'3');
        // console.log(period.startTime,'--');
        // console.log(`${currentHour}:${currentMinutes}`,'+++');

        if (period.startTime.slice(0, 2) === `0${currentHour}`) {
            alert(period.subject)
        }
        // if (currentTotalMinutes>=periodStartTime&&currentTotalMinutes<periodendTime) {
        //      return 'current subject:${period.subject}';
        //  }
    }
    return "No more class for today!";
}


