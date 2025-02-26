// Datos completos de babosas
const babosas = [
    {
        id: 1,
        nombre: "Babosa Infierno",
        imagen: "images/babosa_infierno.jpg",
        descripcion: "La Babosa Infierno es un tipo de babosa elemental de fuego. Cuando alcanza las 100 millas por hora, se transforma y puede lanzar bolas de fuego o crear paredes de llamas.",
        tipo: "Elemental",
        habitat: "Cavernas volcánicas y zonas con altas temperaturas en Bajoterra",
        poderes: "Genera y manipula fuego, crea explosiones, puede fundir metales y rocas, y crear barreras de fuego para protección.",
        compatibilidadDobleCañon: "Compatible con Babosa AquaBeek para crear vapor o con Babosa Congelada para crear contraposición térmica.",
        transformaciones: [
            {
                nombre: "Infierno",
                imagen: "images/infierno_transformacion.jpg",
                descripcion: "Puede lanzar poderosas bolas de fuego y crear paredes de llamas. Su temperatura puede alcanzar los 800°C."
            }
        ]
    },
    {
        id: 2,
        nombre: "Babosa Electroshock",
        imagen: "images/babosa_electroshock.jpg",
        descripcion: "La Babosa Electroshock es capaz de generar y disparar electricidad. Es una de las babosas elementales más poderosas y puede afectar equipos electrónicos.",
        tipo: "Elemental",
        habitat: "Cavernas con alta actividad electromagnética y cerca de cristales conductores",
        poderes: "Genera pulsos eléctricos, crea campos electromagnéticos, puede paralizar temporalmente a oponentes y sobrecargar maquinaria.",
        compatibilidadDobleCañon: "Compatible con Babosa AquaBeek para electrificar agua y con Babosa Tornado para crear tormentas eléctricas.",
        transformaciones: [
            {
                nombre: "Electroshock",
                imagen: "images/electroshock_transformacion.jpg",
                descripcion: "Puede generar y disparar rayos eléctricos con hasta 10,000 voltios y crear campos electromagnéticos que interfieren con equipos."
            }
        ]
    },
    {
        id: 3,
        nombre: "Babosa Congelada",
        imagen: "images/babosa_congelada.jpg",
        descripcion: "La Babosa Congelada puede congelar casi cualquier cosa en cuestión de segundos. Pertenece al elemento agua y reduce drásticamente la temperatura a su alrededor.",
        tipo: "Elemental",
        habitat: "Cavernas heladas y zonas con temperaturas bajo cero",
        poderes: "Congela objetos y superficies, crea estructuras de hielo, reduce la temperatura ambiental y puede crear barreras de hielo.",
        compatibilidadDobleCañon: "Compatible con Babosa Infierno para crear vapor o con Babosa Geoshard para crear cristales de hielo reforzados.",
        transformaciones: [
            {
                nombre: "Congelada",
                imagen: "images/congelada_transformacion.jpg",
                descripcion: "Capaz de congelar objetivos instantáneamente y crear estructuras de hielo que pueden soportar grandes pesos."
            }
        ]
    },
    {
        id: 4,
        nombre: "Babosa Carnero",
        imagen: "images/babosa_carnero.jpg",
        descripcion: "La Babosa Carnero es conocida por su gran fuerza y capacidad para derribar obstáculos. Es perfecta para abrir caminos o romper barreras.",
        tipo: "Común",
        habitat: "Zonas rocosas y montañosas de Bajoterra",
        poderes: "Embestir con gran fuerza, destruir barreras físicas, crear pequeños terremotos al impactar y perforar rocas.",
        compatibilidadDobleCañon: "Compatible con Babosa Trilladora para aumentar capacidad destructiva y con Babosa Granada para amplificar explosiones dirigidas.",
        transformaciones: [
            {
                nombre: "Carnero",
                imagen: "images/carnero_transformacion.jpg",
                descripcion: "Puede embestir con fuerza suficiente para atravesar muros de piedra de hasta 30 cm de grosor."
            }
        ]
    },
    {
        id: 5,
        nombre: "Babosa Trilladora",
        imagen: "images/babosa_trilladora.jpg",
        descripcion: "La Babosa Trilladora puede crear cortes con su cola afilada. Es útil para cortar materiales duros y crear aberturas precisas.",
        tipo: "Común",
        habitat: "Cavernas con vegetación densa y zonas con minerales afilados",
        poderes: "Cortar casi cualquier material con su cola afilada, realizar cortes precisos y crear aberturas en estructuras.",
        compatibilidadDobleCañon: "Compatible con Babosa Tornado para crear corrientes cortantes y con Babosa Carnero para corte y demolición combinados.",
        transformaciones: [
            {
                nombre: "Trilladora",
                imagen: "images/trilladora_transformacion.jpg",
                descripcion: "Su cola afilada puede cortar metales, rocas y otros materiales resistentes con precisión quirúrgica."
            }
        ]
    },
    {
        id: 6,
        nombre: "Babosa Geoshard",
        imagen: "images/babosa_geoshard.jpg",
        descripcion: "La Babosa Geoshard puede crear cristales que crecen rápidamente. Útil para crear barreras, trampas y estructuras defensivas.",
        tipo: "Poco común",
        habitat: "Cavernas de cristal y zonas ricas en minerales cristalinos",
        poderes: "Crear formaciones de cristal, disparar fragmentos afilados, construir estructuras cristalinas y crear prismas que desvían la luz.",
        compatibilidadDobleCañon: "Compatible con Babosa Congelada para crear cristales de hielo ultra resistentes y con Babosa Fosforo para crear cristales brillantes.",
        transformaciones: [
            {
                nombre: "Geoshard",
                imagen: "images/geoshard_transformacion.jpg",
                descripcion: "Capaz de crear estructuras de cristal que pueden soportar varias toneladas de presión y disparar fragmentos afilados como proyectiles."
            }
        ]
    },
    {
        id: 7,
        nombre: "Babosa Negasombra",
        imagen: "images/babosa_negasombra.jpg",
        descripcion: "La Babosa Negasombra es capaz de crear zonas de oscuridad total. Es perfecta para escapes y emboscadas, creando confusión entre los oponentes.",
        tipo: "Rara",
        habitat: "Las cavernas más profundas y oscuras de Bajoterra, donde la luz natural no llega",
        poderes: "Crear campos de oscuridad absoluta, moverse entre sombras, causar desorientación en oponentes y camuflarse en la oscuridad.",
        compatibilidadDobleCañon: "Compatible con Babosa Bengala para crear efectos de luz y sombra desorientadores y con Babosa Fosforo para crear ilusiones.",
        transformaciones: [
            {
                nombre: "Negasombra",
                imagen: "images/negasombra_transformacion.jpg",
                descripcion: "Puede crear campos de oscuridad que absorben toda la luz y moverse entre las sombras a velocidades increíbles."
            }
        ]
    },
    {
        id: 8,
        nombre: "Babosa AquaBeek",
        imagen: "images/babosa_aquabeek.jpg",
        descripcion: "La Babosa AquaBeek puede disparar chorros de agua a alta presión. Es una babosa elemental de agua capaz de crear corrientes y pequeñas inundaciones.",
        tipo: "Elemental",
        habitat: "Lagos subterráneos y ríos de Bajoterra, generalmente en zonas húmedas",
        poderes: "Disparar chorros de agua a alta presión, crear pequeñas olas, manipular corrientes de agua y respirar bajo el agua.",
        compatibilidadDobleCañon: "Compatible con Babosa Electroshock para electrificar agua y con Babosa Infierno para crear nubes de vapor cegadoras.",
        transformaciones: [
            {
                nombre: "AquaBeek",
                imagen: "images/aquabeek_transformacion.jpg",
                descripcion: "Dispara potentes chorros de agua con presión suficiente para cortar madera y puede crear olas pequeñas que derriban oponentes."
            }
        ]
    },
    {
        id: 9,
        nombre: "Babosa Bengala",
        imagen: "images/babosa_bengala.jpg",
        descripcion: "La Babosa Bengala puede iluminar áreas oscuras y cegar temporalmente. Útil para exploración y para crear distracciones en combate.",
        tipo: "Común",
        habitat: "Cavernas luminosas con hongos bioluminiscentes y cristales reflectantes",
        poderes: "Emitir luz brillante, cegar temporalmente a oponentes, señalizar posiciones y disipar áreas de oscuridad.",
        compatibilidadDobleCañon: "Compatible con Babosa Negasombra para crear efectos de luz y sombra y con Babosa Geoshard para refractar luz en múltiples direcciones.",
        transformaciones: [
            {
                nombre: "Bengala",
                imagen: "images/bengala_transformacion.jpg",
                descripcion: "Emite luz brillante que puede iluminar cavernas enteras o producir destellos tan intensos que ciegan temporalmente."
            }
        ]
    },
    {
        id: 10,
        nombre: "Babosa Tornado",
        imagen: "images/babosa_tornado.jpg",
        descripcion: "La Babosa Tornado puede generar fuertes vientos y pequeños tornados. Es una babosa elemental de aire capaz de alterar corrientes de aire.",
        tipo: "Elemental",
        habitat: "Cavernas abiertas con fuertes corrientes de aire y conductos de ventilación natural",
        poderes: "Crear tornados, generar fuertes ráfagas de viento, levitar objetos y crear escudos de viento.",
        compatibilidadDobleCañon: "Compatible con Babosa Electroshock para crear tormentas eléctricas y con Babosa Infierno para amplificar llamas con corrientes de aire.",
        transformaciones: [
            {
                nombre: "Tornado",
                imagen: "images/tornado_transformacion.jpg",
                descripcion: "Crea potentes tornados que pueden levantar objetos de hasta 100 kg y generar ráfagas de viento de 100 km/h."
            }
        ]
    },
    {
        id: 11,
        nombre: "Babosa Sanadora",
        imagen: "images/babosa_sanadora.jpg",
        descripcion: "La Babosa Sanadora es una de las más raras y valiosas. Puede curar heridas y revitalizar otras babosas, acelerando la recuperación natural.",
        tipo: "Ultra rara",
        habitat: "Oasis subterráneos con aguas curativas y cavernas con cristales medicinales",
        poderes: "Curar heridas, restaurar energía vital, purificar toxinas, revitalizar otras babosas y contrarrestar efectos de babosas oscuras.",
        compatibilidadDobleCañon: "No recomendada para doble cañón debido a su naturaleza curativa y rareza. Su energía podría dispersarse o debilitarse.",
        transformaciones: [
            {
                nombre: "Sanadora",
                imagen: "images/sanadora_transformacion.jpg",
                descripcion: "Emite energía curativa que puede sanar heridas superficiales en segundos y acelerar la recuperación de lesiones graves."
            }
        ]
    },
    {
        id: 12,
        nombre: "Babosa Aracnired",
        imagen: "images/babosa_aracnired.jpg",
        descripcion: "La Babosa Aracnired puede crear redes y telarañas. Útil para atrapar enemigos o crear puentes y vías de acceso temporales.",
        tipo: "Poco común",
        habitat: "Cavernas con techos altos y espacios abiertos donde pueden tejer sus redes",
        poderes: "Crear redes y telarañas resistentes, atrapar oponentes, crear líneas para balancearse o escalar y tejer puentes.",
        compatibilidadDobleCañon: "Compatible con Babosa Congelada para crear redes reforzadas con hielo y con Babosa Geoshard para redes cristalinas.",
        transformaciones: [
            {
                nombre: "Aracnired",
                imagen: "images/aracnired_transformacion.jpg",
                descripcion: "Lanza telarañas capaces de soportar hasta 500 kg de peso y lo suficientemente adhesivas para atrapar a un troll de las cavernas."
            }
        ]
    },
    {
        id: 13,
        nombre: "Babosa Fosforo",
        imagen: "images/babosa_fosforo.jpg",
        descripcion: "La Babosa Fosforo puede crear destellos brillantes y persistentes. Útil para iluminación prolongada y señalización.",
        tipo: "Común",
        habitat: "Cavernas con hongos bioluminiscentes y materiales fosforescentes",
        poderes: "Crear luz fosforescente de larga duración, dejar rastros luminosos, crear señales visibles a larga distancia y pequeñas ilusiones lumínicas.",
        compatibilidadDobleCañon: "Compatible con Babosa Geoshard para crear cristales luminosos de larga duración y con Babosa Negasombra para crear efectos visuales desorientadores.",
        transformaciones: [
            {
                nombre: "Fosforo",
                imagen: "images/fosforo_transformacion.jpg",
                descripcion: "Emite luz fosforescente que puede durar hasta 24 horas y crear marcas luminosas que permanecen visibles por largo tiempo."
            }
        ]
    },
    {
        id: 14,
        nombre: "Babosa Flatulorinca",
        imagen: "images/babosa_flatulorinca.jpg",
        descripcion: "La Babosa Flatulorinca emite gases de olor nauseabundo. Excelente para distraer enemigos o crear diversiones.",
        tipo: "Común",
        habitat: "Pantanos subterráneos y zonas con descomposición orgánica",
        poderes: "Emitir gases de olor extremadamente desagradable, crear nubes de gas que pueden causar náuseas y desorientar oponentes.",
        compatibilidadDobleCañon: "Compatible con Babosa Tornado para dispersar gases en mayor área y con Babosa Infierno para crear gases inflamables (¡peligroso!).",
        transformaciones: [
            {
                nombre: "Flatulorinca",
                imagen: "images/flatulorinca_transformacion.jpg",
                descripcion: "Produce gases tan potentes que pueden hacer huir a trolls de las cavernas y causar náuseas durante horas."
            }
        ]
    },
    {
        id: 15,
        nombre: "Babosa Granada",
        imagen: "images/babosa_granada.jpg",
        descripcion: "La Babosa Granada crea explosiones al impactar. Útil para demoliciones controladas y combate directo.",
        tipo: "Poco común",
        habitat: "Cavernas con gases subterráneos volátiles y minerales explosivos",
        poderes: "Generar explosiones de diversa intensidad, fragmentarse en múltiples explosiones menores y crear ondas expansivas.",
        compatibilidadDobleCañon: "Compatible con Babosa Carnero para dirigir la fuerza explosiva y con Babosa Geoshard para crear metralla cristalina.",
        transformaciones: [
            {
                nombre: "Granada",
                imagen: "images/granada_transformacion.jpg",
                descripcion: "Puede generar explosiones con fuerza suficiente para destruir grandes rocas y muros de contención."
            }
        ]
    },
    {
        id: 16,
        nombre: "Babosa Slirena",
        imagen: "images/babosa_slirena.jpg",
        descripcion: "La Babosa Slirena emite cantos hipnóticos que pueden adormecer o calmar a oponentes y otras babosas.",
        tipo: "Rara",
        habitat: "Cavernas con buena acústica y cercanas a corrientes de agua subterránea",
        poderes: "Emitir sonidos hipnóticos, calmar a oponentes y otras babosas, crear ondas sonoras desorientadoras y romper vidrio o cristal con frecuencias específicas.",
        compatibilidadDobleCañon: "Compatible con Babosa Tornado para amplificar y dirigir sus ondas sonoras y con Babosa AquaBeek para crear ondas sonoras a través del agua.",
        transformaciones: [
            {
                nombre: "Slirena",
                imagen: "images/slirena_transformacion.jpg",
                descripcion: "Su canto puede adormecer a oponentes en segundos y calmar incluso a las babosas más agresivas."
            }
        ]
    },
    {
        id: 17,
        nombre: "Babosa Zipper",
        imagen: "images/babosa_zipper.jpg",
        descripcion: "La Babosa Zipper puede alcanzar velocidades extremas. Útil para ataques rápidos y maniobras sorpresa.",
        tipo: "Poco común",
        habitat: "Túneles largos y rectos con pocas obstrucciones donde pueden alcanzar altas velocidades",
        poderes: "Alcanzar velocidades supersónicas, crear estelas veloces, atravesar materiales con la fuerza de su impacto y generar pequeñas ondas de choque.",
        compatibilidadDobleCañon: "Compatible con Babosa Carnero para impactos devastadores y con Babosa Electroshock para ataques eléctricos de alta velocidad.",
        transformaciones: [
            {
                nombre: "Zipper",
                imagen: "images/zipper_transformacion.jpg",
                descripcion: "Puede alcanzar velocidades de hasta 200 millas por hora, siendo una de las babosas más rápidas de Bajoterra."
            }
        ]
    },
    {
        id: 18,
        nombre: "Babosa Enigmo",
        imagen: "images/babosa_enigmo.jpg",
        descripcion: "La Babosa Enigmo puede crear ilusiones y alterar la percepción. Útil para confundir enemigos y crear distracciones elaboradas.",
        tipo: "Ultra rara",
        habitat: "Cavernas con gases alucinógenos naturales y cristales que distorsionan la luz",
        poderes: "Crear ilusiones realistas, alterar la percepción de oponentes, ocultar objetos o personas y revelar cosas ocultas o camufladas.",
        compatibilidadDobleCañon: "Compatible con Babosa Negasombra para crear ilusiones en la oscuridad y con Babosa Fosforo para ilusiones luminosas complejas.",
        transformaciones: [
            {
                nombre: "Enigmo",
                imagen: "images/enigmo_transformacion.jpg",
                descripcion: "Crea ilusiones tan realistas que pueden engañar a múltiples sentidos, no solo la vista, durante varios minutos."
            }
        ]
    },
    {
        id: 19,
        nombre: "Babosa Polero",
        imagen: "images/babosa_polero.jpg",
        descripcion: "La Babosa Polero puede crear masas cristalinas similares a caramelo que inmovilizan a enemigos y crean obstáculos.",
        tipo: "Común",
        habitat: "Cavernas con resinas naturales y secreciones cristalizantes",
        poderes: "Crear sustancias adhesivas, inmovilizar oponentes, sellar grietas y aberturas, y crear barreras pegajosas.",
        compatibilidadDobleCañon: "Compatible con Babosa Congelada para crear sustancias adhesivas congeladas y con Babosa Geoshard para crear matrices adhesivas cristalinas.",
        transformaciones: [
            {
                nombre: "Polero",
                imagen: "images/polero_transformacion.jpg",
                descripcion: "Produce una sustancia adhesiva similar al caramelo que puede inmovilizar a un troll durante horas."
            }
        ]
    },
    {
        id: 20,
        nombre: "Babosa Terror",
        imagen: "images/babosa_terror.jpg",
        descripcion: "La Babosa Terror puede provocar miedo profundo en sus objetivos, haciendo que huyan o queden paralizados temporalmente.",
        tipo: "Rara",
        habitat: "Cavernas oscuras con pocas visitas, generalmente en zonas aisladas",
        poderes: "Provocar miedo intenso, crear ilusiones aterradoras, paralizar temporalmente por terror y dispersar grupos de oponentes.",
        compatibilidadDobleCañon: "Compatible con Babosa Negasombra para amplificar el miedo en la oscuridad y con Babosa Enigmo para crear escenarios terroríficos más complejos.",
        transformaciones: [
            {
                nombre: "Terror",
                imagen: "images/terror_transformacion.jpg",
                descripcion: "Puede inducir un estado de pánico que paraliza a los oponentes o los hace huir descontroladamente por varios minutos."
            }
        ]
    },
    {
        id: 21,
        nombre: "Babosa Versátil",
        imagen: "images/babosa_versatil.jpg",
        descripcion: "La Babosa Versátil puede imitar temporalmente las habilidades básicas de la última babosa que haya visto transformarse.",
        tipo: "Ultra rara",
        habitat: "Desconocido, se cree que habitan en zonas con gran diversidad de babosas",
        poderes: "Imitar habilidades de otras babosas, combinar habilidades básicas de múltiples babosas y adaptarse a diferentes situaciones de combate.",
        compatibilidadDobleCañon: "Extremadamente versátil en doble cañón, puede complementar casi cualquier babosa al adoptar habilidades compatibles.",
        transformaciones: [
            {
                nombre: "Versátil",
                imagen: "images/versatil_transformacion.jpg",
                descripcion: "Puede adoptar temporalmente las habilidades básicas de otras babosas, aunque con menos potencia que la original."
            }
        ]
    },
    {
        id: 22,
        nombre: "Babosa Armashelt",
        imagen: "images/babosa_armashelt.jpg",
        descripcion: "La Babosa Armashelt puede curvar su cuerpo formando una especie de proyectil que golpea con gran fuerza.",
        tipo: "Común",
        habitat: "Cavernas con suelos duros y rocosos donde pueden practicar sus impactos",
        poderes: "Transformarse en proyectil rotatorio, rebotar en superficies para ataques múltiples y penetrar defensas ligeras.",
        compatibilidadDobleCañon: "Compatible con Babosa Carnero para impactos demoledores y con Babosa Zipper para aumentar su velocidad de rotación.",
        transformaciones: [
            {
                nombre: "Armashelt",
                imagen: "images/armashelt_transformacion.jpg",
                descripcion: "Se convierte en un proyectil giratorio capaz de rebotar en múltiples superficies manteniendo su fuerza cinética."
            }
        ]
    },
    {
        id: 23,
        nombre: "Babosa Doc",
        imagen: "images/babosa_doc.jpg",
        descripcion: "La Babosa Doc es la médica de las babosas, puede diagnosticar enfermedades y aplicar tratamientos básicos.",
        tipo: "Rara",
        habitat: "Cavernas con plantas medicinales y aguas termales curativas",
        poderes: "Diagnosticar enfermedades, aplicar primeros auxilios básicos, acelerar cicatrización y contrarrestar venenos leves.",
        compatibilidadDobleCañon: "Compatible con Babosa Sanadora para tratamientos más complejos y con Babosa AquaBeek para limpiar heridas.",
        transformaciones: [
            {
                nombre: "Doc",
                imagen: "images/doc_transformacion.jpg",
                descripcion: "Puede diagnosticar enfermedades con precisión y aplicar tratamientos básicos que aceleran la recuperación."
            }
        ]
    },
    {
        id: 24,
        nombre: "Babosa Destello",
        imagen: "images/babosa_destello.jpg",
        descripcion: "La Babosa Destello puede generar luces estroboscópicas intensas que desorientan temporalmente.",
        tipo: "Poco común",
        habitat: "Cavernas con cristales refractantes y fuentes naturales de luz",
        poderes: "Crear destellos estroboscópicos, desorientar temporalmente, crear señales luminosas y dispersar la oscuridad.",
        compatibilidadDobleCañon: "Compatible con Babosa Bengala para efectos lumínicos más intensos y con Babosa Electroshock para destellos eléctricos.",
        transformaciones: [
            {
                nombre: "Destello",
                imagen: "images/destello_transformacion.jpg",
                descripcion: "Genera destellos tan intensos que pueden desorientar completamente a quien los mire directamente durante varios segundos."
            }
        ]
    },
    {
        id: 25,
        nombre: "Babosa Neotox",
        imagen: "images/babosa_neotox.jpg",
        descripcion: "La Babosa Neotox puede generar y disparar veneno. Sus toxinas causan diversos efectos según la especie.",
        tipo: "Rara",
        habitat: "Pantanos tóxicos y cavernas con gases venenosos naturales",
        poderes: "Crear nubes tóxicas, disparar veneno, contaminar áreas pequeñas temporalmente y crear barreras venenosas.",
        compatibilidadDobleCañon: "Compatible con Babosa Tornado para dispersar toxinas en un área mayor y con Babosa AquaBeek para crear soluciones corrosivas.",
        transformaciones: [
            {
                nombre: "Neotox",
                imagen: "images/neotox_transformacion.jpg",
                descripcion: "Libera toxinas que pueden causar confusión, mareos y debilidad temporal en quien las inhale."
            }
        ]
    },
    {
        id: 26,
        nombre: "Babosa Acuática",
        imagen: "images/babosa_acuatica.jpg",
        descripcion: "La Babosa Acuática puede sobrevivir y dispararse bajo el agua. Permite a los lanzadores combatir en entornos subacuáticos.",
        tipo: "Poco común",
        habitat: "Lagos y ríos subterráneos de Bajoterra",
        poderes: "Respirar bajo el agua, permitir respiración subacuática temporal a su lanzador, crear burbujas de aire y moverse rápidamente en entornos acuáticos.",
        compatibilidadDobleCañon: "Compatible con Babosa AquaBeek para operaciones subacuáticas avanzadas y con Babosa Congelada para congelar agua rápidamente.",
        transformaciones: [
            {
                nombre: "Acuática",
                imagen: "images/acuatica_transformacion.jpg",
                descripcion: "Permite disparar babosas bajo el agua y puede crear una burbuja de aire alrededor del lanzador por tiempo limitado."
            }
        ]
    },
    {
        id: 27,
        nombre: "Babosa Demoledora",
        imagen: "images/babosa_demoledora.jpg",
        descripcion: "La Babosa Demoledora tiene capacidad destructiva concentrada, ideal para derribar estructuras con precisión.",
        tipo: "Poco común",
        habitat: "Cavernas con actividad sísmica y zonas de derrumbes frecuentes",
        poderes: "Concentrar fuerza destructiva en un punto, derribar estructuras, crear pequeños derrumbes controlados y penetrar defensas sólidas.",
        compatibilidadDobleCañon: "Compatible con Babosa Granada para efectos explosivos dirigidos y con Babosa Zipper para impactos de alta velocidad.",
        transformaciones: [
            {
                nombre: "Demoledora",
                imagen: "images/demoledora_transformacion.jpg",
                descripcion: "Puede concentrar toda su fuerza en un punto para derribar muros de hasta 50 cm de espesor con precisión quirúrgica."
            }
        ]
    },
    {
        id: 28,
        nombre: "Babosa Cristalida",
        imagen: "images/babosa_cristalida.jpg",
        descripcion: "La Babosa Cristalida puede generar cristales transparentes muy resistentes. Útil para observación protegida.",
        tipo: "Rara",
        habitat: "Cavernas de cuarzo y otras formaciones cristalinas transparentes",
        poderes: "Crear cristales transparentes, formar escudos protectores, crear lentes de observación y refractar la luz para crear arcoíris.",
        compatibilidadDobleCañon: "Compatible con Babosa Geoshard para estructuras cristalinas complejas y con Babosa Destello para efectos visuales prismáticos.",
        transformaciones: [
            {
                nombre: "Cristalida",
                imagen: "images/cristalida_transformacion.jpg",
                descripcion: "Genera cristales completamente transparentes pero más resistentes que el vidrio reforzado, ideales para observación protegida."
            }
        ]
    },
    {
        id: 29,
        nombre: "Babosa Nocturna",
        imagen: "images/babosa_nocturna.jpg",
        descripcion: "La Babosa Nocturna tiene visión nocturna excepcional y puede compartir temporalmente esta habilidad con su lanzador.",
        tipo: "Poco común",
        habitat: "Las cavernas más oscuras de Bajoterra, donde la luz nunca penetra",
        poderes: "Ver en la oscuridad total, compartir visión nocturna con su lanzador, y moverse sin hacer ruido en la oscuridad.",
        compatibilidadDobleCañon: "Compatible con Babosa Negasombra para crear emboscadas en la oscuridad y con Babosa Bengala para iluminar áreas mientras se mantiene la ventaja de la oscuridad.",
        transformaciones: [
            {
                nombre: "Nocturna",
                imagen: "images/nocturna_transformacion.jpg",
                descripcion: "Permite ver en la oscuridad total y moverse sigilosamente, lo que la convierte en una excelente opción para misiones de infiltración."
            }
        ]
    },
    {
        id: 30,
        nombre: "Babosa Vortex",
        imagen: "images/babosa_vortex.jpg",
        descripcion: "La Babosa Vortex puede crear vórtices de aire que atrapan y desorientan a los enemigos. Ideal para controlar el campo de batalla.",
        tipo: "Rara",
        habitat: "Cavernas con corrientes de aire inusuales y espacios abiertos",
        poderes: "Crear vórtices de aire, desorientar a oponentes, levantar objetos y crear barreras de aire que desvían ataques.",
        compatibilidadDobleCañon: "Compatible con Babosa Tornado para amplificar los efectos de los vórtices y con Babosa Electroshock para crear tormentas eléctricas en el vórtice.",
        transformaciones: [
            {
                nombre: "Vortex",
                imagen: "images/vortex_transformacion.jpg",
                descripcion: "Genera vórtices que pueden atrapar a oponentes y desviar proyectiles, creando caos en el campo de batalla."
            }
        ]
    }
];

