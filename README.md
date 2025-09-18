# AloBrasil

Uma plataforma completa para conectar brasileiros ao redor do mundo através de uma comunidade ativa e acolhedora.

## 🏗️ Estrutura do Projeto

```
src/
├── components/           # Componentes React
│   ├── layout/          # Componentes de layout (Header, Footer)
│   ├── sections/        # Seções da página (Hero, Services, Benefits)
│   ├── forms/           # Formulários (Contact)
│   ├── common/          # Componentes reutilizáveis (Button, Input, Textarea)
│   ├── ui/              # Componentes base da UI (Toaster, Tooltip)
│   └── index.ts         # Exports centralizados
├── pages/               # Páginas da aplicação
│   ├── Index.tsx        # Página inicial
│   └── NotFound.tsx     # Página 404
├── hooks/               # Hooks personalizados
│   ├── useLocalStorage.ts
│   ├── useForm.ts
│   └── index.ts
├── types/               # Definições de tipos TypeScript
│   └── index.ts
├── constants/           # Constantes da aplicação
│   └── index.ts
├── utils/               # Funções utilitárias
│   └── index.ts
├── services/            # Serviços e APIs
├── contexts/            # Contextos React
└── assets/              # Recursos estáticos
```

## 🚀 Tecnologias

- **React 18** - Biblioteca de interface
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework de estilos
- **React Router DOM** - Roteamento
- **TanStack React Query** - Gerenciamento de estado
- **Radix UI** - Componentes acessíveis

## 📦 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Preview do build
npm run preview

# Linting
npm run lint
```

## 🎯 Funcionalidades

- **Página inicial** com seções organizadas
- **Formulário de contato** com validação
- **Design responsivo** com Tailwind CSS
- **Componentes reutilizáveis** bem estruturados
- **Hooks personalizados** para funcionalidades comuns
- **Tipagem TypeScript** completa
- **Roteamento** com React Router

## 🔧 Configuração

1. Instale as dependências:
```bash
npm install
```

2. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

3. Acesse http://localhost:5173

## 📁 Organização dos Componentes

### Layout
- `Header` - Cabeçalho da aplicação
- `Footer` - Rodapé da aplicação

### Seções
- `Hero` - Seção principal da página inicial
- `Services` - Seção de serviços oferecidos
- `Benefits` - Seção de nossos diferenciais

### Formulários
- `Contact` - Formulário de contato com validação

### Componentes Comuns
- `Button` - Botão reutilizável com variantes
- `Input` - Campo de entrada com validação
- `Textarea` - Área de texto com validação

## 🎨 Estilização

O projeto utiliza Tailwind CSS para estilização, com:
- Design system consistente
- Responsividade mobile-first
- Componentes acessíveis
- Tema customizável

## 🔍 Hooks Personalizados

- `useLocalStorage` - Gerenciamento de localStorage
- `useForm` - Gerenciamento de formulários com validação

## 📝 Tipos TypeScript

- `User` - Interface do usuário
- `Service` - Interface dos serviços
- `Event` - Interface dos eventos
- `ContactFormData` - Interface do formulário de contato
