(()=>{"use strict";const t=function(t,...e){const n=document.createElement(t);return 0===e.length||e.forEach((t=>n.classList.add(t))),n},e=(()=>{const t=()=>{const t=document.querySelector(".project-box");document.querySelector("#add-project").classList.remove("hidden"),t.classList.add("hidden")};return{show:()=>{const t=document.querySelector(".project-box");document.querySelector("#add-project").classList.add("hidden"),t.classList.remove("hidden")},hide:t,addNew:()=>{t()}}})(),n=(()=>{const t=()=>{document.querySelector(".task-box").classList.add("hidden")};return{show:()=>{const e=document.querySelector(".task-box");e.classList.remove("hidden"),window.addEventListener("click",(n=>{n.target==e&&t()}))},hide:t,addNew:()=>{t()}}})();var d;(d=document.querySelector("#content")).appendChild(function(){const e=t("header"),n=t("div","logo");e.appendChild(n);const d=t("span","fas","fa-check-circle","fa-2x");n.appendChild(d);const a=t("h1");a.textContent="same.do",n.appendChild(a);const o=t("div");o.id="theme-switcher";const i=t("span","fas","fa-adjust","fa-lg");return o.appendChild(i),e.appendChild(o),e}()),d.appendChild(function(){const e=t("nav"),n=function(){const e=t("div","wrap"),n=t("div","search");e.appendChild(n);const d=t("input","searchTerm");d.type="text",d.placeholder="Search...",n.appendChild(d);const a=t("button","searchButton");a.type="submit",n.appendChild(a);const o=t("span","fa","fa-search");return a.appendChild(o),e}();e.appendChild(n);const d=t("div","navigation");e.appendChild(d);const a=t("div","list-container");d.appendChild(a);const o=t("div","list-title");a.appendChild(o);const i=t("h3");i.textContent="Shortcuts",o.appendChild(i);const c=t("div","list-shortcuts");a.appendChild(c);for(let e=0;e<3;e++){const n=t("div","list-element");switch(e){case 0:{const e=t("span","fas","fa-calendar-day"),d=t("span");d.textContent="Today",n.appendChild(e),n.appendChild(d)}break;case 1:{const e=t("span","fas","fa-calendar-week"),d=t("span");d.textContent="Next 7 Days",n.appendChild(e),n.appendChild(d)}break;case 2:{const e=t("span","fas","fa-calendar"),d=t("span");d.textContent="All tasks",n.appendChild(e),n.appendChild(d)}}c.appendChild(n)}const s=t("div","list-container");d.appendChild(s);const p=t("div","list-title");s.appendChild(p);const l=t("h3");l.textContent="Projects",p.appendChild(l);const r=t("div","list-projects");s.appendChild(r);const h=t("div","button-container");e.appendChild(h);const C=t("button");C.id="add-project",C.textContent="Add project",h.appendChild(C);const u=t("div","project-box","hidden");e.appendChild(u);const x=t("input");x.id="project-name",x.type="text",x.placeholder="Project name",u.appendChild(x);const v=t("div","project-box-buttons");u.appendChild(v);const k=t("button");k.id="add-project-box",k.textContent="Add",v.appendChild(k);const b=t("button");return b.id="cancel-project-box",b.textContent="Cancel",v.appendChild(b),e}()),d.appendChild(function(){const e=t("main"),n=t("div","tasks-container");e.appendChild(n);const d=t("div","tasks-header");n.appendChild(d);const a=t("div","tasks-title");a.textContent="Placeholder",d.appendChild(a);const o=t("div","tasks-sort");d.appendChild(o);const i=t("span","fas","fa-sort-up");o.appendChild(i);const c=t("span");c.textContent="Due date",o.appendChild(c);const s=t("div","tasks");n.appendChild(s);const p=t("div");p.id="add-task",s.appendChild(p);const l=t("div","panel");p.appendChild(l);const r=t("span","fas","fa-plus-circle");l.appendChild(r);const h=t("span");return h.textContent="Add task",l.appendChild(h),e}()),d.appendChild(function(){const e=t("footer"),n=t("p");n.textContent="made by ",e.appendChild(n);const d=t("a");return d.textContent="alternateved ∆",d.href="https://github.com/alternateved",d.target="_blank",n.appendChild(d),e}()),d.appendChild(function(){const e=t("div","task-box","hidden"),n=t("div","task-box-container");e.appendChild(n);const d=t("h3","task-box-title");d.textContent="New Task",n.appendChild(d);for(let e=0;e<3;e++){const d=t("div","task-box-input"),a=t("label");switch(d.appendChild(a),e){case 0:{a.textContent="Title";const e=t("input","input-element");e.id="task-title",e.type="text",e.placeholder="Task title",d.appendChild(e)}break;case 1:{a.textContent="Description";const e=t("textarea");e.id="task-description",e.placeholder="Full description...",d.appendChild(e)}break;case 2:{a.textContent="Due date";const e=t("input","input-element");e.id="task-date",e.type="date",d.appendChild(e)}}n.appendChild(d)}const a=t("div","task-box-priority");n.appendChild(a);const o=t("label");o.textContent="Priority",a.appendChild(o);const i=t("select");i.id="task-priority",a.appendChild(i);const c=t("option");c.textContent="Low",c.value="low",i.appendChild(c);const s=t("option");s.textContent="Medium",s.value="medium",i.appendChild(s);const p=t("option");p.textContent="High",p.value="high",i.appendChild(p);const l=t("div","task-box-buttons");n.appendChild(l);const r=t("button");r.id="add-task-box",r.textContent="Add task",l.appendChild(r);const h=t("button");return h.id="cancel-task-box",h.textContent="Cancel",l.appendChild(h),e}()),document.querySelector("#add-project").addEventListener("click",e.show),document.querySelector("#cancel-project-box").addEventListener("click",e.hide),document.querySelector("#add-project-box").addEventListener("click",e.addNew),document.querySelector("#add-task").addEventListener("click",n.show),document.querySelector("#cancel-task-box").addEventListener("click",n.hide),document.querySelector("#add-task-box").addEventListener("click",n.addNew),document.querySelector("#theme-switcher").addEventListener("click",void 0)})();