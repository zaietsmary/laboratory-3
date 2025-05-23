document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('input[name="search"]');
    const randomWords = [
        ' драма..',
        ' пригоди...',
        ' фентазі...',
        ' детектив...',
        ' класика...',
        ' трилер...',
    ];

    function getRandomWord() {
        const randomIndex = Math.floor(Math.random() * randomWords.length);
        return randomWords[randomIndex];
    }

    searchInput.value = getRandomWord();
});

document.addEventListener("DOMContentLoaded", function () {

    const booksData = [
        { img: "images/pitma.jpg", title: "Я бачу, вас цікавить пітьма", author: "Ілларіон Павлюк", price: "580₴", category: ["bestseller", "thriller", "fantasy"], description: "Київський кримінальний психолог Андрій Гайстер живе мирним життям, намагаючись загоїти шрами від пройдених війн. Він воював у Афганістані в складі Іноземного полку, а згодом і як доброволець на Сході України. Однак і цивільне життя завдає серйозних ударів, тож чоловік переживає дійсно важкі часи. Одного дня Андрій знаходить теку із матеріалами справи, які залишив колега з поліції Валера. Чоловік вирушає в забуте Богом село Буськів Сад, реальність якого викликає сумнів. Саме тут нещодавно зникла мала дівчинка. В Буськовому Саді водиться й маніяк Звір, який вже вбив кількох жителів. Втім, прибулий з Києва з подивом виявляє, що селяни заперечують існування злочинця. Ба більше, місцевий дільничий вперше бачить теку з документами цієї справи. Андрій вирішує шукати дівчину й вірить, що вона досі жива. Супроти нього — таємниця цієї місцини й жахи байдужості. Психолог зустріне матір загубленої дитини, яку знають всі. Наступного дня вона зникає. Ніхто не може згадати ні жінку, ні доньку. Непоборна чортівня коїться у Буськовому Саді, ще й колега Валера не відповідає на дзвінки… Втім, як каже автор, це доволі реалістична місцина з усіма «принадами» похмурого життя провінції. Вулиці непривітні, повні закинутих хат, а мешканці приховують страшні думки й вчинки. Ніхто не чекає на весну, а на зло людям, звиклим до вічної пітьми, байдуже." },
        { img: "images/blagoslov.jpg", title: "Благословення Небесного Урядника", author: "Мосян Тонсьов", price: "320₴", category: ["fantasy", "new"], description: "Сє Лянь, спадкоємний принц процвітаючого королівства Сяньле, відомий своєю красою та силою, здобуває божественний статус завдяки рокам наполегливої праці та добрих справ. Але шлях до слави сповнений випробувань, і його зірковий шлях обривається — він падає з небес у світ смертних. Через вісімсот років Сє Лянь втретє стає небесним урядником, наражаючи себе на гнів інших небожителів. Щоб відновити свою репутацію, його відправляють полювати на привидів і духів, що загрожують світу смертних. У цій небезпечній подорожі він зустрічає загадкового Саньлана — молодого чоловіка, який одразу зачаровує його своєю надзвичайною харизмою. Що приховує усмішка Саньлана, і чи може він бути кимось іще, ніж просто компаньйоном у подорожах? Розкрийте таємниці богів, заглиблюючись у це захопливе китайське фентезі про обов’язок, силу духу та кохання, укорінені у філософії та традиціях Древнього Китаю. Ця історія стане справжньою насолодою та не залишить байдужими всіх, хто цінує магічні світи, де на кожному кроці чекає нове загадкове випробування."  },
        { img: "images/vkinzi.jpg", title: "Вони обидва помруть у кінці", author: "Адам Сільвера", price: "365₴", category: ["fantasy", "new"], description: "Що ви зробите, дізнавшись, що жити вам залишилось один день? 5 вересня, трохи за опівніч, Матео Торрезу й Руфусу Еметеріо телефонують із «Вісників Смерті», щоб повідомити погану новину: сьогодні вони помруть. Матео й Руфус незнайомі. Вони знаходять один одного в спеціальному застосунку «Останній Друг» і зустрічаються для великої пригоди — прожити ціле життя за один день. Адам Сільвера нагадує: не буває життя без смерті, а любові — без втрати. Це наснажлива історія про людей, чиє життя змінюється за один незабутній день." },
        { img: "images/rekviik.jpg", title: "Рейк'явік. Нордичний детектив", author: "Раґнар Йонассон", price: "350₴", category: ["detective"], description: "Ісландія, 1956 рік. П’ятнадцятирічна Лаура вирішує провести літо, працюючи в однієї пари на маленькому острові Відей, що неподалік від узбережжя Рейк'явіка. На початку серпня дівчинка безслідно зникає. Минає час, і ця таємниця стає найганебнішою нерозкритою справою в Ісландії. Що сталося з дівчиною? Чи є шанс знайти її живою? Чи, можливо, вона просто покинула острів? Тридцять років по тому, коли місто Рейк'явік святкує своє 200-річчя, журналіст Валь Робертссон починає власне розслідування справи Лаури. Але в міру того, як він наближається до розкриття загадкового зникнення, стає зрозуміло, що зникнення Лаури — це таємниця, яку хтось уперто хоче залишити нерозгаданою..." },
        { img: "images/simchol.jpg", title: "Сім чоловіків Евелін Г’юґо", author: "Тейлор Дженкінс Рід", price: "270₴", category: ["bestseller", "drama"] , description: "Монік Грант – нікому невідома репортерка легендарного журналу «Vivant». Одного ранку її бос Френкі повідомляє, що піарники Евелін Г’юго - легенда кіно й світська левиця 60–х —  запросили ексклюзивне інтерв’ю для акторки. Для цього з невідомих причин зірка обирає саме Монік і відхиляє пропозиції розмови з більш професійними й іменитими журналістами. Ба більше, це буде не просто невеликий матеріал з приводу 12 найбільш пам’ятних суконь, які Г’юго виставила на аукціон. Вона хоче розповісти всю історію свого життя. У наступні дні загадкова Евелін все розповідає Монік. Акторка веде її своїм життям дівчинки з сім’ї кубінських емігрантів, розповідає, якою ціною здобувала славу - і нарешті розкриває таємницю того, хто ж був коханням усього її життя. Адже чоловіків Евелін Г’юго мала цілих сім! За привабливим фасадом загадкової білявки прихована історія жінки, що пройшла вогонь і воду домашнього насильства, шлюбі за розрахунком, складних стосунків зі своєю ідентичністю та багато інших карколомних моментів, на які ви точно не очікуєте. Евелін хоче розкрити світу правду про себе, а також щоб Монік отримала якомога більшу суму гонорару за написання цієї біографії. Акторка впевнена: Грант матиме всі підстави ненавидіти її, коли дізнається, чому ж обрали саме її для цього легендарного інтерв’ю."},
        { img: "images/vzilili.jpg", title: "Вцілілий", author: "Чак Поланік", price: "300₴", category: ["new"], description: "Тендер Бренсон - єдиний вцілілий член сектантської общини. Щоб розповісти свою історію, він захоплює порожній Boeing-747 і перед неминучою катастрофою відкриває душу «чорному ящику». Вихований у жорстокому та ізольованому культі, Тендер, як і всі молодші сини Крідеш, виконував обов’язки домашнього слуги. Після масового суїциду одновірців Тендер раптово стає знаменитістю. Як самопроголошений «месія» він несподівано опиняється на вершині слави, ставши символом для мільйонів, і перетворює своє життя на неймовірний медіа-проєкт. Але що вище він підноситься, то ясніше усвідомлює, що губить межу між реальністю і вигаданим образом..." },
        { img: "images/shistvoroniv.jpg", title: "Шістка воронів", author: "Лі Бардуґо", price: "420₴", category: ["fantasy"], description: "Ласкаво просимо до Кеттердаму — міста, де вирують інтриги, змови та торгівля. За відповідну плату тут можна продати та купити все. Казу Бреккеру це добре відомо, але щоб отримати потрібне він користується дещо іншими методами. Юному злочинному генію випала можливість здійснити зухвале викрадення, яке назавжди змінить його життя. Та самому йому не впоратися, тож Каз збирає компанію таких як він покидьків: смертоносну шпигунку, азартного стрілка, колишнього мисливця на відьом, Серцетлумачницю та крамаря, що знається на вибухівці. Разом у них є шанси вижити. Звичайно, якщо до цього вони не повбивають одне одного… " },
        { img: "images/biyclub.jpg", title: "Бійцівський клуб", author: "Чак Паланік", price: "345₴", category: ["thriller"], description: "В основу твору автор поклав розповідь одного страхового агента з США. Ім’я героя не вказується, тому його називають Оповідач. Персонаж страждає тривалим безсонням і депресією від одноманітності власного життя. Намагаючись вирішити цю проблему, герой потрапляє у підпільний клуб єдиноборств, де можна згадати про свою чоловічу сутність і виплеснути енергію. З часом філії такого підпільного об’єднання виникають і у інших містах. Але не тільки жорстокі бійки пропонує читачеві твір. Автор піднімає тему фемінізації чоловічої половини. Велика кількість розлучень призводить до того, що хлопчики виховуються жінками, а потім втрачають мужність. З цією темою тісно переплітається й інша соціальна проблема — сучасне суспільство виховує покоління споживачів. Отримання матеріальних благ стає основним мотивом у житті людини." },
        { img: "images/tanzizkist.jpg", title: "Танці з кістками", author: "Андрій Сем’янків", price: "380₴", category: ["thriller"], description: "Знайомтесь — це 42-річний патологоанатом-невдаха Северин. Працює він в жахливих, а проте класичних умовах державної установи: в забутому Богом підвалі лікарні, отримує за це копійки. Колеги його не поважають, а нудна й примітивна дівчина манікюрниця Люда, у квартирі якої чоловік живе, хоче нарешті одружитися й завести дитину. Їздить він на її ж машині «Ланосі». Северин розлучений. Колишня родина розвалилась через його проблеми з алкоголем і грошима. Дружина вийшла заміж за іноземця, а сину сказала, що батько вмер. Северин блукає зачарованим колом бідності й нарешті знаходиться шлях з нього вибратись: щоправда, кримінальний - це чорний ринок трансплантації органів. Перші «замовлення» вимагають невеликого компромісу з совістю, але далі домовлятись зі своїм сумлінням доводиться довше. Підставити, продати цілий орган спочатку мертвої, потім живої людини, підробити медичний висновок, організувати напад, а врешті решт вбити самому.Сем’янків занурює нас у психологію моральних виборів героїв, що працюють зовсім близько зі смертю й криміналом. Втім, Северин — це не кіношний персонаж, який є уособленням абсолютного зла. На перший погляд, він нормальна людина. Так, незадоволена життям, однак має почуття гумору, може іноді співчувати й за потреби рятує життя своїми медичними знаннями. Лиха сторона героя починає проявлятися в стані алкогольного сп’яніння, а світ стертих меж криміналу проливає на неї світло вповні.  Автор досягає непересічної майстерності в розумінні психології людини, що йде на поступки совістю заради грошей. Він не моралізує й не нав’язує висновків — це дозволить читачеві винести з історії своє." },
        { img: "images/americanpsihopat.jpg", title: "Американський психопат", author: "Брет Істон Елліс", price: "340₴", category: ["thriller"], description: "Заможний банкір з Волл-стріт Патрік Бейтмен перебуває на вершині світу в Штатах кінця 1980-х років. Він обідає в найкращих ресторанах зі своїми такими ж заможними друзями. Будь-яка розкішна жінка може стати його. Патрік має найкращий одяг і все найновіше. Чоловік завжди знає, що потрібно сказати, а думки, які він висловлює — правильні й соціально відповідальні. Скажімо, зі своїми товаришами Патрік ділиться роздумами про те, що країна має припинити апартеїд, контролювати епідемію СНІДу, розвивати кращу медицину для літніх людей, протистояти расовій дискримінації і захищати громадянські права. За цією личиною ідеального джентльмена зі свідомими поглядами на світ і приємними друзями ховається хтось зовсім інший.Розважливий і чарівний чоловік, за якого Патріка приймають — це лише декорація. Те, що інші приймають за ввічливість є майже демонічною здатністю читати інших і визначати, що ті хочуть почути. Маска вдаваної доброзичливості Бейтмена швидко злітає за найменшої провокації чи невеликої проблеми. Він абсолютно ненавидить своїх друзів, а особливо найкращого друга Тімоті. Будь-яке захоплення, яке він отримує від переслідування жінки, зникає, коли він здобуває бажану владу над нею у вигляді грубого статевого акту, що перетікає в насильство." },
        { img: "images/bezzorn.jpg", title: "Беззоряне море", author: "Ерін Морґенштерн", price: "320₴", category: ["adventures"], description: "Закарі Езра Роулінз — звичайний студент, що живе в університетському містечку у Вермонті. Та якось йому до рук потрапляє загадкова книжка із запилюженої полиці бібліотеки. Затамувавши дух, Закарі гортає сторінку за сторінкою, захоплений долею нещасних закоханих, коли стикається з геть несподіваним — історією з власного дитинства. Дивна книжка розбурхує його уяву, тож він вирішує розкрити її таємницю. Подорож, сповнена неочікуваних пригод, поступово приводить його на маскарад у Нью-Йорку, до секретного клубу та підпільної бібліотеки, схованих глибоко під землею. Хлопець зустріне тут тих, хто пожертвував усім заради цього сховища. Але на нього полюють і хочуть знищити. Разом з Мірабель, безстрашною захисницею цього світу, і Доріаном, чоловіком, у вірності якого ніхто не може бути впевненим, Закарі мандрує звивистими тунелями, темними сходами й танцювальними залами, щоб дізнатися нарешті про справжнє призначення цього царства і про свою долю." },
        { img: "images/1984kolhosp.jpg", title: "1984. Колгосп тварин", author: "Джордж Орвелл", price: "450₴", category: ["classic"], description: "«1984» (337 с.) – роман вважається одним із найвідоміших творів у жанрі антиутопії, що попереджає про загрозу тоталітаризму. Був написаний в 1940 році, але він має неабияку актуальність і сьогодні. Вінстон Сміт - рядовий працівник Міністерства Правди, яке займається постійним оновленням і переписуванням історії. Він живе у світі подвійних стандартів, де все контролює Поліція Думок, що забороняє мислити, і Міністерство Любові, що завдає болю. Абсурдна реальність, життя за шаблоном, карбовані кроки у колонах однакових сірих особистостей. І в тебе немає шансу зробити крок убік. Ти під наглядом. Завжди і скрізь. Старший Брат пильнує за тобою. «Колгосп тварин» (127 с.) - у відносно короткому творі (близько 100 сторінок) проводиться паралель з диктатурою у Радянському Союзі, яка виникла у 1917—1922 роках. За словами Орвелла, «Колгосп тварин» відображає події, що призвели до російської революції 1917 року, а потім до сталінської епохи (1927—1953) в Радянському Союзі. До них відносяться також корупція, недалекоглядність, байдужість, неуцтво та терор. Одного ранку фермер Джонс забуває нагодувати худобу. І тоді тварини вирішують, що настав час підняти повстання. На чолі зі свинями Наполеоном і Сноуболлом вони виганяють Джонса з ферми. Свині встановлюють свою владу і проголошують Сім Заповідей. Але день за днем у серцях інших тварин зріє сумнів: а чи справді всі вони рівні? Можливо, серед них є ті, які вважають себе рівнішими за інших?.." },
        { img: "images/djenyeyr.jpg", title: "Шарлотта Бронте", author: "Джейн Ейр", price: "800₴", category: ["classic"], description: "Написана в середині дев’ятнадцятого сторіччя, ця історія не втратила популярності й донині. Вона підкорює чимраз більше сердець, захоплює читачів і спонукає їх зазирнути в таємницю кохання. Джейн Ейр — сирота, якої зреклася рідна тітка, віддавши на виховання в притулок. Едвард Рочестер — заможний англійський аристократ, що володіє двома великими, хоч і похмурими на вигляд маєтками — Торнфілд-холом та Ферндіном. І Джейн, і Едвард шукають свого щастя. Вона — у малому світі, який видається їй безмежно широким, а він — у широкому, проте, на його думку, безмежно малому. Одного дня герої зустрічаються, а згодом між ними спалахує щире, пристрасне почуття, яке змінює їхні долі та змушує стрепенутись і безрадісний Торнфілд-хол, і ще понуріший Ферндін. Але на шляху в закоханих стають минулі помилки й теперішні умовності. Чи здатна їхня незрадлива любов здолати ті всі перешкоди?" },
        { img: "images/shodi.jpg", title: "Сходи, що кричать", author: "Джонатан Страуд", price: "375₴", category: ["fantasy, adventures"], description: "" },
        { img: "images/goodomens.jpg", title: "Добрі передвісники", author: "Террі Пратчетт, Ніл Ґейман", price: "320₴", category: ["fantasy"], description: "Як каже нам книга \"Вичерпних та ґрунтовних пророцтв Агнеси Оглашенної\" (а цій книзі треба вірити, бо це єдина у світі книга пророцтв, що справджуються), кінець світу прийде в суботу. Якщо точніше, то оцієї суботи, що на наступному тижні. Якраз перед вечерею. Добро та Зло збирають армії, жаби проливаються дощем, Атлантида піднімається з морських глибин… Усе було б згідно із задумом Божим, якби не двійко незвичайних союзників: вибагливий янгол-букініст та стильний демон-авантюрист. Обидва живуть серед смертних від Самого Початку, і таке життя їм вельми до вподоби - тож вони не горять бажанням попрощатися із таким звичним світом. А ще, здається, хтось загубив Антихриста…" },
        { img: "images/shodenniki.jpg", title: "Щоденники", author: "Франц Кафка", price: "200₴", category: ["classic"], description: "Знаменитий австрійський письменник Франц Кафка (1883—1924), автор всесвітньо відомих романів «Замок», «Процес», «Америка», що вийшли друком у видавництві «Фоліо», є визнаним новатором у прозі XX століття. Самотність і відчуженість, які письменник відчував у своєму житті, можливо, й змусили його писати щоденник. Кафка розпочав його 1910 року і вів — іноді з тривалими перервами — до 1923-го. Це довга розповідь про себе, про власні переживання, роздуми про літературу, в яких письменник подеколи виступає рецензентом власних творів. Самотній і незрозумілий близьким, Кафка загруз у своєму внутрішньому світі. Він ніби підживлюється усім негативом, що його оточує. На сторінках щоденника — день за днем, місяць за місяцем — постає справжня дуже самотня і незрозуміла навіть своїм близьким людина. До видання увійшли щоденникові записи, зроблені Францом Кафкою у 1910—1912 роках." } 
    ];

    const categories = [
        { name: "Всі книги", filter: "all"},
        { name: "Новинки", filter: "new" },
        { name: "Хіт продаж", filter: "bestseller" },
        { name: "Фентазі", filter: "fantasy", rating: "2" },
        { name: "Детектив", filter: "detective", rating: "4" },
        { name: "Драма", filter: "drama", rating: "3" },
        { name: "Пригоди", filter: "adventures", rating: "3" },
        { name: "Класика", filter: "classic", rating: "2" },
        { name: "Трилер", filter: "thriller", rating: "5" }
    ];

    const booksContainer = document.getElementById("bookcontainer");
    const loadMoreBtn = document.getElementById("loadMoreBtn");
    const filterContainer = document.getElementById("filter-container");
    const sidebar = document.getElementById("sidebar");
    const priceSlider = document.getElementById('priceRange');  
    const priceValue = document.getElementById('priceValue');  
    let openButton = null;
    let booksLoaded = 0;
    const booksPerLoad = 3;
    let maxPrice = Infinity;
    
    // Генерація фільтрів
    if (filterContainer) {
        categories.forEach(category => {
            const button = document.createElement('button');
            button.classList.add('filter-btn');
            button.setAttribute('data-filter', category.filter);
            button.textContent = category.name;
    
            button.addEventListener('click', () => {
                document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                displayBooks(category.filter);
            });
    
            filterContainer.appendChild(button);
        });
    }

        // Робимо першу кнопку активною
        const allBooksButton = document.querySelector('.filter-btn[data-filter="all"]');
        if (allBooksButton) {
            allBooksButton.classList.add('active');
            displayBooks('all');
        }

    // Функція побудови графіка
    let doughnutChart, barChart, radarChart;

function createChart() {
    const filteredCategories = categories.filter(category =>
        category.filter !== "all" &&
        category.filter !== "new" &&
        category.filter !== "bestseller"
    );

    const sortedCategories = filteredCategories.sort((a, b) => parseInt(b.rating) - parseInt(a.rating));
    const xValues = sortedCategories.map(category => category.name);
    const yValues = sortedCategories.map(category => parseInt(category.rating));
    const barColors = [
        "#b91d47", "#00aba9", "#2b5797", "#e8c3b9", "#1e7145", "#ff9900", "#9900cc"
    ];

    // Doughnut
    const doughnutCtx = document.getElementById("myChartDoughnut").getContext("2d");
    doughnutChart = new Chart(doughnutCtx, {
        type: "doughnut",
        data: {
            labels: xValues,
            datasets: [{
                backgroundColor: barColors,
                data: yValues
            }]
        },
        options: {
            title: {
                display: true,
                text: "Doughnut: Рейтинг жанрів"
            }
        }
    });

    // Bar
    const barCtx = document.getElementById("myChartBar").getContext("2d");
    barChart = new Chart(barCtx, {
        type: "bar",
        data: {
            labels: xValues,
            datasets: [{
                label: "Рейтинг",
                backgroundColor: barColors,
                data: yValues
            }]
        },
        options: {
            title: {
                display: true,
                text: "Bar: Рейтинг жанрів"
            }
        }
    });

    // Radar
    const radarCtx = document.getElementById("myChartRadar").getContext("2d");
    radarChart = new Chart(radarCtx, {
        type: "radar",
        data: {
            labels: xValues,
            datasets: [{
                label: "Рейтинг",
                backgroundColor: "rgba(0,123,255,0.2)",
                borderColor: "rgba(0,123,255,1)",
                pointBackgroundColor: "rgba(0,123,255,1)",
                data: yValues
            }]
        },
        options: {
            title: {
                display: true,
                text: "Radar: Рейтинг жанрів"
            },
            scale: {
                ticks: {
                    beginAtZero: true
                }
            }
        }
    });
}
    
    // Функція оновлення графіка
    function updateChart() {
        if (doughnutChart) doughnutChart.destroy();
        if (barChart) barChart.destroy();
        if (radarChart) radarChart.destroy();
        createChart();
    }
    
    // Викликаємо графік при старті
    createChart();
    
    // Відображення книг
    function displayBooks(filter = "all") {
        const filteredBooks = booksData.filter(book =>
            (filter === "all" || book.category.includes(filter)) &&
            parseFloat(book.price) <= maxPrice
        );
    
        booksLoaded = 0;
        booksContainer.innerHTML = '';
    
        filteredBooks.slice(0, booksPerLoad).forEach(book => {
            createBookCard(book);
            booksLoaded++;
        });
    
        loadMoreBtn.style.display = (filteredBooks.length > booksPerLoad) ? "inline-block" : "none";
    }
    
    // Створення картки книги
    function createBookCard(book) {
        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");
    
        bookCard.innerHTML = `
            <img src="${book.img}" alt="Book Cover">
            <div class="book-info">
                <p class="book-title">${book.title}</p>
                <p class="book-author">${book.author}</p>
                <span class="book-price">${book.price}</span>
            </div>
        `;
    
        const buttonsContainer = document.createElement("div");
        buttonsContainer.classList.add("book-actions");
    
        // Кнопка "у кошик"
        const cartBtn = document.createElement("button");
        cartBtn.classList.add("cart-btn");
        cartBtn.innerHTML = '<img src="images/cart.svg" alt="Cart" />';
        cartBtn.addEventListener("click", function () {
            const bookToAdd = {
                title: book.title,
                author: book.author,
                price: book.price,
                img: book.img,
                quantity: 1
            };
        
            let cart = localStorage.getItem('cart');
            cart = cart ? JSON.parse(cart) : [];
        
            const existingBook = cart.find(item => item.title === bookToAdd.title);
        
            if (existingBook) {
                existingBook.quantity += 1;
                alert(`Кількість книги "${bookToAdd.title}" у кошику збільшено.`);
            } else {
                cart.push(bookToAdd);
                alert(`Книга "${bookToAdd.title}" додана до кошика!`);
            }
        
            localStorage.setItem('cart', JSON.stringify(cart));
        
            if (Array.isArray(book.category)) {
                book.category.forEach(catFilter => {
                    const categoryObj = categories.find(cat => cat.filter === catFilter);
                    if (categoryObj) {
                        categoryObj.rating = parseInt(categoryObj.rating) + 1;
                    }
                });
            } else {
                const categoryObj = categories.find(cat => cat.filter === book.category);
                if (categoryObj) {
                    categoryObj.rating = parseInt(categoryObj.rating) + 1;
                }
            }
            
            updateChart(); 
            
        });
    
        // Кнопка "деталі"
        const detailsBtn = document.createElement("button");
        detailsBtn.classList.add("details-btn");
        detailsBtn.innerHTML = '<img src="images/arrow.svg" alt="Details" />';
        detailsBtn.addEventListener("click", function () {
            const isSidebarOpen = sidebar.classList.contains("open");
            const isSameButton = this === openButton;
    
            if (isSidebarOpen && isSameButton) {
                closeSidebar();
                openButton = null;
            } else {
                openSidebar(book.title, book.author, book.price, book.img, book.description);
                openButton = this;
            }
        });
    
        buttonsContainer.appendChild(cartBtn);
        buttonsContainer.appendChild(detailsBtn);
        bookCard.appendChild(buttonsContainer);
        booksContainer.appendChild(bookCard);
    }
    
    // Load more
if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", function () {
        const activeFilter = document.querySelector(".filter-btn.active").getAttribute("data-filter");
        const filteredBooks = booksData.filter(book =>
            (activeFilter === "all" || book.category.includes(activeFilter)) &&
            parseFloat(book.price) <= maxPrice
        );

        const newBooksToLoad = filteredBooks.slice(booksLoaded, booksLoaded + booksPerLoad);
        newBooksToLoad.forEach(book => {
            createBookCard(book);
            booksLoaded++;
        });

        if (booksLoaded >= filteredBooks.length) {
            loadMoreBtn.style.display = "none";
        }
    });
}
    // Фільтр ціни
    if (priceSlider && priceValue) {
        // Початкове значення
        priceValue.textContent = `${priceSlider.value} грн`;
    
        priceSlider.addEventListener("input", () => {
            maxPrice = parseFloat(priceSlider.value);
            priceValue.textContent = `${maxPrice} грн`;
    
            const activeFilter = document.querySelector(".filter-btn.active")?.getAttribute("data-filter") || "all";
            displayBooks(activeFilter);
        });
    }
    
    // Початковий запуск фільтрації
    displayBooks();

    // Popup
    const popup = document.getElementById("popup-ad");
    const closeBtn = document.querySelector(".close-btn");
    const claimOfferBtn = document.getElementById("claim-offer");

    if (closeBtn) {
        closeBtn.addEventListener("click", () => popup.style.display = "none");
    }

    if (claimOfferBtn) {
        claimOfferBtn.addEventListener("click", () => {
            alert("🎉 Ваша знижка активована! Використовуйте код: BOOK20");
            popup.style.display = "none";
        });
    }

    // Початковий запуск фільтрації
    displayBooks(); 
});

function closePopup() {
    const popup = document.getElementById("popup-ad");
    popup.style.display = "none";  
}

function openSidebar(title, author, price, img, description) {
    const sidebar = document.getElementById("sidebar");

    document.getElementById("sidebar-title").textContent = title;
    document.getElementById("sidebar-author").textContent = "Автор: " + author;
    document.getElementById("sidebar-price").textContent = "Ціна: " + price;
    document.getElementById("sidebar-img").src = img;
    document.getElementById("sidebar-description").textContent = description;
    sidebar.classList.add("open");
}

function closeSidebar() {
    document.getElementById("sidebar").classList.remove("open");
}

const charts = document.querySelectorAll('.small-chart');

charts.forEach(chart => {
    chart.addEventListener('mouseenter', () => {
        chart.style.opacity = '1'; 
    });
    
    chart.addEventListener('mouseleave', () => {
        chart.style.opacity = '0'; 
    });
});

