"use strict";function base64ToArrayBuffer(n){for(var r=atob(n.substr(n.indexOf(",")+1)),t=r.length,e=new Uint8Array(t),i=0;i<t;i++)e[i]=r.charCodeAt(i);return e.buffer}function Sequencer(c){var v=this,s=0,l=0,h=new(window.AudioContext||webkitAudioContext);v.r=c[5]||.2,v.t=c[0];var b=h.createGain();b.connect(h.destination);var d,w,I,r=null;this.e=[],this.initLoops=function(u){d={},Object.keys(u[1]).forEach(function(r){h.decodeAudioData(base64ToArrayBuffer(u[1][r]),function(n){d[r]=n})}),w=(w=u[3]).map(function(n,e){var i=[];return n.forEach(function(n){var r=u[2][n];if(u[1][n.n||n])i.push(n);else if(r){i=i.concat(r[0]);for(var t=1;t<r.length;t++)w[e+t]=w[e+t].concat(r[t])}}),i})},this.initLoops(c),this.mute=function(n){n?(r&&clearInterval(r),b.gain.value=0):r=setInterval(function(){b.gain.value+=.1,1<=b.gain.value&&(b.gain.value=1,clearInterval(r),r=null)},100)},this.play=function(){var o,a=this;return a.i=setInterval(function(){I||(I=h.currentTime);for(var n=0;n<100;n++){var r=w[s];if(s>=w.length){if(c[4]){s=0,l++;continue}a.stop(!0);break}var t=I+(a.t*s+w.length*l*a.t)/1e3;if(t>h.currentTime+a.r)break;for(o=0;o<r.length;o++)e=r[o],i=t,u=void 0,u=h.createBufferSource(),f=d[e.n||e],u.playbackRate.value=e.p||1,u.buffer=f,u.connect(b),u.start(i||0),v.e.push(u),u.onended=function(e){v.e.forEach(function(n,r,t){if(n===e.srcElement)return t.splice(r,1),!1})};s++}var e,i,u,f},500*this.r),a},this.stop=function(n){var r=this;return r.i&&(clearInterval(r.i),r.i=!1),n||r.e.forEach(function(n){n.stop()}),r.e=[],s=0,I=h.currentTime,r}}"undefined"!=typeof module&&(module.exports=Sequencer);