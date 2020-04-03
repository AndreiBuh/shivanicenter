<script>
  import { fade, fly } from "svelte/transition";
  import TestimonialList from "../../../components/About/TestimonialList.svelte";
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
  <title>Despre Shivani Center</title>
</svelte:head>
<div class="container">
  <div class="card p-2 p-md-5 mt-3">
    <h2
      class="service-title my-4 pt-md-0 text-center"
      in:fly={{ x: -200, duration: 2000 }}>
      Shivani Center
      <span class="text-elegant font-weight-bold">.</span>
    </h2>
    <div class="text-center" in:fade={{ duration: 2000 }}>
      <img src="center.jpg" alt="imagine mediatie" class="img-top img-fluid" />
    </div>
    <div class="p-2 mt-3">
      <p class="paragraph-text">
        <a href="despre-noi/shivani-center" class="links">
          <span class="text-elegant font-weight-bold">Shivani Center</span>
        </a>
        ofera servicii de consiliere psihologica centrata pe
        adult-cuplu-familie-copil, art-terapie, consiliere pentru dezvoltare
        personală, interpersonala, transpersoala si workshop-uri tematice.
      </p>
      <p class="paragraph-text">
        Viziunea noastra holistica imbina in mod organic metodele de vindecare
        orientale cu psihoterapiile suportive occidentale. Va invit sa exploram
        impreuna conexiunea dintre minte, corp si spirit.
      </p>
      <p class="paragraph-text">
        Shivani Center considera ca bunastarea psihologica a oamenilor este
        strans legata de modul in care evoluam ca societate. Noi ne dorim sa va
        oferim servicii de cea mai inalta calitate pentru a putea creste
        impreuna atat pe plan intrapersonal cat si in relatiile interumane.
      </p>
      <p class="paragraph-text">
        Centrul nostru are o abordare psihologica moderna, care imbina in mod
        organic metodele de vindecare orientale cu psihoterapiile suportive
        occidentale.
      </p>
      <blockquote>
        <em>
          Nelson Mandela spunea ca „Educaţia este cea mai puternică armă pe care
          voi o puteţi folosi pentru a schimba lumea.” Cu totii ne dorim sa
          schimbam lumea, dar asta porneste de la fiecare dintre noi. Doar aici
          si acum putem actiona sa ne educam mintea spre a deveni cea mai buna
          varianta a noastra.
        </em>
      </blockquote>
      <p class="paragraph-text">
        Orientarea noastra in psihoterapie experentiala urmeaza un proces
        terapeutic ce ofera sansa fiecaruia de a iesi singur la lumina, de a
        gasi solutii, de a se acepta pe sine, de a se ierta, de a se
        responsabiliza sa-si schimbe perspectiva asupra lucrurilor si asupra lui
        insusi. El experimenteaza bucuria de a evolua constient, de a-si
        descoperi singur conflictele interioare, vulnerabilitatile si blocajele
        ce l-au oprit pana acum sa fie in armonie cu propria persoana si cu
        ceilalti.
      </p>
      <p class="paragraph-text">
        Acest tip de proces da posibilitatea clientilor nostri sa isi dezvolte
        potentialul de adaptare creativ si sa isi deblocheze spontan propriile
        resurse, beneficiind de insight-urile autoexplorarii asistate, intr-un
        mediu relaxant si sigur.*
      </p>
      <p class="paragraph-text">
        Centru este fondat in anul 2019, la initiativa psihologului
        <a href="despre-noi/roxana-alecu" class="links">
          <span class="text-elegant font-weight-bold">Alecu F. Roxana</span>
        </a>
        in colaborare cu psihologul
        <a href="despre-noi/alexandra-tatu" class="links">
          <span class="text-elegant font-weight-bold">Tatu Alexandra</span>
        </a>
        , pornind din dorinta de a imbina metode variate de psihoterapie si
        practici stravechi spirituale, mereu redescoperite, re-asimilate si
        adaptate in functie de fiecare persoana. Shivani Center porneste de la
        ideea ca o singura metoda nu este eficienta pentru toata lumea, de aceea
        ne-am propus sa infiintam acest centru privind fiecare individ ca fiind
        unic.
      </p>
      <p class="paragraph-text">
        Sanatatea este deseori asociata cu buna functionare a organismului, insa
        sanatatea in sens larg cuprinde toate cele trei planuri: psihic, fizic
        si spiritual. Neglijand una dinte ele, este afectat intregul echilibru
        personal. Alimentatia, sportul, dezvoltarea personala si transpersonala
        sunt aspecte vitale pentru o viata traita in armonie si continua
        dezvoltare.
      </p>
      <p class="paragraph-text">
        Ne adresam tuturor oamenilor care isi doresc o schimbare in stilul lor
        de viata, o imbunatatire a sanatatii si a interactiunii cu cei din jur
        si mai ales celor care simt ca nu mai pot face fata problemelor zilnice,
        se confrunta cu stari de stres, anxietate, depresie, vinovatie,
        frustrare, sentimente de neputinta, probleme in relatia de cuplu, de
        familie, etc.
      </p>
      <p class="paragraph-text">
        Articolele noastre va vin si ele in intampinare, pentru a va tine la
        curent cu cele mai noi informatii despre sanatatea psihica, fizica si
        spirituala. Pentru acestea am creat sectiuni separate in functie de
        interesele fiecarui cititor. Puteti fi mereu la curent cu cele mai noi
        articole abonandu-va la newsletter-ul nostru.
      </p>
      <p class="paragraph-text">
        Serviciile noastre sunt prezentate separat si le poti descoperi chiar
        <a href="." class="links">
          <span class="text-elegant font-weight-bold">aici</span>
        </a>
        .
      </p>
      <div class="m-3 text-right">
        <p class="paragraph-text">Cu stima,</p>
        <p class="signature">Shivani Center</p>
      </div>

    </div>
  </div>
</div>
