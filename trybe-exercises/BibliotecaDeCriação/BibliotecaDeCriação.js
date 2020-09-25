let objects = [
  {
    elementType : 'form',
    action : "",
    id : "formP",
    class : '',
    enctype : "multipart/form-data",
    method : "GET",
    father : "content"
  },
  {elementType : 'div' , id : 'datesPersonal' , class : 'form-group' , father : 'formP' },
  {
    elementType: 'fieldset',
    id: 'personalDate',
    father: 'datesPersonal',
    class : 'form-group',
    legend : {
      content : "Dados pessoais" ,
      class : 'col-form-label col-sm-2 pt-0',
      father : "personalDate"
    }
  },
  {elementType : 'div' , id : 'nameDiv' , class : 'form-group' , father : 'personalDate' },
  {
    elementType: 'input',
    type: 'text',
    id: 'nameText',
    required: 'required',
    name: 'nameComplete',
    class : 'form-control',
    label: {
      for: "nameText",
      id: "nameLb",
      class : 'form-check-label',
      father: 'nameDiv',
      content : 'nome: '
    },
    maxlength: '40',
    father: 'nameLb'
  },
  {elementType : 'div' , id : 'emailDiv' , class : 'form-group' , father : 'personalDate' },
  {
    elementType: 'input',
    type: 'text',
    id: 'emailText',
    required: 'required',
    class : 'form-control',
    name: 'email',
    label: {
      for: "emailText",
      id: 'emailLb',
      class : 'form-check-label',
      father: 'emailDiv',
      content : 'email: '
    },
    maxlength: '50',
    father: 'emailLb'
  },
  {elementType : 'div' , id : 'CPFDiv' , class : 'form-group' , father : 'personalDate' },
  {
    elementType: 'input',
    type: 'text',
    id: 'CPFText',
    class : 'form-control',
    required: 'required',
    label: {
      for: "CPFText",
      id: 'CPFLb',
      class : 'form-check-label',
      father: 'CPFDiv',
      content : 'CPF: '
    },
    name: 'CPF',
    maxlength: '11',
    father: 'emailLb'
  },
  {elementType : 'div' , id : 'enderecoDiv' , class : 'form-group' , father : 'personalDate' },
  {
    elementType: 'input',
    type: 'text',
    id: 'enderecoText',
    required: 'required',
    class : 'form-control',
    label: {
      for: "enderecoText",
      id: 'enderecoLb',
      class : 'form-check-label',
      father: 'enderecoDiv',
      content : 'endereço: '
    },
    name: 'Endereco',
    maxlength: '200',
    father: 'enderecoLb'
  },
  {elementType : 'div' , id : 'cidadeDiv' , class : 'form-group' , father : 'personalDate' },
  {
    elementType: 'input',
    type: 'text',
    id: 'cidadeText',
    required: 'required',
    class : 'form-control',
    label: {
      for: "cidadeText",
      id: 'cidadeLb',
      class : 'form-check-label',
      father: 'cidadeDiv',
      content : 'cidade: '
    },
    name: 'Cidade',
    maxlength: '40',
    father: 'cidadeLb'
  },
  {elementType : 'div' , id : 'estadoDiv' , class : 'form-group' , father : 'personalDate' },
  {
    elementType: 'select',
    id: 'estadoSelect',
    required: 'required',
    class : 'form-control',
    name: 'estado',
    label: {
      for: "estadoSelect",
      id: 'estadoLb',
      class : 'form-check-label',
      father: 'estadoDiv',
      content : 'estado: '
    },
    father: 'estadoLb'
  },
  {
    elementType: 'options',
    id: 'estadoOptions',
    father: 'estadoSelect'
  },
  {elementType : 'div' , id : 'casaDiv' , class : 'form-check' , father : 'personalDate' },
  {
    elementType: 'input',
    type: 'radio',
    id: 'casa',
    name: 'casaApartamentoName',
    class : '"form-check-input',
    label: {
      for: "casa",
      class : 'form-check-label',
      content: "Apartamento",
      id: 'casaLb',
      father: 'casaDiv'
    },
    father: 'casaLb'
  },
  {elementType : 'div' , id : 'apDiv' , class : 'form-check' , father : 'personalDate' },
  {
    elementType: 'input',
    type: 'radio',
    id: 'casa',
    class : '"form-check-input',
    name: 'casaApartamentoName',
    label: {
      for: "apartamento",
      content: "Casa",
      id: 'casaLb',
      class : 'form-check-label',
      father: 'apDiv'
    },
    father: 'personalDate'
  },  
  {elementType : 'div' , id : 'lastExperience' , class : 'form-group' , father : 'formP' },
  {
    elementType: 'fieldset',
    id: 'lastJobs',
    class : 'form-group',
    father: 'lastExperience',
    legend : {
      content : "Empregos Anteriores" ,
      class : 'col-form-label col-sm-2 pt-0',
      father : "lastJobs"
    }
  },
  {elementType : 'div' , id : 'resumeDiv' , class : 'form-group' , father : 'lastJobs' },
  {
    elementType: 'textarea',
    required: 'required',
    id: 'resume',
    name: 'resume',
    label: {
      for: "resume",
      id: 'resumeLb',
      class : 'form-check-label',
      father: 'resumeDiv',
      content : 'Resumo: '
    },
    maxlength: '1000',
    father: 'resumeLb'
  },
  {elementType : 'div' , id : 'cargoDiv' , class : 'form-group' , father : 'lastJobs' },
  {
    elementType: 'input',
    type: 'text',
    id: 'cargoId',
    required: 'required',
    name: 'cargoName',
    label: {
      for: "cargoId",
      id: 'cargoLb',
      class : 'form-check-label',
      father: 'cargoDiv',
      content : 'Cargo: '
    },
    maxlength: '40',
    father: 'cargoLb'
  },
  {elementType : 'div' , id : 'requiredDiv' , class : 'form-group' , father : 'lastJobs' },
  {
    elementType: 'input',
    type: 'text',
    id: 'descriptionId',
    required: 'required',
    name: 'descriptionName',
    label: {
      for: "required",
      id: 'requiredLb',
      father: 'requiredDiv',
      class : 'form-check-label',
      content : 'Descrição: '
    },
    maxlength: '500',
    father: 'requiredLb'
  },
  {elementType : 'div' , id : 'inicioDiv' , class : 'form-group' , father : 'lastJobs' },
  {
    elementType: 'input',
    type: 'text',
    id: 'dataDeInicio',
    required: 'required',
    name: 'dataDeInicio',
    label: {
      for: "dataDeInicio",
      id: 'dataDeInicioLb',
      father: 'inicioDiv',
      class : 'form-check-label',
      content : 'Data de inicio: '
    },
    maxlength: '200',
    father: 'dataDeInicioLb'
  },
  {elementType : 'div' , id : 'submitBtnDiv' , class : 'form-group' , father : 'formP' },
  {
    elementType: 'button',
    type: 'submit',
    content: 'enviar',
    id: 'submitBtn',
    class : 'btn btn-primary',
    label: {
      for: "submitBtn",
      class : 'form-check-label',
      id: 'submitBtnLb',
      father: 'submitBtnDiv'
    },
    father: 'submitBtnLb'
  }
];
let optionEstados = [
  {
    elementType: 'options',
    id: 'EstadoOptions',
    father: 'estadoSelect'
  },
  'Acre',
  'Alagoas',
  'Amapá',
  'Amazonas',
  'Bahia',
  'Ceará',
  'Espírito Santo',
  'Goiás',
  'Maranhão',
  'Mato Grosso',
  'Mato Grosso do Sul',
  'Minas Gerais',
  'Pará',
  'Paraíba',
  'Paraná',
  'Pernambuco',
  'Piauí',
  'Rio de Janeiro',
  'Rio Grande do Norte',
  'Rio Grande do Sul',
  'Rondônia',
  'Roraima',
  'Santa Catarina',
  'São Paulo',
  'Sergipe',
  'Tocantins',
  'Distrito Federal'
]

