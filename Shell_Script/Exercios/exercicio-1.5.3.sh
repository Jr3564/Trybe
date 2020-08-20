#!/bin/bash

# 3. Escreva um Shell Script que guarde o resultado do comando hostname em uma variável. 
# Imprima na tela uma mensagem: 
# "Este script está rodando no computador: _" em que "_" é o resultado do comando hostname que está na variável;

    VAR=$(whoami)
        echo "Este script está rodando no computador:$VAR em que $VAR é o resultado do comanto hostname que está na variável;"