# DIGITAL REPUBLIC CODE CHALLENGE

## O que foi desenvolvido

Uma aplicação web que ajuda o usuário a calcular a quantidade de tinta necessária para pintar uma sala.
A sala é composta de 4 paredes e permite que o usuário escolha qual a medida de cada parede e quantas janelas e portas possuem cada parede.
Com base na quantidade necessária o programa aponta tamanhos de lata de tinta que o usuário deve comprar, sempre priorizando as latas maiores. Ex: se o usuário precisa de 19 litros, ele deve sugerir 1 lata de 18L + 2 latas de 0,5L

### Regras de negócio

1. Nenhuma parede pode ter menos de 1 metro quadrado nem mais de 50 metros quadrados, mas podem possuir alturas e larguras diferentes
2. O total de área das portas e janelas deve ser no máximo 50% da área de parede
3. A altura de paredes com porta deve ser, no mínimo, 30 centímetros maior que a altura da porta
4. Cada janela possui as medidas: 2,00 x 1,20 mtos
5. Cada porta possui as medidas: 0,80 x 1,90
6. Cada litro de tinta é capaz de pintar 5 metros quadrados
7. Não considerar teto nem piso.
8. As variações de tamanho das latas de tinta são:
   - 0,5 L
   - 2,5 L
   - 3,6 L
   - 18 L

## 🛠 Tecnologias

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" width="20" height="16" /> ReactJS

<img src="https://www.typescriptlang.org/favicon-32x32.png" width="20" height="16" /> TypeScript

<img src="https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png" width="16" height="16" /> Styled-components

<img src="https://testing-library.com/img/octopus-64x64.png" width="20" height="16" /> React Testing Library

## ▶️ Inicializando o projeto

- ### **Pré-requisitos**

  - **Node.js**
  - Gerenciador de pacotes **npm**

```sh
  # Abra pasta do projeto
  $ cd lemonLibrary
  # Instale as dependencias
  $ npm install
  # Rode a aplicação
  $ npm start
```

### Abra o navegador

[http://localhost:3000](http://localhost:3000) para ver no browser.

## ▶️ Rodando os tests

```sh
  # Abra pasta do projeto
  $ cd room-painting
  # Rode os testes
  $ npm test
```