//Alerta criado para o caso de esquecer de adicionar o pai de algum elemento.
function alertaDeOrfao(object) {

  if (object.father === undefined) {

    console.log(`${object.id} Precisa de um pai para ser criado!`);
  }
  ;
}

let listCreation = [
  [ { elementType : 'form' ,
      amount : '1' ,
      class : 'form-group',
    },
  {
    action : "",
    id : "formP",
    enctype : "multipart/form-data",
    method : "GET",
    father : ""
  }
  ],
  [ { elementType: 'fieldset',
      amount : '2' ,
      class : 'form-group', },
    {
    id: 'personalDate',
    father: 'formP',
    legend : {
      content : "Dados pessoais" ,
      class : 'col-form-label col-sm-2 pt-0',
      father : "personalDate"
    },
    } ,
    {
    id: 'lastJobs',
    father: 'formP',
    legend : {
      content : "Empregos Anteriores" ,
      class : 'col-form-label col-sm-2 pt-0',
      father : "lastJobs" }
    }
  ],
  [ { elementType : 'div' ,
      amount : '13' ,
      class : 'form-group' } ,

  { id : 'nameDiv' , father : "personalDate"},
  { id : 'emailDiv' , father : "personalDate"},
  { id : 'CPFDiv' , father : "personalDate"},
  { id : 'enderecoDiv' , father : "personalDate"},
  { id : 'cidadeDiv' , father : "personalDate"},
  { id : 'estadoDiv' , father : "personalDate"},
  { id : 'casaDiv' , father : "personalDate"},
  { id : 'apDiv' , father : "personalDate"},

  { id : 'resumeDiv' , class : 'form-group' , father : 'lastJobs' },
  { id : 'cargoDiv' , class : 'form-group' , father : 'lastJobs' },
  { id : 'requiredDiv' , class : 'form-group' , father : 'lastJobs'},
  { id : 'inicioDiv' , class : 'form-group' , father : 'lastJobs'},
  { id : 'submitBtnDiv' , class : 'form-group' , father : 'lastJobs'}
  ],
  [ { elementType: 'input',
      amount : '10' ,
      class : 'form-control' ,
      required: 'required'
    },
      { id: 'nameText',
        type: 'text',
        maxlength: '40',
        label: {
          for: "nameText",
          id: "nameLb",
          class : 'form-check-label',
          father: 'nameDiv',
          content : 'nome: '},
        father: 'nameLb',
      },
      { id: 'emailText',
        type: 'text',
        label: {
          for: "emailText",
          id: 'emailLb',
          class : 'form-check-label',
          father: 'emailDiv',
          content : 'email: '},
        father: 'emailLb'
      },
      { id: 'CPFText',
        type: 'text',
        maxlength: '11',
        label: {
          for: "CPFText",
          id: 'CPFLb',
          class : 'form-check-label',
          father: 'CPFDiv',
          content : 'CPF: '},
        father: 'CPFLb'
      },
      { id: 'enderecoText',
        type: 'text',        
        label: {
          for: "enderecoText",
          id: 'enderecoLb',
          class : 'form-check-label',
          father: 'enderecoDiv',
          content : 'endereço: '},
        father: 'enderecoLb'
      } ,
      { id: 'cidadeText',
        type: 'text',
        maxlength: '40',
        label: {
          for: "cidadeText",
          id: 'cidadeLb',
          class : 'form-check-label',
          father: 'cidadeDiv',
          content : 'cidade: '},
        father: 'cidadeLb'
      },
      { id: 'Apartamento',
        type: 'radio',
        label: {
          for: "casa",
          class : 'form-check-label',
          content: "Apartamento",
          id: 'casaLb',
          father: 'casaDiv'},
        father: 'casaLb'
      },
      { id: 'casa',
        type: 'radio',
        name: 'casaApartamentoName',
        label: {
          for: "apartamento",
          content: "Casa",
          id: 'casaLb',
          class : 'form-check-label',
          father: 'apDiv'},
       father: 'personalDate'
      },
      { id: 'cargoId',
        type: 'text',
        name: 'cargoName',
        maxlength: '40',
        label: {
          for: "cargoId",
          id: 'cargoLb',
          class : 'form-check-label',
          father: 'cargoDiv',
          content : 'Cargo: '},
        father: 'cargoLb'
      },
      { id: 'descriptionId',
        maxlength: '500',
        label: {
          for: "required",
          id: 'requiredLb',
          father: 'requiredDiv',
          class : 'form-check-label',
          content : 'Descrição: '},
        father: 'requiredLb'
      },
      { id: 'dataDeInicio',
        maxlength: '200',
        label: {
          for: "dataDeInicio",
          id: 'dataDeInicioLb',
          father: 'inicioDiv',
          class : 'form-check-label',
          content : 'Data de inicio: ',},
        father: 'dataDeInicioLb'
      }

  ]

]


