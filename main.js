//function creatBlock() {
  //  for (let i =1; i<=2; i++){
    //const box = document.querySelector('box')
   // const newBlock = document.createElement('div')
   // newBlock.classList = ('mini')
   // }

//}
function creatBlock() {
    for (let i =1; i<=2; i++){
    const box = document.querySelector('.box')
    const newBlock = document.createElement('div')
    newBlock.classList = ('mini')
    box.append(newBlock)
    }
 
}