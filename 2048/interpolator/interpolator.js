
function interpolator(arg) {
  var dataset = [];
  function isHex(h) {
    var a = parseInt(h,16);
    return (a.toString(16) ===h.toLowerCase())
  }

  function validateHex(color) {
    var a, b, c, result = -1;
    color = color.toUpperCase();
    switch (color.length) {
      case 3:
       if(/^[0-9A-F]{3}$/i.test(color)) {
         result = color[0] + color[0] + color[1] + color[1] + color[2] + color[2] + "FF";
       }
        break;
      case 4:
        if(color[0] == '#'){
          color = color.substring(1,4);
          if(/^[0-9A-F]{3}$/i.test(color)) {
            result = color[0] + color[0] + color[1] + color[1] + color[2] + color[2] + "FF";
          }
        }
      break;
      case 5:
        if(color[0] == '#'){
          color = color.substring(1,4);
          if(/^[0-9A-F]{4}$/i.test(color)) {
            result = color[0] + color[0] + color[1] + color[1] + color[2] + color[2] + color[3] + color[3];
          }
        }
      break;
      case 6:
        result =  /^[0-9A-F]{6}$/i.test(color) ? color + "FF" : -1;
      break;
      case 7:
        if(color[0] == '#'){
          result =  /^[0-9A-F]{6}$/i.test(color.substring(1,7)) ? color.substring(1,7) + "FF": -1;
        }
      break;
      case 8:
        result =  /^[0-9A-F]{8}$/i.test(color) ? color : -1;
      break;
      case 9:
        if(color[0] == '#'){
          result =  /^[0-9A-F]{3}$/i.test(color.substring(1,9)) ? color.substring(1,9) : -1;
        }
      break;

    }
    return result;
  }

  // create dataset
  function createDataSet(colors, sp, itr) {
    var i, j, dR, dG, dB, dA, result = [];
    for(i=0; i< sp.length; i++) {
      dR = colors[i].r - colors[i+1].r;
      dG = colors[i].g - colors[i+1].g;
      dB = colors[i].b - colors[i+1].b;
      dA = colors[i].a - colors[i+1].a;
      for(j=0; j< sp[i]; j++) {
        result.push({
          r: Math.floor(colors[i].r - (dR/sp[i]*j)),
          g: Math.floor(colors[i].g - (dG/sp[i]*j)),
          b: Math.floor(colors[i].b - (dB/sp[i]*j)),
          a: Math.floor(colors[i].a - (dA/sp[i]*j)),
        });
      }
    }
    return result;
  }
  // convert Decimal to isHex
  function convertDecToHex(colors) {
    var result = [], r, g, b, a;
    for(var i=0; i<colors.length; i++) {
      r = colors[i].r > 15 ? colors[i].r.toString(16) : "0" + colors[i].r.toString(16) ;
      g = colors[i].g > 15 ? colors[i].g.toString(16) : "0" + colors[i].g.toString(16);
      b = colors[i].b > 15 ? colors[i].b.toString(16) : "0" + colors[i].b.toString(16);
      a = colors[i].a > 15 ? colors[i].a.toString(16) : "0" + colors[i].a.toString(16);
      result.push("#" + r + g + b + a);
    }
    return result;
  }
  // convert Hex to Decimal
  function convertHexToDec(colors) {
    var result = [];
    for(var i=0; i<colors.length; i++) {
      result.push({
        r: parseInt(colors[i].substring(0,2),16),
        g: parseInt(colors[i].substring(2,4),16),
        b: parseInt(colors[i].substring(4,6),16),
        a: parseInt(colors[i].substring(6,8),16)
      });
    }
    return result;
  }
  //takes Colors as input
  function initWithHex(colors, iterations, span) {
    var i,
        itr = iterations || 100,
        sp = [], sum, dataInDec, temp;

    if(span) {
      if(span.length == (colors.length-1)) {
        sp = span;
      } else {
        return -3;
      }
    }

    //validate colors
    if(colors.length < 2) return -1;

    for(i=0; i<colors.length;i++){
      temp = validateHex(colors[i]);
      if(temp) {
        colors[i] = temp
      } else {
        return -2;
      }
    }

    //create equal spans if not provided
    if(sp.length == 0) {
      for(i=0; i<(colors.length-1);i++){
        sp.push(Math.floor(itr/(colors.length-1)));
      }
    }
    // make sure that we have all full number of iterations in sp => span
    // cheeky way to take sum sp.reduce((a, b) => a + b, 0)
    i=0;
    sum = sp.reduce((a, b) => a + b, 0);
    while(sum !=  itr) {
      sp[i] += Math.sign(itr - sum);
      i = (i+1)%sp.length;
      sum = sp.reduce((a, b) => a + b, 0);
    }
    colors = convertHexToDec(colors);
    dataInDec = createDataSet(colors, sp, itr);
    dataset = convertDecToHex(dataInDec);
    console.log(colors, dataInDec, dataset);
  }

  function getValue(index) {
    if(index < dataset.length) {
      return dataset[index];
    } else {
      return -1;
    }
  }
  return {
    initWithHex:initWithHex,
    getValue: getValue
  }
}
