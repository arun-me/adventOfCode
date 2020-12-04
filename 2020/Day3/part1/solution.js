let trees=0
let data=await fetch('https://adventofcode.com/2020/day/3/input').then(res=>res.text()).then(text=>text.trim().split('\n').map(item=>item.repeat(33)))
debugger
for (let i=0;i<data.length-1;i++){
			if(data[i+5][i+5]=='#'){
				trees++
}

}

console.log(trees)