// Función para cargar las babosas en la página
function cargarBabosas(listaFiltrada = babosas) {
    const babosasList = document.getElementById('babosas-list');
    babosasList.innerHTML = '';
    
    if (listaFiltrada.length === 0) {
        babosasList.innerHTML = '<p class="no-results">No se encontraron babosas con ese nombre.</p>';
        return;
    }
    
    listaFiltrada.forEach(babosa => {
        const babosaCard = document.createElement('div');
        babosaCard.className = 'babosa-card';
        babosaCard.dataset.id = babosa.id;
        
        // Crear un placeholder para la imagen en caso de que no se encuentre
        const imageUrl = babosa.imagen || 'images/placeholder.jpg';
        
        babosaCard.innerHTML = `
            <img src="${imageUrl}" alt="${babosa.nombre}" class="babosa-image" onerror="this.src='images/placeholder.jpg'">
            <div class="babosa-name">${babosa.nombre}</div>
        `;
        
        babosaCard.addEventListener('click', () => mostrarDetalle(babosa.id));
        babosasList.appendChild(babosaCard);
    });
}

// Función para mostrar el detalle de una babosa
function mostrarDetalle(id) {
    const babosa = babosas.find(b => b.id === id);
    const detailModal = document.getElementById('babosa-detail');
    const detailInfo = document.getElementById('detail-info');
    
    if (!babosa) return;
    
    let transformacionesHTML = '';
    
    // Crear el HTML para las transformaciones
    if (babosa.transformaciones && babosa.transformaciones.length > 0) {
        transformacionesHTML = `
            <h3>Transformaciones:</h3>
            <div class="transformaciones-container">
        `;
        
        babosa.transformaciones.forEach(trans => {
            transformacionesHTML += `
                <div class="transformacion-card">
                    <img src="${trans.imagen}" alt="${trans.nombre}" class="transformacion-image" onerror="this.src='images/placeholder.jpg'">
                    <div class="transformacion-name">${trans.nombre}</div>
                </div>
            `;
        });
        
        transformacionesHTML += '</div>';
    }
    
    // Crear el HTML para el detalle completo
    detailInfo.innerHTML = `
        <div class="babosa-detail-container">
            <div class="babosa-detail-image-container">
                <img src="${babosa.imagen}" alt="${babosa.nombre}" class="babosa-detail-image" onerror="this.src='images/placeholder.jpg'">
            </div>
            <div class="babosa-detail-info">
                <h2>${babosa.nombre}</h2>
                <p><strong>Tipo:</strong> ${babosa.tipo}</p>
                <p>${babosa.descripcion}</p>
                ${transformacionesHTML}
            </div>
        </div>
    `;
    
    // Mostrar el modal
    detailModal.style.display = 'block';
}

