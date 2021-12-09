(this["webpackJsonpshortest-path-finder"]=this["webpackJsonpshortest-path-finder"]||[]).push([[0],{15:function(t,e,n){},30:function(t,e,n){"use strict";n.r(e);var i=n(0),s=n.n(i),a=n(7),o=n.n(a),r=(n(15),n(3)),c=n(9),l=function t(e,n){var i=this;Object(c.a)(this,t),this.x=e,this.y=n,this.isStart=!1,this.isEnd=!1,this.distance=1/0,this.isVisited=!1,this.previous=null,this.isWall=!1,this.setWall=function(t){i.isWall=t},this.setPrevious=function(t){i.previous=t},this.setStart=function(t){i.isStart=t},this.setEnd=function(t){i.isEnd=t},this.setDistance=function(t){i.distance=t},this.setVisited=function(t){i.isVisited=t},this.equals=function(t){return i.x===t.x&&i.y===t.y}},d=n(1);function u(t){var e=t.point,n=t.numSpecials,s=t.setNumSpecials,a=Object(i.useState)(""),o=Object(r.a)(a,2),c=o[0],l=o[1],u=function(t){"w"===t.key&&(e.isStart||e.isEnd||(e.setWall(!0),l("node-wall")))};return Object(d.jsx)("div",{id:"node-".concat(e.x,"-").concat(e.y),className:"node ".concat(c),onClick:function(){if(e.isStart||e.isEnd)e.isStart?(e.setStart(!1),e.setEnd(!0)):e.isEnd&&(s(n-1),e.setStart(!1),e.setEnd(!1));else{if(2===n)return;s(n+1),e.setStart(!0)}var t;t=e.isStart?"node-start":e.isEnd?"node-end":"",l(t)},onMouseOver:function(){document.addEventListener("keypress",u)},onMouseOut:function(){document.removeEventListener("keypress",u)}})}var h=n(34),f=n(33),j=function(t){for(var e=[],n=0;n<t.length;n++)for(var i=0;i<t[n].length;i++)e.push(t[n][i]);return e};function m(){var t=Object(i.useState)([]),e=Object(r.a)(t,2),n=e[0],s=e[1],a=Object(i.useState)(0),o=Object(r.a)(a,2),c=o[0],m=o[1],v=Object(i.useState)(!1),g=Object(r.a)(v,2),x=g[0],b=g[1],O=function(){return b(!1)},p=Object(i.useState)(!1),y=Object(r.a)(p,2),S=y[0],E=y[1],w=function(){return E(!1)};Object(i.useEffect)((function(){E(!0);var t=window.innerWidth,e=window.innerHeight;console.log(e,t),k(e/28,t/20),window.addEventListener("resize",(function(){var t=window.innerWidth,e=window.innerHeight;console.log(e,t),k(e/28,t/20)}))}),[]);var k=function(t,e){for(var n=[],i=0;i<t;i++){for(var a=[],o=0;o<e;o++)a.push(new l(i,o));n.push(a)}s(n)};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h1",{style:{marginBottom:"15px"},children:"Pathfinding Visualizer"}),Object(d.jsx)(h.a,{style:{marginBottom:"15px",marginRight:"10px"},onClick:function(){for(var t=0;t<n.length;t++)for(var e=0;e<n[t].length;e++)n[t][e].setVisited(!1),n[t][e].setStart(!1),n[t][e].setEnd(!1),n[t][e].setWall(!1),n[t][e].setDistance(1/0),document.getElementById("node-".concat(n[t][e].x,"-").concat(n[t][e].y)).className="node";m(0)},children:"Reset"}),Object(d.jsx)(h.a,{style:{marginBottom:"15px",marginRight:"10px"},onClick:function(){for(var t=0;t<n.length;t++)for(var e=0;e<n[t].length;e++)n[t][e].isStart||n[t][e].isEnd||n[t][e].isWall&&(n[t][e].setWall(!1),document.getElementById("node-".concat(n[t][e].x,"-").concat(n[t][e].y)).className="node");for(var i,s=[],a=0;a<n.length;a++)for(var o=0;o<n[a].length;o++){if(!n[a][o].isStart&&!n[a][o].isEnd)0===(i=4,Math.floor(Math.random()*i))&&(n[a][o].setWall(!0),s.push(n[a][o]))}for(var r=function(t){setTimeout((function(){var e=s[t];document.getElementById("node-".concat(e.x,"-").concat(e.y)).className="node node-wall"}),2*t)},c=0;c<s.length;c++)r(c)},children:"Generate Maze"}),Object(d.jsx)(h.a,{style:{marginBottom:"15px",marginRight:"10px"},onClick:function(){for(var t=null,e=null,i=0;i<n.length;i++)for(var s=0;s<n[i].length;s++)n[i][s].isStart?t=n[i][s]:n[i][s].isEnd&&(e=n[i][s]);if(null!==t&&null!==e)for(var a=function(t,e,n){var i=[];t.setDistance(0);for(var s=j(n);s.length>0;){s.sort((function(t,e){return t.distance-e.distance}));var a=s.shift();if(!a.isWall){if(a.distance===1/0)return i;if(a.setVisited(!0),i.push(a),a.equals(e))return i;var o=[],r=a.x,c=a.y;r>0&&o.push(n[r-1][c]),r<n.length-1&&o.push(n[r+1][c]),c>0&&o.push(n[r][c-1]),c<n[r].length-1&&o.push(n[r][c+1]),o=o.filter((function(t){return!t.isVisited}));for(var l=0;l<o.length;l++)o[l].setDistance(a.distance+1),o[l].setPrevious(a)}}return i}(t,e,n),o=function(n){n===a.length?setTimeout((function(){for(var n=function(t){for(var e=[],n=t;null!==n;)e.unshift(n),n=n.previous;return e}(e),i=function(i){setTimeout((function(){var s=n[i];s.equals(t)||s.equals(e)||(document.getElementById("node-".concat(s.x,"-").concat(s.y)).className="node node-path")}),20*i)},s=0;s<n.length;s++)i(s)}),2*n):setTimeout((function(){var i=a[n];i.equals(t)||i.equals(e)||(document.getElementById("node-".concat(i.x,"-").concat(i.y)).className="node node-visited")}),2*n)},r=0;r<=a.length;r++)o(r);else b(!0)},children:"Breadth First Search"})]}),Object(d.jsx)("div",{children:n.map((function(t,e){return Object(d.jsx)("div",{className:"rowContainer",children:t.map((function(t,i){return Object(d.jsx)(u,{point:n[e][i],numSpecials:c,setNumSpecials:m},i)}))},e)}))}),Object(d.jsxs)(f.a,{show:x,onHide:O,children:[Object(d.jsx)(f.a.Header,{closeButton:!0}),Object(d.jsx)(f.a.Body,{children:"Illegal grid state. Please specify a start and end point."}),Object(d.jsx)(f.a.Footer,{children:Object(d.jsx)(h.a,{variant:"secondary",onClick:O,children:"Close"})})]}),Object(d.jsxs)(f.a,{show:S,onHide:w,children:[Object(d.jsx)(f.a.Header,{closeButton:!0,children:Object(d.jsx)(f.a.Title,{children:"Instructions"})}),Object(d.jsxs)(f.a.Body,{children:[Object(d.jsx)("li",{children:"Click on a node once to make it a start node (green)"}),Object(d.jsx)("li",{children:"Click on a node twice (or once if node is already a start node) to make it an end node (magenta)."}),Object(d.jsx)("li",{children:"Hold 'w' and drag mouse to generate wall nodes, or click on \"Generate Maze\" to create a random maze."}),Object(d.jsx)("li",{children:'Click "Reset" to clear the grid.'})]}),Object(d.jsx)(f.a.Footer,{children:Object(d.jsx)(h.a,{variant:"secondary",onClick:w,children:"Close"})})]})]})}var v=function(){return Object(d.jsx)(m,{})};n(29);o.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.7663e729.chunk.js.map