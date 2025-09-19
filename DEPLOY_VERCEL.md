# Deploy no Vercel - Alô Brasil

## Problemas Resolvidos

### Seção Cobertura não aparecendo no Vercel

**Problema**: A seção de cobertura aparecia no localhost mas não no Vercel.

**Soluções implementadas**:

1. **Melhor tratamento de carregamento de imagens**:
   - Adicionado estado para controlar carregamento e erros
   - Implementado loading state com spinner
   - Fallback visual caso a imagem não carregue
   - Logs de debug para identificar problemas

2. **Configuração do Vercel**:
   - Criado `vercel.json` com configurações otimizadas
   - Headers de cache para imagens estáticas
   - Rewrites para SPA

3. **CSS mais robusto**:
   - Adicionado `minHeight` e `display: block` para garantir visibilidade
   - Classes Tailwind como fallback
   - Estilos inline como backup

## Arquivos Modificados

- `src/components/sections/Cobertura.tsx` - Melhorado com estados e fallbacks
- `vercel.json` - Configuração do Vercel
- `DEPLOY_VERCEL.md` - Este arquivo

## Como fazer o deploy

1. Faça commit das mudanças:
```bash
git add .
git commit -m "Fix: Corrigir seção Cobertura no Vercel"
git push origin main
```

2. O Vercel fará o deploy automaticamente

3. Verifique se a seção aparece corretamente

## Debug

Se ainda houver problemas, verifique:
- Console do navegador para erros de carregamento de imagem
- Network tab para ver se a imagem está sendo carregada
- Se o fallback está aparecendo (indica problema com a imagem)

## Estrutura de arquivos no Vercel

```
dist/
├── index.html
├── assets/
│   ├── index-[hash].js
│   └── index-[hash].css
└── images/
    ├── cobertura.jpg
    ├── diferenciais.jpg
    ├── Logo.png
    ├── servicos.jpg
    └── stand_page1.png
```
