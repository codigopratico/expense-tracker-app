# FinTrack · Expense Tracker

Aplicativo mobile em desenvolvimento para organização de despesas pessoais. O projeto foi criado para praticar a construção de uma experiência mobile com navegação por rotas, componentes reutilizáveis e uma base visual consistente.

> **Status:** protótipo inicial em desenvolvimento.

## O que já foi desenvolvido

- Landing page responsiva para apresentação do aplicativo;
- Navegação inicial entre boas-vindas, login e cadastro com Expo Router;
- Estrutura de layout com respeito à área segura do dispositivo;
- Componentes reutilizáveis de texto e botão;
- Tokens visuais iniciais para cores e tipografia.

## Próximas etapas

- Construir os fluxos completos de login e cadastro;
- Criar o painel de despesas e categorias;
- Implementar cadastro, edição e exclusão de lançamentos;
- Adicionar persistência de dados e indicadores de gastos.

## Tecnologias

- React Native
- Expo SDK 57 e Expo Go
- Expo Router
- TypeScript
- React Hooks
- React Native Paper

## Como executar

```bash
npm install
npm start
```

Após iniciar o projeto, utilize o Expo Go em um dispositivo físico ou um emulador compatível para abrir a aplicação.

## Estrutura do projeto

```text
src/
├── app/          # Rotas e telas
├── components/   # Componentes reutilizáveis
├── constants/    # Cores e constantes visuais
└── safe-area-layout-wrapper/
    └── index.tsx # Layout compatível com áreas seguras
```

## Autor

Desenvolvido por [Kauan Gabriel de Oliveira](https://github.com/codigopratico).
