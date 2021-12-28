# Movie Screen - Exercitando React, Styled Components e Sass
 
![appCover](src\Assets\cover.png)
![](https://img.shields.io/badge/F%C3%A1bio%20de%20Andrade-React.JS-green) ![](https://img.shields.io/badge/Styled-Components-blue) ![](https://img.shields.io/badge/CCS3-SASS-red)
 
### 🎛️ Dependencias
 
- [React](https://pt-br.reactjs.org/)
- [Styled Components](https://styled-components.com/)
- [Sass](https://sass-lang.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
 
 
### 🎯 Objetivo
O principal intuito do projeto foi exercitar os conceitos básicos e avançados de Styled Components e Sass, extraindo ao máximo direto das documentações as principais implementações para o React.
 
O objetivo era criar uma home-screen de uma aplicação para streaming. Onde se pode ter informações sobre sinopse, botão para trailer e outro para assistir ao filme.
 
 
### ⌨️ Como foi feito?
O ambiente foi criado através da extração do ambiente react com auxílio do:
`npx create-reac-app`
 
E aplicado as dependências do `Sass`, `Styled Components` e `React Icons` o primeiro passo foi setar os valores globais de estilização através da importação do módulo `<GlobalStyle>` direto do **Styled Components**.
 
Isso auxilia na hora de criar as primeiras - ou até todas - as variáveis e padronizações de tamanho para toda a aplicação.
 
Aproveitando a arquitetura do Styled Components, onde por padrão, as abstrações são criadas com **Wrapers** o molde para os componentes a serem renderizados foram importados para um único grande módulo `<MainContainer>`.
 
Os componentes foram divididos em:
- `<Header>`
- `<MainContent>`
- `<Footer>`
 
### 🎨 Estilização
Em conjunto com o ``Sass`` o ``Styled Components`` se torna uma ótima ferramenta, lembrando que para essa simples aplicação não precisaria de um ambiente tão robusto quanto essa, ela toda poderia ser feita apenas em `HTML` e `CSS`; porém com intuito de exercício ela foi feita com as demais tecnologias.
 
A facilidade em se estilizar diretamente em uma folha de JS junto com os conceitos de **Nesting** e **Modules** permite que a estilização se torne muito mais prática e intuitiva.
 
 
### 🔧 Próximos passos
 
- Refatoração do código visando performance
- Ajuste de layout para responsividade nos principais break-points.
- Pequenos ajustes de design
 
 

