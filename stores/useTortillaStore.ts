import { defineStore } from "pinia";
import { ref } from "vue";

export const useTortillaStore = defineStore("tortilla", () => {
  const tortillas = ref([
    {
      id: 1,
      name: "Viande Hachée",
      description: "Oignons, poivrons, fromage, avec un boisson 33cl au choix",
    },
    {
      id: 2,
      name: "Poulet Tikka",
      description:
        "Oignons, poivrons, fromage, blanc de poulet mariné, sauce barbecue, avec un boisson 33cl au choix",
    },
  ]);

  const setTortillas = (newTortillas: any[]) => {
    tortillas.value = newTortillas;
  };

  return { tortillas, setTortillas };
});
