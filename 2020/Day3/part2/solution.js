let validPassword=0
let data=await fetch('https://adventofcode.com/2020/day/2/input').then(res=>res.text()).then(text=>text.trim().split('\n').map(item=>item.split(' ').map(data=>data.split(' '))))
for (let i=0;i<data.length;i++){
			let correctIndex=parseInt(data[i][0].toLocaleString().split('-')[0]) - 1
			let wrongIndex=parseInt(data[i][0].toLocaleString().split('-')[1])   - 1
			let char=data[i][1].toLocaleString().charAt(0);
			let password=data[i][2].toLocaleString()

			if(password.charAt(correctIndex)===char || password.charAt(wrongIndex)===char){
					if(password.charAt(correctIndex)===char && password.charAt(wrongIndex)===char){

					}else{
						validPassword++

					}				
			}
}

console.log(validPassword)
