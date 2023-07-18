<template>
    <div class="title_s">Garat komunale të fizikës</div>
    <div class="text">Garat komunale organizohen nga DKA komunale.</div>
    <div class="text">
        Në Garat komunale marrin pjesë vetëm nxënësit të cilët kanë arritur rezultatet
        më të mira në Garat shkollore. Nxënësi pjesëmarrës së pari regjistrohet në
        Garat komunale me mësimdhënësi/mentorin e tij të fizikës. Numrin e nxënësve
        pjesëmarrës në Garat komunale nga secila shkollë e përcakton DKA komunale.
        Garat komunale për nxënësit e klasëve të 9, 10, 11 dhe 12 duhet të mbahen në
        të gjitha komunat e Kosovës në datë dhe orë të njëjtë. Fillimi i garave saktë në
        orën e përcaktuar nga Shoqata është obligativ. Në ditën e mbajtjes së garave, 1
        orë para fillimit të tyre Shoqata me email do tia dërgon testet e detyrave
        drejtorit të arsimit ose personit të autorizuar nga ai (zakonisht caktohet një
        koordinator i Garave komunale) kurse 15 min para përfundimit të garave,
        Shoqata përsëri me email, do të dërgoj edhe çelësin dhe zgjidhjet e detyrave.
    </div>
    <div class="text">
        Një koordinator të garave komunale dhe një komision të garave komunale e
        përcakton DKA komunale të cilët kanë për detyrë të kontrollojnë testet e
        nxënësve, të bëjnë rangimin e tyre sipas rezultateteve të arritura dhe të shpallin
        fituesit e Garave komunale
    </div>
    <div class="text">
        Drejtoritë komunale të arsimit i dërgojnë Shoqatës listën e nxënësve fitues në
        Garat komunale dhe të cilët do të marrin pjesë në Garat shtetërore të fizikë, në
        një Fletëregjistrim jo më vonë se 3 ditë nga dita e mbajtjes së garave komunale.
    </div>
    <div class="text">
        Përgjegjëse për mbajtjen e Garave shkollore dhe komunale janë DKA-të.
    </div>
    
    <div class="text">
        Për detale shih 
        <router-link to="/Garat/Rregullorja" class="link"><div class="neni" @click="$emit('change_path')">RREGULLORE PËR MBAJTJEN E GARAVE TË FIZIKËS PËR NXËNËSIT E
        SHKOLLAVE TË MESME TË ULËTA DHE TË LARTA TË REPUBLIKËS SË KOSOVËS</div></router-link>
    </div>
</template>
<style>
.text_3{
    font-size: 1.5vw;
}
@media (min-width: 1400px) {
    .text_3{
        font-size: 21px;
    }
}
</style>