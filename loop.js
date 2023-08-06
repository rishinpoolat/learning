let nums = [6, 8, 9,45, 55,90]

function jack(){
  nums.forEach(n => {
  console.log(n*3)
});
}
//  jack()
function filteri(){
  console.log(nums.filter(n => n%2 === 0));
}
function mappi(){
  nums.map(n => n*2)
}
mappi()




