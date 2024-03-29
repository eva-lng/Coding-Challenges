/* The Hunger Games - Foxes and Chickens

Story:
Old MacDingle had a farm. To be more precise, he had a free-range chicken farm. But Old MacDingle also had a fox problem.

Foxes F eat chickens C
At night the only guaranteed "safe" chickens are in their cages [] (unless a fox has got into the cage with them!)

Kata Task:
Given the initial configuration of foxes and chickens what will the farm look like the next morning after the hungry foxes have been feasting?

Examples:
Ex1	Before	
CCC[CCC]FCC[CCCCC]CFFFF[CCC]FFFF
After	
...[CCC]F..[CCCCC].FFFF[CCC]FFFF

Ex2	Before	
...[CCC]...[CCCFC].....[CCC]....
After	
...[CCC]...[...F.].....[CCC]....

Ex3	Before	
CCC[CCC]FCC[CCCFC]CFFFF[CCC]FFFF
After	
...[CCC]F..[...F.].FFFF[CCC]FFFF

Notes:
Anything not a fox, a chicken, or a cage is just dirt .
All cages are intact (not open-ended), and there are no cages inside other cages
*/

var hungryFoxes = function(farm) {
  const arr = farm.split('[').map(el => el.includes(']') ? el.split(']') : el).flat()
  const outside = arr.filter((el, i) => i % 2 === 0).join('')
  const inside = arr.filter((el, i) => i & 2 !== 0)
  const foxOutside = outside.includes('F') ? true : false
  const foxInside = inside.map(el => el.includes('F') ? true : false)
  let cageCount = 0
  let isInside = false
  const result = []
  
  for (let i = 0; i < farm.length; i++) {
    if (farm[i] === '[') {
      isInside = true
      result.push(farm[i])
    } else if (farm[i] === ']') {
      isInside = false
      result.push(farm[i])
      cageCount += 1
    } else if ((!isInside && !foxOutside) || (isInside && !foxInside[cageCount])) {
      result.push(farm[i])
    } else if ((!isInside && foxOutside) || (isInside && foxInside[cageCount])) {
      farm[i] === 'C' ? result.push('.') : result.push(farm[i])
    }
  }
  return result.join('')
}