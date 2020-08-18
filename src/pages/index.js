import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const HomeIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="" />
      <section class="container m-auto mt-32">
        <h1 class="text-6xl font-semibold">你好，我是<span className="text-green-500">鄧登举</span>,</h1>
        <p class="text-6xl font-semibold">一个专长于人机交互的 Web 开发者</p>
        <p class="text-4xl py-4">我热爱世界的缤纷多彩，更喜欢重构自己的无限可能 :-)</p>
        <div class="flex pt-2">
          <a class="flex cursor-pointer bg-transparent hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-white hover:border-transparent rounded-full transition duration-150" href="https://github.com/Turkyden" target="_blank" rel="noreferrer">
            <svg t="1592115965215" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7995" width="24" height="24"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9 23.5 23.2 38.1 55.4 38.1 91v112.5c0.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" p-id="7996" fill="currentColor"></path></svg>
            <span class="pl-2">Github &rarr;</span>
          </a>
          <div class="ml-4 flex cursor-pointer bg-transparent text-green-500 font-semibold hover:text-green-600 p-2 rounded-full transition duration-150">
            <svg t="1592116961272" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8181" width="24" height="24"><path d="M690.1 377.4c5.9 0 11.8 0.2 17.6 0.5-24.4-128.7-158.3-227.1-319.9-227.1C209 150.8 64 271.4 64 420.2c0 81.1 43.6 154.2 111.9 203.6 5.5 3.9 9.1 10.3 9.1 17.6 0 2.4-0.5 4.6-1.1 6.9-5.5 20.3-14.2 52.8-14.6 54.3-0.7 2.6-1.7 5.2-1.7 7.9 0 5.9 4.8 10.8 10.8 10.8 2.3 0 4.2-0.9 6.2-2l70.9-40.9c5.3-3.1 11-5 17.2-5 3.2 0 6.4 0.5 9.5 1.4 33.1 9.5 68.8 14.8 105.7 14.8 6 0 11.9-0.1 17.8-0.4-7.1-21-10.9-43.1-10.9-66 0-135.8 132.2-245.8 295.3-245.8z m-194.3-86.5c23.8 0 43.2 19.3 43.2 43.1s-19.3 43.1-43.2 43.1c-23.8 0-43.2-19.3-43.2-43.1s19.4-43.1 43.2-43.1z m-215.9 86.2c-23.8 0-43.2-19.3-43.2-43.1s19.3-43.1 43.2-43.1 43.2 19.3 43.2 43.1-19.4 43.1-43.2 43.1z" p-id="8182" fill="currentColor"></path><path d="M866.7 792.7c56.9-41.2 93.2-102 93.2-169.7 0-124-120.8-224.5-269.9-224.5-149 0-269.9 100.5-269.9 224.5S540.9 847.5 690 847.5c30.8 0 60.6-4.4 88.1-12.3 2.6-0.8 5.2-1.2 7.9-1.2 5.2 0 9.9 1.6 14.3 4.1l59.1 34c1.7 1 3.3 1.7 5.2 1.7 2.4 0 4.7-0.9 6.4-2.6 1.7-1.7 2.6-4 2.6-6.4 0-2.2-0.9-4.4-1.4-6.6-0.3-1.2-7.6-28.3-12.2-45.3-0.5-1.9-0.9-3.8-0.9-5.7 0.1-5.9 3.1-11.2 7.6-14.5zM600.2 587.2c-19.9 0-36-16.1-36-35.9 0-19.8 16.1-35.9 36-35.9s36 16.1 36 35.9c0 19.8-16.2 35.9-36 35.9z m179.9 0c-19.9 0-36-16.1-36-35.9 0-19.8 16.1-35.9 36-35.9s36 16.1 36 35.9c-0.1 19.8-16.2 35.9-36 35.9z" p-id="8183" fill="currentColor"></path></svg>
          </div>
        </div>
      </section>

      <div class="py-20"></div>

      <section 
        class="container m-auto flex justify-between" 
        >
        <div class="w-1/2 pr-8">
          <h2 class="text-4xl"><span className="text-green-500"># </span> 我的最大乐趣是开发自己</h2>
          <p class="text-2xl py-4">我喜欢涉猎不同的领域，来尝试各种各样的可能性，代码、设计、写作 ...</p>
          <p class="text-2xl py-4">我能在自己感兴趣的领域快速上手且持续专注，因此我不太担心某项技术淘汰或者框架过时。</p>
          <p class="text-2xl py-4">我不喜欢随波逐流，跟风刷题，那样编程不够艺术。</p>
          <p class="text-2xl py-4">JS 是前端世界的一等公民，但那些与体验技术密不可分的 CSS 特效，Canvas 动画，WebGL 图形渲染技术，同样重要。</p>
        </div>
        <div class="w-1/2">
          <Image
            fixed={data.avatar.childImageSharp.fixed}
            alt={data.site.siteMetadata.author.name} 
            className="w-full h-auto"
            imgStyle={{
              filter: 'grayscale(100%)'
            }}
          />
        </div>
      </section>

      <div class="py-20"></div>

      <section class="container m-auto">
        <h2 class="text-4xl"><span className="text-green-500">#</span> 擅于使用工具提升工作效率</h2>
        <p class="text-2xl py-4">很庆幸自己成长于开源精神枝繁叶茂的今天，Web 端的迅猛发展与日益成熟，把开发者对极致用户体验的研究与体验工程化的思考推向新的高度。</p>
        <p class="text-2xl py-4">基于成熟的框架和最佳实践进行再创造，回馈社区。</p>
        <h2 class="text-4xl text-center py-10">Technology Stack</h2>
        <div class="w-full">
          <img src="https://turkyden.github.io/img/my-workflow.png" alt="Technology Stack" className="w-5/6 m-auto" />
          {/* <Image
            fluid={data.workflow.childImageSharp.fluid}
            alt={data.site.siteMetadata.author.name} 
            className="w-full h-auto"
            imgStyle={{
              filter: 'grayscale(100%)'
            }}
          /> */}
        </div>
      </section>

      <div class="py-20"></div>
    </Layout>
  )
}

export default HomeIndex

export const pageQuery = graphql`
  query {
    avatar: file(absolutePath: { regex: "/work-time.jpg/" }) {
      childImageSharp {
        fixed(width: 640, height: 640) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        title
        author {
          name
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
