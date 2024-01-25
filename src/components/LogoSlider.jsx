import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const MyPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: { sourceInstanceName: { eq: "images" }, relativeDirectory: { eq: "company-logos" } }
      ) {
        nodes {
          id
          name
          publicURL
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  const images = data.allFile.nodes

  return (
    <div className="flex flex-col items-center" >
      <h1 >Our Clients</h1>
      <div className="flex lg:flex-row justify-center p-20 space-x-10 flex-col flex-wrap min-w-lg:space-y-10">
        {images.map((image) => (
          <div key={image.id} className="max-w-lg:flex justify-center">
            {/* If you're using the publicURL for direct image URLs */}
            <img src={image.publicURL} alt={image.name} className="w-40  lg:w-44" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyPage
