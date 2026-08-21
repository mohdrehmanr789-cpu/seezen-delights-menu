export type MenuCategory = { id: string; title: string; items: string[] };

export const menuCategories: MenuCategory[] = [
  {
    id: "starters-veg",
    title: "Starters (Veg)",
    items: [
      "Aloo Chaat","Basket Chaat","Banarasi Chaat","Desi Ghee Chaat","Mutter Papdi Chaat","Fruit Chaat","Pasta","Chowmein","Dahi Bada","Mango Dahi Bada","Masala Dosa","Vadapav","Pizza","Sandwich","Pav Bhaji","Honey Chilli Potato","Veg Spring Roll","French Fries","Paneer Stick","Paneer Tikka","Cheese Ball","Haryali Kabab","Cutlets","Burma Shree","Paan Stall","Popcorn","Sugar Candy","Chocolate Fountain","Hukka","Punjabi Dhaba",
    ],
  },
  {
    id: "starters-nonveg",
    title: "Starters (Non-Veg)",
    items: [
      "Chicken Malai Tikka (Boneless)","Chicken Chilli (Boneless)","Chicken Reshmi Tikka (Boneless)","Thai Chicken (Boneless)","Chicken Tiyanga (Boneless)","Chicken Lollipop Starter","Chicken Cheese Starter","Chicken Shahi Starter","Chicken Barra","Chicken Green Barra","Afghani Chicken & Roasted","Chicken Fry","K.F.C Chicken","Chicken Kali Mirch (Tawa)","Murg Musallam","Butter Chicken","Chicken Tandoori","Chicken Kali Mirch Gravy","Chicken Chaap","Chicken Sweet Corn Soup","Chicken Kadai","Chicken Kadai Gosht","Chicken Sizzler","Chicken Arabi Gravy","Chicken Ban Makhni Roasted","Mutton Seekh Boti","Tawa Fish","Seekh Boti","K.F.C Fish Fry","Fish Fry","Stick Fish","Tiyanga Fish","Haleem",
    ],
  },
  {
    id: "mutton",
    title: "Non-Veg Main Course (Mutton)",
    items: [
      "Mutton Stew","Mutton Green Stew","Mutton Shimla Stew","Mutton Butter Masala","Mutton Korma","Mutton Nawabi Korma","Mutton Badam Pasanda","Mutton Nahari","Mutton Achari","Mutton Boti (Tawa)","Mutton Bheja Masala (Tawa)","Mutton Chaap Bawra","Mutton Shahi Korma","Mutton Dum","Mutton Rogan Josh","Mutton Tagdi Barra","Mutton Musallam",
    ],
  },
  {
    id: "chicken",
    title: "Non-Veg Main Course (Chicken)",
    items: [
      "Chicken Korma","Chicken Qorma Shahi","Chicken Handi","Chicken Masala","Chicken Achari","Chicken Kadhai","Chicken Stew","Chicken Mughlai","Chicken Afghani","Chicken Badami","Chicken Changezi","Chicken Tikka Masala","Chicken Butter Masala","Chicken Nawabi","Chicken Kali Mirch",
    ],
  },
  {
    id: "veg-main",
    title: "Veg Main Course",
    items: [
      "Shahi Paneer","Kadhai Paneer","Paneer Butter Masala","Paneer Tikka Masala","Palak Paneer","Matar Paneer","Achari Paneer","Malai Kofta","Mix Veg","Veg Handi","Veg Korma","Dum Aloo","Aloo Gobhi","Aloo Matar","Bhindi Masala","Dal Makhani","Dal Dhaba Tadka","Dal Fry","Chana Masala","Rajma Masala",
    ],
  },
  {
    id: "biryani",
    title: "Biryani & Rice",
    items: [
      "Mutton Shahi Biryani","Mutton Dum Biryani","Mutton Pulao Biryani","Mutton Jafrani Biryani","Chicken Biryani","Shahi Chicken Biryani","Chicken Jafrani Biryani","Chicken Pulao Biryani","Chicken Yakhni Pulao","Desi Murga Biryani","Chicken Tikka Biryani","Chicken Madrasi Biryani","Veg Biryani","Veg Pulao","Shahi Pulao","Jeera Rice","Peas Pulao","Kashmiri Pulao",
    ],
  },
  {
    id: "roti",
    title: "Roti / Naan",
    items: [
      "Sheermal","Taftan","Bakarkhani Roti","Gulapsha Roti","Shahi Paratha","Roomali Roti","Tandoori Roti","Dhaniya Roti","Butter Naan","Butter Garlic Naan","Plain Naan","Lachha Paratha","Missi Roti","Puri","Bhatura",
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    items: [
      "Mutanjan","Mujaffar","Matka Kheer","Shahi Kheer","Gulab Jamun","Gajar Halwa","Lauki Halwa","Gond Ka Halwa","Egg Halwa","Moong Halwa","Suji Halwa","Imarti with Rabdi","Jalebi with Rabdi","Chena","Rasmalai","Shahi Tukda","Mango Cream","Kunafa","Welcome Cake",
    ],
  },
  {
    id: "ice-cream",
    title: "Ice-Cream",
    items: [
      "Royal Fruit Ice-Cream","American Nut Ice-Cream","Mango Ice-Cream","Butterscotch Ice-Cream","Brownie Ice-Cream","Fruit Nut Ice-Cream","Vanilla Ice-Cream","Strawberry Ice-Cream","Rajbhog Ice-Cream","Mava King Ice-Cream","Softy Ice-Cream","Kulfi Cake Ice-Cream","Kesari Tajmahal Ice-Cream","Kesar Zafran Kaju Ice-Cream","Kasata Double Dhamaal Ice-Cream","Faluda Kulfi","Fruit Custard",
    ],
  },
  {
    id: "drinks",
    title: "Drinks",
    items: [
      "Mocktail","Mojito","Welcome Shake","Water Bottle","Water Cooler","Chocolate Coffee","Green Tea","Kashmiri Kahwa","Ginger Chai","Elaichi Chai","Masala Chai","Coffee Butterscotch","Mocha Coffee","Espresso Coffee","Cappuccino","Regular Coffee","Chocolaty Coffee",
    ],
  },
  {
    id: "salad",
    title: "Salad",
    items: [
      "Fresh Green Salad","Kashmiri Salad","Onion Salad","Boondi Raita","Mint Chutney","Green Chutney","Fruit Raita","Mix Achar",
    ],
  },
];
