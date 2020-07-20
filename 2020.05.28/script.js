(function(){
    const Dat = document.querySelector('#clock-date');
    const month = document.querySelector('#clock-month');
    const hour = document.querySelector('#clock-hour');
    const minute = document.querySelector('#clock-minute');
    const second = document.querySelector('#clock-second');

    function clock() {

        let now = new Date();

        let d = now.getDate();
            Dat.innerHTML= d;
        let mo = now.getMonth(12);
              
           
            month[0]="Янв";
            month[1]="Фев";
            month[2]="Мар";
            month[3]="Апр";
            month[4]="Май";
            month[5]="Июн";
            month[6]="Июл";
            month[7]="Авг";
            month[8]="Сен";
            month[9]="Окт";
            month[10]="Ноя";
            month[11]="Дек";
            month.innerHTML = month[now.getMonth()];
            
        let h = now.getHours();
        let m = now.getMinutes();
        let s = now.getSeconds();
        let ms = now.getMilliseconds();
        
        second.style.transform = `rotate(${s*6 + ms*.006}deg)`;
        minute.style.transform = `rotate(${m*6 + s*.1}deg)`;
        hour.style.transform = `rotate(${h*30 + m*.5}deg)`;

        setTimeout(clock, 200);
    }

    clock();

})();