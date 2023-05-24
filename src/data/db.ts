import { PostDTO } from '@/dtos/PostDTO';

export const posts: PostDTO[] = [
  {
    id: 1,
    author: { avatarURL: 'https://github.com/rafaballerini.png', name: 'Rafaela Ballerini', role: 'Dev Front-End' },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋',
      },
      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return. O nome do projeto é DoctorCare 🚀',
      },
      {
        type: 'link',
        content: '👉rafaballerini.com/doctorcare',
      },
      {
        type: 'hashtags',
        content: ['#novoprojeto', '#nlw', '#rocketseat'],
      },
    ],
    publishedAt: new Date('2023-05-13 08:13:30'),
  },
  {
    id: 2,
    author: { avatarURL: 'https://github.com/diego3g.png', name: 'Diego Fernandes', role: 'Dev Full-Stack' },
    content: [
      {
        type: 'paragraph',
        content: 'Eai pessoaaaal 👋',
      },
      {
        type: 'paragraph',
        content: 'Venham conferir meu projeto novo. É uma calculadora interplanetária que calcula sua idade em outros planetas.',
      },
      {
        type: 'paragraph',
        content: 'Link abaixo 💚💚',
      },
      {
        type: 'link',
        content: '👉diego3g.dev/calculator',
      },
      {
        type: 'hashtags',
        content: ['#novoprojeto', '#calculadora', '#rocketseat'],
      },
    ],
    publishedAt: new Date('2023-04-28 18:47:00'),
  },
];