/** É possível criar uma array de objects para criação de forma dinâmica com a função a seguir
 * 
 *chamar: createMultipleElements(ArrayDeObjetosDeElementos);
 *
 * entrada:
 //array[0] contem a informação de quantidades e qual elemento será criado, nos seguintes ficam os elementos com seus detalhes.
 let array = 
 [ {
    elementType : '' ,
    amount : 'quantos elementos?' ,
    class : 'opcional, pode ser posto a seguir',
    type : 'opcional, pode ser posto a seguir'
    }, 
  {elemento}, 
  {elemento}, 
  etc... ] ;

*/
function createMultipleElements(elementsList) {

  let list = elementsList, 
      features = list[0];

  for (let i = 1; i <= features.amount; i++) {
    let element = document.createElement(features.elementType) ,
        object = list[i] ;

    for(let name in features){

      switch (name) {
        
        case 'classe' :
          element.className = features[name];
  
        case 'type' :
          element.type = features[name];

        case 'required':
          element.required = object[name];
          break

        case 'content':
          element.innerText = object[name];
          break

      }
    };
    
    switch (features.elementType) {

      case 'div' :
        createDiv(element , object);
        break

      case 'form' :
        createForm(element , object);
        break

      case 'fieldset':
        createFieldset(element , object);
        break

      case 'input':
        createInput(element , object);
        break

      case 'textarea':
        createTextarea(element , object);
        break

      case 'select':
        createSelect(element , object);
        break

      case 'button':
        creatButton(element , object);
        break
    };
  };
};
/**chamar : createDiv(object);
 * 
 * objeto :

let object = {
    
    elementType : 'div',
    id : '' ,
    class : '' ,
    father : 'elemento pai'

  };
  
*/
function createDiv(element , object) {

  for (let name in object) {

    switch (name) {

      case 'id':
        element.id = object[name];
        break

      case 'class':
        element.className = object[name];
        break

      case 'father':
        if(object[name] == "" || object[name] == undefined)
        {
          father = document.querySelector('body');
          father.appendChild(element);
        } else
        { 
          father = document.querySelector(`#${object.father}`);
          father.appendChild(element);
        };
        break

    };

  };

};

