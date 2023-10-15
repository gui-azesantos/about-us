
# About Us - Um portfólio minimalista

Este é um projeto de exemplo chamado "About Us" que demonstra a criação de um aplicativo web usando tecnologias modernas, incluindo React, Vite, Chakra UI, Axios, entre outras. O aplicativo tem como objetivo permitir aos usuários fornecer informações pessoais e visualizar os dados de perfil em uma página inicial.

## Configuração do Projeto

Certifique-se de ter Node.js e npm (ou yarn) instalados em seu sistema.

### Instalação de Dependências

Use o seguinte comando para instalar as dependências do projeto:

```bash
npm install
# ou
yarn
```

### Comandos Disponíveis

- `npm run dev` ou `yarn dev`: Inicie o servidor de desenvolvimento Vite para testar seu aplicativo localmente.
- `npm run build` ou `yarn build`: Crie uma versão de produção do aplicativo.
- `npm run lint` ou `yarn lint`: Execute o linter ESLint no código do projeto para manter a qualidade do código.
- `npm run preview` ou `yarn preview`: Inicie um servidor de pré-visualização para verificar a versão de produção localmente.

## Tecnologias Utilizadas

- [React](https://reactjs.org/): Biblioteca JavaScript para construir interfaces de usuário.
- [Chakra UI](https://chakra-ui.com/): Biblioteca de design de componentes para React com estilo e usabilidade prontos.
- [Axios](https://axios-http.com/): Cliente HTTP para fazer solicitações à API ViaCEP.
- [React Hook Form](https://react-hook-form.com/): Biblioteca para gerenciamento de formulários React.
- [Vite](https://vitejs.dev/): Build tool para desenvolvimento rápido de aplicativos web.
- [Styled Components](https://styled-components.com/): Biblioteca para estilização de componentes com CSS no JavaScript.

## Desenvolvimento

### CEP e Preenchimento de Endereço

Este projeto inclui um formulário "Sobre Você" que permite aos usuários inserir um CEP. Quando um CEP é inserido e o campo perde o foco, o aplicativo consulta a API ViaCEP para buscar informações de endereço e preenche automaticamente os campos correspondentes no formulário.

### Personalização

Você pode personalizar ainda mais este projeto, adicionando novos campos ao formulário ou estilizando-o de acordo com suas preferências. A biblioteca Chakra UI facilita a personalização de componentes.

## Licença

Este projeto é distribuído sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para obter mais detalhes.
