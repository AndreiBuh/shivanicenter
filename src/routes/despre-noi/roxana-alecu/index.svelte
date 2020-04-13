<script>
  import { fade, fly } from "svelte/transition";
  import TestimonialList from "../../../components/About/TestimonialList.svelte";

  let testimonials = [
    {
      name: "Corina Preoteasa",
      jobTitle: "Jurnalist",
      text:
        "O persoană profundă și cu o bună intuiție asupra naturii umane, Roxana are o adevărată vocație pentru această profesie.",
      imageUrl: "testimonial-corina"
    },
    {
      name: "Răzvan Brătianu",
      jobTitle: "Consilier parlamentar",
      text:
        "O recomand cu căldură, deschiderea și dedicarea ei pentru această profesie vă va deschide noi perspective în a vedea lumea reală, o lume imperfectă, dar frumoasă.",
      imageUrl: "testimonial-razvan"
    },
    {
      name: "Alina Tăriceanu",
      jobTitle: "Lector universitar doctor",
      text:
        "Inteligența și răbdarea o recomanda ca specialist, iar abilitatea ei de a câștiga repede incerederea celorlalți face ca experiența terapeutica sa fie una excepțională.",
      imageUrl: "testimonial-alina"
    },
    {
      name: "Vlad Șovărel",
      jobTitle: "Indolog și sanskritolog",
      text:
        "Înzestrată cu pasiune, răbdare și determinare, am convingerea unor rezultate pe măsura efortului depus în a implementa tehnicile din practicile meditative indiene în cadrul terapiilor psihologice occidentale",
      imageUrl: "testimonial-vlad"
    }
  ];
</script>

<style>
  .card {
    background-color: #222736;
    border-radius: 10px;
    box-shadow: -0.5rem 0 0.5rem #222736;
    transition: 0.4s ease-out;
  }
</style>

<svelte:head>
  <title>Psiholog Roxana Alecu</title>
</svelte:head>

