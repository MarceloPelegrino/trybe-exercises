// Quadrado de asteriscos e lado n
// 1- Imprimir uma linha de n asteriscos

let n = 5;
let linha = "";

for (let index = 1; index <= n; index+=1) {
    
    for (let index2 = 1; index2 <= n; index2+=1) {
        linha += "*";
        
    }
    console.log(linha);
    linha = "";
}
