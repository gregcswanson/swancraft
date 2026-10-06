import type { GetStaticProps } from 'next'
import ProjectDetail from '../../components/project-detail'
import { articles } from '../../data/articles'
import { company } from '../../data/company'

type Props = {
  company: typeof company
  project: {
    name: string
    description: string
    image: string
    gallery: { name: string; thumb: string; web: string }[]
  }
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const article = articles.find((item) => item.slug === 'catalina-door-repair')
  if (!article) return { notFound: true }

  return {
    props: {
      company,
      project: {
        name: article.name,
        description: article.description,
        image: article.image,
        gallery: article.gallery.slice(0, 9).map(({ name, thumb, web }) => ({ name, thumb, web })),
      },
    },
  }
}

export default function CatalinaDoorRepair({ company, project }: Props) {
  return <ProjectDetail company={company} project={project} />
}
