(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,a,t){e.exports=t(36)},21:function(e,a,t){},34:function(e,a,t){},36:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(12),c=t.n(r),s=(t(21),t(1)),i=t(5),o=t(4),m=t(2),u=t(3),p=t(15),d=t(13),E=t.n(d),h=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(o.a)(this,Object(m.a)(a).call(this))).vantaRef=l.a.createRef(),e}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){this.vantaEffect=E()({el:this.vantaRef.current,color:1290683,backgroundColor:131669,THREE:p})}},{key:"componentWillUnmount",value:function(){this.vantaEffect&&this.vantaEffect.destroy()}},{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{id:"home",ref:this.vantaRef},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Works")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#testimonials"},"Contact")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},e.name),l.a.createElement("h3",{style:{color:"#fff",fontFamily:"sans-serif "}},e.roleDescription),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url,target:"_blank"},l.a.createElement("i",{className:e.className})))})))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"})))))}}]),a}(n.Component),v=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:"images/profilepic.jpg",alt:""})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,e.aboutme),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("h2",null,"Contact Details"),l.a.createElement("p",{className:"address"},l.a.createElement("span",null,e.name),l.a.createElement("br",null),l.a.createElement("span",null,e.address),l.a.createElement("br",null),l.a.createElement("span",null,l.a.createElement("a",{href:e.linkedinId},"LinkedIn Profile"))))))))}}]),a}(n.Component),f=t(6),b=t.n(f),g=t(14),N=t.n(g),w=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"resume"},l.a.createElement(b.a,{left:!0,cascade:!0},l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Education"))),l.a.createElement("div",{className:"nine columns main-col"},e.education&&e.education.map(function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.UniversityName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfPassing," ",e.YearOfPassing)),l.a.createElement("p",null,e.Achievements)))}))),l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Work"))),l.a.createElement("div",{className:"nine columns main-col"},e.work&&e.work.map(function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.CompanyName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfLeaving," ",e.YearOfLeaving)),l.a.createElement("p",null,e.Achievements)))}))),l.a.createElement(N.a,{left:!0,cascade:!0},l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Skills"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("p",null,e.skillsDescription),l.a.createElement("div",{className:"bars"},l.a.createElement("ul",{className:"skills"},e.skills&&e.skills.map(function(e){return l.a.createElement("li",null,l.a.createElement("span",{className:"bar-expand ".concat(e.skillname.toLowerCase())}),l.a.createElement("em",null,e.skillname))})))))))," ")}}]),a}(n.Component),y=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"portfolio"},l.a.createElement(b.a,{right:!0},l.a.createElement("div",{className:"text-container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns collapsed"},l.a.createElement("h1",null,l.a.createElement("span",null,"Check Out Some of My Work"))),l.a.createElement("div",{className:"ten columns flex-container"},l.a.createElement("div",{className:"flexslider"},l.a.createElement("ul",{className:"slides"},e.portfolio&&e.portfolio.map(function(e){return l.a.createElement("li",null,l.a.createElement("div",{className:"columns portfolio-item"},l.a.createElement("div",{className:"item-wrap text-center"},l.a.createElement("a",{href:e.url,onClick:function(){return window.location.href="".concat(e.url)},target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:"".concat(e.imgurl),className:"item-img",alt:""}),l.a.createElement("p",null,l.a.createElement("cite",null,e.name)),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"portfolio-item-meta"},l.a.createElement("h5",null,e.name),l.a.createElement("p",null,e.description)))))))})))," ")," ")," "),"  ")," ")}}]),a}(n.Component),k=(t(34),function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"testimonials"},l.a.createElement(b.a,{bottom:!0},l.a.createElement("div",{className:"text-container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("blockquote",null,l.a.createElement("p",{className:"contactme text-center"},"Feel free to contact me or review out more of my work at the links below")))," ",l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",null,l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))}))))))," "),"  "))}}]),a}(n.Component)),O=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("div",{class:"content has-text-centered"},l.a.createElement("p",null,l.a.createElement("strong",null,"My Portfolio")," by ",l.a.createElement("a",{href:"https://github.com/emartey"},"Edward Martey")))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component),j={imagebaseurl:"https://github.com/emartey",name:"Edward Martey",role:"Web Developer",linkedinId:" https://www.linkedin.com/in/emartey/",roleDescription:" Junior Web Developer who loves to tinker and work on new projects. Let's code!",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/emartey/",className:"fa fa-linkedin"},{name:"github",url:"https://github.com/emartey",className:"fa fa-github"}],aboutme:"I am a self taught and technically instructed Full Stack Web Developer, currently diving deeper into the wonderful world of software engineering. I believe that to be successful in life, one needs to be obsessive with their dreams and keep working towards them.",address:"Texas",website:"https://github.com/emartey",education:[{UniversityName:"Southern Methodist University",specialization:"Full Stack Web Development",MonthOfPassing:"MARCH",YearOfPassing:"2020",Achievements:"A 24-week intensive program focused on gaining technical programming skills in HTML5, CSS3, Javascript, JQuery, Bootstrap, Firebase, Node Js, MySQL, MongoDB, Express, Handelbars.js & ReactJS."},{UniversityName:"Collin College",specialization:"Associates of Science",MonthOfPassing:"MAY",YearOfPassing:"2016",Achievements:"Major in biology and chemistry. Minor in business and music."}],work:[{CompanyName:"CVS PHARMACY",specialization:"Pharmacy Technician/Inventory Specialist/Lead Pharmacy Technician",MonthOfLeaving:"FEBRUARY 2014",YearOfLeaving:" - PRESENT",Achievements:"Strong team standout. Proved as invaluable asset and received two raises within 6 months of start date culminating with promotion within a year. Improved productivity 25% after promotion, increasing team statistics across the board. Recognized by company management as great team leader."},{CompanyName:"COLONIAL LIFE",specialization:"Account Executive",MonthOfLeaving:"DECEMBER 2018",YearOfLeaving:" - PRESENT",Achievements:"Worked with businesses to install or enhance employee benefits packages. Maintained and managed existing clientele, utilizing a variety of different platforms and applications. Built a robust catalog and book of business with local business owners, helping many businesses install lifesaving plans improving the lives of at least 70% of employees."}],skillsDescription:"Programming Languages: HTML5, CSS, Sass, JavaScript/JSX, JSON, XML, Java, SQL, ReactJS, NodeJS, jQuery, Bootstrap, Handlebars.js, Express.js, Sequelize, MySQL, MongoDB, Firebase, Git, MVC, ORMs",portfolio:[{name:"KOLLAB",description:"\u2022 Event planner application, connecting vendors to consumer. Collaboration project.",imgurl:"images/portfolio/KOLLAB.png",url:"https://github.com/emartey/project-3/tree/edward-branch"},{name:"Dragon Ball Universe Trivia",description:"\u2022\tDragonball Universe Trivia game made using JavaScript and jQuery.",imgurl:"images/portfolio/DragonBall.png",url:"https://github.com/emartey/TriviaGame"},{name:"BAMAZON",description:"\u2022\tBamazon is a webstore database command application.",imgurl:"images/portfolio/BAMAZON.png",url:"https://github.com/emartey/bamazon"}],testimonials:[{description:"This is a sample testimonial",name:"Some technical guy"}]},M=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(h,{resumeData:j}),l.a.createElement(v,{resumeData:j}),l.a.createElement(w,{resumeData:j}),l.a.createElement(y,{resumeData:j}),l.a.createElement(k,{resumeData:j}),l.a.createElement(O,{resumeData:j}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,2,1]]]);
//# sourceMappingURL=main.d39c558f.chunk.js.map