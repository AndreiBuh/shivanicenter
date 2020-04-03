<script>
  import { fade, fly } from "svelte/transition";
  import TestimonialList from "../../../components/About/TestimonialList.svelte";

  let testimonials = [
    {
      name: "Corina Preoteasa",
      jobTitle: "Jurnalist",
      text:
        "O persoană profundă și cu o bună intuiție asupra naturii umane, Roxana are o adevărată vocație pentru această profesie.",
      imageUrl: "testimonial-corina.jpg"
    },
    {
      name: "Răzvan Brătianu",
      jobTitle: "Consilier parlamentar",
      text:
        "O recomand cu căldură, deschiderea și dedicarea ei pentru această profesie vă va deschide noi perspective în a vedea lumea reală, o lume imperfectă, dar frumoasă.",
      imageUrl: "testimonial-razvan.jpg"
    },
    {
      name: "Alina Tăriceanu",
      jobTitle: "Lector universitar doctor",
      text:
        "Inteligenta și răbdarea o recomanda ca specialist, iar abilitatea ei de a câștiga repede incerederea celorlalți face ca experiența terapeutica sa fie una excepțională.",
      imageUrl: "testimonial-alina.jpg"
    },
    {
      name: "Vlad Șovărel",
      jobTitle: "Indolog și sanskritolog",
      text:
        "Înzestrată cu pasiune, răbdare și determinare, am convingerea unor rezultate pe măsura efortului depus în a implementa tehnicile din practicile meditative indiene în cadrul terapiilor psihologice occidentale",
      imageUrl: "testimonial-vlad.jpg"
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
        src="shivani.jpg"
        alt="imagine psiholog roxana alecu"
        class="img-top img-fluid" />
    </div>
    <div class="p-2">
      <h1 class="text-center my-4">
        <span class="text-elegant font-weight-bold signature">Namaste,</span>
      </h1>
      <p class="paragraph-text">
        Inca din copilarie m-am intrebat cine sunt eu. Am crezut de foarte multe
        ori ca mi-am gasit raspunsul la aceasta intrebare, dar fix atunci, eram
        si mai departe de el.
      </p>
      <p class="paragraph-text">
        Timpul, oamenii, evenimentele, gandurile si actiunile mele mi-au revelat
        mereu ceva nou despre mine. Acum, ma prezint in fata voastra mai intai
        ca fiinta umana, cu emotii, cu probleme, cu o multime de intrebari, dar
        mereu cu putere de a depasi momentele grele ce imi provoaca suferinta.
      </p>
      <p class="paragraph-text">
        Am invatat in toti acesti ani sa fiu in contact cu propriile mele
        ganduri si emotii, sa imi ascult corpul, sa accept existenta suferintei
        in lume si sa merg mai departe atunci cand nu pot schimba nimic. Desi
        toate acestea le-am realizat datorita mie si dorintei de a evolua pe
        plan personal, ele nu ar fi fost posibile fara experientele avute pana
        acum.
      </p>
      <p class="paragraph-text">
        Fiind mereu interesata de cum functioneaza mintea umana, am ales sa fac
        Facultatea de Psihologie si Stiintele Educatiei, din cadrul
        Universitatii din Bucuresti. De aici am primit baza de care aveam nevoie
        pentru urmatorii mei ani de studiu in domeniul psihlogiei.
      </p>
      <p class="paragraph-text">
        Dupa obtinerea licentei in psihologie, mi-a fost publicata lucrarea cu
        titlul “Influenta diferitelor tehnici de meditatie asupra stresului
        ocuptional” in cartea “Mindfulness si optimizarea comportamentului
        professional” a Editurii SPER.
      </p>
      <p class="paragraph-text">
        Simtind ca pentru o intelegere mai profunda a naturii umane e necesar sa
        privesc totul ca intreg, mi-am dorit sa inteleg mai bine interactiunea
        dintre minte, corp si spirt. Astfel in calatoria mea m-am oprit timp de
        doi ani la Masterul de Studii Religioase - Texte si Traditii al
        Facultatii de Limbi si Literaturi Straine. Aici am avut oportunitatea de
        a studia si intelege sistemul de functionare a diferitelor culturi,
        religii si traditii, precum crestinismul, iudaismul, islamul, taoismul,
        shamanismul, hinduismul, budismul, etc.
      </p>
      <p class="paragraph-text">
        Ceea ce nu v-am spus pana acum este ca am fost mereu atrasa de spatiul
        oriental, in special de studiul culturii indiene. A fost o placere sa
        pot descoperii tainele si sensul profund din spatele cuvintelor
        sanskrite.
      </p>
      <p class="paragraph-text">
        Pe parcursul acestui master m-am bucurat sa descopar o corespondenta
        deosebita intre invataturile budiste si psihologia moderna. In paralel
        cu explorarea fiintei umane din perspectiva spirituala, mi-am continuat
        pregatirea profesionala printr-un program de formare complementara in
        Psihoterapie Experientiala si a Unificarii (P.E.U.) la Institutul
        Societatii de Psihoterapie Experientiala Romana.
      </p>
      <p class="paragraph-text">
        Astfel am dobandit un Certificat consiliere psihologică - evaluarea și
        consilierea experiențială a copilului, adultului, cuplului și familiei
        si Avizul de liberă practică în consiliere psihologică, eliberat de
        Colegiul Psihologilor din România.
      </p>
      <p class="paragraph-text">
        Destinatia finala nu imi este cunoscuta, insa stiu ca nu o sa ma opresc
        niciodata din a invata, de aceea continui sa citesc, sa merg la
        conferinte, workshop-uri, la dezvoltare personala si sa invat de la voi
        in fiecare zi.
      </p>
      <p class="paragraph-text">
        In timpul facultatii mi-a venit ideea de a un centru de psihologie
        holistica care sa ofere sansa clientului de a-si incepe propria
        calatorie spre autodescoperire, prin regasirea intelepciunii interioare,
        constientizarea sinelui si aflarea scopului in viata. Mi-a placut mereu
        sa privesc in jurul meu, sa inteleg cum functioneaza realitatea in care
        ma aflu.
      </p>
      <p class="paragraph-text">
        Acum visul meu a devenit realitate si il traiesc impreuna cu voi, atunci
        cand vad oameni mai fericiti, bucurandu-se de viata pe care o au,
        capabili sa gaseasca singuri cele mai bune solutii pentru problemele
        lor.
      </p>

      <div class="m-3 text-right">
        <p class="paragraph-text">Cu iubire si recunostinta,</p>
        <p class="signature">Roxana Alecu</p>
      </div>
      <hr class="style-hr" />
      <TestimonialList {testimonials} />
      <hr class="style-hr" />
    </div>
  </div>
</div>
