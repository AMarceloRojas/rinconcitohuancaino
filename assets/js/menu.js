/**
 * MENÚ DEL RESTAURANTE
 * Toda la data del menú con categorías y pestañas
 */

'use strict';

// =============================================
// DATA DEL MENÚ - Edita aquí precios/descripciones
// =============================================
const menuData = {
  entradas: {
    title: "Entradas",
    items: [
      { id: "papa-huancaina", name: "Papa a la Huancaína", price: 6000, desc: "Nuestra especialidad: papas con la auténtica salsa huancaína cremosa y picante.", badge: "Favorito" },
      { id: "yucas-huancaina", name: "Yucas Fritas con Huancaína", price: 7000, desc: "Yucas crocantes acompañadas con nuestra clásica salsa huancaína." },
      { id: "pulpo-olivo", name: "Pulpo al Olivo", price: 9900, desc: "Tradicional pulpo con cremosa salsa de aceitunas." },
      { id: "leche-tigre", name: "Leche de Tigre", price: 8900, desc: "El concentrado del ceviche, con todo el sabor del mar." },
      { id: "copon-leche-tigre", name: "Copón de Leche de Tigre", price: 14000, desc: "Versión grande con mariscos surtidos. Ideal para compartir." },
      { id: "carretillero", name: "Carretillero", price: 8000, desc: "Combinado de ceviche, chicharrón de pescado y arroz con mariscos." },
      { id: "anticucho-corazon", name: "Anticucho de Corazón", price: 8000, desc: "Brochetas de corazón marinadas en ají panca, asadas a la parrilla." },
      { id: "anticucho-pollo", name: "Anticucho de Pollo", price: 7500, desc: "Brochetas de pollo marinadas en especias peruanas." },
      { id: "anticucho-carne", name: "Anticucho de Carne", price: 9900, desc: "Brochetas de carne marinadas, asadas a la parrilla." },
      { id: "causa-camarones", name: "Causa de Camarones", price: 9900, desc: "Puré de papa amarilla con ají, rellena de camarones." },
      { id: "causa-acevichada", name: "Causa Acevichada", price: 8900, desc: "Causa rellena con pescado al estilo ceviche." },
      { id: "causa-limena", name: "Causa Limeña", price: 7000, desc: "Causa clásica rellena de pollo, atún o palta." }
    ]
  },

  ceviches: {
    title: "Ceviches y Chicharrones",
    items: [
      { id: "ceviche-pescado", name: "Ceviche de Pescado", price: 10500, desc: "Pescado marinado en limón sutil, con choclo, camote y cancha.", badge: "Clásico" },
      { id: "pescado-camarones", name: "Pescado y Camarones", price: 12900, desc: "Pescado y camarones marinados en limón, con choclo, camote y cancha." },
      { id: "ceviche-mixto", name: "Ceviche Mixto", price: 13500, desc: "Pescado con pulpo, camarón y calamar marinados en limón." },
      { id: "ceviche-cilantro", name: "Ceviche al Cilantro", price: 11000, desc: "Pescado en cubos con cilantro fresco, ají y limón sutil." },
      { id: "chicharron-pescado", name: "Chicharrón de Pescado", price: 8000, desc: "Crujientes trozos de pescado apanado, con yuca frita, papas y zarza criolla." },
      { id: "chicharron-calamar", name: "Chicharrón de Calamar", price: 10500, desc: "Trozos de calamar apanados con yuca frita y zarza criolla." },
      { id: "jalea-mixta", name: "Jalea Mixta", price: 27000, desc: "Pulpo y calamar apanados con papas doradas, yuca y zarza criolla." },
      { id: "jalea-especial", name: "Jalea Mixta Especial", price: 35000, desc: "Ceviche de pescado con jalea mixta, choclo y cancha.", badge: "Premium" }
    ]
  },

  criollos: {
    title: "Criollos del Perú",
    items: [
      { id: "lomo-saltado", name: "Lomo Saltado", price: 12000, desc: "Trozos de lomo de vacuno salteados con cebollas, tomates y arroz.", badge: "Estrella" },
      { id: "pollo-saltado", name: "Pollo Saltado", price: 8500, desc: "Trozos de filete de pollo salteados con cebollas, tomates, arroz y papas fritas." },
      { id: "aji-gallina", name: "Ají de Gallina", price: 8000, desc: "Pechuga deshilachada en salsa cremosa de ají peruano, con papas y arroz." },
      { id: "combinado", name: "Combinado", price: 9900, desc: "Tallarín, Ceviche y Papa Huancaína. ¡Lo mejor de la casa en un plato!" },
      { id: "pollo-broaster", name: "Pollo Broaster", price: 7000, desc: "1/4 trutro de pollo crocante, papas fritas, ensaladas y salsas." },
      { id: "chicken-huanca", name: "Chicken Huanca", price: 8000, desc: "Trozos de pollo crocantes acompañados de papas y vianesa." },
      { id: "pasion-huanca", name: "Pasión Huanca", price: 9000, desc: "Pollo broaster, arroz chaufa, papas fritas y peruanas." },
      { id: "salchipapa", name: "Salchipapa", price: 4000, desc: "Salchichas con papas fritas." },
      { id: "chicharron-pollo", name: "Chicharrón de Pollo", price: 8000, desc: "Chicharrón de pollo con papas fritas." },
      { id: "pollo-champinon", name: "Pollo a la Plancha en Salsa de Champiñón", price: 8500, desc: "Pollo a la plancha bañado en salsa de champiñones." },
      { id: "pechuga-plancha", name: "Pechuga a la Plancha", price: 7000, desc: "Pechuga de pollo a la plancha." }
    ]
  },

  sopas: {
    title: "Sopas",
    items: [
      { id: "sudado-pescado", name: "Sudado de Pescado", price: 10500, desc: "Pescado hermanado con cebollas, ají peruano, yuca y arroz." },
      { id: "parihuela", name: "Parihuela", price: 12000, desc: "Mariscos frescos con el toque especial de la chicha de jora." },
      { id: "dieta-pollo", name: "Dieta de Pollo", price: 5500, desc: "Sustancia de pollo con trozos de pechuga, papas y zanahoria." },
      { id: "chupe-camarones", name: "Chupe de Camarones", price: 12900, desc: "Camarones, papa, choclo, arroz, leche, queso y huevo escalfado." },
      { id: "chupe-mariscos", name: "Chupe de Mariscos", price: 11500, desc: "Mixtura de mariscos, papa, choclo, queso, arroz, leche y huevo escalfado." }
    ]
  },

  pastas: {
    title: "Pastas y Fetuccini",
    items: [
      { id: "tallarin-pollo", name: "Tallarín Saltado de Pollo", price: 8500, desc: "Tallarines salteados al wok con pollo." },
      { id: "tallarin-carne", name: "Tallarín Saltado de Carne", price: 12000, desc: "Tallarines salteados al wok con carne." },
      { id: "tallarin-mixto", name: "Tallarín Saltado Mixto", price: 12900, desc: "Tallarines salteados con pollo y carne." },
      { id: "tallarin-3sabores", name: "Tallarín Saltado 3 Sabores", price: 13900, desc: "Tallarines con pollo, carne y mariscos." },
      { id: "tallarin-mariscos", name: "Tallarín Saltado de Mariscos", price: 12000, desc: "Tallarines salteados al wok con mariscos." },
      { id: "fetuccini-huancaina-pollo", name: "Fetuccini a la Huancaína con Pollo Salteado", price: 10500, desc: "Fetuccini bañado en salsa huancaína con pollo." },
      { id: "fetuccini-huancaina-lomo", name: "Fetuccini a la Huancaína con Lomo Saltado", price: 12900, desc: "Fetuccini con salsa huancaína y lomo saltado." },
      { id: "fetuccini-pesto-pollo", name: "Fetuccini al Pesto con Pollo a la Plancha", price: 9500, desc: "Fetuccini al pesto acompañado de pollo a la plancha." },
      { id: "filete-fetuccini-huancaina", name: "Filete con Fetuccini en Salsa Huancaína", price: 14900, desc: "Filete de vacuno sobre fetuccini con crema huancaína.", badge: "Premium" }
    ]
  },

  arroces: {
    title: "Arroces",
    items: [
      { id: "chaufa-pollo", name: "Arroz Chaufa de Pollo", price: 8000, desc: "Clásico arroz frito al wok con pollo." },
      { id: "chaufa-carne", name: "Arroz Chaufa de Carne", price: 12000, desc: "Arroz frito al wok con carne." },
      { id: "chaufa-mariscos", name: "Arroz Chaufa de Mariscos", price: 11500, desc: "Arroz frito al wok con mariscos." },
      { id: "chaufa-mixto", name: "Arroz Chaufa Mixto", price: 12900, desc: "Arroz frito con pollo y carne." },
      { id: "chaufa-3sabores", name: "Arroz Chaufa 3 Sabores", price: 13900, desc: "Pollo en trozos, lomo fino y frescos camarones." },
      { id: "chaufa-camarones", name: "Arroz Chaufa de Camarones", price: 13500, desc: "Arroz con camarones, huevo, sillao y jengibre salteados al wok." },
      { id: "arroz-mariscos", name: "Arroz con Mariscos", price: 11000, desc: "Arroz tradicional con mariscos surtidos." },
      { id: "risotto-pollo", name: "Risotto con Pollo Salteado", price: 10500, desc: "Cremoso risotto con pollo salteado." },
      { id: "risotto-lomo", name: "Risotto con Lomo Salteado", price: 11500, desc: "Cremoso risotto con lomo salteado." },
      { id: "risotto-camarones", name: "Risotto con Camarones", price: 13500, desc: "Cremoso risotto con camarones." },
      { id: "risotto-mariscos", name: "Risotto con Mariscos", price: 11000, desc: "Cremoso risotto con mariscos surtidos." },
      { id: "aeropuerto-pollo", name: "Aeropuerto de Pollo", price: 9000, desc: "Mezcla de tallarín y arroz chaufa con pollo." },
      { id: "aeropuerto-carne", name: "Aeropuerto de Carne", price: 12900, desc: "Mezcla de tallarín y arroz chaufa con carne." },
      { id: "aeropuerto-3sabores", name: "Aeropuerto 3 Sabores", price: 13900, desc: "Mezcla con pollo, carne y mariscos." },
      { id: "tacu-lomo", name: "Tacu Tacu con Lomo Saltado", price: 12900, desc: "Tacu tacu acompañado de lomo saltado." },
      { id: "tacu-pollo", name: "Tacu Tacu con Pollo Saltado", price: 9000, desc: "Tacu tacu con pollo saltado." },
      { id: "tacu-camarones", name: "Tacu Tacu con Camarones", price: 13000, desc: "Tacu tacu con camarones." },
      { id: "tacu-macho", name: "Tacu Tacu A lo Macho", price: 13800, desc: "Tacu tacu con mariscos en salsa picante.", badge: "Picante" }
    ]
  },

  pescados: {
    title: "Pescados y Filetes",
    items: [
      { id: "pescado-camarones-salsa", name: "Pescado en Salsa de Camarones", price: 13000, desc: "Filete a la plancha con salsa del chef y camarones." },
      { id: "pescado-mariscos-salsa", name: "Pescado en Salsa de Mariscos", price: 14500, desc: "Filete a la plancha con salsa de mariscos." },
      { id: "pescado-ajo", name: "Pescado en Salsa de Ajo", price: 10500, desc: "Filete con salsa de ajo, arroz y papas fritas." },
      { id: "pescado-plancha", name: "Pescado a la Plancha", price: 8900, desc: "Filete de pescado a la plancha con arroz, papas y zarza criolla." },
      { id: "pescado-frito", name: "Pescado Frito", price: 8000, desc: "Filete de pescado frito con arroz, papas y zarza criolla." },
      { id: "filete-camarones", name: "Filete de Lomo en Salsa de Camarones", price: 14800, desc: "Filete de vacuno con salsa de camarones, arroz y papas.", badge: "Premium" },
      { id: "filete-mignon", name: "Filete Mignon", price: 13500, desc: "Filete a la plancha con salsa de champiñón al vino tinto." },
      { id: "filete-mar-tierra", name: "Filete Mar y Tierra", price: 15500, desc: "Filete de vacuno con salsa de mariscos, papas y arroz." },
      { id: "chorrillana-filete", name: "Chorrillana de Filete", price: 14000, desc: "Filete en trozos con papas fritas, cebolla caramelizada y huevo." },
      { id: "picante-mariscos", name: "Picante de Mariscos", price: 9500, desc: "Mariscos cocidos en guiso cremoso con ají y arroz blanco." },
      { id: "pulpo-parrilla", name: "Pulpo a la Parrilla", price: 13000, desc: "Pulpo marinado en salsa anticuchera con papas y choclo." },
      { id: "trio-marino", name: "Trío Marino", price: 28000, desc: "Ceviche de pescado, chicharrón de pescado y arroz con mariscos.", badge: "Para compartir" },
      { id: "ronda-marina", name: "Ronda Marina", price: 38000, desc: "Causa, ceviche, leche de tigre, arroz con mariscos y chicharrón.", badge: "Premium" }
    ]
  },

  vegetariano: {
    title: "Vegetariano",
    items: [
      { id: "tofu-salteado", name: "Tofu Salteado", price: 8500, desc: "Trozos de tofu salteados con cebolla, tomate y pimentón." },
      { id: "tallarin-vegetariano", name: "Tallarín Vegetariano", price: 8000, desc: "Tallarines con champiñones, pimentón y verduras." },
      { id: "tallarin-tofu", name: "Tallarín Salteado de Tofu", price: 8500, desc: "Tallarines salteados al wok con tofu." },
      { id: "ceviche-champinon", name: "Ceviche de Champiñón", price: 8900, desc: "Champiñones marinados al estilo ceviche." },
      { id: "causa-vegetariana", name: "Causa Vegetariana", price: 8000, desc: "Causa rellena de verduras frescas." },
      { id: "tortilla-verduras", name: "Tortilla de Verduras", price: 8000, desc: "Tortilla esponjosa con mix de verduras." },
      { id: "arroz-vegetariano", name: "Arroz Salteado Vegetariano", price: 7000, desc: "Arroz salteado al wok con verduras." },
      { id: "fetuccini-champinon", name: "Fetuccini a la Huancaína con Champiñón", price: 8500, desc: "Fetuccini con salsa huancaína y champiñones salteados." }
    ]
  },

  agregados: {
    title: "Agregados",
    items: [
      { id: "cancha", name: "Cancha", price: 2500, desc: "Maíz tostado peruano." },
      { id: "choclo", name: "Choclo", price: 2500, desc: "Choclo peruano hervido." },
      { id: "papas-grande", name: "Papas Fritas (Grande)", price: 3400, desc: "Porción grande de papas fritas." },
      { id: "papas-chica", name: "Papas Fritas (Chica)", price: 2500, desc: "Porción chica de papas fritas." },
      { id: "arroz-agregado", name: "Arroz", price: 1500, desc: "Porción de arroz blanco." },
      { id: "ensalada-surtida", name: "Ensalada Surtida", price: 2500, desc: "Mix de verduras frescas." },
      { id: "ensalada-palta-tomate", name: "Ensalada Palta y Tomate", price: 4500, desc: "Palta fresca con tomate." },
      { id: "ensalada-criolla", name: "Ensalada Criolla", price: 3000, desc: "Cebolla, ají y limón." },
      { id: "camote", name: "Camote", price: 1800, desc: "Camote hervido." }
    ]
  },

  postres: {
    title: "Postres y Bebidas Calientes",
    items: [
      { id: "suspiro-limeno", name: "Suspiro Limeño", price: 4000, desc: "Dulce limeño cremoso con merengue.", badge: "Favorito" },
      { id: "mousse-maracuya", name: "Mousse de Maracuyá", price: 4000, desc: "Mousse esponjoso de maracuyá." },
      { id: "leche-asada", name: "Leche Asada", price: 4000, desc: "Clásico postre de leche horneada con caramelo." },
      { id: "cafe", name: "Café (Nescafé)", price: 1200, desc: "Café instantáneo." },
      { id: "manzanilla", name: "Manzanilla", price: 1200, desc: "Infusión de manzanilla." },
      { id: "infusiones", name: "Infusiones", price: 1200, desc: "Variedad de infusiones." },
      { id: "te", name: "Té", price: 1000, desc: "Té caliente." }
    ]
  },

  tragos: {
    title: "Tragos y Cocteles",
    items: [
      { id: "pisco-sour", name: "Pisco Sour Peruano", price: 6000, desc: "Pisco, limón sutil, sirope, clara de huevo y angostura.", badge: "Clásico" },
      { id: "huesillo-sour", name: "Huesillo Sour", price: 6000, desc: "Pisco con jugo de mote con huesillos." },
      { id: "chicha-sour", name: "Chicha Sour", price: 6000, desc: "Pisco con chicha morada, limón y clara de huevo." },
      { id: "maracuya-sour", name: "Maracuyá Sour", price: 6000, desc: "Pisco con maracuyá y limón." },
      { id: "mango-sour", name: "Mango Sour", price: 6000, desc: "Pisco con mango y limón." },
      { id: "vaticano", name: "Vaticano (Copón Pisco Sour)", price: 12000, desc: "Copón gigante de pisco sour para compartir." },
      { id: "pasion-huanca-trago", name: "Pasión Huanca", price: 6500, desc: "Pisco con maracuyá, jarabe, menta y jengibre." },
      { id: "algarrobina", name: "Algarrobina", price: 4500, desc: "Pisco, leche evaporada, algarrobina y huevo." },
      { id: "maricucha", name: "Maricucha", price: 6500, desc: "Pisco, maracuyá, hierbabuena y angostura." },
      { id: "pina-colada", name: "Piña Colada", price: 6500, desc: "Ron blanco, leche de coco y trozos de piña." },
      { id: "mojito-cubano", name: "Mojito Cubano", price: 4600, desc: "Ron blanco, limón, menta y azúcar." },
      { id: "rey-mojito", name: "Rey Mojito", price: 7500, desc: "Copa grande con corona, menta, ron y limones." },
      { id: "caipirinha", name: "Caipiriña", price: 6500, desc: "Cachaza, limón y azúcar." },
      { id: "tequila-margarita", name: "Tequila Margarita", price: 6500, desc: "Tequila, triple sec y limón sutil." },
      { id: "vodka-love", name: "Vodka Love", price: 4800, desc: "Vodka, frutilla, jengibre y hierbabuena." },
      { id: "margarita-blue", name: "Tequila Margarita Blue", price: 7500, desc: "Margarita con curaçao azul." },
      { id: "margarita-chelada", name: "Margarita Chelada", price: 7500, desc: "Corona, tequila, triple sec y limón." },
      { id: "machu-picchu", name: "Machu Picchu", price: 5800, desc: "Pisco, menta, granadina, jugo de naranja y piña colada." },
      { id: "limonada-true-blue", name: "Limonada True Blue", price: 5900, desc: "Curaçao azul, vodka, soda y limón." },
      { id: "whisky-sour", name: "Whisky Sour", price: 6500, desc: "Whisky, jarabe de goma y limón." },
      { id: "cosmopolitan", name: "Cosmopolitan", price: 5000, desc: "Vodka, licor de naranja, limón y arándano." },
      { id: "hawaii-tropic", name: "Hawaii and Tropic", price: 5500, desc: "Vodka, ron blanco, triple sec, piña y naranja." },
      { id: "clavo-oxidado", name: "Clavo Oxidado", price: 6500, desc: "Whisky, drambuie, marrasquino y clavos de olor." },
      { id: "aperol-spritz", name: "Aperol Spritz", price: 5000, desc: "Espumante, aperol o ramazzoti y agua mineral." },
      { id: "chilcano", name: "Chilcano", price: 5500, desc: "Pisco, limón, agua mineral y angostura." },
      { id: "negroni", name: "Negroni", price: 6000, desc: "Campari, gin y vermut." },
      { id: "daiquiri-frutas", name: "Daiquiri de Frutas", price: 5000, desc: "Ron blanco con frutas a elección." },
      { id: "tom-collins", name: "Tom Collins", price: 6500, desc: "Gin, marrasquino, limón y ginger ale." },
      { id: "mckinon-tropic", name: "McKinon Tropic", price: 8900, desc: "Gin, pepino, cilantro, corona y triple sec." }
    ]
  },

  bebidas: {
    title: "Cervezas, Bebidas y Jugos",
    items: [
      { id: "cusquena", name: "Cerveza Cusqueña Rubia", price: 3000, desc: "Cerveza peruana rubia." },
      { id: "heineken", name: "Cerveza Heineken", price: 3000, desc: "Cerveza importada." },
      { id: "corona", name: "Cerveza Corona", price: 3000, desc: "Cerveza mexicana." },
      { id: "royal-guard", name: "Cerveza Royal Guard", price: 3000, desc: "Cerveza chilena." },
      { id: "kunstmann", name: "Cerveza Kunstmann Torobayo", price: 4500, desc: "Cerveza artesanal chilena." },
      { id: "austral", name: "Cerveza Austral Calafate", price: 4500, desc: "Cerveza patagónica." },
      { id: "michelada", name: "Michelada Chelada", price: 3500, desc: "Cerveza con limón y sal." },
      { id: "cerveza-sin-alcohol", name: "Cerveza Sin Alcohol", price: 3500, desc: "Versión sin alcohol." },
      { id: "coca-lata", name: "Coca Cola Lata", price: 2000, desc: "Normal, Zero o Light." },
      { id: "sprite-lata", name: "Sprite Lata", price: 2000, desc: "Normal o Zero." },
      { id: "fanta-lata", name: "Fanta Lata", price: 2000, desc: "Fanta en lata." },
      { id: "agua-mineral", name: "Agua Mineral", price: 1500, desc: "Agua mineral con gas." },
      { id: "agua", name: "Agua", price: 1500, desc: "Agua sin gas." },
      { id: "inca-cola-1500", name: "Inca Cola 1.5L", price: 4500, desc: "Bebida peruana familiar." },
      { id: "inca-cola-zero", name: "Inca Cola Zero 1.5L", price: 4500, desc: "Inca Cola sin azúcar." },
      { id: "inca-cola-lata", name: "Inca Cola Lata", price: 2000, desc: "Inca Cola en lata." },
      { id: "bebida-1500", name: "Coca Cola/Fanta/Sprite 1.5L", price: 4000, desc: "Bebida familiar." },
      { id: "limonada-frozen", name: "Limonada Frozen", price: 3500, desc: "Limón, hielo y jarabe de goma." },
      { id: "limonada-genki", name: "Limonada Genki", price: 3500, desc: "Limón, jengibre y jarabe." },
      { id: "limonada-tropical", name: "Limonada Tropical", price: 3500, desc: "Limón, maracuyá y jarabe." },
      { id: "limonada-menta", name: "Limonada de Menta", price: 3500, desc: "Limón, hojas de menta y jarabe." },
      { id: "limonada-menta-jengibre", name: "Limonada Menta-Jengibre", price: 3500, desc: "Combinación refrescante." },
      { id: "chicha-vaso", name: "Chicha Morada (Vaso)", price: 3500, desc: "Bebida peruana de maíz morado." },
      { id: "chicha-jarra", name: "Chicha Morada (Jarra)", price: 7000, desc: "Jarra para compartir." },
      { id: "jugo-pina", name: "Jugo de Piña", price: 3000, desc: "Jugo natural de piña." },
      { id: "jugo-arandano", name: "Jugo de Arándano", price: 3000, desc: "Jugo natural de arándano." },
      { id: "jugo-mango", name: "Jugo de Mango", price: 3000, desc: "Jugo natural de mango." },
      { id: "jugo-papaya", name: "Jugo de Papaya", price: 3000, desc: "Jugo natural de papaya." },
      { id: "jugo-frutilla", name: "Jugo de Frutilla", price: 3000, desc: "Jugo natural de frutilla." },
      { id: "jugo-maracuya", name: "Jugo de Maracuyá", price: 3000, desc: "Jugo natural de maracuyá." },
      { id: "jugo-frambuesa", name: "Jugo de Frambuesa", price: 3000, desc: "Jugo natural de frambuesa." },
      { id: "jugo-leche", name: "Jugo con Leche", price: 3500, desc: "Cualquier sabor con leche." },
      { id: "jarra-jugo", name: "Jarra de Jugo", price: 7000, desc: "Jarra del sabor que elijas." }
    ]
  }
};

