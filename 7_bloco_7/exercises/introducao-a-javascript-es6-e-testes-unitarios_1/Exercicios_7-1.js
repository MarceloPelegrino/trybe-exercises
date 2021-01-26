const testingScope = (escopo) => {
  if (escopo === true) { 
    const ifScope = `Não devo ser utilizada fora do meu escopo (if)\nótimo, fui utilizada no escopo !`;
    // ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  // console.log(`${ifScope}\no que estou fazendo aqui ? :O`); // Se necessário esta linha pode ser removida.
}

testingScope(true);