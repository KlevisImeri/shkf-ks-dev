<template>
  <vue-carousel :data="main_photos" :interval="3000"></vue-carousel>
  <div v-html="text"></div>
  <div class="wrapper_2">
    <div>
      <div class="title_s margin_top">Lajmet e fundit</div>

      <div class="block" v-for="block in lajmet_data" :key="block.title">
        <div class="title">{{ block.title }}</div>
        <div class="date">{{ block.date }}</div>
  <div class="text" v-html="block.text"></div>
        <vue-carousel :data="block.image_urls" :interval="3000"></vue-carousel>
      </div>

      <!-- <div class="block">
        <iframe
          src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FShoqataKosovareeFizikes%2Fposts%2Fpfbid02tQydnsqBssvrfrMsacua4nbp6uX26hiYnpyWYHUXo22Zi9rALWSdhaQy8qJMydCVl&show_text=true&width=500"
          width="100%" height="754" style="border:none;overflow:hidden" scrolling="no" frameborder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
      </div>

      <div class="block">
        <iframe
          src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FShoqataKosovareeFizikes%2Fposts%2Fpfbid0eaW7r8aVVJKsw4VFt74LHVNWmVUayySNRSN4h6oN3EssfBKCzCVScBwiNE9dRPyDl&show_text=true&width=500"
          width="100%" height="754" style="border:none;overflow:hidden" scrolling="no" frameborder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
      </div>
      <div class="block">
        <iframe
          src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FShoqataKosovareeFizikes%2Fposts%2Fpfbid02ocvpc7v661S87UU5FYR1HhdEpU9oaSEMNL1wcqjHuGudtrxQGuRCN35y766KFb9fl&show_text=true&width=500"
          width="100%" height="754" style="border:none;overflow:hidden" scrolling="no" frameborder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
      </div> -->


    </div>
    <div class="holder">

      <div class="block">
        <div class="title title_b center" style="color: var(--title-color);">OLIMPIADA KOSOVARE NË FIZIKË 2023</div>


        <div class="nopadding text">
          <div class="sub_title center nomargin">Vendi i parë</div>
        </div>
        <div class="ranking">
          <div class="ranking_2" v-for="person in klasa12" :key="person.place">
            <div class="emrat">{{ person.name }}</div>
            <div class="emoji">{{ person.place }}</div>
          </div>
        </div>



        <div class="nopadding text">
          <div class="sub_title center nomargin">Vendi i dytë</div>
        </div>

        <div class="ranking">
          <div class="ranking_2" v-for="person in klasa11" :key="person.place">
            <div class="emrat">{{ person.name }}</div>
            <div class="emoji">{{ person.place }}</div>
          </div>
        </div>



        <div class="nopadding text">
          <div class="sub_title center nomargin">Vendi i tretë</div>
        </div>
        <div class="ranking">
          <div class="ranking_2" v-for="person in klasa10" :key="person.place">
            <div class="emrat">{{ person.name }}</div>
            <div class="emoji">{{ person.place }}</div>
          </div>
        </div>


        <!-- <div class="nopadding text">
                  <div class="sub_title center nomargin">Klasa 9</div>
              </div>
              <div class="ranking">
                  <div class="ranking_2" v-for="person in klasa9" :key="person.place">
                      <div class="emrat">{{person.name}}</div>
                      <div class="emoji">{{person.place}}</div>
                  </div>
              </div>  -->
      </div>

    </div>
  </div>
</template>

<script>

