import chaat from "@/assets/dish/chaat.jpg";
import paneerTikka from "@/assets/dish/paneer-tikka.jpg";
import snacks from "@/assets/dish/snacks.jpg";
import chickenStarter from "@/assets/dish/chicken-starter.jpg";
import fish from "@/assets/dish/fish.jpg";
import muttonCurry from "@/assets/dish/mutton-curry.jpg";
import chickenCurry from "@/assets/dish/chicken-curry.jpg";
import vegCurry from "@/assets/dish/veg-curry.jpg";
import dal from "@/assets/dish/dal.jpg";
import biryani from "@/assets/dish/biryani.jpg";
import rice from "@/assets/dish/rice.jpg";
import bread from "@/assets/dish/bread.jpg";
import dessert from "@/assets/dish/dessert.jpg";
import sweets from "@/assets/dish/sweets.jpg";
import iceCream from "@/assets/dish/ice-cream.jpg";
import coffee from "@/assets/dish/coffee.jpg";
import drink from "@/assets/dish/drink.jpg";
import salad from "@/assets/dish/salad.jpg";
import raita from "@/assets/dish/raita.jpg";
import kebab from "@/assets/dish/kebab.jpg";

/** Keyword rules checked in order; first match wins. */
const rules: Array<[RegExp, string]> = [
  [/chaat|dahi bada|papdi/i, chaat],
  [/paneer stick|paneer tikka|cheese ball|haryali|cutlet/i, paneerTikka],
  [/pasta|chowmein|dosa|vadapav|pizza|sandwich|pav bhaji|potato|spring roll|fries|popcorn|candy|chocolate fountain|paan|hukka|dhaba|burma/i, snacks],
  [/seekh|boti|barra|kabab|kebab/i, kebab],
  [/fish|haleem/i, fish],
  [/soup/i, dal],
  [/mutton|gosht/i, muttonCurry],
  [/chicken|murg|k\.f\.c/i, chickenCurry],
  [/dal|chana|rajma/i, dal],
  [/biryani|pulao/i, biryani],
  [/rice/i, rice],
  [/roti|naan|paratha|sheermal|taftan|puri|bhatura|bakarkhani|gulapsha/i, bread],
  [/ice-cream|kulfi|softy|custard/i, iceCream],
  [/jamun|jalebi|imarti|rasmalai|chena|tukda|kunafa|cake|mango cream/i, sweets],
  [/kheer|halwa|mutanjan|mujaffar/i, dessert],
  [/coffee|chai|tea|kahwa|espresso|cappuccino|mocha/i, coffee],
  [/mocktail|mojito|shake|water/i, drink],
  [/raita|chutney|achar/i, raita],
  [/salad/i, salad],
];

const categoryFallback: Record<string, string> = {
  "starters-veg": snacks,
  "starters-nonveg": chickenStarter,
  mutton: muttonCurry,
  chicken: chickenCurry,
  "veg-main": vegCurry,
  biryani: biryani,
  roti: bread,
  desserts: dessert,
  "ice-cream": iceCream,
  drinks: drink,
  salad: salad,
};

export function dishImage(name: string, categoryId: string): string {
  // Veg categories should never resolve to a meat photo.
  const isVeg = categoryId === "starters-veg" || categoryId === "veg-main";
  for (const [pattern, src] of rules) {
    if (!pattern.test(name)) continue;
    if (isVeg && (src === chickenCurry || src === muttonCurry || src === fish || src === kebab)) {
      return categoryFallback[categoryId] ?? vegCurry;
    }
    return src;
  }
  return categoryFallback[categoryId] ?? vegCurry;
}
