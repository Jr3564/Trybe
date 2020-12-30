function createLabel(object) {

    let element = document.createElement('label');

    for (let name in object) {

        switch (name) {

            case 'for':
                element.for = object[name];
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

            case 'legend':
                createLegend(object);
                break

            case 'label':
                father = createLabel(object[name]);
                break
        };

    };

    father.appendChild(element);

};
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
function createTextarea(object) {

    let element = document.createElement('textarea'),
        father = document.querySelector(`#${object.father}`);

    alertaDeOrfao(object);

    for (let name in object) {

        switch (name) {

            case 'id':
                element.id = object[name];
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
function createOption(optionEstados) {

    let list = optionEstados,
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
function previewImage(event) {
    /*
  Nao entendi ... 
    fonte:https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded/27165977#27165977
    Toda a parte do trabalho com o objeto URL foi copiado do stackoverflow link acima.
   */
  
    let output = document.querySelector("#meme-image"),
      input = event;
  
    output.src = URL.createObjectURL(input.target.files[0]);
  
    output.onload = () => {
  
      URL.revokeObjectURL(output.src);
  
    };
  
  };
