!function(){const e=["OPRIT","PAUZA","PORNIT"],t=document.querySelector("#status_value"),n=document.querySelector("#min_temp_value"),o=document.querySelector("#max_temp_value"),u=document.querySelector("#current_temp_value"),r=document.querySelector("#pause_time_value"),i=document.querySelector("#work_time_input"),c=document.querySelector("#pause_time_input"),l=document.querySelector("#min_temp_dialog"),a=document.querySelector("#max_temp_dialog"),s=document.querySelector("#advanced_dialog"),m=document.querySelector("#auth_dialog"),d=document.querySelector("#min_temp_btn"),p=document.querySelector("#max_temp_btn"),_=document.querySelector("#advanced_btn");let y,v,S,q=window.localStorage.getItem("pass")||"";function f(e,t){return new Promise((function(n,o){fetch("/api/"+e,{method:"POST",body:t,headers:{Authorization:q}}).then((function(e){e.ok?e.json().then((function(e){n(e)})):o(e.statusText)})).catch((function(e){o(e)}))}))}function k(){const l=["status","current_temp","min_temp","max_temp","work_time","pause_time","timeline","timeline_temp","timeline_power"];Promise.all(l.map((e=>function(e){return new Promise((function(t,n){fetch("/api/"+e,{method:"GET",headers:{Authorization:q}}).then((function(e){e.ok?e.json().then((function(e){t(e)})):n(e.statusText)})).catch((function(e){n(e)}))}))}(e)))).then((function(a){const s=l.reduce((function(e,t,n){return e[t]=a[n].result,e}),{});t.innerHTML=e[Number(s.status)]||"n/a",n.innerHTML=s.min_temp||"n/a",o.innerHTML=s.max_temp||"n/a",u.innerHTML=s.current_temp||"n/a",r.innerHTML=isNaN(s.pause_time)?"n/a":Number(s.pause_time)/60,i.value=isNaN(s.work_time)?"n/a":Number(s.work_time)/60,c.value=isNaN(s.pause_time)?"n/a":Number(s.pause_time)/60;let m=s.timeline.slice(-1440);m=m.map((function(e){const[t,n,o,u,r]=e.match(/..?/g);return`${t}/${n} ${o}:${u}`}));const d=s.timeline_temp.slice(-1440),p=s.timeline_power.slice(-1440);v&&v.destroy(),S&&S.destroy(),v=new Chart("temp_chart",{type:"line",data:{labels:m,datasets:[{label:"Temperatura",fill:!1,lineTension:0,backgroundColor:"rgba(255,0,0,1.0)",borderColor:"rgba(255,0,0,0.75)",data:d}]}}),S=new Chart("power_chart",{type:"line",data:{labels:m,datasets:[{label:"Energie",fill:!1,lineTension:0,backgroundColor:"rgba(0,0,255,1.0)",borderColor:"rgba(0,0,255,0.75)",data:p}]}})})).catch((function(e){console.log(e),clearInterval(y),alert("Nu se poate comunica cu serverul!"),m.showModal()}))}l.showModal||dialogPolyfill.registerDialog(l),a.showModal||dialogPolyfill.registerDialog(a),s.showModal||dialogPolyfill.registerDialog(s),m.showModal||dialogPolyfill.registerDialog(m),q?(k(),y=setInterval(k,3e4)):m.showModal(),m.querySelector(".submit").addEventListener("click",(function(){m.close(),clearInterval(y),q=m.querySelector("#pass_input").value,k(),y=setInterval(k,3e4),window.localStorage.setItem("pass",q)})),d.addEventListener("click",(function(){const e=parseFloat(n.innerHTML);document.querySelector("#min_input").value=e,l.showModal()})),l.querySelector(".close").addEventListener("click",(function(){l.close()})),l.querySelector(".submit").addEventListener("click",(function(){f("min_temp",parseFloat(document.querySelector("#min_input").value)),k(),l.close()})),l.querySelector("#plus_min_input").addEventListener("click",(function(){const e=parseFloat(document.querySelector("#min_input").value);document.querySelector("#min_input").value=(e+.1).toFixed(1)})),l.querySelector("#minus_min_input").addEventListener("click",(function(){const e=parseFloat(document.querySelector("#min_input").value);document.querySelector("#min_input").value=(e-.1).toFixed(1)})),p.addEventListener("click",(function(){const e=parseFloat(o.innerHTML);document.querySelector("#max_input").value=e,a.showModal()})),a.querySelector(".close").addEventListener("click",(function(){a.close()})),a.querySelector(".submit").addEventListener("click",(function(){f("max_temp",parseFloat(document.querySelector("#max_input").value)),k(),a.close()})),a.querySelector("#plus_max_input").addEventListener("click",(function(){const e=parseFloat(document.querySelector("#max_input").value);document.querySelector("#max_input").value=(e+.1).toFixed(1)})),a.querySelector("#minus_max_input").addEventListener("click",(function(){const e=parseFloat(document.querySelector("#max_input").value);document.querySelector("#max_input").value=(e-.1).toFixed(1)})),_.addEventListener("click",(function(){s.showModal()})),s.querySelector(".close").addEventListener("click",(function(){s.close()})),s.querySelector(".submit").addEventListener("click",(function(){s.close();const e=parseInt(document.querySelector("#work_time_input").value),t=parseInt(document.querySelector("#pause_time_input").value);f("work_time",60*e),f("pause_time",60*t),k()})),s.querySelector("#plus_work_input").addEventListener("click",(function(){const e=parseInt(document.querySelector("#work_time_input").value);document.querySelector("#work_time_input").value=e+10})),s.querySelector("#minus_work_input").addEventListener("click",(function(){const e=parseInt(document.querySelector("#work_time_input").value);document.querySelector("#work_time_input").value=e-10})),s.querySelector("#plus_pause_input").addEventListener("click",(function(){const e=parseInt(document.querySelector("#pause_time_input").value);document.querySelector("#pause_time_input").value=e+10})),s.querySelector("#minus_pause_input").addEventListener("click",(function(){const e=parseInt(document.querySelector("#pause_time_input").value);document.querySelector("#pause_time_input").value=e-10}))}();
//# sourceMappingURL=index.0e289f5f.js.map
