import {createRouter, createWebHashHistory} from 'vue-router';
import AppHome from './components/AppHome.vue';
import AppAboutUs from './components/AppAboutUs.vue';
import AppGarat from './components/AppGarat.vue';
import AppAktivitetet from './components/AppAktivitetet.vue';
import AppArkiva from './components/AppArkiva.vue';
import AppKontakti from './components/AppKontakti.vue';
import AppStatuti from './components/AppStatuti.vue';
import AppHistoriku from './components/AppHistoriku.vue';
import AppSponsorët from './components/AppSponsorët.vue';
import AppKryesia from './components/AppKryesia.vue';
import AppKëshilli from './components/AppKëshilli.vue';
import AppAntarsimi from './components/AppAntarsimi.vue';
import AppRaportet from './components/AppRaportet.vue';
import AppPlanprogrami from './components/AppPlanprogrami.vue';
import AppRregullorja from './components/AppRregullorja.vue';
import AppApplications from './components/AppApplications.vue';
import AppGaratshkollore from './components/AppGaratshkollore.vue'
import AppGaratkomunale from './components/AppGaratkomunale.vue'
import AppGaratshteterore from './components/AppGaratshteterore.vue'
import AppOlimpiadaKosove from './components/AppOlimpiadaKosove.vue' 
import AppOlimpiadatNderkombetare from './components/AppOlimpiadatNderkombetare.vue' 
import AppCarouselPage from './components/AppCarouselPage.vue'
import AppOrariGara from './components/AppOrariGara.vue'

const routes = [
    {path: '/', component: AppHome},
    {path: '/Per-Shoqaten', component: AppAboutUs, children: [
        {path: '', redirect: '/Per-Shoqaten/Kryesia'},// default child path
        {path: 'Statuti', component: AppStatuti},
        {path: 'Historiku', component: AppHistoriku},
        {path: 'Sponsorët', component: AppSponsorët},
        {path: 'Këshilli', component: AppKëshilli},
        {path: 'Kryesia', component: AppKryesia},
        {path: 'Anëtarsimi', component: AppAntarsimi},
        {path: 'Raportet', component: AppRaportet},
    ]},
    {path: '/Aktivitetet', component: AppAktivitetet, },
    {path: '/Garat', component: AppGarat, children: [
        {path: '', redirect: '/Garat/Orari'},
        {path: 'Orari', component:AppOrariGara},
        {path: 'Shkollore', component:AppGaratshkollore},
        {path: 'Komunale', component:AppGaratkomunale},
        {path: 'Shteterore', component:AppGaratshteterore},
        {path: 'Olimpiada_e_Kosoves', component:AppOlimpiadaKosove},
        {path: 'Olimpiadat_nderkombetare', component:AppOlimpiadatNderkombetare},
        {path: 'Rregullorja', component:AppRregullorja},
        {path: 'Planprogrami', component: AppPlanprogrami}
    ]},
    {path: '/Arkiva', component: AppArkiva},
    {path: '/Kontakti', component: AppKontakti}, 
    {path: '/Applications',component: AppApplications},
    {path: '/Carousel', component: AppCarouselPage},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;