!function(){const e=["OPRIT","PAUZA","PORNIT"],t=document.querySelector("#status_value"),n=document.querySelector("#min_temp_value"),u=document.querySelector("#max_temp_value"),o=document.querySelector("#current_temp_value"),r=document.querySelector("#pause_time_value"),c=document.querySelector("#work_time_input"),i=document.querySelector("#pause_time_input"),l=document.querySelector("#min_temp_dialog"),a=document.querySelector("#max_temp_dialog"),s=document.querySelector("#advanced_dialog"),m=document.querySelector("#auth_dialog"),d=document.querySelector("#min_temp_btn"),p=document.querySelector("#max_temp_btn"),_=document.querySelector("#advanced_btn");let y,v,S,q=window.localStorage.getItem("pass")||"";function f(e,t){return new Promise((function(n,u){fetch("/api/"+e,{method:"POST",body:t,headers:{Authorization:q}}).then((function(e){e.ok?e.json().then((function(e){n(e)})):u(e.statusText)})).catch((function(e){u(e)}))}))}function k(){const l=["status","current_temp","min_temp","max_temp","work_time","pause_time","timeline","timeline_temp","timeline_power"];Promise.all(l.map((e=>function(e){return new Promise((function(t,n){fetch("/api/"+e,{method:"GET",headers:{Authorization:q}}).then((function(e){e.ok?e.json().then((function(e){t(e)})):n(e.statusText)})).catch((function(e){n(e)}))}))}(e)))).then((function(a){const s=l.reduce((function(e,t,n){return e[t]=a[n].result,e}),{});t.innerHTML=isNaN(s.status)?"n/a":e[Number(s.status)],n.innerHTML=s.min_temp||"n/a",u.innerHTML=s.max_temp||"n/a",o.innerHTML=s.current_temp||"n/a",r.innerHTML=isNaN(s.pause_time)?"n/a":Number(s.pause_time)/60,c.value=isNaN(s.work_time)?"n/a":Number(s.work_time)/60,i.value=isNaN(s.pause_time)?"n/a":Number(s.pause_time)/60;let m=s.length?s.timeline.slice(-1440):[];if(m.length){const[e,t,n,u,o]=m[m.length-1].match(/..?/g);document.querySelector("#last_sync_value").innerHTML=`${e}/${t} ${n}:${u}`}else document.querySelector("#last_sync_value").innerHTML="n/a";m=m.map((function(e){const[t,n,u,o,r]=e.match(/..?/g);return`${t}/${n} ${u}:${o}`}));const d=s.timeline_temp.slice(-1440),p=s.timeline_power.slice(-1440);v&&v.destroy(),S&&S.destroy();try{v=new Chart("temp_chart",{type:"line",data:{labels:m,datasets:[{label:"Temperatura",fill:!1,lineTension:0,backgroundColor:"rgba(255,0,0,1.0)",borderColor:"rgba(255,0,0,0.75)",data:d}]}}),S=new Chart("power_chart",{type:"line",data:{labels:m,datasets:[{label:"Energie",fill:!1,lineTension:0,backgroundColor:"rgba(0,0,255,1.0)",borderColor:"rgba(0,0,255,0.75)",data:p}]}})}catch(e){console.log(e)}})).catch((function(e){console.log(e),clearInterval(y),alert("Nu se poate comunica cu serverul!"),m.style.display="block"}))}q?(k(),y=setInterval(k,3e4)):m.style.display="block",m.querySelector(".submit").addEventListener("click",(function(){m.style.display="none",clearInterval(y),q=m.querySelector("#pass_input").value,setTimeout(k,100),k(),y=setInterval(k,3e4),window.localStorage.setItem("pass",q)})),d.addEventListener("click",(function(){const e=parseFloat(n.innerHTML);document.querySelector("#min_input").value=e,l.style.display="block"})),l.querySelector(".close").addEventListener("click",(function(){l.style.display="none"})),l.querySelector(".submit").addEventListener("click",(function(){f("min_temp",parseFloat(document.querySelector("#min_input").value)),setTimeout(k,100),l.style.display="none"})),l.querySelector("#plus_min_input").addEventListener("click",(function(){const e=parseFloat(document.querySelector("#min_input").value);document.querySelector("#min_input").value=(e+.1).toFixed(1)})),l.querySelector("#minus_min_input").addEventListener("click",(function(){const e=parseFloat(document.querySelector("#min_input").value);document.querySelector("#min_input").value=(e-.1).toFixed(1)})),p.addEventListener("click",(function(){const e=parseFloat(u.innerHTML);document.querySelector("#max_input").value=e,a.style.display="block"})),a.querySelector(".close").addEventListener("click",(function(){a.style.display="none"})),a.querySelector(".submit").addEventListener("click",(function(){f("max_temp",parseFloat(document.querySelector("#max_input").value)),setTimeout(k,100),a.style.display="none"})),a.querySelector("#plus_max_input").addEventListener("click",(function(){const e=parseFloat(document.querySelector("#max_input").value);document.querySelector("#max_input").value=(e+.1).toFixed(1)})),a.querySelector("#minus_max_input").addEventListener("click",(function(){const e=parseFloat(document.querySelector("#max_input").value);document.querySelector("#max_input").value=(e-.1).toFixed(1)})),_.addEventListener("click",(function(){s.style.display="block"})),s.querySelector(".close").addEventListener("click",(function(){s.style.display="none"})),s.querySelector(".submit").addEventListener("click",(function(){s.style.display="none";const e=parseInt(document.querySelector("#work_time_input").value),t=parseInt(document.querySelector("#pause_time_input").value);f("work_time",60*e),f("pause_time",60*t),setTimeout(k,100)})),s.querySelector("#plus_work_input").addEventListener("click",(function(){const e=parseInt(document.querySelector("#work_time_input").value);document.querySelector("#work_time_input").value=e+10})),s.querySelector("#minus_work_input").addEventListener("click",(function(){const e=parseInt(document.querySelector("#work_time_input").value);document.querySelector("#work_time_input").value=e-10})),s.querySelector("#plus_pause_input").addEventListener("click",(function(){const e=parseInt(document.querySelector("#pause_time_input").value);document.querySelector("#pause_time_input").value=e+10})),s.querySelector("#minus_pause_input").addEventListener("click",(function(){const e=parseInt(document.querySelector("#pause_time_input").value);document.querySelector("#pause_time_input").value=e-10}))}();
//# sourceMappingURL=index.494d8f86.js.map
