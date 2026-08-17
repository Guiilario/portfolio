        document.addEventListener('DOMContentLoaded', () => {

            // --- TRADUÇÕES ---
            const translations = {
                pt: {
                    'nav-about': 'SOBRE', 'nav-work': 'TRABALHO', 'nav-contact': 'CONTATO',
                    'home-title': 'Conteúdo feito para reter. Mais tempo com seu público.',
                    'home-desc': 'Storymaker . Videomaker . Conteúdo IA', 'scroll-down': 'ROLE PARA EXPLORAR ↓',
                    'about-title': 'SOBRE', 'about-p1': 'Eu sou Gui Ilario.',
                    'about-p2': 'Storymaker e Videomaker. Crio, capto e edito conteúdos pensados para reter a atenção e transformar ideias em experiências audiovisuais na era digital.',
                    'about-p3': 'Documentando marcas e pessoas, com a paciência de quem espera o momento certo — hoje, com todo o kit cabendo na palma da mão. (e na mochila.) Comecei filmando shows de garagem com uma câmera emprestada e uma certeza: imagem sem escuta é só decoração. Hoje, mais de uma década depois, esse princípio não mudou — só o equipamento: da câmera emprestada ao smartphone com gimbal que carrego no bolso todos os dias. Trabalho devagar no começo de cada projeto. Converso, observo, anoto os detalhes que ninguém pede para filmar. É desse tempo que nascem os planos que ficam — os que o cliente reassiste anos depois e ainda sente o nó na garganta.',
                    'stat-years': 'Anos filmando e editando',
                    'stat-projects': 'Projetos entregues',
                    'stat-countries': 'Países filmando',
                    'stat-award': 'Premiação Storymaker',
                    'kit-title': 'Kit de gravação e transmissão + Softwares de edição áudio e vídeo',
                    'work-title': 'TRABALHO', 'work-subtitle': 'Uma seleção do que tenho criado.',
                    'horizontal-title': 'DESTAQUES', 'horizontal-subtitle': 'Formatos Horizontais (16:9)',
                    'horizontal-p1': 'PROJETO DESTAQUE 01', 'horizontal-p2': 'PROJETO DESTAQUE 02',
                    'tap-to-watch': 'Toque para assistir',
                    'clients-title': 'Últimos clientes - Julho / Agosto 2026',
                    'camp-title': 'Sua campanha acontece todos os dias. Transforme essa rotina em conteúdo.',
                    'camp-p1': 'Um storymaker acompanha a agenda do político, registra reuniões, eventos, viagens, bastidores e momentos do dia a dia — e transforma tudo em conteúdo ágil para as redes sociais.',
                    'camp-p2': 'Você cuida da agenda e da comunicação política. Eu cuido de captar, editar e entregar os conteúdos que registram cada momento da campanha.',
                    'camp-why-title': 'Por que ter um storymaker acompanhando a campanha?',
                    'camp-why-p': 'Enquanto o candidato está focado em compromissos, reuniões, eventos e agenda pública, eu fico responsável por registrar os momentos importantes e transformar a rotina em conteúdo.',
                    'camp-inc-title': 'O que está incluso:',
                    'camp-inc-1': 'Cobertura da rotina e dos compromissos',
                    'camp-inc-2': 'Gravação de Stories, Reels e vídeos curtos',
                    'camp-inc-3': 'Edição rápida para redes sociais',
                    'camp-inc-4': 'Registro de bastidores e momentos espontâneos',
                    'camp-inc-5': 'Organização de uma linha de conteúdo durante a campanha',
                    'camp-inc-6': 'Acompanhamento presencial conforme a agenda',
                    'camp-agenda-title': 'Agenda 2026',
                    'camp-agenda-p': 'Estou abrindo minha agenda para novos projetos durante a campanha de 2026. Se você procura um profissional para acompanhar a rotina do político de forma próxima, ágil e constante, vamos conversar sobre a agenda e montar um formato de cobertura adequado à campanha.',
                    'faq-title': 'FAQ',
                    'faq-q1': 'Você trabalha especificamente com campanhas políticas?',
                    'faq-a1': 'Sim. Meu foco para 2026 é atender políticos e equipes de campanha, com acompanhamento de rotina, eventos e produção de conteúdo para redes sociais.',
                    'faq-q2': 'Você acompanha o político durante a agenda?',
                    'faq-a2': 'Sim. O formato pode ser planejado de acordo com a agenda, incluindo eventos, reuniões, viagens e outros compromissos.',
                    'faq-q3': 'Você faz somente a gravação?',
                    'faq-a3': 'Não. O serviço pode incluir todo o processo de captação, seleção, edição e entrega dos conteúdos.',
                    'faq-q4': 'Posso contratar por diária ou fechar um período maior?',
                    'faq-a4': 'Sim. Podemos trabalhar por diária, evento, período ou pacote de acompanhamento, de acordo com a necessidade da campanha.',
                    'faq-q5': 'O conteúdo é entregue no mesmo dia?',
                    'faq-a5': 'Dependendo do formato e da demanda, é possível trabalhar com entregas rápidas, inclusive durante a própria agenda.',
                    'faq-q6': 'Você ainda tem disponibilidade para 2026?',
                    'faq-a6': 'Sim. A agenda está sendo organizada para a campanha de 2026. Entre em contato para consultar disponibilidade e formatos de cobertura.',
                    'contact-title': 'VAMOS CRIAR ALGO?',
                    'contact-p': 'Se você tem uma marca, projeto ou ideia que precisa ganhar vida em vídeo, vamos conversar.',
                    'btn-talk': 'VAMOS CONVERSAR'
                },
                en: {
                    'nav-about': 'ABOUT', 'nav-work': 'WORK', 'nav-contact': 'CONTACT',
                    'home-title': 'Content designed to make people stop and watch.',
                    'home-desc': 'Storymaker & Videomaker', 'scroll-down': 'SCROLL TO EXPLORE ↓',
                    'about-title': 'ABOUT', 'about-p1': "I'm Gui Ilario.",
                    'about-p2': 'Storymaker & Videomaker. I create, capture, and edit content designed to capture attention and transform ideas into audiovisual experiences in the digital age.',
                    'about-p3': 'Documenting brands and people, with the patience of someone waiting for the right moment — today, with the entire kit fitting in the palm of my hand. (and in my backpack.) I started shooting garage shows with a borrowed camera and one certainty: image without listening is just decoration. Today, more than a decade later, that principle hasn\'t changed — only the equipment: from the borrowed camera to the smartphone with a gimbal I carry in my pocket every day. I work slowly at the beginning of each project. I talk, observe, note the details no one asks to film. It is from this time that the lasting shots are born — the ones the client re-watches years later and still feels a lump in their throat.',
                    'stat-years': 'Years shooting & editing',
                    'stat-projects': 'Delivered projects',
                    'stat-countries': 'Countries shooting',
                    'stat-award': 'Storymaker Award',
                    'kit-title': 'Recording & Broadcasting Kit + Audio & Video Editing Software',
                    'work-title': 'WORK', 'work-subtitle': "A selection of what I've created.",
                    'horizontal-title': 'HIGHLIGHTS', 'horizontal-subtitle': 'Horizontal Formats (16:9)',
                    'horizontal-p1': 'FEATURED PROJECT 01', 'horizontal-p2': 'FEATURED PROJECT 02',
                    'tap-to-watch': 'Tap to watch',
                    'clients-title': 'Latest clients - July / August 2026',
                    'camp-title': 'Your campaign happens every day. Turn that routine into content.',
                    'camp-p1': 'A storymaker follows the politician\'s agenda, records meetings, events, trips, behind the scenes, and everyday moments — and turns it all into agile content for social media.',
                    'camp-p2': 'You take care of the agenda and political communication. I take care of capturing, editing, and delivering the content that records every moment of the campaign.',
                    'camp-why-title': 'Why have a storymaker follow the campaign?',
                    'camp-why-p': 'While the candidate is focused on appointments, meetings, events, and the public agenda, I am responsible for recording important moments and turning the routine into content.',
                    'camp-inc-title': 'What\'s included:',
                    'camp-inc-1': 'Coverage of routine and appointments',
                    'camp-inc-2': 'Recording Stories, Reels, and short videos',
                    'camp-inc-3': 'Fast editing for social media',
                    'camp-inc-4': 'Behind the scenes and spontaneous moments recording',
                    'camp-inc-5': 'Organizing a content timeline during the campaign',
                    'camp-inc-6': 'In-person coverage according to the agenda',
                    'camp-agenda-title': '2026 Agenda',
                    'camp-agenda-p': 'I am opening my agenda for new projects during the 2026 campaign. If you are looking for a professional to closely, agilely, and constantly follow the politician\'s routine, let\'s talk about the agenda and set up a coverage format suitable for the campaign.',
                    'faq-title': 'FAQ',
                    'faq-q1': 'Do you work specifically with political campaigns?',
                    'faq-a1': 'Yes. My focus for 2026 is to serve politicians and campaign teams, covering routines, events, and producing content for social media.',
                    'faq-q2': 'Do you accompany the politician during the agenda?',
                    'faq-a2': 'Yes. The format can be planned according to the agenda, including events, meetings, trips, and other commitments.',
                    'faq-q3': 'Do you only do the recording?',
                    'faq-a3': 'No. The service can include the entire process of capturing, selecting, editing, and delivering the content.',
                    'faq-q4': 'Can I hire per day or for a longer period?',
                    'faq-a4': 'Yes. We can work per day, event, period, or follow-up package, depending on the campaign\'s needs.',
                    'faq-q5': 'Is the content delivered on the same day?',
                    'faq-a5': 'Depending on the format and demand, it is possible to work with fast deliveries, even during the agenda itself.',
                    'faq-q6': 'Do you still have availability for 2026?',
                    'faq-a6': 'Yes. The agenda is being organized for the 2026 campaign. Get in touch to check availability and coverage formats.',
                    'contact-title': 'HAVE AN IDEA?',
                    'contact-p': "If you have a brand, project, or idea that needs to come to life through video, let's talk.",
                    'btn-talk': "LET'S TALK"
                }
            };

            let currentLang = localStorage.getItem('gui-lang') || 'pt'; 
            const langToggleBtn = document.getElementById('lang-toggle');
            const langToggleMobileBtn = document.getElementById('lang-toggle-mobile');

            function applyTranslation(lang) {
                document.querySelectorAll('[data-i18n]').forEach(el => {
                    const key = el.getAttribute('data-i18n');
                    if (translations[lang][key]) {
                        el.textContent = translations[lang][key];
                    }
                });
                langToggleBtn.textContent = lang === 'pt' ? 'EN' : 'PT';
                
                localStorage.setItem('gui-lang', lang);
                currentLang = lang;
            }

            langToggleBtn.addEventListener('click', () => applyTranslation(currentLang === 'pt' ? 'en' : 'pt'));
            langToggleMobileBtn.addEventListener('click', () => applyTranslation(currentLang === 'pt' ? 'en' : 'pt'));
            applyTranslation(currentLang);

            // --- TEMA CLARO / ESCURO ---
            const themeToggleBtn = document.getElementById('theme-toggle');
            const themeToggleMobileBtn = document.getElementById('theme-toggle-mobile');

            function updateThemeIcons(isLight) {
                const icon = isLight ? '☾' : '☼';
                themeToggleBtn.textContent = icon;
                themeToggleMobileBtn.textContent = icon;
            }

            function toggleTheme() {
                document.documentElement.classList.toggle('light-mode');
                const isLight = document.documentElement.classList.contains('light-mode');
                localStorage.setItem('gui-theme', isLight ? 'light' : 'dark');
                updateThemeIcons(isLight);
            }

            const isCurrentlyLight = document.documentElement.classList.contains('light-mode');
            updateThemeIcons(isCurrentlyLight);

            themeToggleBtn.addEventListener('click', toggleTheme);
            themeToggleMobileBtn.addEventListener('click', toggleTheme);

            // --- KIT & SOFTWARES (CARROSSEL COM ARRAY QUADRUPLICADO PARA LOOP PERFEITO) ---
            const kitData = [
                { 
                    name: 'Claude', 
                    color: '1pN_nQOq9u9qYFZG9kEo9w2yUFEw18cwO', 
                    light: '12O9zhHCVKJM0EOqCdiNFN9AQBtdxvm5U', 
                    dark: '1WTo5s-xKXVyDyo01SmpFlE54iFC8fyp1', 
                    desc: 'Claude gerador de conteúdos de IA' 
                },
                { 
                    name: 'Ableton live', 
                    color: '1XRlFX59NsXBrEIn_TAKjoCRBYiLZafDQ', 
                    light: '1ZznpJc6k0uliGWxmK-GNg99BQkXh6Dt-', 
                    dark: '1edjjR99064BPnDCkluGEsEt8OKpClEWP', 
                    desc: 'DAW de edição profissional de áudio' 
                },
                { 
                    name: 'Adobe premiere', 
                    color: '1ax7A-vAiS7xTMNGsx435pFjb8wdBZpi8', 
                    light: '1WE6SW1zl1EKzv3ufoiuHk7sMPv-uOycg', 
                    dark: '15loe6gkUTKnoVGoSJs8W-mOt0ByUPWRL', 
                    desc: 'Editor profissional de vídeos para PC' 
                },
                { 
                    name: 'Capcut', 
                    color: '1fch6zra7nPAZlrUISIJlt5p6FVdrS7LT', 
                    light: '1ZPy3eSduZmfyOu55eX15PzctKClPnYbT', 
                    dark: '1t06Qmq0pASKRmSdm4FLyA7b9NJymSXkI', 
                    desc: 'Editor profissional de vídeos para celular' 
                },
                { 
                    name: 'Microfone lapela', 
                    color: '118GePwOQnk9ys796o40PnVKNYw1iBjXG', 
                    light: '1zkCv7hq4EZlKHouhhuTPiN8-Ginoi7jU', 
                    dark: '1awhbFQjLUtWyaNSJgyicWcudp-okVDSa', 
                    desc: 'Microfone lapela Hollyand de alta qualidade' 
                },
                { 
                    name: 'Luz de preenchimento', 
                    color: '1xAoHJe7sojDt0kldm0t5uXz8OI6kdS3Y', 
                    light: '1cx9P4h_SSpl28_xdxwipSThmp6k6_096', 
                    dark: '1aIF3OgF3CqM5yp2T-EmT7Vp7XK1L5pVi', 
                    desc: 'Luz portátil de preenchimento Vedo 60w' 
                },
                { 
                    name: 'HD externo', 
                    color: '10jW1N5pLUE7KYzbbwIhMyOrsLX2BG7LZ', 
                    light: '1F_shxD9xRIe8ZUGVz6yoKHXynfSN3BPM', 
                    dark: '1SD_eNftjARMbmz84RpPf487K-GbtAw8y', 
                    desc: 'HD externa de volume para grandes materiais' 
                },
                { 
                    name: 'Gimbal', 
                    color: '1My8wrFF3NTRYxyulI3Su6x1cpsMbgy6c', 
                    light: '1EMXQx2CJc5XatOBlRCsBIvkbUrs46AzA', 
                    dark: '19a2tcKWWyEaTd6t59Lg8NoCG4Q1wCbTG', 
                    desc: 'Gimmbal de 3 eixos para filmagem estabilizada' 
                },
                { 
                    name: 'DJI drone', 
                    color: '1jTNJbKfcIOeW5dqo_UqSrxXdXouZY7iV', 
                    light: '19PJLjGCwicqGjLTDtOH69GaG36l_WXIe', 
                    dark: '122TzqGGcPyATTVFN2onPsSyWb6SFvh_1', 
                    desc: 'Drone DJI Mini 2 para imagens aéreas em 4K' 
                }
            ];

            const kitMarqueeContent = document.getElementById('kit-marquee-content');
            
            function buildKitMarquee() {
                let html = '';
                // Duplicado 4x e animado em 25% para criar o scroll infinito contínuo e perfeito
                [...kitData, ...kitData, ...kitData, ...kitData].forEach(item => {
                    html += `
                        <div class="kit-item-wrapper hover-target" data-desc="${item.desc}">
                            <img src="https://drive.google.com/thumbnail?id=${item.dark}&sz=w400" class="kit-img kit-dark" alt="${item.name}">
                            <img src="https://drive.google.com/thumbnail?id=${item.light}&sz=w400" class="kit-img kit-light" alt="${item.name}">
                            <img src="https://drive.google.com/thumbnail?id=${item.color}&sz=w400" class="kit-img kit-color" alt="${item.name}">
                        </div>
                    `;
                });
                kitMarqueeContent.innerHTML = html;
            }
            buildKitMarquee();

            const kitDescText = document.getElementById('kit-desc-text');
            document.querySelectorAll('.kit-item-wrapper').forEach(wrapper => {
                wrapper.addEventListener('mouseenter', () => {
                    kitDescText.textContent = wrapper.getAttribute('data-desc');
                    kitDescText.style.opacity = '1';
                });
                wrapper.addEventListener('mouseleave', () => {
                    kitDescText.style.opacity = '0';
                });
            });

            // --- CLIENTES COM FOTO E BORDA AJUSTADA ---
            const clientsData = [
                { name: '@lanchoneteavalanche', img: '1uPY85s-ZYNzDZPDNThCaL_W8QkkDoqyi' },
                { name: '@nidobatista_oficial', img: '1qjvzw7BrUarGX52WIluh8JpO1oj6Te2p' },
                { name: '@2ncompositorofc', img: '1xh7TAxx1CC1PCB7QeMMxZ6B9jjZ8Xvv7' },
                { name: '@coletarecords', img: '1r1sHg7Bdebi8EJ6idh8qc8V9yPnSndHS' },
                { name: '@qsq_alemoa', img: '1Dj_SkMlOOeQPkCXeOx437lXvNWuq1kVd' },
                { name: '@abcbibliotecaconteiner_oficial', img: '1Ab-BnIszFGHzCVvDgYifRo66Kh92UTqa' },
                { name: '@bomb013_x1', img: '1BbTXVW_k5vy0q5b0NM7wP2ig8QoNvCLa' },
                { name: '@aromasesaude_', img: '1QguhF-hUz3n6pxfTB4BYpJV4y2nyP2m7' },
                { name: '@personalgeovanii', img: '1IZw2YHCrlNpPGwgr5jkEeoW7m3ur0KZY' },
                { name: '@umgamermuitolouko', img: '1qLX8vSc4bqsPRm0unsOMuaPA7t4B7Ji1' }
            ];
            const marqueeContent = document.getElementById('marquee-content');
            
            function buildMarquee() {
                let html = '';
                // Duplicado 4x e animado em 25% para criar o scroll infinito contínuo
                [...clientsData, ...clientsData, ...clientsData, ...clientsData].forEach(client => {
                    html += `
                    <a href="https://instagram.com/${client.name.replace('@','')}" target="_blank" class="flex items-center gap-3 px-5 py-2 mx-3 border border-themeBorder rounded-full hover-target group hover:bg-themeBorder transition-all duration-300 w-max shrink-0">
                        <img src="https://drive.google.com/thumbnail?id=${client.img}&sz=w150-h150" alt="${client.name}" class="w-8 h-8 rounded-full object-cover shrink-0 border border-themeBorder">
                        <span class="text-sm md:text-base font-light text-themeTextMuted group-hover:text-themeText transition-colors whitespace-nowrap block">${client.name}</span>
                    </a>`;
                });
                marqueeContent.innerHTML = html;
            }
            buildMarquee();

            // --- TRABALHO (REELS 9:16 INJETADOS NO GRID) ---
            const workData = [
                { id: '1psq0rFnOvsH9CSVfSMW8AZMvWm3dId5c', title: 'PROJETO 01' },
                { id: '1Ikca7E-wj7j5CCiodqV7Yetjbc_F-2_L', title: 'PROJETO 02' },
                { id: '1tzCk5Oi_tHOS1PDPmax-jMiFoy3LGxNt', title: 'PROJETO 03' },
                { id: '19mLu8qP_f-d0cYKSSRC4j2A6xD7LOLFn', title: 'PROJETO 04' },
                { id: '1HR4BvD85bKCDzBYl62cTaD-ifw0piRbP', title: 'PROJETO 05' },
                { id: '1JSUCSoc6DnCr54-lBlUsGbtrF0z0GBOs', title: 'PROJETO 06' },
                { id: '1XKstTwL9VsiXNmCcqF2PJYm509l56Z6j', title: 'PROJETO 07' },
                { id: '1TzW8Yt-VLfvarro9h1jc1_RX68c73xzd', title: 'PROJETO 08' }
            ];
            const workGrid = document.getElementById('work-grid');

            function buildWorkGrid() {
                let html = '';
                workData.forEach(item => {
                    html += `
                        <div class="work-card relative aspect-[9/16] w-[240px] md:w-full shrink-0 bg-themeCard rounded overflow-hidden cursor-pointer group play-target" data-video="https://drive.google.com/file/d/${item.id}/preview">
                            <img src="https://drive.google.com/thumbnail?id=${item.id}&sz=w720-h1280" alt="${item.title}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
                            <div class="work-info absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 transform translate-y-4 transition-all duration-500 flex flex-col gap-1 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 z-10">
                                <span class="text-sm text-white font-light uppercase tracking-widest">${item.title}</span>
                            </div>
                        </div>
                    `;
                });
                workGrid.innerHTML = html;
            }
            buildWorkGrid();

            // --- LÓGICA DO VIDEO MODAL (RETORNADO PARA IFRAME) ---
            const modal = document.getElementById('video-modal');
            const iframe = document.getElementById('project-iframe');
            const closeModal = document.getElementById('close-modal');
            const mainHeader = document.getElementById('main-header');

            document.querySelectorAll('.play-target').forEach(card => {
                card.addEventListener('click', () => {
                    const isHorizontal = card.classList.contains('horizontal-card');
                    const iframeWrapper = document.getElementById('iframe-wrapper');
                    
                    if (isHorizontal) {
                        iframeWrapper.style.aspectRatio = '16/9';
                        iframeWrapper.style.maxWidth = '900px';
                    } else {
                        iframeWrapper.style.aspectRatio = '9/16';
                        iframeWrapper.style.maxWidth = '450px';
                    }

                    iframe.src = card.getAttribute('data-video');
                    modal.classList.add('active');
                    document.body.style.overflow = 'hidden';
                    
                    if(window.innerWidth < 1024) {
                        mainHeader.style.display = 'none'; 
                    }
                });
            });

            closeModal.addEventListener('click', () => {
                modal.classList.remove('active');
                setTimeout(() => { iframe.src = ''; }, 400);
                document.body.style.overflow = 'auto';
                mainHeader.style.display = 'flex'; 
            });

            // --- TRUE FOCUS LOGIC ---
            const trueFocusWrapper = document.getElementById('true-focus-wrapper');
            const focusFrame = document.getElementById('focus-frame');
            const focusSentence = "GUI ILARIO STORYMAKER";
            const focusWords = focusSentence.split(' ');
            
            const wordElements = [];
            focusWords.forEach((wordStr, index) => {
                const span = document.createElement('span');
                span.className = 'focus-word blurred'; 
                span.textContent = wordStr;
                span.dataset.index = index;
                trueFocusWrapper.insertBefore(span, focusFrame);
                wordElements.push(span);
            });

            let currentFocusIndex = 0;
            let focusInterval;
            
            const animationDuration = 0.4;
            const pauseBetween = 0.9; 

            function updateFocusRect(index) {
                if (index < 0 || index >= wordElements.length) return;
                
                const activeWord = wordElements[index];
                const containerRect = trueFocusWrapper.getBoundingClientRect();
                const wordRect = activeWord.getBoundingClientRect();

                const x = wordRect.left - containerRect.left;
                const y = wordRect.top - containerRect.top;
                const w = wordRect.width;
                const h = wordRect.height;

                wordElements.forEach((el, i) => {
                    if (i === index) {
                        el.classList.remove('blurred');
                        el.classList.add('active');
                    } else {
                        el.classList.add('blurred');
                        el.classList.remove('active');
                    }
                });

                if (typeof gsap !== 'undefined') {
                    gsap.to(focusFrame, {
                        x: x,
                        y: y,
                        width: w,
                        height: h,
                        opacity: 1,
                        duration: animationDuration,
                        ease: "power2.out",
                        overwrite: "auto"
                    });
                }
            }

            function startAutoFocus() {
                updateFocusRect(currentFocusIndex);
                focusInterval = setInterval(() => {
                    currentFocusIndex = (currentFocusIndex + 1) % focusWords.length;
                    updateFocusRect(currentFocusIndex);
                }, (animationDuration + pauseBetween) * 1000);
            }

            setTimeout(() => {
                if(!introFinished) startAutoFocus();
            }, 300);

            // --- INTRO SEQUENCE ---
            const introScreen = document.getElementById('intro-screen');
            const btnPc = document.getElementById('btn-pc');
            const btnMobile = document.getElementById('btn-mobile');
            const header = document.getElementById('main-header');
            const mainContent = document.getElementById('main-content');
            let introFinished = false;

            function finishIntro() {
                if (introFinished) return;
                introFinished = true;
                
                if(focusInterval) clearInterval(focusInterval);

                introScreen.style.opacity = '0';
                setTimeout(() => {
                    introScreen.style.visibility = 'hidden';
                    header.classList.remove('opacity-0');
                    mainContent.classList.remove('opacity-0');
                }, 800);
            }

            if (btnPc) btnPc.addEventListener('click', finishIntro);
            if (btnMobile) btnMobile.addEventListener('click', finishIntro);
            
            if (sessionStorage.getItem('introSeen')) {
                finishIntro();
            } else {
                sessionStorage.setItem('introSeen', 'true');
            }

            // --- TARGET CURSOR LOGIC ---
            const isMobile = ('ontouchstart' in window) || window.innerWidth <= 1024;

            if (!isMobile && typeof gsap !== 'undefined') {
                const cursor = document.getElementById('target-cursor');
                const dot = cursor.querySelector('.target-cursor-dot');
                const corners = Array.from(cursor.querySelectorAll('.target-cursor-corner'));

                const cornerSize = 8;
                const borderWidth = 2;

                const idlePositions = [
                    { x: -cornerSize * 1.5, y: -cornerSize * 1.5 },
                    { x: cornerSize * 0.5, y: -cornerSize * 1.5 },
                    { x: cornerSize * 0.5, y: cornerSize * 0.5 },
                    { x: -cornerSize * 1.5, y: cornerSize * 0.5 }
                ];

                corners.forEach((corner, i) => gsap.set(corner, { x: idlePositions[i].x, y: idlePositions[i].y }));
                let spinTl = gsap.timeline({ repeat: -1 }).to(cursor, { rotation: "+=360", duration: 2, ease: "none" });
                gsap.set(cursor, { x: window.innerWidth / 2, y: window.innerHeight / 2 });

                window.addEventListener('mousemove', (e) => {
                    gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1, ease: "power3.out" });
                });

                window.addEventListener('mousedown', () => {
                    gsap.to(dot, { scale: 0.7, duration: 0.3 });
                    gsap.to(cursor, { scale: 0.9, duration: 0.2 });
                });
                window.addEventListener('mouseup', () => {
                    gsap.to(dot, { scale: 1, duration: 0.3 });
                    gsap.to(cursor, { scale: 1, duration: 0.2 });
                });

                let activeTarget = null;
                let activeStrength = { current: 0 };
                let tickerFn = null;
                let resumeTimeout = null;

                const targetSelector = 'a, button, .hover-target, .play-target, .work-card, details > summary, .kit-item-wrapper';

                function onEnter(e) {
                    const target = e.target.closest(targetSelector);
                    if (!target) return;
                    if (activeTarget === target) return;

                    if (activeTarget) {
                        activeTarget.removeEventListener('mouseleave', onLeave);
                    }
                    if (resumeTimeout) {
                        clearTimeout(resumeTimeout);
                        resumeTimeout = null;
                    }

                    activeTarget = target;

                    corners.forEach(corner => gsap.killTweensOf(corner, 'x,y'));
                    gsap.killTweensOf(cursor, 'rotation');
                    spinTl.pause();
                    gsap.set(cursor, { rotation: 0 });

                    gsap.to(activeStrength, { current: 1, duration: 0.2, ease: "power2.out" });

                    if (!tickerFn) {
                        tickerFn = () => {
                            if (!activeTarget || activeStrength.current === 0) return;
                            
                            const rect = activeTarget.getBoundingClientRect();
                            const cX = gsap.getProperty(cursor, 'x');
                            const cY = gsap.getProperty(cursor, 'y');
                            const strength = activeStrength.current;

                            const liveTargets = [
                                { x: rect.left - borderWidth - cX, y: rect.top - borderWidth - cY },
                                { x: rect.right + borderWidth - cornerSize - cX, y: rect.top - borderWidth - cY },
                                { x: rect.right + borderWidth - cornerSize - cX, y: rect.bottom + borderWidth - cornerSize - cY },
                                { x: rect.left - borderWidth - cX, y: rect.bottom + borderWidth - cornerSize - cY }
                            ];

                            corners.forEach((corner, i) => {
                                const currentX = gsap.getProperty(corner, 'x');
                                const currentY = gsap.getProperty(corner, 'y');
                                const finalX = currentX + (liveTargets[i].x - currentX) * strength;
                                const finalY = currentY + (liveTargets[i].y - currentY) * strength;
                                const duration = strength >= 0.99 ? 0.2 : 0.05;

                                gsap.to(corner, { x: finalX, y: finalY, duration: duration, ease: duration === 0 ? "none" : "power1.out", overwrite: "auto" });
                            });
                        };
                        gsap.ticker.add(tickerFn);
                    }

                    target.addEventListener('mouseleave', onLeave, { once: true });
                }

                function onLeave() {
                    if (tickerFn) gsap.ticker.remove(tickerFn);
                    tickerFn = null;
                    activeTarget = null;
                    gsap.set(activeStrength, { current: 0 });

                    corners.forEach((corner, index) => {
                        gsap.killTweensOf(corner, 'x,y');
                        gsap.to(corner, {
                            x: idlePositions[index].x,
                            y: idlePositions[index].y,
                            duration: 0.3,
                            ease: "power3.out"
                        });
                    });

                    resumeTimeout = setTimeout(() => {
                        if (!activeTarget) {
                            const currentRot = gsap.getProperty(cursor, 'rotation');
                            const normRot = currentRot % 360;
                            spinTl.kill();
                            spinTl = gsap.timeline({ repeat: -1 }).to(cursor, { rotation: "+=360", duration: 2, ease: "none" });
                            gsap.to(cursor, {
                                rotation: normRot + 360,
                                duration: 2 * (1 - normRot / 360),
                                ease: "none",
                                onComplete: () => spinTl.restart()
                            });
                        }
                    }, 50);
                }

                window.addEventListener('mouseover', onEnter, { passive: true });
            }

            // --- MENU MOBILE ---
            const mobileMenuBtn = document.getElementById('mobile-menu-btn');
            const closeMenuBtn = document.getElementById('close-menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');

            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
            });

            closeMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.add('opacity-0', 'pointer-events-none');
            });

            document.querySelectorAll('.mobile-link').forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.add('opacity-0', 'pointer-events-none');
                });
            });

            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    
                    if (targetElement) {
                        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                });
            });
        });
