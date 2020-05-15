<template>
  <div class="app1">
    <component :is="comName" class="middle"></component>
    <Nav @handleToggle="togglePage"/>
  </div>
</template>
<script>
import Tui from "../tuijian";
import Guoji from "../guoji/index";
import Cloth from "../clothes/index";
import Food from "../food/index";
import Food1 from "../food1/index";
import Snacks from "../snacks/index";
import Toy from "../toy/index";
import Clear from "../clear/index";
import Health from "../health/index";
import Nurse from "../nurse/index";
import Lift from "../lift/index";
import Traction from "../traction/index";
import Hairdress from "../hairdress/index";
import Bath from "../bath/index";
import Nav from "../../common/tabbar1";
export default {
  name: "app1",
  data() {
    return {
      comName: "Tui"
    };
  },
  components: {
    Tui,
    Guoji,
    Cloth,
    Food,
    Food1,
    Snacks,
    Toy,
    Clear,
    Health,
    Nurse,
    Lift,
    Traction,
    Hairdress,
    Bath,
    Nav
  },
  methods: {
    togglePage(index) {
      switch (index) {
        case 0:
          this.comName = "Tui";
          break;
        case 1:
          this.comName = "guoji";
          break;
        case 2:
          this.comName = "cloth";
          break;
        case 3:
          this.comName = "food";
          break;
        case 4:
          this.comName = "food1";
          break;
        case 5:
          this.comName = "snacks";
          break;
        case 6:
          this.comName = "toy";
          break;
        case 7:
          this.comName = "clear";
          break;
        case 8:
          this.comName = "health";
          break;
        case 9:
          this.comName = "Nurse";
          break;
        case 10:
          this.comName = "Lift";
          break;
        case 11:
          this.comName = "Traction";
          break;
        case 12:
          this.comName = "Hairdress";
          break;
        case 13:
          this.comName = "bath";
          break;
      }
    }
  }
};
</script>
<style scoped>
</style>


