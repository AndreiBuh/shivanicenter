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

<div class="container mt-md-4 mt-5">
  <div class="card p-1 p-md-5">
    <h3
      class="service-title mb-4 pt-md-0 text-center"
      in:fly={{ x: 200, duration: 2000 }}>
      Art-therapy
      <span class="text-elegant font-weight-bold">.</span>
    </h3>
    <div class="service-image text-center" in:fade={{ duration: 2000 }}>
      <img
        src="art-therapy1.png"
        alt="imagine mediatie"
        class="img-top img-fluid" />
    </div>
    <div class="p-2 mt-3">
      <p class="paragraph-text">
        <span class="text-elegant font-weight-bold">Terapia prin artă</span>
        , o formă din ce în ce mai des întâlnită ajută persoanele indiferent de
        gen, vârstă sau statut social, prin posibilitatea ei le a pătrunde adânc
        în psihicul individului, folosindu-se de puterea simbolului pentru a
        scoate la iveală atât potenţialul cât şi posibilitatea persoanei de a se
        manifesta sincer faţă de ea însăşi, într-un mediu armonios.
      </p>
      <p class="paragraph-text">
        Exemple de activităţi: colaje, desene, lucrul cu lutul, diverse tipuri
        de meditaţii creative, exerciţii care dezvoltă spontaneitatea şi
        creativitatea.
      </p>
      <p class="paragraph-text">
        Tocmai de aceea terapia prin artă a devenit din ce în ce mai răspândită.
        Pornind de la experiența simbolică, aceasta renaște din propriile
        descoperiri ale omului în cadrul ședințelor de terapie, regăsindu-se
        prin rezultatele acelor exerciții creative. Pornind și de la importanța
        terapiei Gestalt, care pune accent pe trăirile și experiențele din
        prezent, pe „aici și acum”, cei care beneficiază de această formă a
        terapiei au parte de un proces de auto-cunoaștere global, începând de la
        simplele senzații și percepții și continuând până la restul proceselor
        complexe.
      </p>
      <p class="paragraph-text">
        Fie că este vorba de art-teraphy, meloterapie sau dramaterapie, acestea
        scot la iveală aspecte unice şi inconștiente, oferind o nouă
        perspectivă.
      </p>

      <blockquote>
        <em>
          Viața interioară a oamenilor este incredibil de bogată, fie prin
          complexitatea ei, fie prin faptul că tocmai diferențele dintre ei îi
          fac atât de speciali.
        </em>
      </blockquote>
      <p class="paragraph-text">
        În celebra sa piramidă a nevoilor, Maslow prezintă anumite tipuri de
        nevoi, pornind de la cele primare către cele mai complexe. Odată ce
        nevoile ajung spre vârful piramidei, potenţialul creşte precum dorinţa
        de a face ceva special pentru tine şi pentru ceilalţi.
      </p>
      <p class="paragraph-text">
        În concepţia sa, creativitatea şi lipsa prejudiciilor, alături de
        celelalte nevoi complexe, aduc linişte şi împlinire emoţională, scoţând
        persoana din acel stadiu al stagnării. Productivitatea este şi ea
        valorificată într-un mod pozitiv, iar dacă se manifestă sub forma
        pasiunilor atunci personalitatea se diferenţiază treptat faţă de alţii
      </p>
      <p class="paragraph-text">
        Sentimentul că ai ceva al tău, pe care doar tu poţi să-l faci în felul
        tău oferă libertatea stimei de sine de a explora alte trăiri
        neconştientizate până atunci.
      </p>
      <blockquote>
        Arta, sub nenumăratele ei forme, eliberează omul de stresul celorlalte
        activităţi, schimbă anumite pattern-uri de gândire şi comportament, şi
        ajută persoana să intre în contact cu propriile emoţii şi nevoi.
      </blockquote>
      <div class="row">
        <div class="col-md-8">
          <p class="paragraph-text">
            Experienţa simbolică trece dincolo de experienţa efemeră, nu se
            pierde în prezent, ci îmbogăţeşte celelalte trăiri, emoţii şi
            gânduri.
          </p>
          <p class="paragraph-text">
            Această experienţă nu dispare subit, rămâne alături de individ,
            oferindu-i o perspectivă unică, iar dacă el o va aprecia ca fiind
            pozitivă şi benefică contextului în care se află, dacă oferă
            răspunsurile celor mai marcante întrebări, atunci impactul ei va
            influenţa structura sa psihică.
          </p>
          <p class="paragraph-text">
            Fie că este vorba de gânduri repetitive negative, stări de nelişite
            sau pierderea stimei de sine, experienţa simbolică le poate
            influenţa în aşa fel încât noua perspectivă va da şansa spre
            schimbare.
          </p>
          <p class="paragraph-text">
            Acea schimbare va determina activarea adevăratului său potenţial,
            conectându-l cu propriul sine după acea periodată de stagnare şi
            agitaţie psihică. Chiar astfel am învăţat că schimbarea este
            normală, chiar benefică pentru descoperirea adevăratelor resurse şi
            valori, cele care întăresc până la urmă rezilienţa.
          </p>
        </div>
        <div class="col-md-4">
          <img
            class="img-middle img-fluid"
            src="art-therapy2.png"
            alt="Imagine psihoterapie 2" />
        </div>
      </div>
    </div>
  </div>
</div>