export default {
  methods: {
    generateImageHtmlArray(imagePaths) {
      return imagePaths.map(path => {
        return `<div class="video" style="background-image: url('${require('@/assets/' + path)}')"></div>`;
      });
    },
  },
  data() {
    return {
      lajmet_data: [
        
        {
              title: 'Konkurs për fotografinë më të mirë të fizikës',
              date: '27 Tetor 2025',
              text: `
    <p><img src="${require('@/assets/konkursi/Konkurs për fotografin.jpg')}" alt="Konkurs" class="image" /></p>

    <p><strong>SI të aplikoni?</strong></p>

    <ul>
      <li>Emri dhe mbiemri i autorit, adresa, e-mail adresa dhe numri i telefonit. (Për nxënës mund të dërgohen edhe të dhënat e mentorit nëse fotografia është punuar në përkujdesin e tij).</li>
      <li>Emri dhe adresa e institucionit (shkollës etj.).</li>
      <li>Titulli i fotografisë.</li>
      <li>Përshkrimi i fotografisë, nga 50 deri në 250 fjalë.</li>
    </ul>

    <p>Duke aplikuar në konkurs, autorët (dhe mentorët) garantojnë që fotografitë janë origjinale të tyre dhe ia transferojnë SHKF-së të drejtën e autorit për publikimin e fotografisë, e cila do të publikohet në mjetet publike të SHKF (faqen e SHKF në Facebook, webfaqen e SHKF, revistën "Kuantum" etj), së bashku me informacionet rreth autorit (mentorit), si dhe përshkrimin përkatës.</p>

    <p><strong>KU ti dërgoni fotografitë?</strong></p>
    <p>Fotografinë së bashku me përshkrimin përkatës dhe me të dhënat e autorit (mentorit) dërgoni në emailin:</p> <a href="mailto:shoqatakosovareefizikes@gmail.com">shoqatakosovareefizikes@gmail.com</a>

    <p><strong>KUR fillon aplikimi?</strong></p>
    <p>Konkursi është i hapur nga 20 tetor 2025 deri më 31 gushti 2026. SHKF do të shpall fituesit në shtator 2026 dhe fotografitë më të mira do të shpërblehen.</p>

    <p><strong>PËR kurreshtarët</strong></p>
    <p>Shikoni fotografitë në një konkurs prestigjioz.</p>
    <p><a href="https://apps.aapt.org/PhotoContest2024/galleryAll.cfm" target="_blank" class="link">https://apps.aapt.org/PhotoContest2024/galleryAll.cfm</a></p>

    <p><strong>Suksese!</strong></p>
`.trim(),
        },
        {
              title: 'Orari i garave shkollore, komunale, shtetërore dhe Olimpiadës Shtetërore në Fizikë 2026',
              date: '27 Shtator 2025',
              text: `
    <p>Nga ky vit në garat shkollore, komunale, shtetërore në fizikë do të marrin pjesë
    për herë të parë edhe nxënësit e klasëve të 7-ta dhe të 8-ta.</p>

    <ul>
      <li><b>Garat Shkollore në Fizikë 2026</b><br>Gjatë dhjetorit 2025, në shkollat përkatëse.</li><br>

      <li><b>Garat Komunale në Fizikë 2026</b><br>17. 01. 2026 në ora 11.00 në vendin të cilin e cakton DKA e komunës.</li><br>

      <li><b>Garat në punën eksperimentale në fizikë 2026</b><br>24. 01. 2026 në ora 11.00 në Departamentin e Fizikës të FSHMN, Prishtinë.</li><br>

      <li><b>Garat Shtetërore në Fizikë 2026</b><br>31. 01. 2026 në ora 11.00 (vendi i mbajtjes caktohet më vonë).</li><br>

      <li><b>Olimpiada Kosovare e Fizikës 2026</b><br>14. 02. 2026 në ora 11.00 në Departamentin e Fizikës të FSHMN, Prishtinë.</li>
    </ul>
    <div style="font-size: 0.65vw; font-style: italic; color: #555; margin-top: 0.5em;">
    Shënim: Garat shkollore, komunale, shtetërore për klasët e 7, 8, 9, 10, 11, 12 dhe Olimpiada Kosovare në Fizikë do të mbahen sipas orarit të dhënë. Nëse eventualisht ka ndryshim të datave, Shoqata Kosovare e Fizikës do të jap me kohë informatat e nevojshme.<br><br>

    Në të gjitha nivelet e garave, nxënësit mund të përdorin mjetet e tyre të shkrimit dhe vizatimit, një kalkulator xhepi të pa programueshëm, një mjet gjeometrik (vizore apo trekëndësh) dhe materiale tjera të cilat i vë në dispozicion organizatori i garave. Gjatë garave, nxënësi nuk duhet të ketë asnjë material të shkruar (libra, fletore, dhe mjete të ngjashme), telefona celularë ose pajisje tjera elektronike.
    </div>

    `.trim(),
        },
        {
          title: 'Kursi Themelor në fizikë 2024',
          date: 'Janar 13',
          text: `Sot, në Departamentin e Fizikës, filloi kursi themelor në fizikë 2024 i organizuar nga Shoqata kosovare e fizikës. Ky kurs mbahet nga asistentët:

                          Msc Burim Kamishi
                          Msc Albert Januzaj
                          Msc Zeqë Tolaj
                          Msc Ibrahim Hameli

                          Për çdo paqartësi eventuale na shkruani në emailin: info.shkf24@gmail.com`,
          image_urls: this.generateImageHtmlArray(['kursi24/1.jpg', 'kursi24/2.jpg', 'kursi24/3.jpg']),
        },
        {
          title: 'Mirënjohje dhe shpërblime për nxënësit e talentuar',
          date: 'June 7 at 16:59',
          text: `Bashkë me kryeministrin Kurti kemi ndarë sot mirënjohje dhe shpërblime për 88 nxënës të shkollave të Kosovës të cilët kanë treguar sukses të shkëlqyeshëm në gara të ndryshme vendore dhe ndërkombëtare, të zhvilluara përgjatë vitit 2023.

                          Kjo ngjarje është vijim i nismës sonë të filluar për herë të parë vitin e kaluar, për të përkrahur nxënësit e talentuar duke i shpërblyer me mirënjohje dhe shpërblim financiar, për sukseset e tyre në garat vendore dhe ndërkombëtare.

                          Sivjet, numri i nxënësve fitues është dyfishuar. Shuma totale e kësaj mbështetje financiare për këtë vit është 34 mijë euro. 

                          Falënderoj organizuesit e këtyre garave, të cilët kanë vendosur që në fushëveprimin e organizatave të tyre, të kenë pikërisht talentet nga shkollat tona.

                          Si Ministri e Arsimit po punojmë me përkushtim që të sigurojmë kushte më të mira në shkolla, me hapësira ku nxënësit mund të shprehin dhe të zhvillojnë talentin e tyre. 
                          I siguroj secilin talent në çdo fushë, se do të jemi krah jush, për të krijuar mundësi të reja që ta shprehni talentin tuaj dhe për të ju dhënë hapësirën që ju duhet.`,
          image_urls: this.generateImageHtmlArray([
            'shperblimet2024/1.jpg', 'shperblimet2024/2.jpg', 'shperblimet2024/3.jpg',
            'shperblimet2024/4.jpg', 'shperblimet2024/5.jpg', 'shperblimet2024/6.jpg', 'shperblimet2024/7.jpg'
          ]),
        },
      ],
      main_photos: this.generateImageHtmlArray([
        'main/1.jpg', 'main/2.jpg', 'main/3.jpg', 'main/4.jpg', 'main/5.jpg', 'main/6.jpg', 'main/7.jpg',
      ]),
  // (removed standalone konkursImage) image is embedded inside lajmet_data[0].text
      klasa12: [{
        name: 'Skender Krasniqi',
        place: '🥇'
      }],
      klasa11: [{
        name: 'Andi Mala',
        place: '🥈'
      }, {
        name: 'Luri Morina',
        place: '🥈'
      }, {
        name: 'Diella Kika',
        place: '🥈'
      }, {
        name: 'Olt Bajrami',
        place: '🥈'
      }, {
        name: 'Argjenda Trepça',
        place: '🥈'
      }, {
        name: 'Erion Hasi',
        place: '🥈'
      }],
      klasa10: [{
        name: 'Era Thaqi',
        place: '🥉'
      }, {
        name: 'Hëna Sylejmani',
        place: '🥉'
      }, {
        name: 'Petrit Nebija',
        place: '🥉'
      }, {
        name: 'Altin Thaqi',
        place: '🥉'
      }, {
        name: 'Elsa Krasniqi',
        place: '🥉'
      }, {
        name: 'Mevlane Thaçi',
        place: '🥉'
      }, {
        name: 'Vesë Islami',
        place: '🥉'
      }, {
        name: 'Alban Eminazeri',
        place: '🥉'
      }],
      klasa9: [{
        name: 'Drin Zeka',
        place: '🥇'
      }, {
        name: 'Arbër Hajra',
        place: '🥇'
      }, {
        name: 'Flori Meqa',
        place: '🥇'
      }, {
        name: 'Lijana Dërmaku',
        place: '🥈'
      }, {
        name: 'Engjëll Pardazi',
        place: '🥈'
      }, {
        name: 'Olta Neziri',
        place: '🥈'
      }, {
        name: 'Valëza Lahu',
        place: '🥈'
      }, {
        name: 'Endi Ymeri',
        place: '🥈'
      }, {
        name: 'Enda Qafleshi',
        place: '🥈'
      }, {
        name: 'Omar Gashi',
        place: '🥉'
      }, {
        name: 'Liesa Berisha',
        place: '🥉'
      }, {
        name: 'Arza Vitaku',
        place: '🥉'
      }, {
        name: 'Arsa Bajraktari',
        place: '🥉'
      }, {
        name: 'Erion Rexhepi',
        place: '🥉'
      }, {
        name: 'Diar Keka',
        place: '🥉'
      }, {
        name: 'Art Halili',
        place: '🥉'
      }, {
        name: 'Ariton Dragaj',
        place: '🥉'
      }, {
        name: 'Blerta Boletini',
        place: '🥉'
      }, {
        name: 'Olis Gashi',
        place: '🥉'
      }, {
        name: 'Blinera Sopi',
        place: '🥉'
      }],
    }
  }
}
</script>
<style>
.link {
  color: #705BF4;
  text-decoration: none;
}