// Configurar la búsqueda
function configurarBuscador() {
    const searchInput = document.getElementById('search-input');
    
    searchInput.addEventListener('input', () => {
        const busqueda = searchInput.value.toLowerCase().trim();
        
        if (busqueda === '') {
            cargarBabosas(); // Mostrar todas las babosas
        } else {
            // Filtrar babosas que coincidan con la búsqueda
            const filtradas = babosas.filter(babosa => 
                babosa.nombre.toLowerCase().includes(busqueda) || 
                babosa.tipo.toLowerCase().includes(busqueda)
            );
            
            cargarBabosas(filtradas);
        }
    });
}

// Configurar el cierre del modal de detalles
function configurarModal() {
    const detailModal = document.getElementById('babosa-detail');
    const closeButton = document.querySelector('.close-button');
    
    closeButton.addEventListener('click', () => {
        detailModal.style.display = 'none';
    });
    
    // También cerrar al hacer clic fuera del contenido
    window.addEventListener('click', (event) => {
        if (event.target === detailModal) {
            detailModal.style.display = 'none';
        }
    });
}

// Configurar la reproducción automática del video
function configurarVideo() {
    const video = document.getElementById('intro-video');
    
    // Reproducir automáticamente (sin sonido) y luego pausar después de 10 segundos
    video.muted = true;
    
    // Intentar reproducir automáticamente
    video.play().catch(error => {
        console.log('Reproducción automática no permitida por el navegador:', error);
    });
    
    // Pausar después de 10 segundos
    setTimeout(() => {
        if (!video.paused) {
            video.pause();
        }
    }, 10000);
}

// Inicializar la página cuando todo esté cargado
document.addEventListener('DOMContentLoaded', () => {
    cargarBabosas();
    configurarBuscador();
    configurarModal();
    configurarVideo();
});