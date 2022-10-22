var n1 = document.getElementById('nota1')
var n2 = document.getElementById('nota2')
var n3 = document.getElementById('nota3')
var n4 = document.getElementById('nota4')
var m = document.getElementById('msg')


function resul() {
    

    if (n1.value.length == 0 || n2.value.length == 0 || n3.value.length == 0 || n4.value.length == 0) { // Campos vazios
        window.alert('Campo(s) vazio(s)! Tente novamente...')

    } else if (n1.value > 10 || n2.value > 10 || n3.value > 10 || n4.value > 10)  { // Nota maior que 10
        window.alert('Algum campo está com número inválido! Tente novamente...')

    } else {

        let numeros = []
        soma = 0
        numeros.push(Number(n1.value))
        numeros.push(Number(n2.value))
        numeros.push(Number(n3.value))
        numeros.push(Number(n4.value))
        
        for (valor in numeros) {
            soma += numeros[valor]
        }

        media = soma / numeros.length
        
        m.innerHTML += `<p>A soma das notas é ${soma}</p>`
        m.innerHTML += `<p>A maior nota do aluno é ${Math.max.apply(null, numeros)}</p>` 
        m.innerHTML += `<p>A menor nota do aluno é ${Math.min.apply(null, numeros)}</p>`
        m.innerHTML += `A média final é ${media}`

        if (media > 5 && media <= 10) {
            
            m.innerHTML += '<p>O aluno está Aprovado!</p>'

        } else {

            m.innerHTML += `<p>O aluno está Reprovado!</p>`

        }

    }

}

function limpa() {

    document.getElementById('nota1').value=''
    document.getElementById('nota2').value=''
    document.getElementById('nota3').value=''
    document.getElementById('nota4').value=''
    m.innerHTML = '' // Limpa as minhas mensagens...

}