.nopadding {
  padding: 0vw;
}

.video {
  overflow: hidden;
  background-color: var(--slider-color);
  border-radius: 0.5vw;
  height: 40vw;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.videosize {
  width: 98vw;
}

.wrapper_2 {
  margin-top: 1vw;
  display: grid;
  grid-template-columns: 1.2fr 0.5fr;
}

.block {
  margin: 1vw;
  padding: 0.5vw;
  /* background-color: rgb(231, 250, 250); */
  border-radius: 0.4vw;
}

.title {
  padding: 0.2vw;
  margin: auto;
  font-size: 2.9vw;
  color: var(--subtitle-color);
  border-bottom: 0.1vw solid var(--linecolor-color);
}

.date {
  font-size: 1.8vw;
  color: var(--linecolor-color);
  text-align: right;
}

.text {
  padding: 1vw;
  margin: auto;
  font-size: 2vw;
  color: var(--linecolor-color);
}

.holder {
  border-left: 0.1vw solid var(--linecolor-color);
}

.ranking {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
}

.ranking_2 {
  margin-top: 1vw;
  display: grid;
  grid-template-columns: 1fr 0.2fr;
}

.emrat {
  margin-left: 1vw;
  font-size: 2vw;
  color: var(--linecolor-color);
  border-bottom: 0.1vw solid var(--linecolor-color);
}

.emoji {
  font-size: 2vw;
  text-align: center;
}

.title_b {
  font-size: 2.3vw;
}

.border_bottom {
  padding-bottom: 0.5vw;
  border-bottom: 0.1vw solid var(--linecolor-color);
}

.border_top {
  padding-top: 0.5vw;
  border-top: 0.1vw solid var(--linecolor-color);
}

.image {
  width: 50vw;
  margin-left: 6vw;
}

@media (min-width: 1400px) {
  .video {
    border-radius: 7px;
    height: 560px;
  }

  .videosize {
    width: 1400px;
  }

  .wrapper_2 {
    margin-top: 14px;
  }

  .block {
    margin: 14px;
    padding: 7px;
    border-radius: 5.6px;
  }

  .title {
    padding: 2.8px;
    font-size: 40px;
    border-bottom: 1.4px solid var(--linecolor-color);
  }

  .date {
    font-size: 25px;
    color: var(--linecolor-color);
  }

  .text {
    padding: 14px;
    font-size: 28px;
  }

  .nopadding {
    padding: 0px;
  }

  .holder {
    border-left: 1.4px solid var(--linecolor-color);
  }

  .ranking_2 {
    margin-top: 14px;
  }

  .emrat {
    margin-left: 14px;
    font-size: 28px;
    border-bottom: 1.4px solid var(--linecolor-color);
  }

  .emoji {
    font-size: 28px;
  }

  .title_b {
    font-size: 33px;
  }

  .border_bottom {
    padding-bottom: 7px;
    border-bottom: 1px solid var(--linecolor-color);
  }

  .border_top {
    padding-top: 7px;
    border-top: 1px solid var(--linecolor-color);
  }

  .image {
    width: 700px;
    margin-left: 84px;
  }
}
</style>