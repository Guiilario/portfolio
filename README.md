# GUI ILARIO — STORYMAKER — Site institucional

Este pacote contém o site **exatamente como enviado**, sem nenhuma alteração de código, HTML, CSS ou JavaScript — apenas organizado para hospedagem.

## Estrutura de arquivos

```
/
├── index.html        → estrutura HTML da página única (home, sobre, kit, trabalho,
│                        destaques, clientes, campanha, FAQ, contato — tudo em uma
│                        SPA de âncoras). Referencia css/style.css e js/script.js.
├── css/
│   └── style.css      → todo o CSS customizado do site (temas claro/escuro,
│                        animações, marquees, cursor customizado, modal de vídeo etc.)
├── js/
│   └── script.js       → toda a lógica JavaScript (traduções PT/EN, tema, carrosséis,
│                        modal de vídeo, cursor customizado, menu mobile, intro)
├── robots.txt         → regras para buscadores (Google, Bing etc.)
├── sitemap.xml        → mapa do site para indexação
└── README.md           → este arquivo
```

> **Por que só um `index.html` (e não várias páginas)?**
> O site é uma *single page* (página única): todas as seções (SOBRE, TRABALHO,
> DESTAQUES, CLIENTES, CAMPANHA, FAQ, CONTATO) são âncoras (`#about`, `#work`, etc.)
> dentro do mesmo `index.html`, não páginas separadas. Por isso não há pastas por
> "página" — a estrutura correta para este tipo de site é justamente HTML na raiz,
> com CSS e JS em suas próprias pastas, como está organizado aqui.

### Sobre a separação de CSS e JS

O código original tinha o CSS e o JavaScript embutidos diretamente no `index.html`
(dentro de tags `<style>` e `<script>`). Eles foram extraídos **sem nenhuma alteração
de conteúdo** — foi feita uma verificação linha a linha (diff) confirmando que o
`css/style.css` e o `js/script.js` são idênticos, caractere por caractere, ao que
estava embutido no HTML original. No `index.html`, essas seções foram substituídas
apenas pelas referências:
```html
<link rel="stylesheet" href="css/style.css">
...
<script src="js/script.js"></script>
```
Dois pequenos trechos de script **permaneceram propositalmente inline** no
`<head>`, pois precisam rodar em momentos específicos do carregamento da página
para funcionar corretamente:
- O script de **prevenção de FOUC** (evita "flash" de tema errado antes do CSS carregar)
- A configuração do **Tailwind** (`tailwind.config`), que precisa rodar logo após o
  script do Tailwind CDN ser carregado, antes de qualquer classe ser processada

Todas as funcionalidades (troca de tema, troca de idioma, carrosséis, modal de
vídeo, cursor customizado, intro animada, menu mobile) foram testadas via
inspeção de código e permanecem exatamente as mesmas.

## O que o site usa (dependências externas, via CDN)

Nada precisa ser instalado — tudo é carregado direto da internet quando a página abre:
- **Tailwind CSS** (`cdn.tailwindcss.com`)
- **GSAP** (`cdnjs.cloudflare.com`) — animações (cursor, intro, marquees)
- **Google Fonts** (`fonts.googleapis.com`) — fonte Inter
- **Imagens e vídeos**: hospedados no **Google Drive** (thumbnails via
  `drive.google.com/thumbnail?id=...` e vídeos via `drive.google.com/file/.../preview`)

⚠️ **Ponto de atenção (não alterado, apenas um alerta):** como as imagens e os
vídeos dependem de links do Google Drive, é importante garantir que todos os
arquivos no Drive estejam com permissão **"Qualquer pessoa com o link pode
visualizar"**. Caso contrário, ao publicar o site em um domínio próprio, as
imagens/vídeos podem não carregar para os visitantes. Isso é uma configuração
do Google Drive, não do código — nada no HTML foi tocado.

## Como hospedar

Qualquer uma das opções abaixo funciona sem nenhuma configuração extra, pois o
site é 100% estático (HTML/CSS/JS puro, sem backend):

### Opção 1 — Netlify (mais simples, grátis)
1. Acesse https://app.netlify.com/drop
2. Arraste a pasta inteira (ou o `.zip` extraído) para a área de upload
3. Pronto — Netlify gera uma URL pública na hora

### Opção 2 — Vercel
1. Crie um projeto novo em https://vercel.com/new
2. Faça upload da pasta (ou conecte um repositório Git com estes arquivos)
3. Deploy automático, sem configuração de build necessária

### Opção 3 — GitHub Pages
1. Crie um repositório novo no GitHub
2. Envie o conteúdo desta pasta para a branch `main`
3. Em Settings → Pages, selecione a branch `main` e a pasta `/ (root)`
4. O site fica disponível em `https://seu-usuario.github.io/nome-do-repo/`

### Opção 4 — Hospedagem tradicional (cPanel / FTP)
1. Envie todos os arquivos desta pasta para a pasta `public_html` (ou `www`)
   do seu servidor via FTP ou gerenciador de arquivos
2. Aponte o domínio para essa pasta — o `index.html` será carregado
   automaticamente

## Antes de publicar (opcional, recomendado)
- Edite `robots.txt` e `sitemap.xml`, substituindo `SEU-DOMINIO-AQUI.com`
  pelo domínio real que você for usar.
- Confirme os links de WhatsApp, Instagram e e-mail no rodapé/seção de
  contato (já presentes no código, não foram alterados).

Nenhum conteúdo, texto, cor, animação, tradução (PT/EN) ou funcionalidade foi
modificado — apenas o CSS e o JS foram movidos para arquivos próprios (`css/style.css`
e `js/script.js`), mantendo 100% do comportamento original.
