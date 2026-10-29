"use strict";
fetch("version.json",{cache:"no-store"}).then(r=>{if(!r.ok)throw Error("offline");return r.json()}).then(data=>{
  if(typeof data.version!=="string"||!data.downloads)return;
  document.querySelectorAll("[data-version]").forEach(node=>node.textContent=data.version);
  for(const platform of ["vr","mobile"]){
    const url=data.downloads[platform];
    if(typeof url==="string"&&url.startsWith("https://github.com/tommyaudetcontact-wq/NebulaVR/releases/download/"))document.getElementById(platform+"-download").href=url;
    const bytes=data.files?.[platform]?.bytes;
    document.getElementById(platform+"-size").textContent="Version "+data.version+(Number.isFinite(bytes)?" · "+(bytes/1048576).toFixed(1)+" Mo":"");
  }
}).catch(()=>{});
