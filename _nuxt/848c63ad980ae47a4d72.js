(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{193:function(t,e,n){var content=n(198);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(52).default)("6759f5ab",content,!0,{sourceMap:!1})},194:function(t,e,n){t.exports=function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",u="month",o="quarter",a="year",d=/^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,c=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},l={s:f,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+f(r,2,"0")+":"+f(i,2,"0")},m:function(t,e){var n=12*(e.year()-t.year())+(e.month()-t.month()),r=t.clone().add(n,u),i=e-r<0,s=t.clone().add(n+(i?-1:1),u);return Number(-(n+(e-r)/(i?r-s:s-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(d){return{M:u,y:a,w:s,d:i,D:"date",h:r,m:n,s:e,ms:t,Q:o}[d]||String(d||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},h={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m="en",v={};v[m]=h;var $=function(t){return t instanceof y},_=function(t,e,n){var r;if(!t)return m;if("string"==typeof t)v[t]&&(r=t),e&&(v[t]=e,r=t);else{var i=t.name;v[i]=t,r=i}return!n&&r&&(m=r),r||!n&&m},g=function(t,e,n){if($(t))return t.clone();var r=e?"string"==typeof e?{format:e,pl:n}:e:{};return r.date=t,new y(r)},M=l;M.l=_,M.i=$,M.w=function(t,e){return g(t,{locale:e.$L,utc:e.$u,$offset:e.$offset})};var y=function(){function f(t){this.$L=this.$L||_(t.locale,null,!0),this.parse(t)}var l=f.prototype;return l.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(M.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(d);if(r)return n?new Date(Date.UTC(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)):new Date(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)}return new Date(e)}(t),this.init()},l.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},l.$utils=function(){return M},l.isValid=function(){return!("Invalid Date"===this.$d.toString())},l.isSame=function(t,e){var n=g(t);return this.startOf(e)<=n&&n<=this.endOf(e)},l.isAfter=function(t,e){return g(t)<this.startOf(e)},l.isBefore=function(t,e){return this.endOf(e)<g(t)},l.$g=function(t,e,n){return M.u(t)?this[e]:this.set(n,t)},l.year=function(t){return this.$g(t,"$y",a)},l.month=function(t){return this.$g(t,"$M",u)},l.day=function(t){return this.$g(t,"$W",i)},l.date=function(t){return this.$g(t,"$D","date")},l.hour=function(t){return this.$g(t,"$H",r)},l.minute=function(t){return this.$g(t,"$m",n)},l.second=function(t){return this.$g(t,"$s",e)},l.millisecond=function(e){return this.$g(e,"$ms",t)},l.unix=function(){return Math.floor(this.valueOf()/1e3)},l.valueOf=function(){return this.$d.getTime()},l.startOf=function(t,o){var d=this,c=!!M.u(o)||o,f=M.p(t),l=function(t,e){var n=M.w(d.$u?Date.UTC(d.$y,e,t):new Date(d.$y,e,t),d);return c?n:n.endOf(i)},h=function(t,e){return M.w(d.toDate()[t].apply(d.toDate(),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),d)},m=this.$W,v=this.$M,$=this.$D,_="set"+(this.$u?"UTC":"");switch(f){case a:return c?l(1,0):l(31,11);case u:return c?l(1,v):l(0,v+1);case s:var g=this.$locale().weekStart||0,y=(m<g?m+7:m)-g;return l(c?$-y:$+(6-y),v);case i:case"date":return h(_+"Hours",0);case r:return h(_+"Minutes",1);case n:return h(_+"Seconds",2);case e:return h(_+"Milliseconds",3);default:return this.clone()}},l.endOf=function(t){return this.startOf(t,!1)},l.$set=function(s,o){var d,c=M.p(s),f="set"+(this.$u?"UTC":""),l=(d={},d.day=f+"Date",d.date=f+"Date",d[u]=f+"Month",d[a]=f+"FullYear",d[r]=f+"Hours",d[n]=f+"Minutes",d[e]=f+"Seconds",d[t]=f+"Milliseconds",d)[c],h=c===i?this.$D+(o-this.$W):o;if(c===u||c===a){var m=this.clone().set("date",1);m.$d[l](h),m.init(),this.$d=m.set("date",Math.min(this.$D,m.daysInMonth())).toDate()}else l&&this.$d[l](h);return this.init(),this},l.set=function(t,e){return this.clone().$set(t,e)},l.get=function(t){return this[M.p(t)]()},l.add=function(t,o){var d,c=this;t=Number(t);var f=M.p(o),l=function(e){var n=g(c);return M.w(n.date(n.date()+Math.round(e*t)),c)};if(f===u)return this.set(u,this.$M+t);if(f===a)return this.set(a,this.$y+t);if(f===i)return l(1);if(f===s)return l(7);var h=(d={},d[n]=6e4,d[r]=36e5,d[e]=1e3,d)[f]||1,m=this.$d.getTime()+t*h;return M.w(m,this)},l.subtract=function(t,e){return this.add(-1*t,e)},l.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=M.z(this),i=this.$locale(),s=this.$H,u=this.$m,o=this.$M,a=i.weekdays,d=i.months,f=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},l=function(t){return M.s(s%12||12,t,"0")},h=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:M.s(o+1,2,"0"),MMM:f(i.monthsShort,o,d,3),MMMM:d[o]||d(this,n),D:this.$D,DD:M.s(this.$D,2,"0"),d:String(this.$W),dd:f(i.weekdaysMin,this.$W,a,2),ddd:f(i.weekdaysShort,this.$W,a,3),dddd:a[this.$W],H:String(s),HH:M.s(s,2,"0"),h:l(1),hh:l(2),a:h(s,u,!0),A:h(s,u,!1),m:String(u),mm:M.s(u,2,"0"),s:String(this.$s),ss:M.s(this.$s,2,"0"),SSS:M.s(this.$ms,3,"0"),Z:r};return n.replace(c,(function(t,e){return e||m[t]||r.replace(":","")}))},l.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},l.diff=function(t,d,c){var f,l=M.p(d),h=g(t),m=6e4*(h.utcOffset()-this.utcOffset()),v=this-h,$=M.m(this,h);return $=(f={},f[a]=$/12,f[u]=$,f[o]=$/3,f[s]=(v-m)/6048e5,f.day=(v-m)/864e5,f[r]=v/36e5,f[n]=v/6e4,f[e]=v/1e3,f)[l]||v,c?$:M.a($)},l.daysInMonth=function(){return this.endOf(u).$D},l.$locale=function(){return v[this.$L]},l.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=_(t,e,!0);return r&&(n.$L=r),n},l.clone=function(){return M.w(this.$d,this)},l.toDate=function(){return new Date(this.valueOf())},l.toJSON=function(){return this.isValid()?this.toISOString():null},l.toISOString=function(){return this.$d.toISOString()},l.toString=function(){return this.$d.toUTCString()},f}();return g.prototype=y.prototype,g.extend=function(t,e){return t(e,y,g),g},g.locale=_,g.isDayjs=$,g.unix=function(t){return g(1e3*t)},g.en=v[m],g.Ls=v,g}()},195:function(t,e,n){t.exports=function(t){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t;var e={name:"ja",weekdays:"日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),weekdaysShort:"日_月_火_水_木_金_土".split("_"),weekdaysMin:"日_月_火_水_木_金_土".split("_"),months:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(t){return t+"日"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日 HH:mm",LLLL:"YYYY年M月D日 dddd HH:mm",l:"YYYY/MM/DD",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日(ddd) HH:mm"},meridiem:function(t){return t<12?"午前":"午後"},relativeTime:{future:"%s後",past:"%s前",s:"数秒",m:"1分",mm:"%d分",h:"1時間",hh:"%d時間",d:"1日",dd:"%d日",M:"1ヶ月",MM:"%dヶ月",y:"1年",yy:"%d年"}};return t.locale(e,null,!0),e}(n(194))},196:function(t,e,n){t.exports=function(){"use strict";return function(t,e,n){var r=e.prototype,o=r.format,d={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};n.en.formats=d,r.format=function(t){void 0===t&&(t="YYYY-MM-DDTHH:mm:ssZ");var e=this.$locale().formats,n=void 0===e?{}:e,r=t.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,e,r){var o=r&&r.toUpperCase();return e||n[r]||d[r]||n[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(t,e,n){return e||n.slice(1)}))}));return o.call(this,r)}}}()},197:function(t,e,n){"use strict";var r=n(193);n.n(r).a},198:function(t,e,n){(e=n(51)(!1)).push([t.i,".container{margin:0 auto;min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center}.title{font-family:Quicksand,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;font-weight:300;font-size:40px;color:#35495e;letter-spacing:1px}.subtitle{font-weight:300;font-size:12px;color:#526488;word-spacing:5px;padding-bottom:15px}.cdate{padding-top:50px}.cdate,.ctime{font-size:64px;color:#35495e;word-spacing:5px}.ctime{padding-top:20px}.doa{font-size:32px;color:#35495e}.doa,.footer{padding-top:50px}",""]),t.exports=e},199:function(t,e,n){"use strict";n.r(e);var r=n(194),o=n.n(r),d=(n(195),n(196));o.a.locale("ja"),o.a.extend(d);var c={head:{title:"無職時計"},components:{},data:function(){return{date:"",time:"",dateOfApproval:"未設定",tmpDateOfApproval:"",today:""}},mounted:function(){var t=this;this.updateTime(),this.getDateOfApproval(),window.setInterval((function(){t.updateTime()}),1e4),this.$root.$on("bv::modal::show",(function(e,n){"modal-doa"==n&&(t.today=new Date)}))},methods:{dateOfApprovalFormat:function(t){return o()().isSame(t,"day")?t.format("M月D日(ddd)　本日認定日"):t.format("M月D日(ddd)")},getDateOfApproval:function(){var t=window.localStorage.getItem("dateOfApproval"),e=o()(t),n=!1;if(null!=t){for(;o()().isAfter(e,"day");)e=e.add(28,"day"),n=!0;if(n){var r=e.toISOString();window.localStorage.setItem("dateOfApproval",r)}this.dateOfApproval=this.dateOfApprovalFormat(e)}else this.dateOfApproval="未設定"},calendarOk:function(){var t=o()(this.tmpDateOfApproval),e=t.toISOString();window.localStorage.setItem("dateOfApproval",e),this.dateOfApproval=this.dateOfApprovalFormat(t)},updateTime:function(){var t=o()();this.date=this.getNowDate(t),this.time=this.getNowPoorlyTime(t)},getNowDate:function(t){return t.format("LL dddd")},getNowPoorlyTime:function(t){var e=t.minute();return 0==e?t.format("ちょうどH時"):e<10?t.format("だいたいH時"):e<20?t.format("H時すぎ"):e<25?t.format("もうすぐH時半"):e<35?t.format("H時半"):e<50?t.format("H時半すぎ"):t.add(1,"hour").format("もうすぐH時")}}},f=(n(197),n(47)),component=Object(f.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",[n("h1",{staticClass:"title"},[t._v("\n      無職時計\n    ")]),t._v(" "),n("h2",{staticClass:"subtitle"},[t._v("\n      Clock for unemployed\n    ")]),t._v(" "),n("h2",{staticClass:"cdate"},[t._v("\n      "+t._s(t.date)+"\n    ")]),t._v(" "),n("h2",{staticClass:"ctime"},[t._v("\n      "+t._s(t.time)+"\n    ")]),t._v(" "),n("div",{staticClass:"doa"},[t._v("\n      次回認定日："+t._s(t.dateOfApproval)+"\n      \n      "),n("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-doa",modifiers:{"modal-doa":!0}}]},[t._v("設定")]),t._v(" "),n("b-modal",{attrs:{id:"modal-doa",title:"認定日の設定"},on:{ok:t.calendarOk}},[n("p",[t._v("次回の認定日を選択してください。")]),t._v(" "),n("div",{staticStyle:{"text-align":"center"}},[n("b-calendar",{attrs:{min:t.today,locale:"ja"},model:{value:t.tmpDateOfApproval,callback:function(e){t.tmpDateOfApproval=e},expression:"tmpDateOfApproval"}})],1)])],1),t._v(" "),t._m(0)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footer"},[e("p",[this._v("\n      by "),e("a",{attrs:{href:"https://twitter.com/103yen"}},[this._v("@103yen")])])])}],!1,null,null,null);e.default=component.exports}}]);