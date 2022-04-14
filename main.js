let result = []
let input = [] 
let selectedItem = document.getElementsByClassName('selected')

function key(){
    console.log(result)
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

document.getElementById('keyboard').addEventListener('change',(event)=>{
    alert(event)
    while(length==5){
        document.getElementsByClassName('checkBt')[0]
        .setAttribute('class','checkBt-result')
    }
})

function reload(){
    location.reload()
 }

randomNumber()
function randomNumber(){

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

    let changeBt = document.getElementsByClassName('checkBt-result')[0]
    if(changeBt){
            let sena = document.getElementsByClassName('trevo')
            for( i in sena){
                sena[i].innerHTML = result[i]
            }
    }

    compare()
}

function selected(id){

    if(document.getElementById('checkBt').classList != 'checkBt-result'){

            let classe = document.getElementById(id).classList.value
            let length = selectedItem.length

            if(classe == 'no-selected'){

                    if(length!=6){
                        document.getElementById(id).setAttribute('class','selected flip'                                                                         )
                    }
                    if(length>=5){
                        document.getElementsByClassName('checkBt')[0]
                        .setAttribute('class','checkBt-result')
                    }
                    input.push(Number(id))
                
            }else{

                    let  index = input.indexOf(id)
                    input.splice(index,1)
                    document.getElementById(id)
                    .setAttribute('class','no-selected')
                    let bt = document.getElementsByClassName('checkBt-result')[0]
                    if(bt != 'undefined'){
                        bt.setAttribute('class','checkBt')
                    }
            }
    }

}  

function hits(){

    let includeList = []
    for(i in input){
        if(result.includes(input[i])){
            includeList.push(input[i])
        }
    }
    return includeList.length
}

function compare(){

    if(hits()==6){
  
         for(let i = 5; i >= 0; i--){
             selectedItem[i].setAttribute('class','winner')
         }

    }else{
        for(let i = 0; i < 6; i++){
            if(result.includes(Number(input[i]))){
                document.getElementById(input[i]).setAttribute('class','include')
            }else{          
                document.getElementById(input[i]).setAttribute('class','noInclude')
            }
        }
    }

}
    