// =============================================
// EXPONER PARA OTROS SCRIPTS (reviews.js lo usa)
// =============================================
window.menuData = menuData;

// Función auxiliar: obtener nombre del plato por su ID
window.getDishNameById = function(id) {
  for (const cat in menuData) {
    const item = menuData[cat].items.find(i => i.id === id);
    if (item) return item.name;
  }
  return null;
};

// Lista plana de todos los platos (útil para el select de reseñas)
window.getAllDishes = function() {
  const all = [];
  for (const cat in menuData) {
    menuData[cat].items.forEach(item => {
      all.push({ id: item.id, name: item.name, category: menuData[cat].title });
    });
  }
  return all;
};


// =============================================
// FORMATEAR PRECIOS (CLP con punto de miles)
// =============================================
function formatPrice(price) {
  return '$' + price.toLocaleString('es-CL');
}


// =============================================
// RENDERIZAR PESTAÑAS Y CONTENIDO
// =============================================
function renderMenuTabs() {
  const tabsContainer = document.getElementById('menuTabs');
  if (!tabsContainer) return;

  const categories = Object.keys(menuData);

  tabsContainer.innerHTML = categories.map((cat, index) => `
    <button class="menu-tab ${index === 0 ? 'active' : ''}" data-category="${cat}">
      ${menuData[cat].title}
    </button>
  `).join('');

  // Click en pestaña
  tabsContainer.querySelectorAll('.menu-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      tabsContainer.querySelectorAll('.menu-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderMenuItems(tab.dataset.category);
    });
  });

  // Renderizar primera categoría por defecto
  renderMenuItems(categories[0]);
}

function renderMenuItems(category) {
  const content = document.getElementById('menuContent');
  if (!content || !menuData[category]) return;

  const items = menuData[category].items;

  content.innerHTML = `
    <ul class="menu-items-grid">
      ${items.map(item => `
        <li>
          <div class="menu-item-card" data-dish-id="${item.id}">
            <div class="menu-item-header">
              <h3 class="menu-item-name">${item.name}</h3>
              ${item.badge ? `<span class="menu-item-badge">${item.badge}</span>` : ''}
              <span class="menu-item-price">${formatPrice(item.price)}</span>
            </div>
            ${item.desc ? `<p class="menu-item-desc">${item.desc}</p>` : ''}
          </div>
        </li>
      `).join('')}
    </ul>
  `;
}


// =============================================
// INICIALIZAR
// =============================================
document.addEventListener('DOMContentLoaded', renderMenuTabs);