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

  @media screen and (max-width: 768px) {
    .container {
      margin-top: 90px;
    }
  }
</style>

<svelte:head>
  <title>Workshop</title>
</svelte:head>

<div class="container">
  <div class="card p-2 p-md-5">
    <h1
      class="service-title mb-4 pt-md-0 text-center"
      in:fly={{ x: -200, duration: 2000 }}>
      Workshop
      <span class="text-elegant font-weight-bold">.</span>
    </h1>
    <div class="text-center" in:fade={{ duration: 2000 }}>
      <img
        src="workshop1.png"
        alt="imagine workshop 1"
        class="img-top img-fluid" />
    </div>
    <div class="p-2 mt-3">
      <p class="paragraph-text">
        Un
        <span class="text-elegant font-weight-bold">workshop</span>
        reprezintă un eveniment la care participă un grup restrâns de persoane,
        pornind de la un subiect de interes unde participanţii vor lucra,
        discuta şi cunoaşte mai bine tematica respectivă pentru a ajunge la
        nişte rezultate concrete.
      </p>
      <p class="paragraph-text">
        Diferenţa dintre o conferinţă şi un workshop nu se referă doar la
        numărul participanţilor, ci şi la modul de prezentare a informaţiilor şi
        a modului în care oamenii sunt implicaţi. De cele mai multe ori în
        cadrul unei conferinţe publicul ascultă şi află informaţii prezentate
        sub formă de “lecţie”, în timp ce un workshop presupune un grad ridicat
        de implicare şi de socializare, atât între coordonator şi grup, cât şi
        între ei ca participanţi.
      </p>
      <blockquote>
        În funcţie de nevoile fiecăruia, workshop-urile oferă o plajă largă de
        subiecte şi teme de interes cum ar fi teme legate de cuplu, familie şi
        copil, psihoeducaţie, legături între emoţii-corp-gânduri, depăşirea unor
        evenimente dificile.
      </blockquote>
      <p class="paragraph-text">
        Pornind de la acest aspect, există două tipuri de workshop-uri: cele de
        dezvoltare personală si cele pentru grupurile de suport.
      </p>
      <p class="paragraph-text">
        În prima variantă avem grupuri orientate spre autocunoaştere, dorind să
        îşi exerseze şi să îşi dezvolte abilităţile creative, tipul de
        comunicare, modul de relaţionare cu anumite persoane. În cadrul acestora
        tehnicile de art-therapy au un rol esenţial în a da şansa oamenilor să
        se exprime într-un mod diferit, să fie spontani şi creativi.
      </p>
      <p class="paragraph-text">
        În a doua variantă avem persoane cu o nevoie de a fi ascultate, de a
        face faţă unor evenimente din trecut sau din prezent ce îi afectează în
        relaţia de cuplu, familie sau la locul de muncă. Subiectele discutate
        vor fi mult mai personale şi profunde şi tocmai de aceea spre deosebire
        de conferinţă, vor fi mai multe întâlniri în funcţie de nevoile
        participanţilor (de obicei sunt între 6 şi 10 întâlniri, o dată pe
        săptămână la o oră stabilită).
      </p>
      <div class="row">
        <div class="col-md-8">
          <p class="paragraph-text">
            Asemănările dintre cele două tipuri se referă la faptul că
            participanţii au şansa să discute şi să afle alte păreri, poveşti de
            viaţă, modalităţi de a comunica.
          </p>
          <p class="paragraph-text">
            O altă asemănare este că la începutul primei întâlniri,
            participanţii se vor prezenta şi astfel se va pune baza unei relaţii
            de respect, empatie, încredere, răbdare şi acceptare mutuală.
          </p>
          <p class="paragraph-text">
            Se va respecta fiecare părere în parte, fiecare participant va avea
            ocazia să vorbească şi să împartă experienţe cu ceilalţi şi totul va
            rămâne confidenţial.
          </p>
        </div>
        <div class="col-md-4">
          <img
            class="img-middle img-fluid"
            src="workshop2.png"
            alt="Imagine workshop 2" />
        </div>
        <blockquote class="mt-3">
          <em>
            Importanţa workshop-urilor a crescut foarte mult în ultimii ani,
            fiind o soluţie bună nu doar pentru dezvoltare personală şi
            psihoeducaţie, dar şi pentru angajarea în activităţi şi discuţii
            terapeutice.
          </em>
        </blockquote>
      </div>
    </div>
  </div>
</div>
