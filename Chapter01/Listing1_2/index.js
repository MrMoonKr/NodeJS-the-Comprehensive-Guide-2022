import EventEmitter from 'events';

const myObj = new EventEmitter();

myObj.on( 'myEvent', ( data ) => {
    console.log( "myEvent: " , data );
} );
myObj.on( 'myEvent1', ( data ) => {
    console.log( "myEvent1: " , data );
} );

myObj.emit( 'myEvent', 'Hello World 1' );

myObj.emit( 'myEvent1', 'Hello World 2' );

myObj.emit( 'myEvent', 'Hello World 3' );
