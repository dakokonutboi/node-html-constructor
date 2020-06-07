function Attributes(obj){
  const recur = Object.entries(obj)
  let constructed = ""
  recur.forEach(element => {
    constructed = constructed + element[0] + '="' +element[1].replace(/"/g, "&quot;")+ '" '
  })
  return constructed
}

function Tag(name, innerHTML, attributes={}){
  return `<${name} ${Attributes(attributes)}>${innerHTML}</${name}>\n`
}

function UniTag(name, attributes={}){
  return `<${name} ${Attributes(attributes)}>\n`
}

function Document(head, body, htmlAttributes={}){
  return `<!DOCTYPE html>\n${Tag("html", head + body, htmlAttributes)}`
}

exports.Attributes = Attributes
exports.Tag = Tag
exports.UniTag = UniTag
exports.Document = Document
