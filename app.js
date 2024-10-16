const title = 'Top 10 benefits of React framework'; 
 
const newTitle = title.split(' '); 
 
for (let index = 0; index < newTitle.length; index++) { 
    newTitle[index] = newTitle[index].toLowerCase(); 
} 
 
const result = newTitle.join(' ');


const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];


const TwoArray = array1.concat(array2);


let total = 0;


for (let i = 0; i < TwoArray.length; i++) {
  total = total + TwoArray[i];
}


console.log(total);

const players = ['Poly', 'Max', 'John'];


const numberedPlayers = players.map((player, index) => `${player}-${index + 1}`);

console.log(numberedPlayers);