<div class="container">
  <div class="card p-2 p-md-5 mt-3">
    <h2
      class="service-title my-4 pt-md-0 text-center"
      in:fly={{ x: -200, duration: 2000 }}>
      Psiholog Roxana Alecu
      <span class="text-elegant font-weight-bold">.</span>
    </h2>
    <div class="text-center" in:fade={{ duration: 2000 }}>
      <img
        src="images/people/shivani.jpg"
        alt="psiholog roxana alecu"
        class="img-top img-fluid rounded" />
    </div>
    <div class="p-2">
      <h1 class="text-center my-4">
        <span class="text-elegant font-weight-bold signature">Namaste,</span>
      </h1>
      <p class="paragraph-text">
        Încă din copilărie m-am intrebat cine sunt eu. Am crezut de foarte multe
        ori că mi-am gasit raspunsul la această intrebare, dar fix atunci, eram
        și mai departe de el.
      </p>
      <p class="paragraph-text">
        Timpul, oamenii, evenimentele, gândurile și acțiunile mi-au revelat
        mereu ceva nou despre mine. Acum mă prezint în fața voastră mai întâi ca
        ființă umană, cu emoții, cu probleme, cu o mulțime de întrebări, dar
        mereu cu putere de a depăși momentele grele ce îmi provoacă suferință.
      </p>
      <div class="row">
        <div class="col-lg-7">
          <p class="paragraph-text">
            În toți acești ani, am învățat să fiu în contact cu propriile mele
            gânduri și emoții, să îmi ascult corpul, să accept existența
            suferinței în lume și să merg mai departe atunci când nu pot schimba
            nimic. Deși toate acestea le-am realizat datorită mie și dorinței de
            a evolua pe plan personal, ele nu ar fi fost posibile fără
            experiențele avute până în prezent.
          </p>
          <p class="paragraph-text">
            Fiind mereu interesată de cum funcționeaza mintea umana, am ales sa
            studiez la Facultatea de Psihologie și Științele Educației, din
            cadrul Universității din București. De aici am primit baza de care
            aveam nevoie pentru următorii mei ani de studiu în domeniul
            psihologiei.
          </p>
          <p class="paragraph-text">
            După obținerea licenței în psihologie, mi-a fost publicată lucrarea
            cu titlul “Influența diferitelor tehnici de meditație asupra
            stresului ocupțional” în cartea “Mindfulness și optimizarea
            comportamentului profesional” a Editurii SPER.
          </p>
          <p class="paragraph-text">
            Simțind că pentru o înțelegere mai profundă a naturii umane e
            necesar să privesc totul ca pe un întreg, mi-am dorit să înțeleg mai
            bine interacțiunea dintre minte, corp și spirit.
          </p>
        </div>
        <div class="col-lg-5 col-12">
          <img
            src="/images/people/carte-roxana-alecu.jpg"
            alt="carte roxana alecu"
            class="img-middle img-fluid rounded" />
        </div>
      </div>
      <p class="paragraph-text mt-3">
        Astfel, în călătoria mea m-am oprit timp de doi ani la Masterul de
        Studii Religioase - Texte și Tradiții al Facultății de Limbi și
        Literaturi Străine. Aici am avut oportunitatea de a studia și înțelege
        sistemul de funcționare a diferitelor culturi, religii și tradiții,
        precum creștinismul, iudaismul, islamul, taoismul, shamanismul,
        hinduismul, budismul etc.
      </p>
      <p class="paragraph-text">
        Ceea ce nu v-am spus până acum este că am fost mereu atrasă de spațiul
        oriental, în special de studiul culturii indiene. A fost o plăcere să
        pot descoperi tainele și sensul profund din spatele cuvintelor
        sanskrite.
      </p>
      <p class="paragraph-text">
        Pe parcursul acestui master m-am bucurat să descopăr o corespondență
        deosebită între învățăturile budiste și psihologia modernă. În paralel
        cu explorarea ființei umane din perspectiva spirituală, mi-am continuat
        pregătirea profesională printr-un program de formare complementară în
        Psihoterapie Experiențială și a Unificării (P.E.U.) la Institutul
        Societății de Psihoterapie Experiențială Română.
      </p>
      <p class="paragraph-text">
        Astfel am dobandit un Certificat de consiliere psihologică - evaluarea
        și consilierea experiențială a copilului, adultului, cuplului și a
        familiei, precum și Avizul de liberă practică în consiliere psihologică,
        eliberat de Colegiul Psihologilor din România.
      </p>
      <p class="paragraph-text">
        Destinația finală nu îmi este cunoscută, însă știu că nu o să ma opresc
        niciodată din a învăța, de aceea continui să citesc, să merg la
        conferințe, workshop-uri, la dezvoltare personală și să învăț de la voi
        în fiecare zi.
      </p>
      <p class="paragraph-text">
        În timpul facultății mi-a venit ideea de a concepe un centru de
        psihologie holistică care să ofere șansa clientului de a-și începe
        propria călătorie spre autodescoperire, prin regăsirea înțelepciunii
        interioare, conștientizarea sinelui și aflarea scopului în viață. Mi-a
        placut mereu să privesc în jurul meu, să înțeleg cum funcționează
        realitatea în care mă aflu.
      </p>
      <p class="paragraph-text">
        Acum visul meu a devenit realitate și îl trăiesc împreună cu voi, atunci
        când văd oameni mai fericiți, bucurându-se de viața pe care o au,
        capabili să găsească singuri cele mai bune soluții pentru problemele
        lor.
      </p>

      <div class="m-3 text-right">
        <p class="paragraph-text">Cu iubire și recunoștință,</p>
        <p class="signature">Roxana Alecu</p>
      </div>
      <hr class="style-hr" />
      <TestimonialList {testimonials} />
      <hr class="style-hr" />
    </div>
  </div>
</div>
