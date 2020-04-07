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
  <title>Consiliere psihologica</title>
</svelte:head>
<div class="container">
  <div class="card p-2 p-md-5 mt-3">
    <h2
      class="service-title mb-4 pt-md-0 text-center"
      in:fly={{ x: -200, duration: 2000 }}>
      Consiliere psihologică
      <span class="text-elegant font-weight-bold">.</span>
    </h2>
    <div class="service-image text-center" in:fade={{ duration: 2000 }}>
      <picture>
        <source
          srcset="images/services/consiliere-psihologica1.webp"
          type="image/webp" />
        <source
          srcset="images/services/consiliere-psihologica1.jpg"
          type="image/jpeg" />
        <img
          src="images/services/consiliere-psihologica1.jpg"
          alt="consiliere psihologica"
          class="img-top img-fluid rounded" />
      </picture>
    </div>
    <div class="p-2 mt-3">
      <p class="paragraph-text">
        <span class="text-elegant font-weight-bold">
          Consilierea psihologică
        </span>
        este o intervenție psihologică în care o persoană specializată oferă
        ajutor, la cerere, persoanelor aflate într-o perioadă dificilă din viața
        lor. Aceștia se află într-un moment de criză, un impas, în ceea ce
        privește găsirea unor soluții la problemele cu care persoana se
        confruntă pe plan personal sau professional.
      </p>
      <p class="paragraph-text">
        Asociația Britanică pentru Consiliere spune despre consilierea că
        “presupune existența unei persoane care are temporar sau permanent rolul
        de consilier și care oferă sau acceptă în mod explicit să acorde timp,
        atenție și respect uneia sau mai multor persoane, cu rolul temporar de
        client.
      </p>
      <p class="paragraph-text">
        Sarcina consilierii este de a oferi clientului oportunitatea de a
        explora, descoperi și clarifica moduri de a trăi valorificându-și
        resursele, ceea ce conduce la sentimentul de bine interior,
        îndreptându-se spre o cât mai bună existență.”
      </p>
      <em>
        <blockquote>
          <em>
            Consilierea psihologică se adresează adulților, copiilor,
            adolescenților și vârstnicilor deopotrivă. Consilierea se realizează
            fie prin consiliere individuală, fie prin consiliere de grup, de
            exemplu în cadrul grupurilor de suport.
          </em>
        </blockquote>
      </em>
      <p class="paragraph-text">
        Consilierea psihologică este similară psihoterapiei în multe privințe,
        însă există câteva distincții: după gradul de severitate al tuburării
        clientului - consilierea este indicată pentru prevenirea apariției
        tulburărilor psihologice și se adresează persoanelor cu dezechilibre
        ușoare ale personalității, în timp ce psihoterapia acoperă un spectru
        mai larg de intervenție, ce cuprinde afecțiuni majore ale
        personalității; după natura problemelor cu care vine clientul,
        consilierea este indicată pentru problemele interpersonale care se pot
        rezolva prin luarea unor decizii in armonie cu propriile nevoi, dorințe
        și motive; după durata, consilierea este mai scurtă (6-10 sedinte),în
        timp ce psihoterapia poate dura și câțiva ani.
      </p>
      6">
      <p class="paragraph-text">
        Metodele și tehnicile utilizate sunt comune psihoterapiei și
        consilierii. Orientarea terapeutică este cea care influențează pașii și
        etapele terapeutice. Scopul consilierii este de al face pe client să își
        folosească cât mai eficient resursele personale.
      </p>
      <p class="paragraph-text">
        Ceea ce-ți oferă consilierea după ce s-a încheiat este „sa te ajute să
        te ajuți singur”, căci doar noi suntem cei care putem să ne schimbăm.
        Rolul nostru este de a vă ghida, de a merge împreună, de a fi acolo și
        de a vă ajută într-un mod activ să vă autodescoperiti.
      </p>

      <p class="mt-3 paragraph-text">
        Iată câteva exemple ce pot constitui psihoeducație:
      </p>
      <ul class="p-2">
        <li class="paragraph-list-items">
          Un terapeut care explică unei persoane aflate în terapie modalitățile
          în care poate avea un impact asupra stării de sănătate mintală
        </li>
        <li class="paragraph-list-items">
          Un psihiatru care descrie modul în care un medicament prescris poate
          contracara simptomele unei afecțiuni de sănătate mintală
        </li>
        <li class="paragraph-list-items">
          Un spital psihiatric care oferă sprijin și educație membrilor familiei
          celor primiți tratament
        </li>
        <li class="paragraph-list-items">
          Clasele formale destinate educării populației, atât asupra condițiilor
          specifice de sănătate mintală, cât și asupra sănătății mintale în
          general
        </li>
        <li class="paragraph-list-items">
          Asistență în managementul comportamentului în clasă pentru studenții
          diagnosticați cu probleme de comportament
        </li>
        <li class="paragraph-list-items">
          Grupuri de ajutor și de sprijin concepute pentru a încuraja persoanele
          diagnosticate cu probleme de sănătate mintală să împărtășească
          strategii și informații unul cu altul.
        </li>
      </ul>
    </div>
  </div>
</div>