/** chamar : createForm(object);
 * 
 * entrada :

 let object = {

    elementType : 'form',
    id : '' ,
    class : '' ,
    enctype : '' ,
    method : '' ,
    action : '' ,
    father : 'elemento pai'
 }
*/
function createForm(element , object) {
  
  for (let name in object) {

    switch (name) {

      case 'action':
        element.action = object[name];
        break

      case 'enctype':
        element.enctype = object[name];
        break
          
      case 'method':
        element.method = object[name];
          break

      case 'id':
        element.id = object[name];
        break

      case 'class':
        element.className = object[name];
        break

      case 'father':
        if(object[name] == "" || object[name] != undefined)
        { 
          father = document.querySelector('body');
        } else
        { 
          father = object[name];
        };
        break

    };

  };

  father.appendChild(element);

};

/** chamar : createLegend(object);
 * 
 * entrada :

 let object = {

    elementType : 'legend',
    class : '' ,
    content : 'Texto que aparecerá na legenda' ,
    father : 'elemento pai'
 }
*/
function createLegend(object) {
  
  let element = document.createElement('legend'),
    father = document.querySelector(`#${object.father}`),
    content = object.content;

  if(content !== undefined) {
    element.innerText = content;
  }
  else{ 
    alert('Faltou o conteúdo da legenda!');
    console.log('Não faz sentido botar uma legenda se você não põe o conteúdo.')
  };

  if(object.class !== undefined) {
    element.className = object.class;
  };
  
  father.appendChild(element);

};

