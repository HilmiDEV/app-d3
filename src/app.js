// D3 based on the SVG graphs

//Select Dom elements with d3.select() or d3.selectAll() with the pattern is css selector
console.log(d3.select("svg"));


/*
 You can use access and modify the properties of selections with :
  attr(), text(), style(), and other operators.
 */
d3.selectAll("circle").attr("fill","blue");

// We can add elements to the DOM with append()
d3.select("svg").append("rect").attr("x",50).attr("y",50).attr("width",100).attr("height",50).attr("fill","red");