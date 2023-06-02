
window.onload = function () {
    //Worker VAlue
    var workerHP = this.document.getElementById('worker-hp'),
        workerHPW = this.document.getElementById('worker-hpw'),
        workerWinY = this.document.getElementById('worker-winy'),
        workerTax = this.document.getElementById('worker-tax'),
        workerTotalSalary = this.document.getElementById('worker-total-salary'),
        workerMonthly = this.document.getElementById('worker-monthly-salary'),
        workerConv = this.document.getElementById('worker-conversion'),
        workerLocalMonthlySalary = this.document.getElementById('worker-monthly-salary-conv');

    //Worker Init
    workerHP.value = 15;
    calculateWorkerSalary();
    //Worker Triggers
    workerHP.onkeydown = calculateWorkerSalary;
    workerHPW.onkeydown = calculateWorkerSalary;
    workerWinY.onkeydown = calculateWorkerSalary;
    workerTax.onkeydown = calculateWorkerSalary;
    workerConv.onkeydown = calculateWorkerSalary;

    //Worker Calculations
    function calculateWorkerSalary() {
        setTimeout(function () {
            var hp = parseFloat(workerHP.value);
            var HPW = parseFloat(workerHPW.value) || 40;
            var winy = parseFloat(workerWinY.value) || 52.17857143;
            var tax = 1 - (parseFloat(workerTax.value || 5) / 100) ;
            var wS = hp * HPW * winy * tax;
            var mS = wS/12;
            var convRate = parseFloat(workerConv.value) || 155;
            var lms = mS * convRate;

            workerTotalSalary.innerText = `Your Total Salary is ${parseInt(wS)}$`;
            workerMonthly.innerText = `Your Monthly Salary is ${parseInt(mS)}$`;
            workerLocalMonthlySalary.innerText = `Your Monthly Salary in Your Currency is ${parseInt(lms)}`;
        }, 10);
    }

    
    //Empolyer VAlue
    var employerHP = this.document.getElementById('employer-hp'),
        employerHPW = this.document.getElementById('employer-hpw'),
        employerWinY = this.document.getElementById('employer-winy'),
        employerTax = this.document.getElementById('employer-tax'),
        employerTotalSalary = this.document.getElementById('employer-total-salary'),
        employerMonthly = this.document.getElementById('employer-monthly-salary'),
        employerConv = this.document.getElementById('employer-conversion'),
        employerLocalMonthlySalary = this.document.getElementById('employer-monthly-salary-conv');
    //Employer Init
    employerHP.value = 15;
    calculateEmployerSalary();
    //Employer Triggers
    employerHP.onkeydown = calculateEmployerSalary;
    employerHPW.onkeydown = calculateEmployerSalary;
    employerWinY.onkeydown = calculateEmployerSalary;
    employerTax.onkeydown = calculateEmployerSalary;
    employerConv.onkeydown = calculateEmployerSalary;

    //Employer Calculations
    function calculateEmployerSalary() {
        setTimeout(function () {
            var hp = parseFloat(employerHP.value);
            var HPW = parseFloat(employerHPW.value) || 40;
            var winy = parseFloat(employerWinY.value) || 52.17857143;
            var tax = 1 + (parseFloat(employerTax.value || 5) / 100) ;
            var wS = hp * HPW * winy * tax;
            var mS = wS/12;
            var convRate = parseFloat(employerConv.value) || 155;
            var lms = mS * convRate;

            employerTotalSalary.innerText = `Emplyer Pay Yearly is ${parseInt(wS)}$`;
            employerMonthly.innerText = `Emplyer Pay Monthly is ${parseInt(mS)}$`;
            employerLocalMonthlySalary.innerText = `Emplyer Pay Monthly in Your Currency is ${parseInt(lms)}`;
        }, 10);
    }

        
    //Weekly VAlue
    var weeklyPay = this.document.getElementById('weekly-pay'),
        weeklyWinY = this.document.getElementById('weekly-winy'),
        weeklyHPW = this.document.getElementById('weekly-hpw'),
        weeklyTax = this.document.getElementById('weekly-tax'),
        weeklyConv = this.document.getElementById('weekly-conversion'),
        weeklyTotalSalary = this.document.getElementById('weekly-total-salary'),
        weeklyPerWeek = this.document.getElementById('weekly-weekly-salary'),
        weeklyPaymentCycle = this.document.getElementById('weekly-paymentcycle-salary'),
        weeklyLocal = this.document.getElementById('weekly-salary-conv'),
        weeklyHourly = this.document.getElementById('weekly-hourly-salary'),
        weeklyHourlyLocal = this.document.getElementById('weekly-hourly-salary-conv'),
        numberWeeks = this.document.getElementById('number-weeks');
    //Weekly Init
    weeklyPay.value = 1800;
    calculateWeeklySalary();
    //Weekly Triggers
    weeklyPay.onkeydown = calculateEmployerSalary;
    weeklyHPW.onkeydown = calculateEmployerSalary;
    weeklyWinY.onkeydown = calculateEmployerSalary;
    weeklyTax.onkeydown = calculateEmployerSalary;
    weeklyConv.onkeydown = calculateEmployerSalary;
    numberWeeks.onkeydown = calculateEmployerSalary;

    //Weekly Calculations
    function calculateWeeklySalary() {
        setTimeout(function () {
            
            var Pay = parseFloat(weeklyPay.value);
            var HPW = parseFloat(weeklyHPW.value) || 40;
            var winy = parseFloat(weeklyWinY.value) || 52.17857143;
            var tax = 1 + (parseFloat(weeklyTax.value || 0) / 100);
            var wS = Pay * 12 * tax;
            var mS = wS/winy;
            var convRate = parseFloat(weeklyConv.value) || 155;
            var numWeeks = parseFloat(numberWeeks.value) || 2;
            var perPayment = mS*numWeeks;
            var perPaymentConv = perPayment * convRate;

            weeklyTotalSalary.innerText = `Total Yearly Salary is ${parseInt(wS)}$`;
            weeklyPerWeek.innerText = `Weekly Salary is ${parseInt(mS)}$`;
            weeklyPaymentCycle.innerText = `Paid per ${numWeeks} weeks is ${parseInt(perPayment)}`;
            weeklyLocal.innerText = `Paid per ${numWeeks} weeks in your currency is ${parseInt(perPaymentConv)}`;
            weeklyHourly.innerText = `Hourly Salary is: ${mS/HPW}`;
            weeklyHourlyLocal.innerText = `Hourly Salary is: ${parseInt((mS/HPW) * convRate)}`;
        }, 10);
    }
};