/** chamar : createLabel(object);
 * 
 * entrada:
 
    label: {
    
      for: "",
      id: "",
      class : '',
      father: 'Elemento pai',
      content : ': '

     }
*/
function createLabel(object) {

  let element = document.createElement('label');

  for (let name in object) {

    switch (name) {

      case 'for':
        element.for = object[name];
        break
      
      case 'class':
        element.className = object[name];
        break

      case 'content':
        element.innerText = object[name];
        break

      case 'id':
        element.id = object[name];
        break

      case 'father':
        alertaDeOrfao(object);
        father = document.querySelector(`#${object[name]}`);
        break
    };
  };

  father.appendChild(element);

  return element;

};

/** chamar: createFieldset(object);
 * 
 * entrada:
 
 let object = {

    elementType: 'fieldset',
    id: '',
    father: '',
    class : '',
    
    // É possível adicionar a legenda direto do objeto adicionando o objeto a seguir.
    legend : {

      class : '' ,
      content : 'Texto que aparecerá na legenda' ,
      father : 'elemento pai'

 }
 */
function createFieldset(element , object) {

  for (let name in object) {

    switch (name) {

      case 'type':
        element.type = object[name];
        break

      case 'id':
        element.id = object[name];
        break

      case 'class':
        element.className = object[name];
        break

      case 'father':
        if(object[name] == "" || object[name] == undefined)
        {
          father = document.querySelector('body');
          father.appendChild(element);
        } else
        { 
          father = document.querySelector(`#${object.father}`);
          father.appendChild(element);
        };
        break

        case 'legend':
          createLegend(object.legend);
          break

    };
  };
};

/** chamar : createInput(object);
 * 
 * entrada
 
   {
    elementType: 'input',
    type: '' ,
    id: '' ,
    required: '',
    name: '',
    class : '',

    // É possível criar uma label por aqui adicionando o objeto a seguir.
    label: {
      for: "",
      id: "",
      class : '',
      father: '',
      content : 'Conteúdo que aparecerá escrito na label: : '
    },
    maxlength: ,
    father: ''
  },
 
 */
function createInput(object) {

  for (let name in object) {

    switch (name) {

      case 'required':
        element.required = object[name];
        break

      case 'content':
        element.innerText = object[name];
        break

      case 'name':
        console.log(name)
        element.name = object[name];
        break

      case 'label':
        father = createLabel(object[name]);
        break

      //não funcionou
      case 'maxlength':
        element.maxlength = object[name];
        break

      case 'type':
        element.type = object[name];
        break

      case 'id':
        element.id = object[name];
        break

      case 'class':
        element.className = object[name];
        break

      case 'father':
        if(object[name] == "" || object[name] == undefined)
        {
          father = document.querySelector('body');
          father.appendChild(element);
        } else
        { 
          father = document.querySelector(`#${object.father}`);
          father.appendChild(element);
        };
        break

    };
  };

};

