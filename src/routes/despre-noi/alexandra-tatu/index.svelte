<script>
  import { fade, fly } from "svelte/transition";
  import Testimonial from "../../../components/About/Testimonial.svelte";
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
  <title>Psiholog Tatu Alexandra</title>
</svelte:head>
<div class="container">
  <div class="card p-2 p-md-5">
    <h1
      class="service-title my-4 pt-md-0 text-center"
      in:fly={{ x: -200, duration: 2000 }}>
      Psiholog Tatu Alexandra
      <span class="text-elegant font-weight-bold">.</span>
    </h1>
    <div class="text-center" in:fade={{ duration: 2000 }}>
      <img
        src="alexandra.jpg"
        alt="imagine psiholog alexandra tatu"
        class="img-top img-fluid" />
    </div>
    <div class="p-2">
      <h1 class="text-center my-4">
        <span class="text-elegant font-weight-bold end">Buna,</span>
      </h1>
      <p class="paragraph-text">
        La fel ca şi tine, şi eu am o poveste în spatele numelui meu. De fapt,
        cu toţii suntem protagoniştii vieţilor noastre. Mă numesc Tatu Alexandra
        şi dacă vreau să îmi descriu povestea în câteva cuvinte, ele sunt
        acestea: căutare, efort, obstacole, apreciere, imaginaţie, sinceritate,
        pasiune.
      </p>
      <p class="paragraph-text">
        O viaţă (poveste) perfectă nu există. Încă de mică am căutat un drum al
        meu, ceva care să mă definească şi în același timp să îmi păstrez
        dorința de a cunoaște cât mai multe lucruri și perspective.
      </p>
      <p class="paragraph-text">
        În această căutare au fost şi obstacole şi greutăţi, însă prin care am
        învăţat să apreciez viaţa, oamenii şi fiecare moment. Totuși, aceste
        obstacole mi-au dat șansa să văd ce este important pentru mine, ce îmi
        doresc să fac și ce îmi propun pentru viitor.
      </p>
      <blockquote>
        <em>
          În iunie 2019 la Bookfest mi s-a îndeplinit visul, acela de a publica
          romanul meu de debut, Cheile Sinelui (editura Berg), un proiect la
          care am lucrat cu trup și suflet. 
        </em>
      </blockquote>
      <p class="paragraph-text">
        Atunci când privești în tine găsești toate răspunsurile și asta am făcut
        și eu atunci când am avut propriile dubii. Totodată, pot spune că
        această experiență m-a ajutat foarte mult să înțeleg, să empatizez, să
        am răbdarea necesară, să mă conectez la emoţiile şi gândurile mele.
        Condiția umană este atât de complexă, devenind pentru mine un subiect
        important în tot ce scriu. 
      </p>
      <p class="paragraph-text">
        Sunt de părere că noi ca oameni avem un potențial creativ şi de
        dezvoltare foarte mare, chiar dacă uneori este astupat de anumite trăiri
        sau experiențe. De aceea pot spune cu încredere că scrisul mă ajută și
        în meseria pe care mi-am ales-o.
      </p>
      <p class="paragraph-text">
        Am absolvit facultatea de Psihologie și Științele Educației în cadrul
        Universității Bucureşti, continuându-mi formarea în Psihoterapia
        Experienţială a Unificării (P.E.U.) din cadrul Institutului SPER, fiind
        înscrisă și la masterul P.E.U tot la Universitatea din București.
      </p>
      <p class="paragraph-text">
        P.E.U. reprezintă o metodă holistică, centrată pe analiza de simbol,
        dezvoltare personală şi autoschimbare prin intermediul exerciţiului
        provocator, improvizaţiei şi meditaţiei creatoare cu suport
        artterapeutic şi expresiv.
      </p>
      <p class="paragraph-text">
        În încheiere, aș vrea să termin cu unul din citatele prin care îmi
        exprim încrederea în potențialul uman și asupra vieții: „Mereu vor fi
        lucruri frumoase în lumea în care trăim, atâta timp cât știm unde și cum
        să privim.” – Cheile Sinelui (editura Berg). 
      </p>
      <blockquote>
        Fie că suntem prinși în capcanele trecutului sau în viitorul nesigur,
        prezentul este cel care ne oferă cele mai concrete trăiri. În esență,
        „aici și acum” este tot ce avem de fapt.
      </blockquote>
      <p class="paragraph-text">
        Ce ar fi să privim dincolo de tot ce nu înțelegem sau nu acceptăm? Să
        vedem dincolo de barierele zidite uneori chiar de noi. Când nu judeci
        sau nu lași frica să triumfe, ești liber să vezi frumosul, bunul și
        extraordinarul din lume.
      </p>

      <div class="m-5 text-right">
        <p class="paragraph-text">Cu drag,</p>
        <p class="end">Tatu Alexandra</p>
      </div>

      <hr class="style-hr" />
      <Testimonial />
      <hr class="style-hr" />
    </div>
  </div>
</div>
