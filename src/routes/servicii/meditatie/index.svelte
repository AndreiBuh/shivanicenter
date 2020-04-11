<script>
  import { fade, fly } from "svelte/transition";
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
  <title>Meditatie</title>
</svelte:head>

<div class="container">
  <div class="card p-2 p-md-5 mt-3">
    <h2
      class="service-title mb-4 pt-md-0 text-center"
      in:fly={{ x: -200, duration: 2000 }}>
      Meditație
      <span class="text-elegant font-weight-bold">.</span>
    </h2>
    <div class="text-center" in:fade={{ duration: 2000 }}>
      <img
        src="images/services/meditatie1.jpg"
        alt="mediatie"
        class="img-top img-fluid rounded" />
    </div>
    <div class="p-2 mt-3">
      <p class="paragraph-text">
        În zilele noastre,
        <span class="text-elegant font-weight-bold">mindfulness</span>
        și
        <span class="text-elegant font-weight-bold">meditația</span>
        sunt adesea folosite pentru a desemna același lucru, ceea ce poate fi
        confuz.
      </p>
      <p class="paragraph-text">
        Meditația a apărut în India cu foarte mult timp în urmă, iar o dovadă
        scrisă a oricărei forme de meditație a fost găsită pentru prima dată în
        textele Vedice în jurul anului 1500 î.e.n.
      </p>
      <p class="paragraph-text">
        Tradiția, cunoștințele și învățăturile erau transmise prin cuvânt de la
        guru către discipol. Astfel, majoritatea cărților hinduse vorbesc despre
        meditație în diferite forme. Fiind o tradiție transmisă pe cale orală,
        devine foarte dificil să spunem cât de veche este meditația. În jurul
        secolelor VI-V î.Hr., alte forme de meditație s-au dezvoltat în China
        taoistă și India budistă.
      </p>
      <p class="paragraph-text">
        În timp meditația a devenit mai răspândită în toată lumea.
      </p>
      <div class="row">
        <div class="col-md-7 col-xs-12">
          <p class="paragraph-text">
            Pe de altă parte, termenul "mindfulness" este o traducere a
            cuvântului din pali sati din tradiția budistă, ce se bazează pe
            tehnici de meditație Zen, Vipassanā și tibetană. Sati reprezintă
            starea de continuă reamintire a momentului prezent, echivalentă
            stării de “trezvie” din isihasm.
          </p>
          <p class="paragraph-text">
            Prin acest proces psihologic conștient și individual, își orientează
            întreaga atenție pe gândurile, sentimentele, experiențele interioare
            și exterioare care se petrec în prezent.
          </p>
          <p class="paragraph-text">
            Mindfulness poate fi practicat în orice moment, oriunde ne-am afla,
            oricine am fi și orice am face, arătandu-ne și angajându-ne pe
            deplin aici și acum.
          </p>
          <p class="paragraph-text">
            În acest moment persoana se poate elibera de trecut și viitor, de
            judecata greșită, de scenariile bune sau reale ale minții și poate
            fi total prezentă fără distragere. Popularitatea mindfulness-ului în
            vest a fost inițiată cu ajutorul lui Jon Kabat-Zinn.
          </p>
          <p class="paragraph-text">
            El spune despre mindfulness că este conștiința care apare atunci
            când acordăm atenție fără judecată momentului prezent.
          </p>

        </div>
        <div class="col-md-5 col-xs-12">
          <img
            src="images/services/meditatie2.jpg"
            alt="mediatie"
            class="img-middle img-fluid rounded" />
        </div>
      </div>
      <p class="paragraph-text">
        Permite accesul la aspectele de bază ale propriilor noastre minți și
        corpuri de care depinde chiar sănătatea noastră. Când mintea ta se
        clarifică și se deschide, inima ta o reflectă.
      </p>
      <p class="paragraph-text">
        Mindfulness ajută la eliberarea substanțelor chimice „fericite” în
        creier, scade tensiunea arterială, îmbunătățește digestia și relaxează
        tensiunea cauzată de durere. Este simplu de practicat și are efecte
        minunate. Atunci când oferim atenție, schimbarea devine posibilă.
      </p>
      <p class="paragraph-text">
        Mindfulness și meditația sunt reflecții asemănătoare și au anumite
        corespondențe: mindfulness susține și îmbogățește meditația, în timp ce
        meditația nutrește și extinde mindfulness-ul.
      </p>
      <p class="paragraph-text">
        În cazul în care conștiența poate fi aplicată oricărei situații pe
        parcursul zilei, meditația este practicată pentru o anumită perioadă de
        timp. Mindfulness este conștientizarea a „ceva”, în timp ce meditația
        este conștientizarea „nimicului”, a vacuității așa cum o numesc
        budhiștii.
      </p>
      <p class="paragraph-text">
        Există multe forme de meditație. Unele au scopul de a dezvolta o minte
        clară și concentrată, cunoscută sub numele de meditații „Clear Mind”.
        Altele vizează dezvoltarea unor stări altruiste, cum ar fi bunătatea,
        iubirea, compasiunea sau iertarea, cunoscute sub numele de meditații
        „Open heart”.
      </p>
      <p class="paragraph-text">
        Se poate folosi corpul ca mijloc de dezvoltare a conștientizării,
        practicând yoga, se poate folosi sunetul (din natura, boluri tibetane,
        muzică etc.), ori se poate cânta sau intona cuvinte sacre, respectiv
        mantre.
      </p>
      <div class="row">
        <div class="col-md-5 col-xs-12">
          <img
            src="images/services/meditatie3.jpg"
            alt="mediatie"
            class="img-middle img-fluid rounded" />
        </div>
        <div class="col-md-7 col-xs-12">
          <p class="paragraph-text">
            Mindfulness este o formă de meditație Clear Mind, în timpul căreia
            se acordă atenție ritmului natural al respirației în timpul șederii.
            În cele din urmă, metoda este pur și simplu o unealtă, nu este
            experiența în sine. Un ciocan poate ajuta la construirea unei case,
            dar nu este însăși casa.
          </p>
          <p class="paragraph-text">
            Practica de meditație nu este un scop în sine. Ne putem rătăci în
            gânduri și vom face tot felul de alte lucruri, dar liniștea va fi
            întotdeauna acolo. Este precum o umbră ce e cu noi pe tot parcursul
            vieții, ca un vechi prieten la care apelăm atunci când avem nevoie
            de direcție, inspirație și claritate.
          </p>

        </div>
      </div>

      <p class="paragraph-text mt-3">
        Hai să descoperim împreună ce este potrivit penru tine și să ne bucurăm
        de această călătorie!
      </p>
      <p class="paragraph-text">
        Nu există nici o tehnică corectă sau greșită de practică, fiecare alege
        ce funcționează mai bine pentru el. Important este să nu renunțăm atunci
        când în demersul nostru apar capcanele minții.
      </p>
    </div>
  </div>
</div>
