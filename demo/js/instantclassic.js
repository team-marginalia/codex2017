'use strict'

function instantClassic () {
  return {
    annotationCreated: function (annotation) {
      console.log('Created: ', annotation)
      var ann = document.querySelector("[data-annotation-id='" + annotation.id + "']")
      ann.innerText = annotation.text
    }
  }
}
