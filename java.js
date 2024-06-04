// function DoubleFunc(){
//     let Textvalue = document.getElementById("textBox").value;
//     myFunction(Textvalue)
// }
// function myFunction(Text) {
// let Textvalue = document.getElementById("textBox").value;
// const Box = document.createElement('input');
// Box.type = 'checkbox';
// const node = document.createElement("li");
// const textnode = document.createTextNode(Text);
// node.appendChild(textnode);
// node.appendChild(Box);
// document.getElementById("myList").appendChild(node);
// }
const Forma = document.getElementById("forma");
const laukas = document.getElementById("textBox");
const uzduotys = document.getElementById("myList");

console.log(laukas)

function istrinti(event) {
    event.srcElement.parentElement.remove()
    console.log(event)
}

Forma.addEventListener('submit', (event) => {
    event.preventDefault();

    const uzduotiesElementas = document.createElement('li');
    uzduotiesElementas.innerText = laukas.value;

    uzduotiesElementas.id = 'newtaskitem';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener("change", function () { 

        if (this.checked) { 
            uzduotiesElementas.style.textDecoration = "line-through"; 
        } 
        else { 
            uzduotiesElementas.style.textDecoration = "none"; 
        } 
    }); 

    const trintiMygtukas = document.createElement('button');
    trintiMygtukas.innerText = 'trinti';
    trintiMygtukas.addEventListener('click', istrinti);
    trintiMygtukas.style.backgroundColor = 'blue';
    trintiMygtukas.style.Color = 'white';

    uzduotiesElementas.append(trintiMygtukas);
    uzduotiesElementas.append(checkbox);
    uzduotys.append(uzduotiesElementas);
});