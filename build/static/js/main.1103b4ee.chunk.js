(this.webpackJsonpspacex=this.webpackJsonpspacex||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(7),o=n.n(r),u=(n(13),n(1)),l=n(2),i=n(4),s=n(3),h=n(5),m=function(e){function t(){return Object(u.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("nav",null,c.a.createElement("button",null,"Home"),c.a.createElement("button",null,"About SpaceX"),c.a.createElement("button",null,"About Team")))}}]),t}(c.a.Component),p=function(e){function t(){return Object(u.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,"About SpaceX.")}}]),t}(c.a.Component),b=function(e){function t(){return Object(u.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"card blue-grey"},"Number: ",this.props.launchData.flight_number," ",c.a.createElement("br",null),"Mission Name: ",this.props.launchData.mission_name," ",c.a.createElement("br",null),"Location: ",this.props.launchData.launch_site.site_name_long," ",c.a.createElement("br",null),"Date: ",this.props.launchData.launch_date_local," ",c.a.createElement("br",null))}}]),t}(c.a.Component);var f=function(e){function t(){return Object(u.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,"This is the main section.",c.a.createElement(p,null),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s12 m6"},this.props.launchArray.map((function(e){return c.a.createElement(b,{key:e.flight_number,launchData:e})})))))}}]),t}(c.a.Component),j="https://cors-anywhere.herokuapp.com/https://api.spacexdata.com/v3/launches/",O="http://turbo-spork-app.herokuapp.com/api/",d=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(i.a)(this,Object(s.a)(t).call(this,e))).pullLaunches=function(){fetch("".concat(j)).then((function(e){return e.json()})).then((function(e){n.setState({launchArray:e})})).catch((function(e){return console.log(e)}))},n.pullStuff=function(){fetch("".concat(O)).then((function(e){return e.json()})).then((function(e){n.setState({notes:e}),console.log(n.state.notes)})).catch((function(e){return console.log(e)}))},n.state={launchArray:[],view:{page:"home",pageTitle:"on load"}},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.pullLaunches(),this.pullStuff()}},{key:"render",value:function(){return c.a.createElement("div",{className:"container"},"This is some notess maybe: ",this.state.notes,c.a.createElement(m,null),c.a.createElement(f,{launchArray:this.state.launchArray}))}}]),t}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.1103b4ee.chunk.js.map