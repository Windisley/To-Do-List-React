# To-Do List React + Tailwind CSS 

## Esta aplicação de To-Do List representa uma excelente introdução ao desenvolvimento com React, demonstrando como criar componentes, gerenciar estado e usar localStorage para persistência de dados. A combinação dessas tecnologias resulta em uma experiência de usuário fluida e eficiente, permitindo que os usuários gerenciem suas tarefas de forma prática e intuitiva.

![page_todo](https://github.com/user-attachments/assets/da2d4f31-13b8-430c-b7b7-ec4d6ab3b0b3)

### Como Usar a Aplicação Adicionar Tarefas: No campo de entrada, digite uma nova tarefa e clique em "enviar". A tarefa aparecerá na lista abaixo, permitindo que você adicione quantas desejar. 

## Remover Tarefas: Para excluir uma tarefa, clique no ícone de lixeira correspondente. A tarefa será removida da lista e do armazenamento, garantindo que a interface reflita a nova situação.

## Salvar Tarefas: Utilize o botão de disquete para salvar a lista de tarefas manualmente. Isso garante que as alterações feitas sejam mantidas, mesmo se a página for recarregada. Visualizar Tarefas Salvas: Ao recarregar a página, as tarefas adicionadas anteriormente serão exibidas automaticamente, graças à funcionalidade de persistência de dados.

# Principais Hooks Usados:

## useState: Utilizado para armazenar a lista de tarefas. O estado é atualizado sempre que uma tarefa é adicionada ou removida.
## useRef: Permite criar uma referência ao campo de entrada, facilitando o acesso ao valor inserido pelo usuário sem causar re-renderizações desnecessárias.
## useEffect: Este hook é usado para executar código quando o componente é montado. No caso, ele carrega as tarefas salvas do localStorage ao inicializar a aplicação, garantindo que as informações anteriores sejam recuperadas.

# Tailwind CSS
## O que é? Tailwind CSS é um framework CSS utilitário que permite a construção de interfaces de forma rápida e eficiente, utilizando classes pré-definidas. Ele oferece uma abordagem diferente de estilização, focando em composição de classes ao invés de folhas de estilo tradicionais.

# Como funciona no código?

### Estilização Rápida: As classes do Tailwind CSS são aplicadas diretamente aos elementos JSX, facilitando a personalização do layout e a aparência da aplicação sem a necessidade de escrever CSS personalizado. Isso resulta em um código mais limpo e fácil de manter.

### Responsividade e Estilos Dinâmicos: O Tailwind permite a criação de layouts responsivos e a aplicação de estilos dinâmicos com classes que adaptam o design em diferentes tamanhos de tela, melhorando a experiência do usuário em dispositivos variados.

 ### CSS para Estilização Além do Tailwind CSS, foram utilizados estilos básicos para garantir que a aplicação tenha uma aparência agradável e funcional. As classes CSS personalizadas são usadas para ajustar detalhes específicos do layout.


