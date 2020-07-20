(function(){

    const hour = document.querySelector('#clock-hour');
    const minute = document.querySelector('#clock-minute');
    const second = document.querySelector('#clock-second');

    function clock() {

        let now = new Date();
        now.setTime(new Date().getTime()+new Date().getTimezoneOffset()*60*1000);
        now.setTime(now.getTime()+60*60*3*1000);

        let h = now.getHours();
        let m = now.getMinutes();
        let s = now.getSeconds();
        let ms = now.getMilliseconds();
        
        second.style.transform = `rotate(${s*6 + ms*.006}deg)`;
        minute.style.transform = `rotate(${m*6 + s*.1}deg)`;
        hour.style.transform = `rotate(${h*30 + m*.5}deg)`;

        setTimeout(clock, 20);
    }

    clock();

})();

(function(){

    const hour = document.querySelector('#clock-hour1');
    const minute = document.querySelector('#clock-minute1');
    const second = document.querySelector('#clock-second1');

    function clock() {

        let now = new Date();
        now.setTime(new Date().getTime()+new Date().getTimezoneOffset()*60*1000);
        now.setTime(now.getTime()+60*60*2.5*1000);

        let h = now.getHours();
        let m = now.getMinutes();
        let s = now.getSeconds();
        let ms = now.getMilliseconds();
        
        second.style.transform = `rotate(${s*6 + ms*.006}deg)`;
        minute.style.transform = `rotate(${m*6 + s*.1}deg)`;
        hour.style.transform = `rotate(${h*30 + m*.5}deg)`;

        setTimeout(clock, 222222222220);
    }

    clock();

})();

(function(){

    const hour = document.querySelector('#clock-hour2');
    const minute = document.querySelector('#clock-minute2');
    const second = document.querySelector('#clock-second2');

    function clock() {

        let now = new Date();
        now.setTime(new Date().getTime()+new Date().getTimezoneOffset()*60*1000);
        now.setTime(now.getTime()+60*60*6*1000);

        let h = now.getHours();
        let m = now.getMinutes();
        let s = now.getSeconds();
        let ms = now.getMilliseconds();
        
        second.style.transform = `rotate(${s*6 + ms*.006}deg`;
        minute.style.transform = `rotate(${m*6 + s*.1}deg)`;
        hour.style.transform = `rotate(${h*30 + m*.5}deg)`;

        setTimeout(clock, 20);
    }

    clock();

})();

(function(){

    const hour = document.querySelector('#clock-hour3');
    const minute = document.querySelector('#clock-minute3');
    const second = document.querySelector('#clock-second3');

    function clock() {

        let now = new Date();
        now.setTime(new Date().getTime()+new Date().getTimezoneOffset()*60*1000);
        now.setTime(now.getTime()+60*60*(-10)*1000);

        let h = now.getHours();
        let m = now.getMinutes();
        let s = now.getSeconds();
        let ms = now.getMilliseconds();
        
        second.style.transform = `rotate(${s*6 + ms*.006}deg`;
        minute.style.transform = `rotate(${m*6 + s*.1}deg)`;
        hour.style.transform = `rotate(${h*30 + m*.5}deg)`;

        setTimeout(clock, 20);
    }

    clock();

})();

(function(){

    const hour = document.querySelector('#clock-hour4');
    const minute = document.querySelector('#clock-minute4');
    const second = document.querySelector('#clock-second4');

    function clock() {

        let now = new Date();
        now.setTime(new Date().getTime()+new Date().getTimezoneOffset()*60*1000);
        now.setTime(now.getTime()+60*60*(-7)*1000);

        let h = now.getHours();
        let m = now.getMinutes();
        let s = now.getSeconds();
        let ms = now.getMilliseconds();
        
        second.style.transform = `rotate(${s*6 + ms*.006}deg`;
        minute.style.transform = `rotate(${m*6 + s*.1}deg)`;
        hour.style.transform = `rotate(${h*30 + m*.5}deg)`;

        setTimeout(clock, 20);
    }

    clock();

})();

(function(){

    const hour = document.querySelector('#clock-hour5');
    const minute = document.querySelector('#clock-minute5');
    const second = document.querySelector('#clock-second5');

    function clock() {

        let now = new Date();
        now.setTime(now.getTime()+60*60*(-2)*1000);

        let h = now.getHours();
        let m = now.getMinutes();
        let s = now.getSeconds();
        let ms = now.getMilliseconds();
        
        second.style.transform = `rotate(${s*6 + ms*.006}deg`;
        minute.style.transform = `rotate(${m*6 + s*.1}deg)`;
        hour.style.transform = `rotate(${h*30 + m*.5}deg)`;

        setTimeout(clock, 20);
    }

    clock();

})();


















