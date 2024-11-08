#readmi
#Automação SAV e2e

Projeto simples de testes automatizados com cypress.

##Pre-requisitos

Este projeto requer Node.js e npm na versão v18.15.0 e 9.5.0 ou superior, eu usei node v20.11.0 e npm v10.2.4 e não tive problemas.
Deve instalar o Sinon para automatizar com pop-ups : npm install sinon --save-dev


##Instalação
Run npm install (or npm i for the short version) para instalar as dependências.

##Tests
 
 Você pode rodar os testes simulando desktop ou mobile seja no modo hadless (backend) ou interativo (browser).

 ##Desktop

 npm test: para testes em modo headless
 npx cypress open para testes em moodo interativo

##Mobile

npm run test:mobile para testes em modo headless simulando mobile.
cypress open --config viewportWidth=410 viewportHeight=860 para testes no modo interativo simulando mobile. 

Apoie esse projeto
Se você gostou desse projeto, deixe uma ⭐.

Este projeto foi feito com muito esforço 💚 por Ed.