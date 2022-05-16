//      Events Modules      //

//  O Node.js tem um módulo integrado, chamado "Events", onde é possível criar, disparar e ouvir seus próprios eventos.

//  Para incluir o módulo de Eventos Integrado, use o método 'require()'. Além disso, todas as propriedades e métodos de eventos são uma instância de um objeto 'EventEmitter'. Para poder acessar essas propriedades e métodos, crie um objeti EventEmitter():

const events = require("events");
const eventEmitter = new events.EventEmitter();
//criando um event handler:
let myEventHandler = function () {
  console.log("I hear a scream!");
};
//atribuindo o eventHandler ao Event:
eventEmitter.on("scream", myEventHandler);
//disparar o "scream" event:
eventEmitter.emit("scream");

//  É possível atribuir manipuladores de eventos aos seus próprioss eventos com o objeto EventEmitter. No exemplo acima criamos uma função que será executada quando um evento "scream" foi adicionado. Para disparar um evento, use o método 'emit()'.
