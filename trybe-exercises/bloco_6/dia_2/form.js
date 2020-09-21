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

    alert(`${object.id} Precisa de um pai para ser criado!`)
  }
  ;
}

/** É possível criar uma array de objects para criação de forma dinâmica com a função a seguir
 * 
 *chamar: createElements(ArrayDeObjetosDeElementos);
 *
 * entrada:
 
 let array = [ {elemento}, {elemento}, {elemento}, etc... ] ;

*/
function createElements(elementsList) {

  let list = elementsList;

  for (let i = 0; i < list.length; i++) {

    let object = list[i];

    switch (object.elementType) {

      case 'form' :
        createForm(object);
        break
      
      case 'div':
        createDiv(object);
          break

      case 'fieldset':
        createFieldset(object);
        break

      case 'input':
        createInput(object);
        break

      case 'textarea':
        createTextarea(object);
        break

      case 'select':
        createSelect(object);
        break

      case 'button':
        creatButton(object);
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
function createDiv(object) {

  let element = document.createElement('div'),
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

    };

  };

  father.appendChild(element);

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
function createForm(object) {
  
  let element = document.createElement('form'),
    father = document.querySelector(`#${object.father}`);

  alertaDeOrfao(object);

  for (let name in object) {

    switch (name) {
      
      case 'action':
        element.action = object[name];
        break

      case 'id':
        element.id = object[name];
        break

      case 'class':
        element.className = object[name];
        break

      case 'enctype':
        element.enctype = object[name];
        break
          
      case 'method':
        element.method = object[name];
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

  alertaDeOrfao(object);

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
  alertaDeOrfao(object)

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
function createFieldset(object) {

  let element = document.createElement('fieldset'),
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

    };

  };

  father.appendChild(element);
  if(object.legend != undefined ){createLegend(object.legend)};

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

  let element = document.createElement('input'),
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

      case 'content':
        element.innerText = object[name];
        break

      case 'name':
        element.name = object[name];
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

createElements(objects);

////function createSmall() {};
