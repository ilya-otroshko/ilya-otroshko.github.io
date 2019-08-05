	let tbody = document.getElementById('tbody');
	let houseType = document.getElementsByClassName('check');
	let type = document.getElementsByClassName('type');
	let resultAll = 0;
	let result = document.getElementById('result');
	tbody.addEventListener('click', function()
	{
		for (let i = 0; i < houseType.length; i++){
		if(houseType[i].checked) 
		{
				type[i].style.background = '#B7EDFF';

		}
		if(!houseType[i].checked) type[i].style.background = 'white';
		}
			})

	
	let exitFirst = document.getElementById('exitFirst');
	let podstilkaFirst = document.getElementById('podstilkaFirst');
	exitFirst.addEventListener('click', function(){
		popUpFirst.style.display = 'none';
		podstilkaFirst.style.display = 'none';
	})
	let oknoPrice = document.getElementsByClassName('oknoPrice');
	let oknoCount = document.getElementsByClassName('oknoCount');
	let cost = 0;
	let summa = 0;
	let count = 0;
	let summaCheck = 0; 
	let kaef = 0;


	for (let i = 0; i < oknoCount.length; i++){

		oknoCount[i].addEventListener('blur', function()

			{
				if(oknoCount[i].value >= 0 && oknoCount[i].value <= 5  && !isNaN(oknoCount[i].value) && oknoCount[i].value != ''){
					if(i == 0) cost = 5690;
					if(i == 1) cost = 8201;
					if(i == 2) cost = 10904;
					if(i == 3) cost = 13229;
					oknoPrice[i].innerHTML = oknoCount[i].value * cost;
					console.log(oknoPrice[i].innerHTML);
					console.log(oknoCount[i].value);
					}
				else {
					oknoPrice[i].innerHTML = 0;
					oknoCount[i].value = 0;
					
				}
				
				
			})	

		oknoCount[i].addEventListener('blur', function()
		{
			count = parseInt(oknoCount[0].value) + parseInt(oknoCount[1].value) + parseInt(oknoCount[2].value) + parseInt(oknoCount[3].value);
			console.log(count);
			console.log(summa);
			summa = Number(oknoPrice[0].innerHTML.replace(/\D+/g,"")) + Number(oknoPrice[1].innerHTML.replace(/\D+/g,"")) + Number(oknoPrice[2].innerHTML.replace(/\D+/g,"")) + Number(oknoPrice[3].innerHTML.replace(/\D+/g,""));
			

				resultAll = (summa + summaCheck) + parseInt((summa + summaCheck) * kaef);

			
			result.innerHTML ='<span>' + parseInt(resultAll/6) + ' <i class="fas fa-euro-sign"></i> *</span> в месяц<br> всего ' + resultAll + ' <i class="fas fa-euro-sign"></i> **' ;
		})	
	}
	result.innerHTML ='<span>' + parseInt(resultAll/6) + ' <i class="fas fa-euro-sign"></i> *</span> в месяц<br> всего ' + resultAll + ' <i class="fas fa-euro-sign"></i> **' ;
		
	let services = document.getElementsByClassName('services');
	let servicesCount = [];
	let servicesPrice = [];

	for(let i = 0; i < services.length; i++){
		services[i].addEventListener('change' , function(){
				if(services[i].checked == true){
			servicesPrice[i] = services[i].value;
		}
		if(services[i].checked == false){
			servicesPrice[i] = -services[i].value;;
		}
		console.log(services[i].checked);
		console.log(servicesPrice[i]);
		summaCheck += parseInt(servicesPrice[i]);
		resultAll = (summa + summaCheck) + parseInt((summa + summaCheck) * kaef);
		result.innerHTML ='<span>' + parseInt(resultAll/6) + ' <i class="fas fa-euro-sign"></i> *</span> в месяц<br> всего ' + resultAll + ' <i class="fas fa-euro-sign"></i> **' ;	
		})

	}

		function buttonClicked(choice)
{
   if(choice == 'A')
   {
      kaef = 0.05;    
      resultAll = (summa + summaCheck) + parseInt((summa + summaCheck) * kaef);
	  result.innerHTML ='<span>' + parseInt(resultAll/6) + ' <i class="fas fa-euro-sign"></i> *</span> в месяц<br> всего ' + resultAll + ' <i class="fas fa-euro-sign"></i> **' ;	
   }
   else if(choice ==  'B')
   {
   	  kaef = 0.1; 
      resultAll = (summa + summaCheck) + parseInt((summa + summaCheck) * kaef);
      result.innerHTML ='<span>' + parseInt(resultAll/6) + ' <i class="fas fa-euro-sign"></i> *</span> в месяц<br> всего ' + resultAll + ' <i class="fas fa-euro-sign"></i> **' ;	
   }
    else if(choice ==  'C')
   {
      kaef = 0.15;
      resultAll = (summa + summaCheck) + parseInt((summa + summaCheck) * kaef);
      result.innerHTML ='<span>' + parseInt(resultAll/6) + ' <i class="fas fa-euro-sign"></i> *</span> в месяц<br> всего ' + resultAll + ' <i class="fas fa-euro-sign"></i> **' ;	
   }
}

