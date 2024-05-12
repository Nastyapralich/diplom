export const MOCKAPI:Product[] = 
    [{
        id: 1,
        article: "180301561",
        "brands": "PATRIOT",
        "country_of_origin": "Китай",
        "warranty": "12 месяцев",
        "dimensions": {
          "width": "300 мм",
          "height": "370 мм",
          "depth": "110 мм"
        },
        "power_type": "аккумулятор",
        "cartridge_type": "квадрат с отверстием и фрикционным кольцом",
        "speeds_count": 1,
        "sound_pressure_level": "94.6 дБ(A)",
        "max_torque": "450 Н/м",
        "idle_speed": "2400 об/мин",
        "battery_voltage": "18 В",
        "strokes_per_minute": "3200 уд/мин",
        "battery_capacity": "2 А/ч",
        "handle": "прорезиненная",
        "reverse": true,
        "engine_type": "щеточный",
        "charging_time": "1.5 ч",
        "speed_adjustment": false,
        "battery_charge_indicator": true,
        "easy_start": false,
        "battery_type": "Li-ion",
        "battery_and_charger_included": "два АКБ и ЗУ",
        "case_included": true,
        "battery_installation_type": "слайдер",
        "work_light": true,
        "spindle_lock": true,
        "accidental_start_protection": false,
        "overload_protection": true,
        "work_modes": ["Режим закручивания с ударом"],
        "max_fastener_size": "18 мм",
        "engine_brake": true,
        "belt_clip": true,
        "bit_attachment_socket": false,
        "weight": "4.6 кг",
        "detailed_description": [
          "Мощный аккумуляторный шуруповерт с высоким крутящим моментом и ударной функцией.",
          "Идеально подходит для профессионального использования в строительстве и ремонте.",
          "Компактный размер и легкий вес обеспечивают удобство при работе на высоте или в труднодоступных местах."
        ],
        "advantages": [
          "Высокий крутящий момент для эффективной работы с различными материалами.",
          "Ударная функция обеспечивает легкое закручивание и откручивание крепежных элементов.",
          "Прорезиненная рукоятка для комфортного и надежного сцепления с инструментом.",
          "Встроенная подсветка рабочей зоны для улучшения видимости в условиях недостаточного освещения.",
          "Защита от перегрузки и тормоз двигателя увеличивают безопасность и продлевают срок службы инструмента."
        ],
        "kit_inclusion": [
          "Шуруповерт",
          "Два аккумулятора",
          "Зарядное устройство",
          "Кейс для хранения и транспортировки"
        ]
      }
    ]



export interface Product {
    id: number;
    article: string;
    brands: string;
    country_of_origin: string;
    warranty: string;
    dimensions: {
      width: string;
      height: string;
      depth: string;
    };
    power_type: string;
    cartridge_type: string;
    speeds_count: number;
    sound_pressure_level: string;
    max_torque: string;
    idle_speed: string;
    battery_voltage: string;
    strokes_per_minute: string;
    battery_capacity: string;
    handle: string;
    reverse: boolean;
    engine_type: string;
    charging_time: string;
    speed_adjustment: boolean;
    battery_charge_indicator: boolean;
    easy_start: boolean;
    battery_type: string;
    battery_and_charger_included: string;
    case_included: boolean;
    battery_installation_type: string;
    work_light: boolean;
    spindle_lock: boolean;
    accidental_start_protection: boolean;
    overload_protection: boolean;
    work_modes: string[];
    max_fastener_size: string;
    engine_brake: boolean;
    belt_clip: boolean;
    bit_attachment_socket: boolean;
    weight: string;
    detailed_description: string[];
    advantages: string[];
    kit_inclusion: string[];
  }