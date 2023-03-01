import projectsData from '../data/projectsData'
import Card from '../components/Card'
import SeoHead from "../components/SeoHead";
import Layout from "../components/Layout/Layout";


export default function Projects() {
  return (
    <Layout>
      <SeoHead title='LaslesVPN Landing Page' />
      <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-green-500 text-3xl font-bold text-center sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Hostels
          </h1>
        </div>
        <div className="container py-12">
          <div className="w-full">
            {Object.entries(projectsData).map(([district, data]) => (
              <div className="w-full">
                <h2 className="w-full text-3xl font-bold">
                  {`Hostels in ${district}`}
                </h2>
                <div className="m-4 flex flex-wrap">
                  {
                    data.map((d) => {
                      return (
                        <Card
                          key={d.title}
                          title={d.title}
                          description={d.description}
                          imgSrc={d.imgSrc}
                          href={d.href}
                        />
                      )
                    })
                  }
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}
