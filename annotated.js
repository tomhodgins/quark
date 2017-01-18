// Quark.js Annotated File

// Fine all tags
var tag = document.querySelectorAll('*')

// For each tag, run the following
for (i=0; i<tag.length; i++) {

  // Remember all classes as `classes`
  var classes = tag[i].classList

  // For each class, run the following
  for (c=0; c<classes.length; c++) {

    // Remember the property as `property`
    var property = classes[c].split('-')[0]

    // Remember the unit as `unit`
    var unit = classes[c].split('-')[1]

    // If the unit can be parsed as an integer add `px` to it
    unit = parseInt(unit) ? unit+'px' : unit

    // Set the style on the element using the property and unit found
    tag[i].style[property] = unit

  }

}