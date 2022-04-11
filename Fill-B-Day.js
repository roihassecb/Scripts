
javascript:void(function (){
    document.getElementsByClassName('MuiInputBase-input')[0].click();
    document.getElementsByClassName('MuiTypography-root')[0].click();
    const el = document.getElementsByClassName('MuiPickersYearSelection-container');
    el[0].children[el[0].children.length - 100].click();
    document.getElementsByClassName('MuiPickersCalendar-week')[2].children[0].click();
    document.querySelector('button[type="submit"]').click();
})()