/** chamar : createTextarea(object);
 * 
 * entrada:
 {
    elementType: 'textarea',
    required: '',
    id: '',
    name: '',

    // É possível criar uma label por aqui adicionando o objeto a seguir.
    label: {
      for: "",
      id: '',
      class : '',
      father: '',
      content : 'Conteúdo que aparecerá escrito na label '
    },
    maxlength: '',
    father: ''
  },
 
 */
function createTextarea(object) {

  let element = document.createElement('textarea'),
    father = document.querySelector(`#${object.father}`);

  alertaDeOrfao(object);

  for (let name in object) {

    switch (name) {

      case 'id':
        element.id = object[name];
        break
      
      case 'class':
        element.className = object[name];
        break

      case 'required':
        element.required = object[name];
        break

      case 'name':
        element.name = object[name];
        break

      case 'content':
        element.innerText = object[name];
        break

      case 'label':
        father = createLabel(object[name]);
        break
      //não funcionou
      case 'maxlength':
        element.maxlength = object[name];
        break

    };

  };

  father.appendChild(element);

};

/** chamar : createSelect(object);
 * 
 * entrada:
 
 let object = {

    elementType: 'select',
    id: '',
    required: '',
    class : '',
    name: '',
    
    // É possível criar uma label por aqui adicionando o objeto a seguir.
    label: {
      for: "",
      id: '',
      class : '',
      father: '',
      content : 'Conteúdo que aparecerá escrito na label '
    },
    father: ''
 }
 
 */
function createSelect(object) {

  let element = document.createElement('select'),
    father = document.querySelector(`#${object.father}`);

  alertaDeOrfao(object);

  for (let name in object) {

    switch (name) {

      case 'type':
        element.type = object[name];
        break

      case 'id':
        element.id = object[name];
        break

      case 'class':
        element.className = object[name];
        break

      case 'required':
        element.required = object[name];
        break

      case 'name':
        element.name = object[name];
        break

      case 'label':
        father = createLabel(object[name]);
        break
    };

  };

  father.appendChild(element);

  createOption(optionEstados);

};

/** chamar : createOption;
 * 
 * entrada:
  
 let objeto = [ { elementType: 'options', id: '', father: '' }, 'opção1', 'opção2', 'opção3', 'etc...'};

*/
function createOption(object) {

  let list = object,
    features = list[0],
    father = document.querySelector(`#${features.father}`);

  for (let i = 1; i < list.length; i++) {

    let element = document.createElement('option');
    element.innerText = list[i];

    for (let name in features) {

      switch (name) {

        case 'type':
          element.type = features[name];
          break;

        case 'class':
          element.className = object[name];
          break

        case 'id':
          element.id = list[i];
          break;

        case 'content':
          element.innerText = list[i];
          break

      };

    };

    father.appendChild(element);

  };

};

/** chamar : createButton(object);
 * 
 * entrada:

  let object =  {
    elementType: 'button',
    type: '',
    content: 'Aparecerá escrito no botão',
    id: '',
    class : '',
    
    // É possível criar uma label por aqui adicionando o objeto a seguir.
    label: {
      for: "",
      id: '',
      class : '',
      father: '',
      content : 'Conteúdo que aparecerá escrito na label '
    },
    father: ''
  }

*/
function creatButton(object) {

  let element = document.createElement('button'),
    father = document.querySelector(`#${object.father}`);

  alertaDeOrfao(object);

  for (let name in object) {

    switch (name) {

      case 'type':
        element.type = object[name];
        break

      case 'id':
        element.id = object[name];
        break

      case 'class':
        element.className = object[name];
        break

      case 'content':
        element.innerText = object[name];
        break

      case 'name':
        element.name = object[name];
        break

      case 'label':
        father = createLabel(object[name]);
        break

    };

  };

  father.appendChild(element);

};


for( let i = 0 ; i < listCreation.length ; i++){ 

  let item = listCreation[i];

  createMultipleElements(item);

};
////function createSmall() {};
