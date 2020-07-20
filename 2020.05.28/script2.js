(function(){

    const targetDate = new Date(2020, 6, 27, 0, 0, 0, 0);
    const startDate = new Date(2020, 0, 1, 0, 0, 0, 0);

    const maxDays = Math.floor( (targetDate - startDate) / (24*3600*1000) );

    const days = document.querySelector('#countdown-days>div');
    const daysBG = document.querySelector('#countdown-days>p');
    const daysTitle = document.querySelector('#countdown-days>span');
    const hours = document.querySelector('#countdown-hours>div');
    const hoursBG = document.querySelector('#countdown-hours>p');
    const hoursTitle = document.querySelector('#countdown-hours>span');
    const minutes = document.querySelector('#countdown-minutes>div');
    const minutesBG = document.querySelector('#countdown-minutes>p');
    const minutesTitle = document.querySelector('#countdown-minutes>span');
    const seconds = document.querySelector('#countdown-seconds>div');
    const secondsBG = document.querySelector('#countdown-seconds>p');
    const secondsTitle = document.querySelector('#countdown-seconds>span');

    function countdown() {
        let delta = Math.round( (targetDate - new Date()) / 1000 );
        
        const d = Math.floor( delta / (24*3600) );

        delta -= d*24*3600;
        const h = Math.floor( delta / 3600 );

        delta -= h*3600;
        const m = Math.floor( delta / 60 );

        s = delta - m*60
    
        days.textContent = d;
        if (d == 1 || d == 21 || d == 31 || d == 41 || d == 51) {
            daysTitle.innerHTML = 'день';
        }else if(d == 2  || d ==3|| d ==4 || d ==22 || d ==23|| d ==24 || d ==32|| d ==33|| d ==34 || d ==42 || d ==43 || d ==44 || d ==52 || d ==53 || d ==54  ){
            daysTitle.innerHTML = 'дня';
        } else {
            daysTitle.innerHTML = 'дней';
        }
        
        hoursTitle.innerHTML = h;
        if (h == 1 || h == 21 ) {
            hoursTitle.innerHTML = 'час';
        }else if(h == 2  || h ==3|| h ==4 || h ==22 || h ==23|| h ==24){
            hoursTitle.innerHTML = 'часа';
        } else {
            hoursTitle.innerHTML = 'часов';
        }
                

        minutesTitle.innerHTML = m;
        if (m == 1 || m == 21 || m == 31 || m == 41 || m == 51) {
            minutesTitle.innerHTML = 'минута';
        }else if(m == 2  || m ==3|| m ==4 || m ==22 || m ==23|| m ==24 || m ==32|| m ==33|| m ==34 || m ==42 || m ==43 || m ==44 || m ==52 || m ==53 || m ==54){
            minutesTitle.innerHTML = 'минуты';
        } else {
            minutesTitle.innerHTML = 'минут';
        }
                
    
        secondsTitle.innerHTML = s;
        if (s == 1 || s == 21 || s == 31 || s == 41 || s == 51) {
            secondsTitle.innerHTML = 'секунда';
        }else if(s == 2  || s ==3|| s ==4 || s ==22 || s ==23|| s ==24 || s ==32|| s ==33|| s ==34 || s ==42 || s ==43 || s ==44 || s ==52 || s ==53 || s ==54){
            secondsTitle.innerHTML = 'секунды';
        } else {
            secondsTitle.innerHTML = 'секунд';
        }
                


        hours.textContent = h<10 ? '0' + h : h;
        minutes.textContent = m<10 ? '0' + m : m;
        seconds.textContent = s<10 ? '0' + s : s;
        
        daysBG.style.bottom = `${-d*100/maxDays}%`;
        hoursBG.style.bottom = `${-h*100/24}%`;
        minutesBG.style.bottom = `${-m*100/60}%`;
        secondsBG.style.bottom = `${-s*100/60}%`;

        setTimeout(countdown, 500)
    }
    countdown();

})();