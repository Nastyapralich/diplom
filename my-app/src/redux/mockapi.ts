export const MOCKAPI: Product[] = [
  {
    id: 1,
    article: "180301561",
    title: "Шуруповерт",
    img: "https://stroyinstrument.by/upload/resize_cache/webp/iblock/6ec/u691hax8swihbh39wwk3jr2a5j4sytpi.webp",
    brands: "PATRIOT",
    country_of_origin: "Китай",
    warranty: "12 месяцев",
    price: 450,
    dimensions: {
      width: "300 мм",
      height: "370 мм",
      depth: "110 мм",
    },
    power_type: "аккумулятор",
    cartridge_type: "квадрат с отверстием и фрикционным кольцом",
    speeds_count: 1,
    sound_pressure_level: "94.6 дБ(A)",
    max_torque: "450 Н/м",
    idle_speed: "2400 об/мин",
    battery_voltage: "18 В",
    strokes_per_minute: "3200 уд/мин",
    battery_capacity: "2 А/ч",
    handle: "прорезиненная",
    reverse: true,
    engine_type: "щеточный",
    charging_time: "1.5 ч",
    speed_adjustment: false,
    battery_charge_indicator: true,
    easy_start: false,
    battery_type: "Li-ion",
    battery_and_charger_included: "два АКБ и ЗУ",
    case_included: true,
    battery_installation_type: "слайдер",
    work_light: true,
    spindle_lock: true,
    accidental_start_protection: false,
    overload_protection: true,
    work_modes: ["Режим закручивания с ударом"],
    max_fastener_size: "18 мм",
    engine_brake: true,
    belt_clip: true,
    bit_attachment_socket: false,
    weight: "4.6 кг",
    detailed_description: [
      "Универсальная электрическая дрель для выполнения различных строительных и монтажных работ.",
      "Легкая и удобная в использовании.",
      "Имеет регулировку скорости вращения для работы с разными материалами.",
    ],
    advantages: [
      "Высокий крутящий момент для эффективной работы с различными материалами.",
      "Ударная функция обеспечивает легкое закручивание и откручивание крепежных элементов.",
      "Прорезиненная рукоятка для комфортного и надежного сцепления с инструментом.",
      "Встроенная подсветка рабочей зоны для улучшения видимости в условиях недостаточного освещения.",
      "Защита от перегрузки и тормоз двигателя увеличивают безопасность и продлевают срок службы инструмента.",
    ],
    kit_inclusion: [
      "Шуруповерт",
      "Два аккумулятора",
      "Зарядное устройство",
      "Кейс для хранения и транспортировки",
    ],
  },
  {
    id: 2,
    article: "180301562",
    title: "Дрель",
    img: "https://stroyinstrument.by/upload/resize_cache/webp/iblock/6ec/u691hax8swihbh39wwk3jr2a5j4sytpi.webp",
    brands: "PATRIOT",
    country_of_origin: "Китай",
    warranty: "12 месяцев",
    price: 350,
    dimensions: {
      width: "280 мм",
      height: "340 мм",
      depth: "100 мм",
    },
    battery_voltage: "220 ",
    speed_adjustment: true,
    power_type: "аккумулятор",
    cartridge_type: "квадрат с отверстием и фрикционным кольцом",
    speeds_count: 1,
    sound_pressure_level: "94.6 дБ(A)",
    max_torque: "450 Н/м",
    idle_speed: "2400 об/мин",
    strokes_per_minute: "3200 уд/мин",
    battery_capacity: "2 А/ч",
    battery_type: "Li-ion",
    handle: "прорезиненная",
    reverse: true,
    engine_type: "щеточный",
    weight: "1.8 кг",
    detailed_description: 
      "Универсальная электрическая дрель для выполнения различных строительных и монтажных работ.Легкая и удобная в использовании.Имеет регулировку скорости вращения для работы с разными материалами.",
    advantages: [
      "Компактный размер и небольшой вес для удобства в работе.",
      "Регулируемая скорость вращения для адаптации к различным материалам.",
      "Ключевой патрон для надежной фиксации сверла или насадки.",
    ],
    kit_inclusion: [
      "Дрель",
      "Ключевой патрон",
      "Дополнительная рукоятка",
    ]
  },
  {
  article: "150301170",
  id: 3,
  price: 340,
  title: 'Гравер',
  img: "https://stroyinstrument.by/upload/resize_cache/webp/iblock/4db/dj7y7odx8cpc7xza1knrd9s3o2j3ia6h.webp",
  brands: "PATRIOT",
  country_of_origin: "Китай",
  warranty: "12 месяцев",
  dimensions: {
    width: "140 мм",
    height: "330 мм",
    depth: "200 мм",
  },
  power_type: "сеть",
  power_consumption: "160 Вт",
  speeds_count: 5,
  sound_pressure_level: "93 дБ(A)",
  idle_speed: "38000 об/мин",
  handle: "прорезиненная",
  engine_type: "щеточный",
  speed_adjustment: true,
  case_included: true,
  spindle_lock: true,
  accidental_start_protection: true,
  weight: "2.17 кг",
  detailed_description: [
    "Симметричный и эргономичный дизайн корпуса обеспечивает пользователю дополнительное удобство, повышает точность выполнения работ.",
    "Блокировка вала инструмента позволяет быстро заменять оснастку.",
    "Электронная регулировка оборотов позволяет подобрать оптимальный режим работы.",
    "Система быстрой замены щеток.",
    "Кейс для хранения и транспортировки инструмента и принадлежностей.",
    "167 сменных аксессуаров в комплекте.",
  ],
}
];

export interface Product {
  id?: number;
  title?: string;
  article?: string;
  img?: string;
  power_consumption?:string,
  price?: number | string;
  brands?: string;
  country_of_origin?: string;
  warranty?: string;
  dimensions?: {
    width?: string;
    height?: string;
    depth?: string;
  };
  power_type?: string;
  cartridge_type?: string;
  speeds_count?: number;
  sound_pressure_level?: string;
  max_torque?: string;
  idle_speed?: string;
  battery_voltage?: string;
  strokes_per_minute?: string;
  battery_capacity?: string;
  handle?: string;
  reverse?: boolean;
  engine_type?: string;
  charging_time?: string;
  speed_adjustment?: boolean;
  battery_charge_indicator?: boolean;
  easy_start?: boolean;
  battery_type?: string;
  battery_and_charger_included?: string;
  case_included?: boolean;
  battery_installation_type?: string;
  work_light?: boolean;
  spindle_lock?: boolean;
  accidental_start_protection?: boolean;
  overload_protection?: boolean;
  work_modes?: string[];
  max_fastener_size?: string;
  engine_brake?: boolean;
  belt_clip?: boolean;
  bit_attachment_socket?: boolean;
  weight?: string;
  detailed_description?: string | string[];
  advantages?: string[];
  kit_inclusion?: string[];
}