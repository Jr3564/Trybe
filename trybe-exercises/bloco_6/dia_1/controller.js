let objectInput = {

    name: "2",
    id : "3",
    class : "4" ,
    charsNum : "4",
    type : "5",
    label : "6",
    text : "7"

} ;

let objectForm = {

    name: "2",
    id : "3",
    class : "4" ,
    action : "1",
    method : "2",
    enctype : "3",
    target : "4"

} ;

let objectLabel = {

    for : "7",
    text : "7",
    class : "4" 

} ;

let objectOption = {

    name: "2",
    id : "3",
    selected : "7",
    value : "5",
    class : "4" ,

} ;

let objectSelect = {

    id : "3",
    required : "3",
    class : "4" ,
    name : "6" ,
    objectOption : "func"
 
} ;

let objectTextArea = {

    name: "2",
    placeholder : "3",
    required : "3",
    class : "4" ,
    id : "3",
    cols : "4",
    rows : "5",

} ;

let objectButton = {

    type : "5",
    text : "7" ,
    name: "2",
    class : "4" ,
    id : "3",
    value : "5"


} ;

let objectFieldset = {

    type : "5",
    text : "7" ,
    name: "2",
    class : "4" ,
    id : "3",
    value : "5" ,
    legend : "texto"


} ;

function createFieldset(objectFieldset) {} ;

function createTextArea (objectTextArea) {} ;

function createLabel (objectLabel) {} ;

function createButton (objectButton) {} ;

function createElementInputs( objectInput ) {

    let  objeto = objectInput ,

        element = document.createElement('input');

    for( let index in objeto ) {

        switch (index) {

            case 'type' :
                element.type = objeto.type;
                break

            case 'name' :
                element.name = objeto.name;
                break;

            case 'class' :
                element.class = objeto.class;
                break;    

            case 'id' :
                element.id = objeto.id;
                break;
            
            case 'accept' :
                element.accept = objeto.accept;
                break;

            case 'min' :
                element.min = objeto.min;
                break;
            
            case 'max' :
                element.max = objeto.max;
                break;

            case 'placeholder' :
                element.placeholder = objeto.placeholder;
                break;       

            case 'src' :
                element.src = objeto.src;
                break;

            case 'required' :
                element.required = objeto.required;
                break; 	
        } ;

    };

    return element;

} ;

function createSelect ( objectSelect) {} ;

function createForms (objectForm) {


    let  objeto = objectForm ,

    element = document.createElement('form');

for( let index in objeto ) {

    switch (index) {

        case 'action' :
            element.action = objeto.action;
            break

        case 'name' :
            element.name = objeto.name;
            break;

        case 'class' :
            element.class = objeto.class;
            break;    

        case 'id' :
            element.id = objeto.id;
            break;
        
        case 'accept' :
            element.accept = objeto.accept;
            break;

        case 'min' :
            element.min = objeto.min;
            break;
        
        case 'max' :
            element.max = objeto.max;
            break;

        case 'placeholder' :
            element.placeholder = objeto.placeholder;
            break;       

        case 'src' :
            element.src = objeto.src;
            break;

        case 'required' :
            element.required = objeto.required;
            break; 	
    } ;

};

return element;


} ;

//console.log(createElementInputs( objectInput ));
