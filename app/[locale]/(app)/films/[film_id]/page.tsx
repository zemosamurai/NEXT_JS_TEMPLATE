import { filmsApi } from '@/4-entities/films'
import { Metadata, ResolvingMetadata } from 'next'

interface IProps {
  params: { film_id: string; locale: string }
}

export default async function Film({ params: { film_id } }: IProps) {
  const film = await filmsApi.getFilm(film_id)

  return (
    <main>
      <h2 style={{ marginBottom: '20px' }}>{film.title}</h2>
      <h3 style={{ marginBottom: '20px' }}>{film.body}</h3>
    </main>
  )
}

export async function generateMetadata({ params: { film_id, locale } }: IProps, parent: ResolvingMetadata): Promise<Metadata> {
  const film = await filmsApi.getFilm(film_id)
  const previousImages = (await parent).openGraph?.images || []

  return {
    title: film.title,
    description: film.body,
    openGraph: {
      title: film.title,
      description: film.body,
      url: 'http://localhost:8080',
      siteName: 'Next Template',
      images: [
        {
          url: 'https://s1.afisha.ru/mediastorage/a0/d9/8733aca357d24d789677ac42d9a0.jpg',
          width: 800,
          height: 600,
        },
        ...previousImages,
      ],
      locale,
      type: 'website',
    },
  }
}
