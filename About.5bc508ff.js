function e(e,t,n,s){Object.defineProperty(e,t,{get:n,set:s,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire2f79,s=n.register;s("bCUq7",function(t,s){Object.defineProperty(t.exports,"__esModule",{value:!0,configurable:!0}),e(t.exports,"default",function(){return u});var o=n("2GiHI"),r=n("8VVGo"),i=n("cziO7");class a extends i.Component{constructor(){super()}componentDidMount(){}render(){return/*#__PURE__*/(0,o.jsxs)("div",{className:"about",children:[/*#__PURE__*/(0,o.jsx)("h1",{children:"This is about us page"}),/*#__PURE__*/(0,o.jsx)(r.default,{name:"Vipul kumar pandey"})]})}}var u=a}),s("8VVGo",function(s,o){e(s.exports,"default",function(){return u});var r=n("2GiHI"),i=n("cziO7");class a extends /*@__PURE__*/t(i).Component{constructor(e){super(e),this.state={userinfo:{login:"dummy",location:"Dto",avatar_url:""}}}async componentDidMount(){let e=await fetch("https://api.github.com/users/Vipulpandey"),t=await e.json();this.setState({userinfo:t})}render(){return/*#__PURE__*/(0,r.jsxs)("div",{className:"user-card",children:[/*#__PURE__*/(0,r.jsx)("img",{src:this.state.userinfo.avatar_url}),/*#__PURE__*/(0,r.jsxs)("h2",{children:["Name:- ",this.state.userinfo.login]}),/*#__PURE__*/(0,r.jsxs)("h3",{children:["Location:-",this.state.userinfo.location]}),/*#__PURE__*/(0,r.jsx)("h3",{children:"Contact:- 8340311564"})]})}}var u=a});//# sourceMappingURL=About.5bc508ff.js.map

//# sourceMappingURL=About.5bc508ff.js.map
