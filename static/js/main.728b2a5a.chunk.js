(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(n,e,t){n.exports=t.p+"static/media/logo.24af3f10.svg"},20:function(n,e,t){n.exports=t(35)},26:function(n,e,t){},35:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(9),o=t.n(i),c=(t(26),t(2)),l=t(8),u=t(3),s=t(4),f=t(6),m=t(5),d=t(7),p=t(1),h=t(16),g=t.n(h);function b(){var n=Object(c.a)(["\n  border-radius: 3px;\n  background-color: #0a0a0a;\n  border: 1px solid ",";\n  color: ",";\n  font-size: 18px;\n  position: relative;\n  width: 100px;\n  margin-left: 1em;\n"]);return b=function(){return n},n}function y(){var n=Object(c.a)(["\n  box-sizing: border-box;\n  border-radius: 3px;\n  background-color: #0a0a0a;\n  border: 1px solid ",";\n  color: ",";\n  font-size: 18px;\n  width: 100px;\n  margin-left: 1em;\n"]);return y=function(){return n},n}function v(){var n=Object(c.a)(["\n  border: 1px solid #000;\n  font-size: 1.5em;\n  width: 100%;\n  border-radius: 3px;\n  background-color: ",";\n  color: ",";\n  padding: 0.25em 0;\n  box-shadow: 1px 1px 3px ",";\n"]);return v=function(){return n},n}function E(){var n=Object(c.a)(["\n  font-weight: 400;\n  font-size: 1em;\n  margin: 0.25em 0;\n  color: ",";\n"]);return E=function(){return n},n}function x(){var n=Object(c.a)(["\n  margin: 0 0 0.5em;\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  flex-direction: column;\n\n  &:last-child {\n    display: flex;\n    flex: 1;\n    align-items: center;\n    justify-content: flex-end;\n    padding: 0 0 0.5em;\n  }\n"]);return x=function(){return n},n}function j(){var n=Object(c.a)(["\n  box-sizing: border-box;\n  list-style: none;\n  margin: 0;\n  padding: 1em 2em 0;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n"]);return j=function(){return n},n}function w(){var n=Object(c.a)(["\n  padding: 0 2em 1em;\n  border-bottom: 1px solid ",";\n"]);return w=function(){return n},n}function O(){var n=Object(c.a)(["\n  box-sizing: border-box;\n  width: 100vw;\n  max-width: 730px;\n  margin: 0 auto;\n  position: fixed;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: #0a0a0a;\n  z-index: 10;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 2em 0;\n"]);return O=function(){return n},n}var C=function(n){function e(){var n,t;Object(u.a)(this,e);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(t=Object(f.a)(this,(n=Object(m.a)(e)).call.apply(n,[this].concat(a)))).state={playerCount:1,startingLife:20},t.newGame=function(){var n=t.props.createGame,e=t.state;n(e.playerCount,e.startingLife)},t.updateStartingLife=function(n){var e=Number(n.currentTarget.value);t.setState({startingLife:e})},t.updatePlayerCount=function(n){var e=Number(n.currentTarget.value);t.setState({playerCount:Number(e)})},t}return Object(d.a)(e,n),Object(s.a)(e,[{key:"render",value:function(){var n=this.state.startingLife;return a.a.createElement(k,null,a.a.createElement(P,{src:g.a,alt:"Spindown - a counter app"}),a.a.createElement(L,null,a.a.createElement(N,null,a.a.createElement(S,null,"Starting Life"),a.a.createElement(A,{type:"number",value:n,onChange:this.updateStartingLife})),a.a.createElement(N,null,a.a.createElement(S,null,"Number of Players"),a.a.createElement(B,{onChange:this.updatePlayerCount},a.a.createElement("option",{value:"1"},"1"),a.a.createElement("option",{value:"2"},"2"),a.a.createElement("option",{value:"3"},"3"),a.a.createElement("option",{value:"4"},"4"),a.a.createElement("option",{value:"5"},"5"),a.a.createElement("option",{value:"6"},"6"))),a.a.createElement(N,null,a.a.createElement(z,{onClick:this.newGame},"Start Game"))))}}]),e}(a.a.Component);C.defaultProps={createGame:function(){}};var k=p.c.div(O()),P=p.c.img(w(),function(n){return n.theme.colors.primary.b}),L=p.c.ol(j()),N=p.c.li(x()),S=p.c.h2(E(),function(n){return n.theme.colors.secondary.c}),z=p.c.button(v(),function(n){return n.theme.colors.primary.a},function(n){return n.theme.colors.tertiary.b},function(n){return n.theme.colors.tertiary.c}),A=p.c.input(y(),function(n){return n.theme.colors.tertiary.c},function(n){return n.theme.colors.primary.c}),B=p.c.select(b(),function(n){return n.theme.colors.tertiary.c},function(n){return n.theme.colors.primary.c}),G=C,D=t(13),F=t.n(D);t(34);function M(){var n=Object(c.a)(["\n      "," {\n        font-size: 7.5em;\n      }\n\n      "," {\n        width: 3.5em;\n      }\n    "]);return M=function(){return n},n}function T(){var n=Object(c.a)(["\n      :nth-child(1),\n      :nth-child(2),\n      :nth-child(3) {\n        transform: rotate(180deg);\n      }\n    "]);return T=function(){return n},n}function I(){var n=Object(c.a)(["\n      :nth-child(1),\n      :nth-child(2) {\n        transform: rotate(180deg);\n      }\n    "]);return I=function(){return n},n}function J(){var n=Object(c.a)(["\n  display: flex;\n  align-items: center;\n  flex-direction: ",";\n  font-size: 13px;\n  flex: 1;\n  justify-content: space-between;\n\n  :nth-child(odd) {\n    margin-right: 1em;\n    margin-left: 2em;\n  }\n\n  :nth-child(even) {\n    margin-right: 2em;\n    margin-left: 1em;\n  }\n\n  ",";\n\n  ",";\n\n  ",";\n"]);return J=function(){return n},n}function Y(){var n=Object(c.a)(["\n  transform: translateY(-1.5em);\n"]);return Y=function(){return n},n}function R(){var n=Object(c.a)(["\n  font-weight: bold;\n  color: #eee;\n  margin: 0;\n  transform: translateY(-1.5em);\n"]);return R=function(){return n},n}function $(){var n=Object(c.a)(["\n  width: 5em;\n  display: block;\n  color: $secondary;\n"]);return $=function(){return n},n}function q(){var n=Object(c.a)(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #3f5a89;\n"]);return q=function(){return n},n}function H(){var n=Object(c.a)(["\n  font-size: 10em;\n  color: #39c4c3;\n  font-weight: 900;\n  text-align: center;\n  margin: 0;\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  /* &--small {\n    font-size: 12vw;\n  } */\n"]);return H=function(){return n},n}function K(){var n=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return K=function(){return n},n}var Q=function(n){function e(){var n,t;Object(u.a)(this,e);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(t=Object(f.a)(this,(n=Object(m.a)(e)).call.apply(n,[this].concat(a)))).state={isEditingName:!1,editingName:""},t.updatePlayerLife=function(n){return function(){var e=t.props,r=e.onChange,a=e.player;r(a.id,Object(l.a)({},a,{currentLife:a.currentLife+n}))}},t.updatePlayerName=function(n){var e=t.props,r=e.onChange,a=e.player,i=n.currentTarget.value;t.setState({editingName:i}),r(a.id,i?Object(l.a)({},a,{name:i}):Object(l.a)({},a,{name:"Player ".concat(a.id)}))},t.toggleNameEdit=function(){var n=t.props.player,e=t.state.isEditingName;e?F.a.unbind("return"):F.a.bindGlobal("return",function(){t.toggleNameEdit()}),t.setState({isEditingName:!e,editingName:n.name})},t}return Object(d.a)(e,n),Object(s.a)(e,[{key:"render",value:function(){var n=this.props,e=n.player,t=n.playerCount,r=this.state,i=r.editingName,o=r.isEditingName;return a.a.createElement(nn,{playerCount:t},a.a.createElement(W,{onClick:this.updatePlayerLife(1)},a.a.createElement(X,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 8 8",alt:"increase life",fill:"currentColor"},a.a.createElement("path",{d:"M4 0l-4 4 1.5 1.5 2.5-2.5 2.5 2.5 1.5-1.5-4-4z",transform:"translate(0 1)"}))),a.a.createElement(U,null,a.a.createElement(V,null,e.currentLife),o?a.a.createElement(_,{value:i,placeholder:"Player's Name",onChange:this.updatePlayerName,autoFocus:!0}):a.a.createElement(Z,{onClick:this.toggleNameEdit},e.name)),a.a.createElement(W,{onClick:this.updatePlayerLife(-1)},a.a.createElement(X,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 8 8",alt:"decrease life",fill:"currentColor"},a.a.createElement("path",{d:"M1.5 0l-1.5 1.5 4 4 4-4-1.5-1.5-2.5 2.5-2.5-2.5z",transform:"translate(0 1)"}))))}}]),e}(a.a.Component);Q.defaultProps={onChange:function(){}};var U=p.c.div(K()),V=p.c.p(H()),W=p.c.p(q()),X=p.c.svg($()),Z=p.c.p(R()),_=p.c.input(Y()),nn=p.c.div(J(),function(n){return n.playerCount>2?"row":"column"},function(n){return n.playerCount>2&&n.playerCount<5&&Object(p.b)(I())},function(n){return n.playerCount>4&&n.playerCount<7&&Object(p.b)(T())},function(n){return n.playerCount>2&&n.playerCount<7&&Object(p.b)(M(),V,X)}),en=Q;function tn(){var n=Object(c.a)(["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100vw;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n  padding: 1em 0;\n\n  @media only screen and (min-width: 700px) {\n    flex-direction: row;\n  }\n"]);return tn=function(){return n},n}var rn=function(n){function e(){return Object(u.a)(this,e),Object(f.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(d.a)(e,n),Object(s.a)(e,[{key:"render",value:function(){var n=this.props,e=n.players,t=n.updatePlayer;return a.a.createElement(an,{playerCount:e.length},e.map(function(n){return a.a.createElement(en,{key:n.id,player:n,onChange:t,playerCount:e.length})}))}}]),e}(a.a.Component);rn.defaultProps={updatePlayer:function(){}};var an=p.c.div(tn()),on=rn,cn={colors:{base:{dark:"#1E1E1E",light:"#EAEAEA"},primary:{a:"#37BDBC",b:"#9AE2E1",c:"#1C6160"},secondary:{a:"#4A90E2",b:"#93BDEE",c:"#1E65B9"},tertiary:{a:"#E6D528",b:"#ECE388",c:"#918617",d:"#E2455B",e:"#ED8E9C",f:"#A71A2E"},gradient:{sunsetStart:"#E2455B",sunsetEnd:"#CCBC20",seaStart:"#39C4C3",seaEnd:"#3F5A89",twilightStart:"#E2455B",twilightEnd:"#2F2295"}}},ln=t(14);function un(){var n=Object(c.a)(["\n  position: fixed;\n  top: 0.5em;\n  left: 0.5em;\n  color: ",";\n"]);return un=function(){return n},n}function sn(){var n=Object(c.a)(["\n  display: flex;\n\n  @media screen and (min-width: 320px) and (max-width: 767px) and (orientation: landscape) {\n    html {\n      transform: rotate(-90deg);\n      transform-origin: left top;\n      width: 100vh;\n      overflow-x: hidden;\n      position: absolute;\n      top: 100%;\n      left: 0;\n    }\n  }\n"]);return sn=function(){return n},n}var fn=function(n){function e(){var n,t;Object(u.a)(this,e);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(t=Object(f.a)(this,(n=Object(m.a)(e)).call.apply(n,[this].concat(a)))).state={startingLife:0,players:[]},t.createGame=function(n,e){var r=function(n,e){for(var t=[],r=1;r<=n;r++)t.push({id:r,name:"Player ".concat(r),currentLife:e,additionalCounters:{poison:0,commander:[]}});return t}(n,e);console.log("players",n,e,r),t.setState({startingLife:e,players:r})},t.resetGame=function(){t.setState({startingLife:0})},t.updatePlayer=function(n,e){var r=t.state.players,a=r.findIndex(function(e){return e.id===n}),i=function(n,e,t){var r=n.slice(0,e),a=n.slice(e+1),i=n[e];return[].concat(Object(ln.a)(r),[t(i)],Object(ln.a)(a))}(r,a,function(n){return Object(l.a)({},n,e)});t.setState({players:i})},t}return Object(d.a)(e,n),Object(s.a)(e,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var n=this.state,e=n.players,t=n.startingLife;return a.a.createElement(p.a,{theme:cn},a.a.createElement(mn,null,t>0&&a.a.createElement(dn,{onClick:this.resetGame},"Reset"),0===t&&a.a.createElement(G,{createGame:this.createGame}),a.a.createElement(on,{players:e,updatePlayer:this.updatePlayer})))}}]),e}(r.Component),mn=p.c.div(sn()),dn=p.c.button(un(),function(n){return n.theme.colors.tertiary.f}),pn=fn;o.a.render(a.a.createElement(pn,null),document.getElementById("spindown"))}},[[20,2,1]]]);
//# sourceMappingURL=main.728b2a5a.chunk.js.map