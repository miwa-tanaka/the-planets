const path = require("path")
const data = require("./src/data/planets.json")

exports.createPages = ({ actions }) => {
  const { createPage } = actions
  const template = path.resolve("./src/templates/planets.js")
  data.forEach(planets_object => {
    const path = `${planets_object.color}`
    const images = `${planets_object.images}`
    createPage({
      path,
      component: template,
      context: {
        path,
        images
      }
    })
  })
}