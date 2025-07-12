# 🚀 Guia de Deploy

Instruções para fazer deploy do site Karol Araújo Beauty.

## 🌐 **Site Atual**
**URL:** https://cixpmyhu.manus.space

## 📦 **Preparação para Deploy**

### 1. Build do Projeto
```bash
# Instalar dependências
pnpm install

# Gerar build de produção
pnpm run build

# Verificar build localmente
pnpm run preview
```

### 2. Verificações Pré-Deploy
- ✅ Teste todas as funcionalidades
- ✅ Verifique responsividade mobile
- ✅ Teste formulário de agendamento
- ✅ Confirme links externos (WhatsApp, Instagram)
- ✅ Verifique imagens carregando
- ✅ Teste navegação entre páginas

## 🔧 **Opções de Deploy**

### 🟢 **Vercel (Recomendado)**
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy para produção
vercel --prod
```

**Configurações Vercel:**
- Framework: React
- Build Command: `pnpm run build`
- Output Directory: `dist`
- Install Command: `pnpm install`

### 🟦 **Netlify**
```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy

# Deploy para produção
netlify deploy --prod
```

**Configurações Netlify:**
- Build command: `pnpm run build`
- Publish directory: `dist`

### 🟡 **GitHub Pages**
1. Instale `gh-pages`:
   ```bash
   pnpm add -D gh-pages
   ```

2. Adicione script no `package.json`:
   ```json
   {
     "scripts": {
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. Configure base no `vite.config.js`:
   ```js
   export default defineConfig({
     base: '/karol-beauty-site/',
     // ...
   })
   ```

4. Deploy:
   ```bash
   pnpm run build
   pnpm run deploy
   ```

### 🟠 **Servidor Próprio**
```bash
# Build
pnpm run build

# Upload pasta 'dist' para servidor
# Configurar servidor web (Apache/Nginx)
```

**Configuração Nginx:**
```nginx
server {
    listen 80;
    server_name karolaraujobeauty.com;
    root /var/www/karol-beauty-site;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

## 🔄 **Atualizações**

### Processo de Atualização
1. **Desenvolvimento local**:
   ```bash
   git checkout -b feature/nova-funcionalidade
   # Fazer alterações
   git commit -m "feat: nova funcionalidade"
   git push origin feature/nova-funcionalidade
   ```

2. **Merge para main**:
   ```bash
   git checkout main
   git merge feature/nova-funcionalidade
   git push origin main
   ```

3. **Deploy automático** (se configurado) ou manual

### Deploy Manual Rápido
```bash
# Atualizar código
git pull origin main

# Build e deploy
pnpm run build
# Seguir processo do provedor escolhido
```

## 📊 **Monitoramento**

### Métricas Importantes
- **Performance**: Lighthouse score
- **Uptime**: Disponibilidade do site
- **Analytics**: Google Analytics (se configurado)
- **Erros**: Console do navegador

### Ferramentas Recomendadas
- **Google PageSpeed Insights**
- **GTmetrix**
- **Uptime Robot**
- **Google Search Console**

## 🔧 **Configurações de Produção**

### Variáveis de Ambiente
Crie arquivo `.env.production`:
```env
VITE_SITE_URL=https://karolaraujobeauty.com
VITE_WHATSAPP_NUMBER=5511999999999
VITE_INSTAGRAM_HANDLE=karaujo_beauty
```

### Otimizações
- ✅ Compressão Gzip habilitada
- ✅ Cache de assets configurado
- ✅ CDN para imagens (se necessário)
- ✅ SSL/HTTPS configurado

## 🆘 **Troubleshooting**

### Problemas Comuns

**Build falha:**
```bash
# Limpar cache
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm run build
```

**Imagens não carregam:**
- Verificar caminhos relativos
- Confirmar assets na pasta `dist`

**Roteamento não funciona:**
- Configurar fallback para `index.html`
- Verificar configuração do servidor

**Performance baixa:**
- Otimizar imagens
- Verificar bundle size
- Implementar lazy loading

## 📞 **Suporte**

Para problemas de deploy:
1. Verificar logs de build
2. Testar localmente primeiro
3. Consultar documentação do provedor
4. Abrir issue no repositório

---

**Deploy realizado com sucesso! 🎉**

