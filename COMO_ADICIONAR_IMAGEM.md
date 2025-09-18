# 📸 Como Adicionar uma Imagem no Início da Página

## 🎯 Localização da Imagem

A imagem principal fica na seção **Hero** (início da página), que está localizada em:
```
src/components/sections/Hero.tsx
```

## 📁 Opções para Adicionar Imagem

### **Opção 1: Imagem Local (Recomendada)**

1. **Coloque sua imagem na pasta:**
   ```
   src/assets/images/sua-imagem.jpg
   ```

2. **Atualize o componente Hero:**
   ```tsx
   <img 
     src="/src/assets/images/sua-imagem.jpg" 
     alt="Descrição da imagem"
     className="w-96 h-96 object-cover rounded-2xl border-4 border-gold-400 shadow-2xl"
   />
   ```

### **Opção 2: Imagem de URL Externa**

```tsx
<img 
  src="https://exemplo.com/sua-imagem.jpg" 
  alt="Descrição da imagem"
  className="w-96 h-96 object-cover rounded-2xl border-4 border-gold-400 shadow-2xl"
/>
```

### **Opção 3: Usar os Componentes Prontos**

Já criei dois componentes prontos para você:

1. **HeroWithImage.tsx** - Para imagens locais
2. **HeroWithExternalImage.tsx** - Para imagens externas

Para usar, substitua no arquivo `src/pages/Index.tsx`:
```tsx
// De:
import Hero from "@/components/sections/Hero";

// Para:
import Hero from "@/components/sections/HeroWithImage";
// ou
import Hero from "@/components/sections/HeroWithExternalImage";
```

## 🎨 Características da Imagem

- **Tamanho recomendado:** 400x400px (quadrada)
- **Formatos suportados:** JPG, PNG, WebP
- **Estilo:** Bordas douradas, sombra, cantos arredondados
- **Responsiva:** Se adapta a diferentes tamanhos de tela

## 🔧 Personalização

### **Alterar Tamanho:**
```tsx
className="w-80 h-80" // Menor
className="w-96 h-96" // Padrão
className="w-[500px] h-[500px]" // Maior
```

### **Alterar Formato:**
```tsx
className="w-96 h-96 object-cover rounded-full" // Circular
className="w-96 h-96 object-cover rounded-lg" // Cantos menos arredondados
```

### **Alterar Bordas:**
```tsx
className="w-96 h-96 object-cover rounded-2xl border-2 border-gold-300" // Borda mais fina
className="w-96 h-96 object-cover rounded-2xl border-8 border-gold-500" // Borda mais grossa
```

## 📱 Layout Responsivo

- **Desktop:** Imagem à direita, texto à esquerda
- **Mobile:** Imagem abaixo do texto, centralizada
- **Tablet:** Layout adaptativo

## ✨ Elementos Decorativos

A imagem inclui elementos decorativos:
- Círculos dourados animados
- Efeitos de hover
- Sombras elegantes
- Fallback caso a imagem não carregue

## 🚀 Como Aplicar

1. **Escolha uma das opções acima**
2. **Adicione sua imagem** (se for local)
3. **Atualize o componente Hero** ou use os componentes prontos
4. **Teste** executando `npm run dev`

## 💡 Dicas

- Use imagens de alta qualidade
- Otimize o tamanho do arquivo
- Adicione texto alternativo descritivo
- Teste em diferentes dispositivos
- Considere usar WebP para melhor performance
