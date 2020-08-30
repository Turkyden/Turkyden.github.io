import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Work = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Work" />
      <img alt="statas card" src="https://github-readme-stats.vercel.app/api/?username=anuraghazra&show_icons=true&title_color=ed8936&icon_color=ed8936&text_color=9f9f9f&bg_color=151515" />
      <div className="flex flex-wrap justify-between py-10">
        <img className="" alt="repo card" src="https://github-readme-stats.vercel.app/api/pin?username=Turkyden&repo=vue-typical&title_color=fff&icon_color=f9f9f9&text_color=9f9f9f&bg_color=151515" />
        <img className="" alt="repo card" src="https://github-readme-stats.vercel.app/api/pin?username=Turkyden&repo=imagehover-effects&title_color=fff&icon_color=f9f9f9&text_color=9f9f9f&bg_color=151515" />
        <img className="" alt="repo card" src="https://github-readme-stats.vercel.app/api/pin?username=anuraghazra&repo=github-readme-stats&title_color=fff&icon_color=f9f9f9&text_color=9f9f9f&bg_color=151515" />
      </div>
      
      <h2 className="text-3xl text-center">UI 设计</h2>
      <div className="py-10">
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
          <img className="w-full" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/6814ff99988741.5efec5e5b3981.png" alt="Sunset in the mountains" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-gray-800">孟菲斯风实践</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Work

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
