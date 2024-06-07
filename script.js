// Dobre O Numero
const numero = [5, 8, 12, 30, 15, 22, 13, 23];
const dobrarNumero = numero.map((valor) => valor * 2);
console.log(dobrarNumero);

//Para elemento
//Retorna apenas uma String com nome da Pessoa
//remova apenas a chave "Nome" do Objeto
//Adicione uma chave id em cada obj(id)

const pessoa = [
  { nome: "Jean", idade: 23 },
  { nome: "Lucas", idade: 62 },
  { nome: "Souza", idade: 55 },
  { nome: "Araujo", idade: 32 },
];
const nomes = pessoa.map((obj) => obj.nome);
console.log(nomes);

const idade = pessoa.map((obj) => ({ idade: obj.idade }));
console.log(idade);

const comIds = pessoa.map(function (obj) {
  const newobj = { ...obj };
  newobj.id = Math.random().toFixed(2)*(0-1000)+1000;
  return newobj;
});
console.log(comIds)
