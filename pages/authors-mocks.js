const authors = [
`Atenton`,
`Rising John`,
`Topolina Carina`,
`Абакумова Валерия`,
`Аблова Мария`,
`Абрамов Федор`,
`Авадов Константин`,
`Август Сергей`,
`Аверинцев Сергей`,
`Аверченко Аркадий`,
`Автушкин Виктор`,
`Адельгейм Павел, протоиерей`,
`Акишина Валентина`,
`Аксаков Константин`,
`Акутагава Рюноскэ`,
`Александров Виктор`,
`Александров Кирилл`,
`Алексиевич Светлана`,
`Алешин Алексей`,
`Альшиц Даниил`,
`Амфитеатров Александр`,
`Андреев Леонид`,
`Андронаке Ион`,
`Аргентова Мария`,
`Арефьева Ольга`,
`Астафьев Виктор`,
`Афанасьев Николай, протопресвитер`,
`Ашков Георгий, протоиерей`,
`Бабель Исаак`,
`Баркова Анна`,
`Барнс Джулиан`,
`Баскаков Вячеслав, протоиерей`,
`Батюшка Лютер`,
`Башкирова Екатерина`,
`Белинский Виссарион`,
`Белов Василий`,
`Белов Илья`,
`Белоиван Лора`,
`Белоус Андрей, диакон`,
`Белоусов Кирилл`,
`Белый Андрей`,
`Белюстин Иоанн, священник`,
`Беляев Федор`,
`Беляева Лариса`,
`Бердник Эдуард`,
`Бердяев Николай`,
`Берман Андрей, священник`,
`Бернанос Жорж`,
`Бибихин Владимир`,
`Блинов Станислав`,
`Блок Александр`,
`Блохин Николай`,
`
Бум Антоний, митрополит`,
`Боголюбов Дмитрий, протоиерей`,
`Бондин Алексей`,
`Бонхеффер Дитрих`,
`Борискин Алексий, протоиерей`,
`Борхес Хорхе Луис`,
`Бочаров Александр, Чернышев Андрей`,
`Брайсон Билл`,
`Бровкович Никанор, архиепископ`,
`Бродская Ирина`,
`Брэдбери Рэй`,
`Булгаков Михаил`,
`Булгаков Сергий, протоиерей`,
`Бурдина Елена`,
`Буткин Николай, протоиерей`,
`бывший мирянин Владимир`,
`Быков Василь`,
`Вайсбурд Дмитрий`,
`Василевич Наталья`,
`Вассерман Авигдор`,
`Васюнов Максим`,
`Вейль Симона`,
`Вересаев Викентий`,
`Виннер Дмитрий`,
`Винников Вячеслав, протоиерей`,
`Виноградов Николай, протоиерей`,
`Винокур Семен`,
`Вишневский Януш`,
`Владимиров Егор`,
`Владимов Георгий`,
`Войнович Владимир`,
`Волгин Владимир`,
`Волков Олег`,
`Волков Сергей`,
`Волкова Елена`,
`Волконский Сергей`,
`Волосов Дмитрий`,
`Вольтер`,
`Волянская Ксения`,
`Воронков Павел`,
`Воскресенский Владимир`,
`Гаврилкин Константин`,
`Гаврилко Вера`,
`Гальего Рубен`,
`Ганди Махатма`,
`Гвелесиани Наталья`,
`Георгиевский Евлогий, митрополит`,
`Герцен Александр`,
`Гершензон Михаил`,
`Гессе Герман`,
`Гиббон Эдвард`,
`Гиляровский Владимир`,
`Гиппиус Зинаида`,
`Глубоковский Николай`,
`Гнедич Петр`,
`Говорун Кирилл, архимандрит`,
`Головин Владислав`,
`Голубинский Евгений`,
`Гончаров Алексей`,
`Горбовский Олег, священник`,
`Горева Галина`,
`Горский Александр, протоиерей`,
`Горький Максим`,
`Гранин Даниил`,
`Гречанинов Эммануил, священник`,
`Григорьева Жанна`,
`Грин Грэм`,
`Грозовский Михаил`,
`Громов Максим`,
`Гуарески Джованнино`,
`Гунин Юрий`,
`Гурин Олег`,
`Гуров Юрий`,
`Гурченко Людмила`,
`Гусев-Оренбургский Сергей`,
`Гюго Виктор`,
`Давиденко Аввакум, архимандрит`,
`Давыдов Остап`,
`Давыдов Филипп`,
`Даймонд Джаред`,
`Дармс Ханиил`,
`Двойновский Степан`,
`Дельтаплан Анатолий`,
`Дементьев Леонид`,
`Демидова Анастасия Эли`,
`Деркач Татьяна`,
`Десницкий Андрей`,
`Дешнер Карлхайнц`,
`Диакон N`,
`Дмитриева Мария`,
`Дмитриевская Мария`,
`Дмитриевский Алексей`,
`Добролюбов Николай`,
`Добросоцких-Шлифер Алла`,
`Домбровский Александр, священник`,
`Дорошевич Влас`,
`Достоевский Федор`,
`Дробинская Евгения`,
`Дроздова Ольга`,
`Дубровский Артур, священник`,
`Дударев Андрей`,
`Дулуман Евграф`,
`Дума Борис, священник`,
`Дурылин Сергей`,
`Душеин Игнатий`,
`Дьяконова Елизавета`,
`Елабужский Михаил, протоиерей`,
`Елисеева Ирина`,
`Ельчанинов Александр, священник`,
`Еремин Никита`,
`Жданова Анна`,
`Желудков Сергий, священник`,
`Жигимонт Светлана`,
`Жураковский Анатолий, священник`,
`Завершинский Георгий, протоиерей`,
`Загорулько Любовь`,
`Зайцев Борис`,
`Замятин Евгений`,
`Занемонец Александр, диакон`,
`Зарипов Шамиль`,
`Заторский Назарий, священник`,
`Захарчук Сергей`,
`Зелинский Владимир, протоиерей`,
`Зеньковский Василий, протоиерей`,
`Зернов Николай`,
`Зиновьев Данила`,
`Зиновьева Агния`,
`Знаменский Иван`,
`Золя Эмиль`,
`Зорин Александр`,
`Зощенко Михаил`,
`Зубарев Сергей`,
`Зубов Андрей`,
`Зумышев Андрей`,
`Иванов Василий`,
`Иванов Иван, священник`,
`Иванов Федор`,
`Ивановская Елена`,
`Ивлиев Ианнуарий, архимандрит`,
`Илька Екатерина`,
`Ильф и Петров`,
`Илюкович Илья`,
`Ипатов Алексей`,
`Исидоров Роман`,
`Казаков Юрий`,
`Казандакис Никос`,
`Калинин Никита`,
`Калугина Наталья`,
`Камю Альбер`,
`Канин Иван`,
`Капоте Трумен`,
`Карпов Владимир`,
`Карпов Иван`,
`Карпова Нина`,
`Карташев Антон`,
`Карякин Юрий`,
`Касаткин Николай, архиепископ`,
`Катанский Александр`,
`Кацва Леонид`,
`Керн Киприан, архимандрит`,
`Керсновская Евфросиния`,
`Кикоть Мария`,
`Кириллова Ксения`,
`Кислый Антон`,
`Кисляков Спиридон, архимандрит`,
`Клевенская Елена`,
`Клевцов Павел`,
`Клеман Оливье-Морис`,
`Ключевский Василий`,
`Князев Георгий`,
`Ковалевский Иоанн-Нектарий, епископ`,
`Коваленко Георгий, протоиерей`,
`Коваль Юрий`,
`Коген Евгений`,
`Козак Марьяна`,
`Козырев Федор`,
`Козэль Ольга`,
`Кокорев Константин`,
`Коляда Николай`,
`Комаров Евгений`,
`Комарова Соня`,
`Копелев Лев`,
`Коржавин Наум`,
`Корнер Евстафий`,
`Корогодина Мария`,
`Короленко Владимир`,
`Король Вячеслав`,
`Коротков Егор`,
`Костомаров Николай`,
`Кошко Аркадий`,
`Кравцев Андрей`,
`Крамольный Савелий`,
`Краснов-Левитин Анатолий`,
`Кратиров Павел, епископ`,
`Криваковская Регина`,
`Кржижановский Сигизмунд`,
`Кронин Арчибальд`,
`Крюков Илья`,
`Крюков Федор`,
`Кубо Макс`,
`Кузнецов-Тулянин Александр`,
`Кузнецов Эдуард`,
`Кузьмина Александра`,
`Кулешов Сергей`,
`Куприн Александр`,
`Курзаков Олег`,
`Кухта Александр, священник`,
`Лавров-Платонов Алексий, архиепископ`,
`Лазорева Ольга`,
`Ларионов Дмитрий, священник`,
`Лебедев Алексей`,
`Лебедев Дмитрий`,
`Лейкин Николай`,
`Лем Станислав`,
`Лемастерс Филип, священник`,
`Леонтьев Константин`,
`Лесков Николай`,
`Ливанов Константин`,
`Линдстрем Фредрик`,
`Липатс Дитрих`,
`Лисицын Яков`,
`Лиходеева Анюта`,
`Лобделл Уильям`,
`Лосский Владимир`,
`Лосский Николай`,
`Лукина Татьяна`,
`Льюис Клайв`,
`Людоговский Федор, священник`,
`Люцер Эрвин`,
`Майданюк Владимир`,
`Макдональд Джордж`,
`Максимов Александр`,
`Максимов Сергей`,
`Малахов Максим`,
`Мамин-Сибиряк Дмитрий`,
`Мамлеев Юрий`,
`Марков Алексей`,
`Маркова Елизавета`,
`Мартынова Анна`,
`Марцинсковский Владимир`,
`Мастерков Алексей`,
`Мастеркова Анна`,
`Медведев Михаил`,
`Мейендорф Иоанн, протопресвитер`,
`Мелло де Энтони`,
`Менделеев Григорий`,
`Мень Александр, протоиерей`,
`Меньшиков Михаил`,
`Мережковский Дмитрий`,
`Мертон Томас`,
`Мечников Владимир`,
`Мещеринов Петр, игумен`,
`Миронов Александр`,
`Митин Сергий, священник`,
`Михнов-Вайтенко Григорий`,
`Молодов Валентин`,
`Монахиня L.`,
`Мопассан Ги де`,
`Моргунова Елена`,
`Морозов Александр`,
`Моруа Андре`,
`Мосин Алексей`,
`Москаленко Евгений`,
`Муранова Ксана`,
`Набоков Владимир`,
`Нагибин Юрий`,
`Некрасова Юлия`,
`Нелазский Иван`,
`Нефедов Григорий`,
`Николаев Владимир`,
`Николаев Роман`,
`Никольский Андроник, архиепископ`,
`Никольский Николай`,
`Никольский Павел`,
`Норкин Виктор`,
`Носов Евгений`,
`О. Генри`,
`Огульчанский Богдан, протоиерей`,
`О’Коннор Фланнери`,
`Орлова Ирина`,
`Орлова Мария`,
`Оруэлл, Джордж`,
`Осинцева Татьяна`,
`Осов Фил`,
`Отец Аллегорий`,
`Отец Олег`,
`Отец Пафнутий`,
`Павлов Георгий`,
`падре Сорель`,
`Панньяавудхо Топпер бхиккху`,
`Панфилов Артем`,
`Парфенов Михаил`,
`Парфенов Филипп, священник`,
`Пасечнюк Виктор, священник`,
`Петров Артем`,
`Петров Григорий, священник`,
`Петрова Антонина`,
`Петрушевская Людмила`,
`Печерин Владимир`,
`Пикалев Александр, священник`,
`Плужников Алексей`,
`Правдолюбов Валентин, диакон`,
`Приданцев Сергей`,
`Пристли Джон`,
`Пришвин Михаил`,
`Пришвина Валерия`,
`Проскуряков Андрей`,
`Прусский Павел, архимандрит`,
`Прядкина Ольга (Монахиня L.)`,
`Погасий Игорь`,
`Подосокорский Николай`,
`Подъяпольский Григорий`,
`Покровский Алексий, священник`,
`Полевая Мария`,
`Померанц Григорий`,
`Помяловский Николай`,
`Пономарев Евгений`,
`Пономарь С.`,
`Попов Андрей`,
`Поповская Елизавета`,
`Поспеловский Дмитрий`,
`Потапенко Игнатий`,
`Почиталин Владимир`,
`Пузырев Василий`,
`Пустынский Денис`,
`Радин Павел, священник`,
`Райт Том`,
`Ремез Анна`,
`Ремизов Алексей`,
`Родзянко Василий, епископ`,
`Розанов Александр, священник`,
`Розанов Вадим`,
`Розанов Василий`,
`Розенфельд Вадим`,
`Романов Пантелеймон`,
`Ртищев Федор, священник`,
`Румянцев Василий, священник`,
`Русина Елена`,
`Руссо Галина`,
`Савельев Сергей`,
`Саган Карл`,
`Салтыков-Щедрин Михаил`,
`Самеева Иаиль`,
`Санникова Елена`,
`Сараджишвили Мария`,
`Свенцицкий Валентин, протоиерей`,
`Свердлов Дмитрий, священник`,
`Светлов Петр`,
`Светов Феликс`,
`Свистоплясов Андрей, священник`,
`Священноинок Боголеп`,
`Седова Екатерина`,
`Семенов Михаил, епископ`,
`Сергеев Василий`,
`Сергеева Варвара`,
`Сергеенков Виталий`,
`Сергиев Иоанн, протоиерей (Иоанн Кронштадтский)`,
`Сестра Люк`,
`Сидорова Мария`,
`Синичкин Викентий`,
`Скайпов Евхаристий`,
`Сквирская Ольга`,
`Скворцова Анна`,
`Скобцова мать Мария`,
`Скоробогатов Александр`,
`Скорынин Игорь`,
`Скуратовская Наталия`,
`Слепакова Нонна`,
`Смоленский Виктор`,
`Солженицын Александр`,
`Соловьев Владимир`,
`Соловьев Илья, священник`,
`Солодовникова Валерия`,
`Сребрянский Митрофан, священник`,
`Ставрогин Феликс`,
`Стадницкий Арсений, митрополит`,
`Стариков Михаил`,
`Старковский Владимир`,
`Старостина Лина`,
`Степун Федор`,
`Судариков Виктор`,
`Суланга Елена`,
`Суханов Алексей`,
`Сычев Вячеслав`,
`Талантов Борис`,
`Тарабан Роман, священник`,
`Тарайкевич Маргарита`,
`Тарасов Александр`,
`Тареев Михаил`,
`Твен Марк`,
`Тер-Абрамянц Амаяк`,
`Терехин Александр, диакон`,
`Терехин Дмитрий, священник`,
`Ткаченко Ольга`,
`Толстой Илья`,
`Толстой Лев`,
`Травников Геннадий`,
`Третьякова Юлия`,
`Троицкий Сергей`,
`Труайя Анри`,
`Трубецкой Александр`,
`Тургенев Иван`,
`Тутынина Ольга`,
`Тыркова-Вильямс Ариадна`,
`Тэффи Надежда`,
`Уланова Ирина`,
`Усатов Александр, протоиерей`,
`Успенский Глеб`,
`Успенский Порфирий, епископ`,
`Ухтомский Андрей, архиепископ`,
`Уэллс Герберт`,
`Уэр Каллист, митрополит`,
`Уэст Моррис`,
`Фадеева Наталья`,
`Федорова Нина`,
`Федорова Татьяна`,
`Федотов Георгий`,
`Феодорит Киррский`,
`Фирсов Сергей`,
`Флоренский Павел, священник`,
`Франкл Виктор`,
`Фудель Иосиф, протоиерей`,
`Фудель Сергей`,
`Хаванская Татьяна`,
`Хаванский Алексей`,
`Харитонова Гелия`,
`Харрис Джоанн`,
`Хартофилакс`,
`Ходокайнен Наталья`,
`Чапнин Сергей`,
`Челноков Владимир`,
`Черникова Лариса`,
`Чернов Михаил`,
`Честертон Гилберт Кит`,
`Чехов Антон`,
`Чивильдеев Андрей`,
`Чистяков Георгий, священник`,
`Чичагов Серафим, митрополит`,
`Чудакова Мариэтта`,
`Чурбакова Елена`,
`Шавельский Георгий, протопресвитер`,
`Шаламов Варлам`,
`Шалберов Сергий, протодиакон`,
`Шаповалов Михей, иеромонах`,
`Шаронов Владимир`,
`Шаховской Иоанн, архиепископ`,
`Шекли Роберт`,
`Шелудько Михаил`,
`Шергин Борис`,
`Шестов Лев`,
`Шиманович Андрей, священник`,
`Шинкарев Владимир`,
`Ширяев Борис`,
`Шкаровский Михаил`,
`Шмелев Иван`,
`Шмеман Александр, протопресвитер`,
`Шолохов Михаил`,
`Шпаковская Нина`,
`Шполянский Михаил, протоиерей`,
`Шрамко Александр, священник`,
`Шугалей Антоний, священник`,
`Шукшин Василий`,
`Шульман Илья`,
`Щербачев Дмитрий`,
`Эдельштейн Георгий, протоиерей`,
`Экземплярский Василий`,
`Эко Умберто`,
`Эльберт Юрий`,
`Юферев Евгений`,
`Яблоновский Йозеф`,
`Якунин Глеб, священник`,
`Янышев Иоанн, протопресвитер`,
];

export default authors;