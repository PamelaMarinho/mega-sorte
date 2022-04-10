var result = []

function key(){
    let mold = document.getElementById('b1')
    let box = document.getElementById('keyboard')

    let cont = 0
    while(box.children.length <= 60){
        let clone = mold.cloneNode(true)
        cont++;
        let newValue;
        newValue =+ cont;
        clone.firstChild.innerHTML = newValue;
        clone.setAttribute('id',`${newValue}`)
        box.appendChild(clone);
    }
}

function selected(id){
    let item = document.getElementById(id).setAttribute('class','selected')

    let selected = document.getElementsByClassName('selected').length
    //console.log(selected)

    if(selected == 6){
        document.getElementsByClassName('checkBt')[0].setAttribute('class','checkBt-result')
    }

}   

randomNumber()
function randomNumber(){
    
   let sena = document.getElementsByClassName('trevo')

    random()

    function random(){
        let cont = 0
        while(cont < 6){
            let random = Math.random() * (2,60)
            let round = Math.round(random)
            if(!result.includes(round) && round != 0){
                result.push(round)
                cont++
            }
        }

        function min(a,b){
            return a - b
        }
        result.sort(min)
    }

    
}

function showResult(){
    //function desativarbt()

    let sena = document.getElementsByClassName('trevo')

    for(let i = 0; i < sena.length; i++){
        sena[i].innerHTML = result[i]
    }

}
