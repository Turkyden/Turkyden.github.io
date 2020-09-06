import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const HomeIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="邓登举" />
      <section class="container m-auto mt-32">
        <h1 class="text-6xl font-semibold">你好，我是<span className="text-secondary">鄧登举</span>,</h1>
        <p class="text-6xl font-semibold">一个专注于人机交互的 Web 开发者</p>
        <p class="text-4xl py-4">我热爱世界的缤纷多彩，更喜欢重构自己的无限可能 :-)</p>
        <div class="flex pt-2">
          <a class="flex cursor-pointer bg-transparent hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-white hover:border-transparent rounded-full transition duration-150" href="https://github.com/Turkyden" target="_blank" rel="noreferrer">
            <svg t="1592115965215" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7995" width="24" height="24"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9 23.5 23.2 38.1 55.4 38.1 91v112.5c0.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" p-id="7996" fill="currentColor"></path></svg>
            <span class="pl-2">Github &rarr;</span>
          </a>
        </div>
      </section>

      <div class="py-20"></div>

      <section 
        class="container m-auto flex justify-between" 
        >
        <div class="w-1/2 pr-8">
          <h2 class="text-4xl"><span className="text-secondary"># </span> 我的最大乐趣是开发自己</h2>
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
        <h2 class="text-4xl"><span className="text-secondary">#</span> 擅于使用工具提升工作效率</h2>
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
