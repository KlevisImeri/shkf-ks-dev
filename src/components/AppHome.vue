<template>
    <vue-carousel :data="main_photos" :interval="3000"></vue-carousel> 
    <div class="wrapper_2">
        <div>
            <div class="title_s margin_top">Lajmet e fundit</div>

            <div class="block" v-for="block in lajmet_data" :key="block.title">
                <div class="title">{{ block.title }}</div>
                <div class="date">{{ block.date }}</div>
                <div class="text" style="white-space: pre-line">{{ block.text }}</div>
                <vue-carousel :data="block.image_urls" :interval="3000"></vue-carousel> 
            </div>
        
        </div>
        <div class="holder">

            <div class="block">
                <div class="title title_b center" style="color: var(--title-color);">OLIMPIADA KOSOVARE NË FIZIKË 2023</div>


                <div class="nopadding text">
                    <div class="sub_title center nomargin">Vendi i parë</div>
                </div>
                <div class="ranking">
                    <div class="ranking_2" v-for="person in klasa12" :key="person.place">
                        <div class="emrat">{{person.name}}</div>
                        <div class="emoji">{{person.place}}</div>
                    </div>
                </div>


                
                <div class="nopadding text">
                    <div class="sub_title center nomargin">Vendi i dytë</div>
                </div>

                <div class="ranking">
                    <div class="ranking_2" v-for="person in klasa11" :key="person.place">
                        <div class="emrat">{{person.name}}</div>
                        <div class="emoji">{{person.place}}</div>
                    </div>
                </div>



                <div class="nopadding text">
                    <div class="sub_title center nomargin">Vendi i tretë</div>
                </div>
                <div class="ranking">
                    <div class="ranking_2" v-for="person in klasa10" :key="person.place">
                        <div class="emrat">{{person.name}}</div>
                        <div class="emoji">{{person.place}}</div>
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
    data(){
        return{
            lajmet_data: [
{
    title: 'IPhO 2023 Japoni',
    date: 'July 14 at 19:25',
    text: 'Ekipi përfaqsues i Republikës së Kosovës është duke marr pjesë në Olimpiadën e 53-të Ndërkombtare të Fizikës IPhO 2023 që po mbahet në Japoni, në përbërje:\n\n1. Era Thaqi, kl.12, Gjimnazi “Xhevdet Doda” Prishtinë.\n\n2. Argjenda Trepça, kl.11, Gjimnazi “Frang Bardhi” Mitrovicë.\n\n3. Hana Mani, kl.10, New York School of Science, Prishtinë.\n\nUdhëheqës i grupit, Prof dr Sefer Avdiaj, profesor në departamentin e fizikës të FSHMN dhe prorektor për shkencë në Universitetin e Prishtinës “Hasan Prishtina”.\n\nSHKF falenderon të gjithë mësimdhënësit që janë angazhuar në përgaditjen teorike dhe laboratorike të këtij ekipi si dhe ministren e Arsimit, Shkencës, Tekonologjisë dhe Inovacionit, znj. Arbërie Nagavci, dhe stafin e saj për ndihmën dhe mbështetjen financiare duke kontribuar që ekipit kosovar të garoj në mënyrë sa më të sukseshme së bashku me ekipet tjera nga afër 90 shtete të botës si: SHBA, Kina, India, Mbretëria e Bashkuar, Gjermania, shtetet e rajonit si dhe shtete tjera.\n\nUrojmë përfaqsim dinjitoz dhe të sukseshëm!\n\nSHKF\n\nSuksese për të gjithë nxënësit ,ju priftë e mbara në kët garë !\n\n',
    image_urls:[
        <div class="video" style="background-image: url(https://scontent.fprn3-1.fna.fbcdn.net/v/t39.30808-6/360096693_661793532641841_888849672718499510_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=tbVYirRvvNsAX8WPzwE&_nc_ht=scontent.fprn3-1.fna&oh=00_AfDWSdFg1cAu-lrGDvKVewFHecoeg21Dv2wQ_ph0kq9d9g&oe=64BA3B84);"></div>,
        <div class="video" style="background-image: url(https://scontent.fprn3-1.fna.fbcdn.net/v/t39.30808-6/359857433_661793625975165_642214789042922198_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=GaDCZr6KvBsAX_6odmF&_nc_ht=scontent.fprn3-1.fna&oh=00_AfA6ITXkpmw81kwTm01t6EtkjxUG8XCYK4OrFAztaCX9ww&oe=64B95B1B);"></div>,
        <div class="video" style="background-image: url(https://scontent.fprn3-1.fna.fbcdn.net/v/t39.30808-6/359819759_661793805975147_4417412495975480504_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=jEGcKyzHsFgAX_SjeBu&_nc_ht=scontent.fprn3-1.fna&oh=00_AfCt7wb3V0oi-cIFMLOuC5rIkznMar4c9EEL_zgnDFe-OQ&oe=64B8FCD0);"></div>,
        <div class="video" style="background-image: url(https://scontent.fprn3-1.fna.fbcdn.net/v/t39.30808-6/359536590_661793889308472_2718401935710715811_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=7uQRGIfihNYAX9flct5&_nc_ht=scontent.fprn3-1.fna&oh=00_AfBDu5xt3JE4EgsJCY9rQ_JmVgeNnWijE9E4fOY7q7wmOQ&oe=64B884FC);"></div>,
    ]
},
{
    title: 'Olimpiada e 7 Europiane e Fizikës',
    date: 'June 19 at 20:42',
    text: 'Skenderi, Andi, Luri, Diella dhe Olti janë duke marrë pjesë në Olimpiadën e 7 Europiane të Fizikës (The 7. European Physics Olympiad EuPhO 2023) e cila po mbahet nga 16 deri më 20 qershor 2023 në Hannover, Gjermani.\n\nIu urojmë përfaqësim dinjitoz dhe të sukseshëm.\n\nFalënderojmë MASHTI-n për mbështetjen financiare për pjesëmarrje të ekipit kosovar në EuPhO 2023,\n\nShume suksese ekipes!\n\n',
    image_urls:[
        <div class="video" style="background-image: url(https://scontent.fprn3-1.fna.fbcdn.net/v/t39.30808-6/355372711_647295260758335_4863485576046273796_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=9dlZMOI8KI4AX-BibjI&_nc_ht=scontent.fprn3-1.fna&oh=00_AfDb4H39-BH7__lgIb5qlsYTaraj3i9lEbfHFZyr8GE13Q&oe=64B9781E);"></div>,
        <div class="video" style="background-image: url(https://scontent.fprn3-1.fna.fbcdn.net/v/t39.30808-6/354573220_647295710758290_5121111998156887006_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=mIdOJdjE_RcAX_8ayvZ&_nc_ht=scontent.fprn3-1.fna&oh=00_AfDbK-UwDdH5X7fQLy21DlY3BG0URFHa6iCWDKHzQd69kA&oe=64B8F74D);"></div>,
        <div class="video" style="background-image: url(https://scontent.fprn3-1.fna.fbcdn.net/v/t39.30808-6/355433128_647295754091619_3206808269022870418_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=HlgQxhZESMEAX_xXSF0&_nc_oc=AQnicP2UqZg7Odb3hqHZVb2HB6SBqYrT5goQ4Lw6NssJrtHgns0pGPniGDJnPglnFcw&_nc_ht=scontent.fprn3-1.fna&oh=00_AfDSuk9A1Gr3jHoh8FVJ-Bg6hIakBXbyxMJkzxt2ZG8-hw&oe=64BA345F);"></div>,
        <div class="video" style="background-image: url(https://scontent.fprn3-1.fna.fbcdn.net/v/t39.30808-6/355232491_647295814091613_8328048166029629325_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=ZvAUJxRwkukAX8dU6-B&_nc_ht=scontent.fprn3-1.fna&oh=00_AfDk-n3lAg4T5R3GpdVH3zGAcUcJnlYaG02lQghDkqTnzg&oe=64BA0C42);"></div>,
        <div class="video" style="background-image: url(https://scontent.fprn3-1.fna.fbcdn.net/v/t39.30808-6/354570037_647295847424943_629962144606174824_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=MTcYUxGzljYAX9lDLrT&_nc_oc=AQmY9Ib9QhKCSPx92cCKaxsbffsM9uAI2AypdeN1rxou9IHrg8NlNayaKkgafOKvRFw&_nc_ht=scontent.fprn3-1.fna&oh=00_AfBzOiJWbpdPhU7gh0L2alH9w1FUW1tOgziRFwi7lzQmqQ&oe=64B8D6DF);"></div>,
    ]
},
{
    title: 'Kujtim',
    date: 'June 7 at 16:59',
    text: 'KUJTIM. Në garat e dyta mbarëkombëtare të Fizikës, të mbajtura me 06.05.1996 në Gjilan, mysafir i veçantë ishte Prof. Dr. Xhavit Ahmeti, këshilltar i Presidentit Rugova, ikona e intelektualit me përmasa ndërkombëtare. Me këtë rast Prof. Shkëlqim Zunçe, kryetar i Shoqatës së Fizikanëve - dega në Gjilan i dorëzoi një dhuratë domethënëse për kohën Prof. Ahmetit. Në foto, profesorët: Shkëlqim Zunçe, Xhavit Ahmeti(tashmë i ndjer), Naim Syla, Fehmi Gashi, kryetar i Shoqatës( tashmë i ndjer) dhe Qerim Kamberi (jeton në SHBA). Krenar me kohën që kaluam, punët që i kryem e mbi të gjitha njerëzit që i njohëm.\n\n',
    image_urls:[
        <div class="video" style="background-image: url(https://scontent.fprn3-1.fna.fbcdn.net/v/t39.30808-6/352337373_962500388327127_6791733547010607922_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=UsdCUSVXRwYAX8zhI5b&_nc_ht=scontent.fprn3-1.fna&oh=00_AfAXm-P7kyXZt3xVDJaO-ADRFS5cmSSngqQPSlUV0Uvd8w&oe=64BA4DC8);"></div>,
    ]
},
{
    title: 'Ekipet',
    date: 'May 28 at 22:14',
    text: 'SHKF përcaktoi ekipet të cilat do ta përfaqsojnë Republikën e Kosovës në olimpiadat ndërkombtare.\n\nEkipi i cili do të marrë pjesë në Olimpiadën Ndërkombëtare të Fizikës (International Physics Olympiad  IPhO 2023) e cila do të mbahet nga 10 deri më 17 korrik 2023 në Japoni do të jetë në përbërje:\n\n1. Argjenda Trepça, klasa XI, Gjimnazi “Frang Bardhi”, Mitrovicë.\n\n2. Era Thaqi, klasa XII, Gjimnazi “Xhevdet Doda”, Prishtinë.\n\n3. Hana Mani, klasa X, New York School of Science, Prishtinë.\n\nme udhëheqës Prof Dr Sefer Avdiaj.\n\nEkipi i cili do të merr pjesë në Olimpiadën e 7 Europiane të Fizikës (The 7. European Physics Olympiad EuPhO 2023) e cila do të mbahet nga 16 deri më 20 qershor 2023 në Hannover, Gjermani do të jetë në përbërje:\n\n1. Skender Krasniqi, klasa XI, Gjimnazi “Gjon Buzuku”, Prizren.\n\n2. Andi Mala, klasa XII, Mehmet Akif College, Prizren.\n\n3. Luri Morina, klasa XII, Gjimnazi “Xhevdet Doda”, Prishtinë.\n\n4. Diella Kika, klasa XII, Gjimnazi “Aleksandër Xhuvani”, Podujevë.\n\n5. Olt Bajrami, klasa XI, Gjimnazi “Xhavit Ahmeti”, Gjilan.\n\nme udhëheqës Msc sc Ibrahim Hameli.\n\nTë gjithë nxënësit e përzgjedhur janë fitues të garave komunale në fizikë 2023, garave të XXIV shtetërore në fizikë 2023 dhe Olimpiadës kosovare në fizikë 2023.\n\nTë gjitha shpenzimet e pjesëmarrjes në olimpiadat ndërkombtare do të barten nga Ministria e Arsimit Shkencës, Teknologjisë dhe Inovacionit e Republikës së Kosovës.\n\nSuksese nxënësve!\n\n',
    image_urls:[
        <div class="video" style="background-image: url(https://scontent.fprn3-1.fna.fbcdn.net/v/t39.30808-6/349867774_555781666508382_8140942185257519170_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=T1mAYoe7BwIAX_eU8hz&_nc_ht=scontent.fprn3-1.fna&oh=00_AfCuBGVJaHgVtCwZajT38_72mirFQRHPBQQRd-RDIMrCvQ&oe=64B892C6);"></div>,
        <div class="video" style="background-image: url(https://scontent.fprn3-1.fna.fbcdn.net/v/t39.30808-6/350110159_145132255224210_6385426096948846721_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=9wdvNrIdRywAX8O9I_J&_nc_ht=scontent.fprn3-1.fna&oh=00_AfCoo62yqFicAuSG-ma14EFTZAxlf_TCz-wPHjGmCKxHjg&oe=64B8D3BC);"></div>,
        <div class="video" style="background-image: url(https://scontent.fprn3-1.fna.fbcdn.net/v/t39.30808-6/350502435_1321455915419130_338617688046300794_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=moq3jG4aKX4AX_YE54x&_nc_ht=scontent.fprn3-1.fna&oh=00_AfB8DiMkBWh0VOnxvETCAKnLdU-pXo5QitNZo65H4JhR2g&oe=64B99293);"></div>,
        <div class="video" style="background-image: url(https://scontent.fprn3-1.fna.fbcdn.net/v/t39.30808-6/350495242_928152891625202_2611026205403897152_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=LqilrhPiiX0AX8nGjXm&_nc_ht=scontent.fprn3-1.fna&oh=00_AfCTZSq59YBCANtufer9xTJ9IxAEY9fc8Dn_kpBs6Dh26w&oe=64B9B171);"></div>,
    ]
},
{
    title: 'Ligjeratë nga NOBELISTI DAN SHECHTMAN',
    date: '',
    text: 'Ligjeratë nga NOBELISTI DAN SHECHTMAN\n\nFituesi i cmimit nobel për kimi në vitin 2011, Prof. Dan Shechtman, do të mbajë ligjeratë në sallën Idriz Ajeti (Fakulteti I Filologjisë). Ligjerata mbahet të Premten, datë 05/05/2023 në ora 14:30.\n\nLigjerata është e hapur për studentet dhe stafin e FSHMN-se si dhe për publikun.\n\n',
    image_urls:[
        <div class="video" style="background-image: url(https://scontent.fprn3-1.fna.fbcdn.net/v/t39.30808-6/344134493_564052639163448_7775109149153500216_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=kL0Xtu84tX4AX9sw7Dx&_nc_ht=scontent.fprn3-1.fna&oh=00_AfD1WF3cN3JU3nm9edovuq_GWwaE15aVICa4xKbiNc9GLA&oe=64B9359E);"></div>,
    ]
},
{
    title: 'Anëtarsimi dhe bashkëpunimi i Republikës së Kosovës në CERN',
    date: '',
    text: 'Anëtarsimi dhe bashkëpunimi i Republikës së Kosovës në CERN\n\nMe ftesë të përfaqsuesëve të Organizatës europiane për hulumitime bërthamore CERN (European Council for Nuclear Research), Christoph Schaefer, Tadeusz Kurtyka dhe Ilirjan Margjeka, të premtën më 28.04.2023 në ambientet e Akademisë së Shkencave të Shqipërisë u mbajt takimi me Prof dr. Sadik Bekteshin, Prof. Dr. Skender Kabashin dhe Msc. Yllka Kabashin, (prorektori i Universitetit të Prishtinës, Prof. dr. Sefer Avdiaj, mungoi për shkaqe objektive) në të cilin u diskutua për hapat që duhet ndjekur për anëtarsimin e Republikës së  Kosovës në këtë organizatë prestigjioze dhe u shtjelluan mënyrat e bashkëpunimit të institucioneve akademike të Republikës së Kosovës me këtë organizatë të mirënjohur si dhe u shpreh gadishmëria që posa të kryhen procedurat e nevojshme, një delegacion i CERN-it të vizitoj  institucionet e Kosovës dhe të nënshkruhen marrëveshjet e bashkëpunimit.\n\nCERN është një nga qendrat më prestigjioze hulumtuese që operon laboratorin më të madh të fizikës së grimcave në botë. Për çdo vit në CERN punojnë më shumë se 10,000 shkencëtarë nga më shumë se 100 shtete për kërkime shkencore duke përdor aparaturat laboratorike më të mëdha dhe më komplekse shkencore të krijuara ndonjëherë.\n\nZbulimet më të mëdha në CERN janë: krijimi i atomit të antihidrogjenit, zbulimi i çiftit të grimcave elementare të quajtura bozonet W dhe Z,  (Çmimi Nobel), zbulimii i gjendjes së re të materies që quhet plazma kuark-gluon, përparimet teknologjike si World Wide Web dhe vëzhgimi për herë të parë i bozonit Higgs në LHC (Large Hadron Cillider) në vitin 2012 (Çmimi Nobel).',
    image_urls:[
        <div class="video" style="background-image: url(https://scontent.fprn3-1.fna.fbcdn.net/v/t39.30808-6/344542578_269984052035381_6074493467126912937_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=f8PVyomINbYAX-Apt63&_nc_ht=scontent.fprn3-1.fna&oh=00_AfCBRQQlEVmjECu39y9EMUTlsH146QW7rW8QVDiblTe8rw&oe=64B90A4D);"></div>,
        <div class="video" style="background-image: url(https://scontent.fprn3-1.fna.fbcdn.net/v/t39.30808-6/343576515_1254223771851601_612088958517567866_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=3BPjyYQSdfYAX9w7FBX&_nc_ht=scontent.fprn3-1.fna&oh=00_AfCRvSu6-65NdQgX9Wlqj1x7UZ299EagCltk0AIg8hFjEg&oe=64BA3CB5);"></div>,
        <div class="video" style="background-image: url(https://scontent.fprn3-1.fna.fbcdn.net/v/t39.30808-6/344272773_182267740984654_1892841205806579344_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=MupRrd8CFy8AX9ThXlv&_nc_ht=scontent.fprn3-1.fna&oh=00_AfBVLLXp7mlQB3PG48RT1RnBN2NJBxfN0mshsAAfD7qPjw&oe=64B9BCBB);"></div>,
    ]
},
],
main_photos: [
    <div class="video" style="background-image: url(https://scontent.fprn3-1.fna.fbcdn.net/v/t39.30808-6/360167321_202693669430035_5206100643153604858_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=TdsRziLtsSMAX8nZEBV&_nc_ht=scontent.fprn3-1.fna&oh=00_AfDZJDaYdYZ04ODUpKZG7ORIyuHTldNp57nFiXM3hny8rQ&oe=64B9E7C9);"></div>,
    <div class="video" style="background-image: url(https://scontent.fprn3-1.fna.fbcdn.net/v/t39.30808-6/359822458_202693646096704_3244262779791782310_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=iSbvq2W9CRkAX8itDeF&_nc_ht=scontent.fprn3-1.fna&oh=00_AfBRcxB-mCsLUN4YhMDFUCIk8bV-zwxt1StS4ax1OmG9Dw&oe=64B8FD4D);"></div>,
    <div class="video" style="background-image: url(https://scontent.fprn3-1.fna.fbcdn.net/v/t39.30808-6/359855830_202693592763376_2382287903418610800_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=xpCKwIBJg5AAX8iMVA8&_nc_ht=scontent.fprn3-1.fna&oh=00_AfBpfbZq_Dsq4IRz8xnMT-GE-37IqsTPXJ_VAkHf19uakw&oe=64B9D5DA);"></div>,
    <div class="video" style="background-image: url(https://scontent.fprn3-1.fna.fbcdn.net/v/t39.30808-6/359795056_202693616096707_6880684759538640772_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=MtXLy19bCp8AX8EExrb&_nc_ht=scontent.fprn3-1.fna&oh=00_AfCI-Xzu6yi96YRm6sKn4FH2xb3qEUZzARHWPnH-1L7nVw&oe=64BA55B7);"></div>,
    <div class="video" style="background-image: url(https://scontent.fprn3-1.fna.fbcdn.net/v/t39.30808-6/332672537_740477434121415_8229062571061714722_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=Bcy3ad9tmIkAX-9I78Y&_nc_ht=scontent.fprn3-1.fna&oh=00_AfBgm0tu58NwzYeKliciBtMj52l09BsWUgj8xk5NYwa6aw&oe=64B90E4E);"></div>,
],
            klasa12: [{
                name: 'Skender Krasniqi',
                place: '🥇'
            }],
            klasa11: [{
                name: 'Andi Mala',
                place: '🥈'
            },{
                name: 'Luri Morina',
                place: '🥈'
            },{
                name: 'Diella Kika',
                place: '🥈'
            },{
                name: 'Olt Bajrami',
                place: '🥈'
            },{
                name: 'Argjenda Trepça',
                place: '🥈'
            },{
                name: 'Erion Hasi',
                place: '🥈'
            }],
            klasa10: [{
                name: 'Era Thaqi',
                place: '🥉'
            },{
                name: 'Hëna Sylejmani',
                place: '🥉'
            },{
                name: 'Petrit Nebija',
                place: '🥉'
            },{
                name: 'Altin Thaqi',
                place: '🥉'
            },{
                name: 'Elsa Krasniqi',
                place: '🥉'
            },{
                name: 'Mevlane Thaçi',
                place: '🥉'
            },{
                name: 'Vesë Islami',
                place: '🥉'
            },{
                name: 'Alban Eminazeri',
                place: '🥉'
            }],
            klasa9: [{
                name: 'Drin Zeka',
                place: '🥇'
            },{
                name: 'Arbër Hajra',
                place: '🥇'
            },{
                name: 'Flori Meqa',
                place: '🥇'
            },{
                name: 'Lijana Dërmaku',
                place: '🥈'
            },{
                name: 'Engjëll Pardazi',
                place: '🥈'
            },{
                name: 'Olta Neziri',
                place: '🥈'
            },{
                name: 'Valëza Lahu',
                place: '🥈'
            },{
                name: 'Endi Ymeri',
                place: '🥈'
            },{
                name: 'Enda Qafleshi',
                place: '🥈'
            },{
                name: 'Omar Gashi',
                place: '🥉'
            },{
                name: 'Liesa Berisha',
                place: '🥉'
            },{
                name: 'Arza Vitaku',
                place: '🥉'
            },{
                name: 'Arsa Bajraktari',
                place: '🥉'
            },{
                name: 'Erion Rexhepi',
                place: '🥉'
            },{
                name: 'Diar Keka',
                place: '🥉'
            },{
                name: 'Art Halili',
                place: '🥉'
            },{
                name: 'Ariton Dragaj',
                place: '🥉'
            },{
                name: 'Blerta Boletini',
                place: '🥉'
            },{
                name: 'Olis Gashi',
                place: '🥉'
            },{
                name: 'Blinera Sopi',
                place: '🥉'
            }],
        }
    },
    computed: {
    },
    methods: {
    },
    beforeMount(){
    }
}
</script>
<style>
    .link{
        color: #705BF4;
        text-decoration: none;
    }
    .nopadding{
        padding: 0vw;
    }
    .video{
        overflow: hidden;
        background-color: var(--slider-color);
        border-radius: 0.5vw;
        height: 40vw;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
    .videosize{
        width: 98vw;
    }
    .wrapper_2{
        margin-top: 1vw;
        display: grid;
        grid-template-columns: 1.2fr 0.5fr;
    }
    .block{
        margin: 1vw;
        padding: 0.5vw;
        /* background-color: rgb(231, 250, 250); */
        border-radius: 0.4vw;
    }
    .title{
        padding: 0.2vw;
        margin: auto;
        font-size: 2.9vw;
        color: var(--subtitle-color);
        border-bottom: 0.1vw solid var(--linecolor-color);
    }
    .date{
        font-size: 1.8vw;
        color: var(--linecolor-color);
        text-align: right;
    }
    .text{
        padding: 1vw;
        margin: auto;
        font-size: 2vw;
        color: var(--linecolor-color);
    }
    .holder{
        border-left: 0.1vw solid var(--linecolor-color);
    }
    .ranking{
        display: grid;
        grid-template-rows: 1fr 1fr 1fr;
    }
    .ranking_2{
        margin-top: 1vw;
        display: grid;
        grid-template-columns: 1fr 0.2fr;
    }
    .emrat{
        margin-left: 1vw;
        font-size: 2vw;
        color: var(--linecolor-color);
        border-bottom: 0.1vw solid var(--linecolor-color);
    }
    .emoji{
        font-size: 2vw;
        text-align: center;
    }
    .title_b{
        font-size: 2.3vw;
    }
    .border_bottom{
        padding-bottom: 0.5vw;
        border-bottom: 0.1vw solid var(--linecolor-color);
    }
    .border_top{
        padding-top: 0.5vw;
        border-top: 0.1vw solid var(--linecolor-color);
    }
    .image{
        width: 50vw;
        margin-left: 6vw;
    }
@media (min-width: 1400px){
    .video{
        border-radius: 7px;
        height: 560px;
    }
    .videosize{
        width: 1400px;
    }
    .wrapper_2{
        margin-top: 14px;
    }
    .block{
        margin: 14px;
        padding: 7px;
        border-radius: 5.6px;
    }
    .title{
        padding: 2.8px;
        font-size: 40px;
        border-bottom: 1.4px solid var(--linecolor-color);
    }
    .date{
        font-size: 25px;
        color: var(--linecolor-color);
    }
    .text{
        padding: 14px;
        font-size: 28px;
    }
    .nopadding{
        padding: 0px;
    }
    .holder{
        border-left: 1.4px solid var(--linecolor-color);
    }
    .ranking_2{
        margin-top: 14px;
    }
    .emrat{
        margin-left: 14px;
        font-size: 28px;
        border-bottom: 1.4px solid var(--linecolor-color);
    }
    .emoji{
        font-size: 28px;
    }
    .title_b{
        font-size: 33px;
    }
    .border_bottom{
        padding-bottom: 7px;
        border-bottom: 1px solid var(--linecolor-color);
    }
    .border_top{
        padding-top: 7px;
        border-top: 1px solid var(--linecolor-color);
    }
    .image{
        width: 700px;
        margin-left: 84px;
    }
}
</style>