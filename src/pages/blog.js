import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Slider from "react-slick";

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  const settings = {
    dots: true,
    arrows: false,
    autoplay: true,
    easing: 'ease-in-out',
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Slider className="text-center pb-10 my-10" {...settings}>
        <div>
          <h2 className="text-5xl">Don’t comment bad code—rewrite it.</h2>
          <p className="text-2xl">— Brian W. Kernighan and P. J. Plaugher</p>
        </div>
        <div>
          <h2 className="text-5xl">Don’t comment bad code—rewrite it.</h2>
          <p className="text-2xl">— Brian W. Kernighan and P. J. Plaugher</p>
        </div>
      </Slider>
      <div className="">
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article key={node.fields.slug} className="p-2 bg-gray-900 bg-opacity-25 mb-4 rounded shadow">
              <section className="p-2">
                <h3 className="text-xl text-secondary hover:underline">
                  <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
                <p
                  className="truncate"
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </section>
            </article>
          )
        })}
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
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
