!function(e,o){"object"==typeof exports&&"undefined"!=typeof module?module.exports=o():"function"==typeof define&&define.amd?define(o):(e||self).ColorThief=o()}(this,function(){return{createPixelArray:function(e,o,t){for(var n=[],r=0;r<o;r+=t){var i=4*r,l=e[i+0],u=e[i+1],f=e[i+2],a=e[i+3];(void 0===a||a>=125)&&(l>250&&u>250&&f>250||n.push([l,u,f]))}return n},validateOptions:function(e){var o=e.colorCount,t=e.quality;if(void 0!==o&&Number.isInteger(o)){if(1===o)throw new Error("colorCount should be between 2 and 20. To get one color, call getColor() instead of getPalette()");o=Math.max(o,2),o=Math.min(o,20)}else o=10;return(void 0===t||!Number.isInteger(t)||t<1)&&(t=10),{colorCount:o,quality:t}}}});