function submitForm()
{	
	///////////////////  HOUSETYPE///////////////////////////////

	let houseName = '';
	for (let i = 0; i < houseType.length; i++){
		if(houseType[i].checked) 
		{
			 houseName = 'Расчет сделан для дома серии ' + houseType[i].value;

		}
		if(houseName == '') 
			{
				houseName = 'Забыли выбрать тип дома';
			}		
	}
	let popUp = document.getElementById('popUp');
	let popUpCount = popUp.getElementsByClassName('allCount');
	let popUpPrice = popUp.getElementsByClassName('allPrice');
	let exit = document.getElementById('exit');
	let podstilka = document.getElementById('podstilka');
	podstilka.style.display = 'block';
	popUp.style.display = 'block';
	document.getElementById('dom').innerHTML = houseName;
	exit.addEventListener('click', function(){
		popUp.style.display = 'none';
		podstilka.style.display = 'none';
		resultAll = 0;
	})

	///////////////////  HOUSETYPE///////////////////////////////


	///////////////////  WINDOWTYPE///////////////////////////////
	let windowPrice = [];
	let windowCount = [];
	


	for (let i = 0; i < oknoCount.length; i++){
		if (oknoPrice[i].innerHTML == 'Error!') {oknoPrice[i].innerHTML = 0}
		windowPrice[i] = oknoPrice[i].innerHTML;
		windowCount[i] = oknoCount[i].value;
		console.log(windowPrice[i]);
		
	}
	for (let i = 0; i < popUpPrice.length; i++){
		popUpCount[i].innerHTML = windowCount[i];
		popUpPrice[i].innerHTML = windowPrice[i] + ' <i class="fas fa-euro-sign"></i>';

		
	}
	
	///////////////////  WINDOWTYPE///////////////////////////////


	///////////////////  SERVICES  ///////////////////////////////


	
	
	for(let i = 0; i < services.length; i++){
		if(services[i].checked == true){
			servicesCount[i] ='<i class="fas fa-check" style="color:green"></i>';
			servicesPrice[i] = services[i].value;
		}
		if(services[i].checked == false){
			servicesCount[i] = '<i class="fas fa-times" style="color:red"></i>';
			servicesPrice[i] = 0;
		}
	}
	for (let i = 4; i < popUpPrice.length; i++){
		
		popUpCount[i].innerHTML = servicesCount[i-4];
		popUpPrice[i].innerHTML = servicesPrice[i-4] + ' <i class="fas fa-euro-sign"></i>';
	}
	console.log('result = ' + resultAll);
	let resultPopUp = document.getElementById('resultPopUp');
	if(count > 1) summa = parseInt(summa - (summa * 0.05));
	resultAll = (summa + summaCheck) + parseInt((summa + summaCheck) * kaef);
	resultPopUp.innerHTML ='<span>Итого: ' + parseInt(resultAll/6) + ' <i class="fas fa-euro-sign"></i> *</span> в месяц<br> всего ' + resultAll + ' <i class="fas fa-euro-sign"></i> **' ;

		
	///////////////////  SERVICES  ///////////////////////////////
}

