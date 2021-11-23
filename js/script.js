const card = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

let valore = 1;
riempimento('All');

document.getElementById('opt').addEventListener('change', function (){
	valore = parseInt(this.value);
    playFunction();
});


function playFunction() {

    document.getElementById('container').innerHTML = "";

    switch(valore) {
        case 1:
            riempimento('All');
        break;
        case 2:
            riempimento('Animals');
        break;
        case 3:
            riempimento('Vegetables');
        break;
        case 4:
            riempimento('User');
    }
}



function riempimento(element) {
	console.log(valore);
    if (element == 'All') {
        for (let i = 0; i < card.length; i++) {
            addCard(card[i]);
        }
		
    } else if (element == 'Animals') {
        for (let i = 0; i < card.length; i++) {
            if (card[i].type == 'animal') {
                addCard(card[i]);
            }
        }
    } else if (element == 'Vegetables') {
        for (let i = 0; i < card.length; i++) {
            if (card[i].type == 'vegetable') {
                addCard(card[i]);
            }
        }

    } else if (element == 'User') {
        for (let i = 0; i < card.length; i++) {
            if (card[i].type == 'user') {
                addCard(card[i]);
            }
        }

}

}
//========================== creazione della card dinamica 
function addCard (iCard) {
    const container = document.getElementById('container');
    container.innerHTML +=            
       `
       <div class="card ${iCard.color}">
            <i class="${(iCard.family + ' ' + iCard.prefix + iCard.name)}"></i>
            <span>${iCard.name}</span>
        </div> `;
}

