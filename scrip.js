let val = [];
var subtotal=0;
var iva=0.16;
var total=0;
var coti=document.querySelector('.cuenta')

const selec=document.getElementById('grupo6');
document.getElementById('coti').addEventListener('click', function () {
    var valores = document.querySelectorAll('input[type="checkbox"]:checked');
var valorer = document.querySelectorAll('input[type="radio"]:checked');
const select=document.querySelector('select').value;
    valores.forEach(valor => {
        var slecc = parseInt(valor.value)
        var txt=valor.labels[0].textContent;
        console.log(slecc)
        val.push({
            texto: txt,
            precio: slecc

        })
    })
    valorer.forEach(valor => {
        var slecc = parseInt(valor.value)
        var txt=valor.labels[0].textContent;
        console.log(slecc)
        val.push({
            texto: txt,
            precio: slecc

        })
    })
    var combotx=selec.options[selec.selectedIndex].text
    val.push({
        texto:combotx,
        precio:parseInt(select)
    })
    for (let i = 0; i < val.length; i++) {
        subtotal+=val[i].precio;
    }
    console.log(subtotal);
    total=subtotal +subtotal*iva;
    console.log(total);

    const div=document.createElement('div')
    div.classList.add('recibo')//darle estilo a este o si no a id=lista lista para el texto y el div= recibo al contenedor
    console.log(val)
    var conte=""
   for(let i=0;i<val.length;i++){
        conte+=`
        <p id="lista">producto: ${val[i].texto} precio: ${val[i].precio}</p>
        

        `;
    }
    div.innerHTML=conte;
    
    document.getElementById('total').innerText="su total es :"+ total;
    document.getElementById('subtotal').innerText="subtotal:   "+ subtotal;
    
    
    coti.appendChild(div)

})
document.getElementById('reiniciar').addEventListener('click', function (){
    var valores = document.querySelectorAll('input[type="checkbox"]:checked');
var valorer = document.querySelectorAll('input[type="radio"]:checked');
const select=document.querySelector('select').value;
    val=[];
    valores.forEach(valor => {
       valor.checked=false;
    })
    valorer.forEach(valor => {
       valor.checked=false;
    })
    grupo6.selectedIndex=false;
    document.querySelector('.recibo').innerHTML='';
    document.getElementById('subtotal').innerText=" ";
    document.getElementById('total').innerText="";


})


