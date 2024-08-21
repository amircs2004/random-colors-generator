const containerEL = document.querySelector(".container");

for (let i = 0; i < 30; i++) {
    const colorContainerEL = document.createElement("div"); //create a new el
    colorContainerEL.classList.add("colorContainer"); //add a new class into the parent but not yet
    containerEL.appendChild(colorContainerEL); //append the chimd(colorContainer into the parent(container))
}   
const colorContainerELs = document.querySelectorAll(".colorContainer")
generateColor() 

function generateColor() {
    colorContainerELs.forEach((colorContainerEL)=>{
        const nexColor = randomColor() ;
        colorContainerEL.style.backgroundColor = "#" + nexColor
        colorContainerEL.innerText = "#" + nexColor 

    });
}
function randomColor() {
     const chars = "0123456789abcdef" //we want to create colors from this combination ()
      const  colorCodeLengh = 6 
      var  colorCode = ""
      for (let i = 0; i < 6; i++) {
        const randomNUM = Math.floor(Math.random() * chars.length)
        colorCode += chars.substring(randomNUM ,randomNUM + 1)
       // console.log(colorCode);
      }
      return colorCode
}
    