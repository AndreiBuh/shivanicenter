// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
  {
    title: "10 greseli in educatia unei fete care ii pot strica viitorul",
    slug: "10-greseli-ineducatia-unei-fete-care-ii-pot-strica-viitorul",
    html: `
    <p>
    Baza tiparelor de gândire și de comportament ale oamenilor se pune în copilărie. De aceea,pentru ca un copil să fie echilibrat și fericit la maturitate, pentru a fi capabil să ia decizii bune, este
    nevoie ca părinții și educatorii să aibă mare grijă ce credințe și ce tipare îi transmit, conștient sau inconștient.</p>
    <p>Copilaria reprezinta baza pe care se construiesc tiparele de gandire, tipul de comportament si viziunea despre lumea inconjuratoare.  Este foarte important ca aceasta perioada
     sa ii ofere fetei tale increderea necesara in propriile forte, pentru a reusi sa ia cele mai bune decizii in viitor.</p>
    <p>Pentru ca un copil sa creasca echilibrat, fericit si sa ajunga implinit la maturitate, este nevoie ca parintii si educatorii sa aiba mare grija la ce modele, credinte si tipare
     ii transmit, la nivel constient si inconstient. Destinul ei depinde de felul in care a crescut, daca a trait in iubire, intelegere, sustinere, cu limite bine trasate.</p>
     <h5>Cunoscutul psiholog rus Mihail Labkovskii prezintă 10 greșeli în educația unei fete care îi pot distruge viața</h5>
     <h6>GREȘEALA NR. 1:</h6>
     <p>Cea mai gravă greșeală pe care o fac multe mame și bunici este că își programează fiica sau nepoata pentru un set obligatoriu de calități și abilități pe care trebuie să le aibă, cum arfi:</p>
     <div>„Trebuie să fii drăguță”</div>
     <div>„Trebuie să fii blândă”</div>
     <div>„Trebuie să te faci plăcută”</div>
     <div>„Trebuie să înveți să comunici”</div>
     <div>„Trebuie…”</div>
     <p>Desigur, nu este nimic rău în a învăța să comunici, ci în faptul că fetița își formează credințapăguboasă că nu este o femeie valoroasă decât dacă îndeplinește întregul set de criterii.</p>
     <h7>Cum ai putea proceda în schimb? Psihologul Mihail Labkovskii spune că alternativa mai eficientă și care nu lasă nicio traumă este propriul exemplu:</h7>
     <div>„Hai să gătim împreună o ciorbă gustoasă”</div>
     <div>„Hai să alegem împreună o tunsoare care să ți se potrivească”</div>
     <div>„Hai să facem împreună curățenie”</div>
     <p>Văzând cum faci tu lucurile și cum te bucuri făcându-le, și fiica ta va dori să învețe să le facă. Și dimpotrivă, dacă urăști să faci un anumit lucru, oricât de des
      i-ai spune fetiței tale săînvețe și ea să facă asta, în mod inconștient ea va respinge procesul. În realitate, mai devreme sau mai târziu, fiica ta va învăța să facă tot ce
       va avea nevoie să facă. Asta se va întâmpla atunci când va avea nevoie să facă acele lucruri.</p>
    
     `,
    category: "Familie",
    author: "Psiholog Roxana Alecu",
    date: "06. FEB 2020",
    avatar: "shivani3.png"
  },

  {
    title: "Semne ale epuizarii emotionale pe care nu ar trebui sa le ignori",
    slug: "Semne-ale-epuizarii-emotionale-pe-care-nu-ar-trebui-sa-le-ignori",
    html: `
			<h2>Step one</h2>
			<p>Create a new project, using <a href='https://github.com/Rich-Harris/degit'>degit</a>:</p>	
		`,
    category: "Relatie de cuplu",
    author: "Psiholog Alexandra Tatu",
    date: "22. DEC 2019",
    avatar: "alexandra2.jpg"
  },

  {
    title:
      "6 moduri de a-ti pastra calmul cand ai de-a face cu o persoana furioasa",
    slug:
      "6-moduri-de-a-ti-pastra-calmul-cand-ai-de-a-face-cu-o-persoana-furioasa",
    html: `
			<p>In war, the soldiers who build bridges, repair roads, clear minefields and conduct demolitions — all under combat conditions — are known as <em>sappers</em>.</p>
		`,
    category: "Meditatie/Yoga",
    author: "Psiholog Roxana Alecu",
    date: "03. IAN 2020",
    avatar: "shivani3.png"
  },

  {
    title: "10 afaceri de succes conduse de femei",
    slug: "10-afaceri-de-succes-conduse-de-femei",
    html: `
			<p><a href='https://github.com/zeit/next.js'>Next.js</a> is a React framework from <a href='https://zeit.co'>Zeit</a>, and is the inspiration for Sapper.
			 There are a few notable differences, however:</p>
		`,
    category: "Sexualitate",
    author: "Psiholog Alexandra Tatu",
    date: "05. IAN 2020",
    avatar: "alexandra2.jpg"
  },

  {
    title: "Ce te impiedica sa ai relatia visurilor tale?",
    slug: "ce-te-impiedica-sa-ai-relatia-visurilor-tale",
    html: `
			<p>We're so glad you asked! Come on over to the <a href='https://github.com/sveltejs/svelte'>Svelte</a> and <a href='https://github.com/sveltejs/sapper'>Sapper</a> repos,
			 and join us in the <a href='https://svelte.dev/chat'>Discord chatroom</a>. Everyone is welcome, especially you!</p>
		`,
    category: "Meditatie/Yoga",
    author: "Psiholog Roxana Alecu",
    date: "08. IAN 2020",
    avatar: "shivani3.png"
  }
];

posts.forEach(post => {
  post.html = post.html.replace(/^\t{3}/gm, "");
});

export default posts;
