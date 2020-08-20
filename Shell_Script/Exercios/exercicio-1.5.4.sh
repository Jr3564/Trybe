#!/bin/bash

#4. Escreva um Shell Script que verifique se o caminho até um arquivo existe ("file path").
#  Se ele existir, imprima na tela a mensagem: "O caminho _ está habilitado!". 
#  Então, verifique se você tem permissão de escrita no arquivo. 
#  Se tiver, mostre a mensagem: "Você tem permissão para editar _". 
#  Caso contrário, mostre a mensagem: "Você NÃO foi autorizado a editar _". 
#  O _ nas mensagens deve ser substituído pelo ("file path").

    echo "Qual é o caminho com o nome do arquivo? $(\n)" 

        until -e $CAMINHO
           
            do
            read CAMINHO
            
            echo "O caminho _ está habilitado!"
        done
