let validPassword=0
let data=await fetch('https://adventofcode.com/2020/day/2/input').then(res=>res.text()).then(text=>text.trim().split('\n').map(item=>item.split(' ').map(data=>data.split(' '))))
for (let i=0;i<data.length;i++){
			let min=parseInt(data[i][0].toLocaleString().split('-')[0])
			let max=parseInt(data[i][0].toLocaleString().split('-')[1])
			let charToRepeat=data[i][1].toLocaleString().charAt(0);
			let password=data[i][2].toLocaleString()
			let exp= new RegExp(charToRepeat,"g");

			if(password.match(exp)){
				if(password.match(exp).length<=max&&password.match(exp).length>=min){
				validPassword++
			}
		}
}

console.log(validPassword)
