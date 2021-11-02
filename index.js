//filter obj
function createFilterObj(arrKeys,arrValues) {
    let res = {}
    let setArr = Array.from(new Set(arrKeys))
    setArr.forEach((key,i)=>{
      arrValues[i] !== undefined ? res[key] = arrValues[i] : res[key] = null
    })
    return res
  }
  
  
  // fibonacci
  let one = 0;
  let two = 1;
  let result = 0;
  
  while(true) {
    let current = one + two
    one = two;
      two = current;
      if ( current % 2 === 0) {
       result += current
    }
  
    if(current > 4000000) break
  }
  //4613732
  