const lessons = {
  numbers:{title:"الأعداد والعمليات",intro:"تذكّر أن ترتيب خطوات الحل يساعدك على الوصول إلى إجابة صحيحة.",learn:`<h3>كيف نرتّب العمليات الحسابية؟</h3><p>عندما يحتوي التعبير على أكثر من عملية، نبدأ بما داخل الأقواس، ثم الضرب والقسمة، ثم الجمع والطرح.</p><div class="rule-box"><b>تذكّر:</b> إذا تساوت أولوية عمليتين، نحلّ من اليمين إلى اليسار في كتابة المسائل العربية أو حسب ترتيب التعبير الرياضي المعتاد من اليسار إلى اليمين.</div><div class="example-box"><b>مثال محلول</b><p>في التعبير  ٣ + ٢ × ٤</p><p>١) نبدأ بالضرب: ٢ × ٤ = ٨</p><p>٢) نجمع: ٣ + ٨ = ١١</p><p><strong>الناتج = ١١</strong></p></div>`,practice:{q:"ما ناتج ٥ + ٣ × ٢ ؟",opts:["١٦","١١","١٣","١٠"],correct:1,why:"نحسب الضرب أولاً: ٣ × ٢ = ٦، ثم ٥ + ٦ = ١١."},quiz:{q:"ما ناتج (٦ + ٢) × ٣ ؟",opts:["١٤","٢٤","٢٦","١١"],correct:1,why:"نحسب ما داخل القوس أولاً: ٦ + ٢ = ٨، ثم ٨ × ٣ = ٢٤."}},
  fractions:{title:"الكسور والأعداد العشرية",intro:"الكسور طريقة لتمثيل جزء من كلّ، ويمكننا رؤيتها وتبسيطها.",learn:`<h3>ما معنى الكسر؟</h3><p>يتكوّن الكسر من بسط في الأعلى ومقام في الأسفل. المقام يبيّن عدد الأجزاء المتساوية، والبسط يبيّن عدد الأجزاء التي نأخذها.</p><div class="rule-box"><b>مثال بصري:</b> إذا قُسّمت بيتزا إلى ٤ أجزاء متساوية وأخذنا جزءاً واحداً، فقد أخذنا ربع البيتزا.</div><div class="fraction-visual"><span class="piece filled"></span><span class="piece"></span><span class="piece"></span><span class="piece"></span></div><p>الكسر الذي يمثّل الجزء المأخوذ هو ١⁄٤.</p>`,practice:{q:"أي كسر يمثّل ثلاثة أجزاء من خمسة أجزاء متساوية؟",opts:["٥⁄٣","٣⁄٥","٢⁄٥","٣⁄٢"],correct:1,why:"البسط هو عدد الأجزاء المأخوذة (٣)، والمقام هو عدد الأجزاء الكلي (٥)."},quiz:{q:"أيّ كسر يكافئ ١⁄٢؟",opts:["٢⁄٣","٢⁄٤","٣⁄٤","١⁄٣"],correct:1,why:"نضرب البسط والمقام في ٢ فنحصل على ٢⁄٤."}},
  geometry:{title:"الهندسة والقياس",intro:"اكتشف خصائص الأشكال، وتعلّم كيف تقيس المحيط والمساحة.",learn:`<h3>الفرق بين المحيط والمساحة</h3><p>المحيط هو طول الحدّ الخارجي للشكل، أمّا المساحة فهي مقدار السطح الذي يغطيه الشكل.</p><div class="rule-box"><b>محيط المستطيل:</b> نجمع أطوال أضلاعه الأربعة. <br><b>مساحة المستطيل:</b> الطول × العرض.</div><div class="example-box"><b>مثال محلول</b><p>مستطيل طوله ٦ سم وعرضه ٣ سم.</p><p>المحيط = ٦ + ٣ + ٦ + ٣ = ١٨ سم.</p><p>المساحة = ٦ × ٣ = ١٨ سم².</p></div>`,practice:{q:"مستطيل طوله ٧ سم وعرضه ٢ سم. ما مساحته؟",opts:["٩ سم²","١٤ سم²","١٨ سم²","١٤ سم"],correct:1,why:"المساحة = الطول × العرض = ٧ × ٢ = ١٤ سم²."},quiz:{q:"مثلث زواياه ٦٠° و٦٠°. ما قياس الزاوية الثالثة؟",opts:["٦٠°","٩٠°","١٢٠°","٣٠°"],correct:0,why:"مجموع زوايا المثلث ١٨٠°، إذن ١٨٠° − ٦٠° − ٦٠° = ٦٠°."}},
  data:{title:"الإحصاء والتمثيلات البيانية",intro:"نستخدم الجداول والرسوم البيانية لتنظيم البيانات وفهمها بسرعة.",learn:`<h3>كيف نقرأ التمثيل بالأعمدة؟</h3><p>يمثّل كل عمود فئةً من البيانات، ويشير ارتفاعه إلى عدد العناصر أو قيمتها. نقرأ عنوان الرسم ومقياس المحور قبل المقارنة.</p><div class="rule-box"><b>خطوات القراءة:</b> اقرأ العنوان، حدّد الفئات، تحقّق من التدريج، ثم قارن ارتفاع الأعمدة.</div><div class="example-box"><b>مثال</b><p>إذا قرأ ٨ طلاب كتاباً يوم الاثنين و١٢ طالباً يوم الثلاثاء، فإن عدد الطلاب يوم الثلاثاء يزيد ٤ طلاب.</p></div>`,practice:{q:"كان عدد الكتب المقروءة ٦ يوم الأحد و١٠ يوم الاثنين. كم يزيد يوم الاثنين؟",opts:["٤ كتب","٦ كتب","١٠ كتب","١٦ كتاباً"],correct:0,why:"الفرق = ١٠ − ٦ = ٤ كتب."},quiz:{q:"ما أفضل تمثيل لمقارنة عدد الطلاب في ثلاثة صفوف؟",opts:["تمثيل بالأعمدة","نص طويل فقط","صورة زخرفية","لا يمكن تمثيلها"],correct:0,why:"التمثيل بالأعمدة مناسب لمقارنة قيم فئات مختلفة."}}
};
const topicNames={numbers:"الأعداد والعمليات الحسابية",fractions:"الكسور والأعداد العشرية",geometry:"الهندسة والقياس",data:"الإحصاء والتمثيلات البيانية"};
let points=Number(localStorage.getItem("mathPortalPoints")||0), currentKey="numbers", currentGrade=4, answered=0;
const $=id=>document.getElementById(id);
function updatePoints(){ $("points").textContent=points; localStorage.setItem("mathPortalPoints",String(points)); }
function showHome(){ $("homeView").classList.remove("hidden");$("lessonView").classList.add("hidden");$("topicView").classList.add("hidden");window.scrollTo({top:0,behavior:"smooth"});}
function selectGrade(grade){currentGrade=grade;const keys=Object.keys(lessons);$("homeView").classList.add("hidden");$("lessonView").classList.add("hidden");$("topicView").classList.remove("hidden");$("topicTitle").textContent="الصف "+["","الأول","الثاني","الثالث","الرابع","الخامس","السادس"][grade];$("topicLessons").innerHTML=keys.map((k,i)=>`<button class="topic-lesson-btn" onclick="openLesson('${k}')"><span>📘 <b>${lessons[k].title}</b><small>الصف ${grade} • شرح وتدريب وتحدٍّ</small></span><strong>←</strong></button>`).join("");window.scrollTo({top:0,behavior:"smooth"});}
function openTopic(key){currentGrade=0;currentKey=key;$("homeView").classList.add("hidden");$("lessonView").classList.add("hidden");$("topicView").classList.remove("hidden");$("topicTitle").textContent=topicNames[key];$("topicLessons").innerHTML=`<button class="topic-lesson-btn" onclick="openLesson('${key}')"><span>📘 <b>${lessons[key].title} — مدخل أساسي</b><small>شرح بصري وأمثلة وتدريبات تفاعلية</small></span><strong>←</strong></button><button class="topic-lesson-btn" onclick="openLesson('${key}')"><span>✍️ <b>تدريب على المهارات</b><small>طبّق ما تعلّمته خطوة بخطوة</small></span><strong>←</strong></button>`;window.scrollTo({top:0,behavior:"smooth"});}
function openLesson(key){currentKey=key;const l=lessons[key];$("homeView").classList.add("hidden");$("topicView").classList.add("hidden");$("lessonView").classList.remove("hidden");$("lessonEyebrow").textContent=currentGrade?"الصف "+currentGrade+" • رحلتك التعليمية":"مسار التعلّم";$("lessonTitle").textContent=l.title;$("lessonIntro").textContent=l.intro;$("learnPanel").innerHTML=l.learn;$("practicePanel").innerHTML=questionMarkup(l.practice,"practice");$("quizPanel").innerHTML=questionMarkup(l.quiz,"quiz");setTab("learn",document.querySelector(".tab"));window.scrollTo({top:0,behavior:"smooth"});}
function questionMarkup(q,type){return `<h3>${type==="quiz"?"⚡ تحدّي سريع":"✍️ تدرّب بنفسك"}</h3><p>${q.q}</p><div class="answer-row">${q.opts.map((o,i)=>`<button class="answer-btn" onclick="checkAnswer('${type}',${i},this)">${o}</button>`).join("")}</div><div id="${type}Feedback" aria-live="polite"></div><div class="progress-track"><span id="${type}Progress"></span></div><small>اختر إجابة واحدة لتحصل على تغذية راجعة فورية.</small>`;}
function checkAnswer(type,index,button){const q=lessons[currentKey][type];const feedback=$(type+"Feedback");if(feedback.dataset.done==="1")return;feedback.dataset.done="1";if(index===q.correct){feedback.className="feedback correct";feedback.innerHTML="أحسنت! إجابة صحيحة 🎉<br>"+q.why;points+=type==="quiz"?15:10;updatePoints();$(""+type+"Progress").style.width="100%";}else{feedback.className="feedback wrong";feedback.innerHTML="محاولة جيدة، لنفكّر معاً 💡<br>"+q.why;const buttons=button.parentElement.querySelectorAll("button");buttons[q.correct].style.borderColor="#27ae85";buttons[q.correct].style.background="#e0f7eb";}button.parentElement.querySelectorAll("button").forEach(b=>b.disabled=true);}
function setTab(name,btn){["learn","practice","quiz"].forEach(k=>$(k+"Panel").classList.toggle("hidden",k!==name));document.querySelectorAll(".tab").forEach(b=>b.classList.remove("active"));if(btn)btn.classList.add("active");else document.querySelectorAll(".tab")[name==="learn"?0:name==="practice"?1:2].classList.add("active");}
function startQuiz(){const keys=Object.keys(lessons);const key=keys[Math.floor(Math.random()*keys.length)];openLesson(key);setTab("quiz",document.querySelectorAll(".tab")[2]);}
$("themeBtn").addEventListener("click",()=>{document.body.classList.toggle("dark");const dark=document.body.classList.contains("dark");$("themeBtn").textContent=dark?"☀️":"🌙";localStorage.setItem("mathPortalDark",dark?"1":"0");});
if(localStorage.getItem("mathPortalDark")==="1"){document.body.classList.add("dark");$("themeBtn").textContent="☀️";}
updatePoints();


