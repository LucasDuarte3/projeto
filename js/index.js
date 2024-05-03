let teste = document.querySelector("#calcule")
teste.addEventListener('click', calcularContribuição)

function calcularContribuição(){
    let salario = Number(document.getElementById("salario").value).toFixed(2);
    let QtdFilhos = Number(document.getElementById("QtdFilhos").value);
        if (salario <= 806.80){
            let cota1 = QtdFilhos * 41.37;
            alert(`você vai pagar um total de cotas de ${cota1}`);
        }
        else if(salario >= 806.81 || salario <= 1212.64){
            let cota2 = QtdFilhos * 29.16;
            alert(`você vai pagar um total de cotas de ${cota2}`);
        }else {
            alert("Você não precisa pagar cota");
        }
    }
