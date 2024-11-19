import { Evento } from '../event'
import { Id } from '../shared'

const eventos: Evento[] = [
    {
        id: 'kfab61itxmh-1ywg4ygedse-c7ljqbxzw2u',
        alias: 'evento-fullstack',
        senha: 'senha123',
        nome: 'Evento de Desenvolvimento Fullstack',
        data: new Date('2024-12-01T10:00:00Z'),
        local: 'São Paulo, SP',
        descricao:
            'Um evento completo para aprender desenvolvimento fullstack do zero.',
        imagem: 'https://play-lh.googleusercontent.com/mpBm6uxkAwCTaDL7us2iG0L-Lpxb6_vUYxJ5dBMSrKFGZoION2lUY5RkJYModzngyIk',
        imagemBackground:
            'https://images.prismic.io/vaultinum/0458a9f1-e149-4037-b9aa-aa4b4fb53c25_propriete-intellectuelle-code-source-protection-compressed.jpg?auto=compress,format&rect=0,0,2400,981&w=2400&h=981',
        publicoEsperado: 200,
        convidados: [
            {
                id: '4ua6nelq1sq-4qiobgwcdxk-cacqo0xxlh4',
                nome: 'Alice Silva',
                email: 'alice@example.com',
                confirmado: true,
                possuiAcompanhante: true,
                qtdeAcompanhantes: 1,
            },
            {
                id: '6t7fohzn2zj-ht0stj7lr3q-r4mpvozzn3',
                nome: 'Carlos Pereira',
                email: 'carlos@example.com',
                confirmado: false,
                possuiAcompanhante: false,
                qtdeAcompanhantes: 0,
            },
            {
                id: '970kuryqu5l-a67n9dy4az6-j7tv6217g1',
                nome: 'Beatriz Lima',
                email: 'beatriz@example.com',
                confirmado: true,
                possuiAcompanhante: true,
                qtdeAcompanhantes: 2,
            },
        ],
    },
    {
        id: 's96415stsa-hg79b28iuzh-dddwn1vdg5f',
        alias: 'evento-js-avancado',
        senha: 'js2024',
        nome: 'Workshop Avançado de JavaScript',
        data: new Date('2024-11-20T15:00:00Z'),
        local: 'Rio de Janeiro, RJ',
        descricao: 'Um workshop avançado para programadores JavaScript.',
        imagem: 'https://www.datocms-assets.com/48401/1628644950-javascript.png?auto=format&fit=max&w=1200',
        imagemBackground:
            'https://blog.cronapp.io/wp-content/uploads/2020/09/javascript-1.jpg',
        publicoEsperado: 100,
        convidados: [
            {
                id: 'dnmpa5l005t-tuvkk7f1znj-rjgpcdh10kp',
                nome: 'Eduardo Santos',
                email: 'eduardo@example.com',
                confirmado: true,
                possuiAcompanhante: false,
                qtdeAcompanhantes: 0,
            },
            {
                id: 'nmuzvl3l1mj-qiszu1eq8cl-5smk04mzuji',
                nome: 'Fernanda Costa',
                email: 'fernanda@example.com',
                confirmado: true,
                possuiAcompanhante: true,
                qtdeAcompanhantes: 1,
            },
        ],
    },
    {
        id: 'fefz8nb7cs-9mz8l7cwl6q-1qv1x0rage5',
        alias: 'evento-dev-frontend',
        senha: 'front123',
        nome: 'Bootcamp de Desenvolvimento Frontend',
        data: new Date('2024-11-15T09:00:00Z'),
        local: 'Belo Horizonte, MG',
        descricao: 'Aprenda a criar interfaces incríveis e responsivas.',
        imagem: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/recact_angular_vue.jpg',
        imagemBackground:
            'https://www.frontendmag.com/wp-content/uploads/2023/01/easiest-front-end-framework.jpeg',
        publicoEsperado: 150,
        convidados: [
            {
                id: 'egpk67u8kd6-zhkssfcblbl-whw0rbcxqv',
                nome: 'Gabriela Rocha',
                email: 'gabriela@example.com',
                confirmado: true,
                possuiAcompanhante: true,
                qtdeAcompanhantes: 1,
            },
            {
                id: 'lwsubaced5i-vhwseap8ron-uebeprwvu4',
                nome: 'Hugo Nogueira',
                email: 'hugo@example.com',
                confirmado: false,
                possuiAcompanhante: false,
                qtdeAcompanhantes: 0,
            },
            {
                id: '4b9b65mw3vm-l1ydwz2ramg-98u1gzmpe6s',
                nome: 'Isabela Martins',
                email: 'isabela@example.com',
                confirmado: true,
                possuiAcompanhante: false,
                qtdeAcompanhantes: 0,
            },
        ],
    },
    {
        id: 'trhxg0si6a-zh9aovcarsl-sw6lfxbkue',
        alias: 'casamento-alberto-marina',
        senha: 'casamento2024',
        nome: 'Casamento do Alberto e Marina',
        data: new Date('2024-11-25T16:00:00Z'),
        local: 'Florianópolis, SC',
        descricao:
            'Celebração do casamento de Alberto e Marina com amigos e familiares.',
        imagem: 'https://i.em.com.br/IQ1l_dkc9VYK5P8PW-EaTphOuF4=/790x/smart/imgsapp.em.com.br/app/noticia_127983242361/2023/05/21/1496049/uma-cor-que-esta-totalmente-proibida-para-as-convidadas-de-acordo-com-a-etiqueta-de-casamento-e-o-branco-que-esta-reservado-para-as-noivas-a-nao-ser-que-o-casamento-seja-na-praia_1_55583.jpg',
        imagemBackground:
            'https://www.psicologo.com.br/wp-content/uploads/casamento-feliz-um-guia-para-casamentos-felizes.jpg',
        publicoEsperado: 150,
        convidados: [
            {
                id: '9sij66vufp-rlioiiz85zn-07d3gpqu4mm',
                nome: 'Bruno Cardoso',
                email: 'bruno@example.com',
                confirmado: true,
                possuiAcompanhante: true,
                qtdeAcompanhantes: 1,
            },
            {
                id: 'r9wlhdq57ub-c6p266rd4l6-dhe0gpe75zn',
                nome: 'Carla Mendes',
                email: 'carla@example.com',
                confirmado: true,
                possuiAcompanhante: false,
                qtdeAcompanhantes: 0,
            },
        ],
    },
    {
        id: 'b1cra2ny9t-etdnr0alujd-u2pp0u507l',
        alias: 'aniversario-joao',
        senha: 'joao2024',
        nome: 'Aniversário do João - 30 Anos',
        data: new Date('2024-12-05T18:00:00Z'),
        local: 'Curitiba, PR',
        descricao:
            'Comemoração dos 30 anos de João com amigos próximos e familiares.',
        imagem: 'https://img.elo7.com.br/product/600x380/4C55C74/capa-painel-redondo-tema-feliz-aniversario-em-tecido-1-50m-festa.jpg',
        imagemBackground:
            'https://img.freepik.com/vetores-gratis/fundo-da-celebracao-dos-baloes-e-confetti_1048-2223.jpg',
        publicoEsperado: 80,
        convidados: [
            {
                id: '2e5y3304ymj-9ordajola17-l8kurccavi8',
                nome: 'Maria Souza',
                email: 'maria@example.com',
                confirmado: true,
                possuiAcompanhante: true,
                qtdeAcompanhantes: 2,
            },
            {
                id: 'jp47esv6gmk-k0erk6lw09-d3vmms6jjjc',
                nome: 'José Almeida',
                email: 'jose@example.com',
                confirmado: false,
                possuiAcompanhante: false,
                qtdeAcompanhantes: 0,
            },
        ],
    },
    {
        id: 'fo63lxsm54r-uvkal4o70yp-d97142r4a4s',
        alias: 'inauguracao-loja-estrela',
        senha: 'estrela2024',
        nome: 'Inauguração da Loja Estrela',
        data: new Date('2024-12-10T09:00:00Z'),
        local: 'Porto Alegre, RS',
        descricao:
            'Evento de inauguração da nova loja Estrela com brindes e promoções.',
        imagem: 'https://cosmeticinnovation.com.br/wp-content/uploads/2018/01/estrela_cosmeticos.png',
        imagemBackground:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ-0_VdF_lcXATRHDUaaI0AQCt8R6Y_ShR3A&s',
        publicoEsperado: 300,
        convidados: [
            {
                id: 'v9v1kr98ybl-nyqdwwxz8yj-z0h3zdip9v',
                nome: 'Cláudia Lima',
                email: 'claudia@example.com',
                confirmado: true,
                possuiAcompanhante: true,
                qtdeAcompanhantes: 3,
            },
            {
                id: '5lgeyrg76dc-hahxgaivsh9-muovjtl2utg',
                nome: 'Ricardo Barbosa',
                email: 'ricardo@example.com',
                confirmado: true,
                possuiAcompanhante: false,
                qtdeAcompanhantes: 0,
            },
        ],
    },
    {
        id: 'tk1rcvj7pie-4dx6qqst13q-z0ycta6ovxb',
        alias: 'reuniao-familia-oliveira',
        senha: 'familia2024',
        nome: 'Reunião da Família Oliveira',
        data: new Date('2024-12-15T12:00:00Z'),
        local: 'Salvador, BA',
        descricao: 'Reunião de fim de ano da família Oliveira.',
        imagem: 'https://www.themonastery.org/assets/themonastery/blog/scaled/duggars.jpg',
        imagemBackground:
            'https://img.freepik.com/fotos-premium/ondas-abstratas-brilhantes-de-celebracao-do-arco-iris-fluem-suavemente-geradas-por-ia_188544-9530.jpg?semt=ais_hybrid',
        publicoEsperado: 50,
        convidados: [
            {
                id: '2n552bab8rl-ent50ltrzkc-qbz0moicemc',
                nome: 'Thiago Oliveira',
                email: 'thiago@example.com',
                confirmado: true,
                possuiAcompanhante: true,
                qtdeAcompanhantes: 4,
            },
            {
                id: 'bwypqgzsxm5-wzg6qe4i0gg-uwww99exa3',
                nome: 'Letícia Oliveira',
                email: 'leticia@example.com',
                confirmado: true,
                possuiAcompanhante: false,
                qtdeAcompanhantes: 0,
            },
        ],
    },
]

export default eventos