// Navigation history: supports the visible back button, browser back, and Android browser back.
(function(){
  let navStack = [];
  const originalShowHome = window.showHome;
  const originalSelectGrade = window.selectGrade;
  const originalOpenTopic = window.openTopic;
  const originalOpenLesson = window.openLesson;
  function stateName(){ 
    if(!$("homeView").classList.contains("hidden")) return {view:"home"};
    if(!$("lessonView").classList.contains("hidden")) return {view:"lesson",key:currentKey,grade:currentGrade};
    if(!$("topicView").classList.contains("hidden")) return {view:"topic",key:currentKey,grade:currentGrade};
    return {view:"home"};
  }
  function remember(){ const s=stateName(); navStack.push(s); if(navStack.length>30) navStack.shift(); }
  function restore(s){
    if(!s || s.view==="home"){ originalShowHome(); return; }
    if(s.view==="lesson"){ currentGrade=s.grade||0; originalOpenLesson(s.key||"numbers"); return; }
    if(s.view==="topic"){ if(s.grade){originalSelectGrade(s.grade);}else{originalOpenTopic(s.key||"numbers");} return; }
    originalShowHome();
  }
  window.showHome = function(){ remember(); originalShowHome(); };
  window.selectGrade = function(g){ remember(); originalSelectGrade(g); };
  window.openTopic = function(k){ remember(); originalOpenTopic(k); };
  window.openLesson = function(k){ remember(); originalOpenLesson(k); };
  window.goBack = function(){
    if(navStack.length){ const prev=navStack.pop(); restore(prev); }
    else originalShowHome();
  };
  document.querySelectorAll(".back-btn").forEach(btn=>{
    btn.setAttribute("onclick","goBack()");
    btn.setAttribute("aria-label","الرجوع إلى الصفحة السابقة");
  });
  // Browser history entry allows Android/browser back gesture/button to return within the site first.
  history.replaceState({mathPortal:true,view:"home"},"","#home");
  history.pushState({mathPortal:true,view:"home"},"","#portal");
  window.addEventListener("popstate",function(){
    if(navStack.length){ const prev=navStack.pop(); restore(prev); }
    else originalShowHome();
    history.pushState({mathPortal:true,view:"portal"},"","#portal");
  });
})();
