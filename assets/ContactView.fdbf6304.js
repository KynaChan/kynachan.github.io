import{_ as u,o as l,c as r,a as t,w as s,v as i,p as d,b as _,d as m}from"./index.26eaf418.js";const b={name:"ContactForm",data(){return{contactEmail:"",contactSubject:"",contactContent:""}}},c=n=>(d("data-v-5816b32f"),n=n(),_(),n),h={class:"input-box"},f=c(()=>t("label",{for:"inputEmail"},"Your Email",-1)),v={class:"input-box"},x=c(()=>t("label",{for:"inputSubject"},"Subject",-1)),C={class:"input-box textarea-box"},S=c(()=>t("label",{for:"inputContent"},"Things you want to tell me",-1)),y=c(()=>t("input",{class:"submit",type:"submit"},null,-1));function w(n,e,p,g,o,I){return l(),r("form",null,[t("div",h,[s(t("input",{id:"inputEmail",placeholder:" ","onUpdate:modelValue":e[0]||(e[0]=a=>o.contactEmail=a),type:"email",required:""},null,512),[[i,o.contactEmail]]),f]),t("div",v,[s(t("input",{id:"inputSubject",placeholder:" ","onUpdate:modelValue":e[1]||(e[1]=a=>o.contactSubject=a)},null,512),[[i,o.contactSubject]]),x]),t("div",C,[s(t("textarea",{id:"inputContent",placeholder:" ",rows:"4","onUpdate:modelValue":e[2]||(e[2]=a=>o.contactContent=a),required:""},null,512),[[i,o.contactContent]]),S]),y])}var E=u(b,[["render",w],["__scopeId","data-v-5816b32f"]]);const j={class:"content"},V=t("h1",null,"Heya! Here is the Contact Page with my contact.",-1),F={name:"ContactView",props:{pageHeader:{type:String}},setup(n){return(e,p)=>(l(),r("div",j,[V,m(E)]))}};export{F as default};
