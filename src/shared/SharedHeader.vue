<template>
  <div class="body-div">
    <img src="../assets/icons/letter-j.png" alt="" />
    <div class="name-div">
      <h1>
        {{ initials }}
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "SharedHeader",
  data() {
    return {
      fName: "",
      lName: "",
      initials: "",
    };
  },
  methods: {

    getUserInitials() {
      if (this.fName || this.lName) {
        const firstLetter = this.fName.charAt(0).toUpperCase();
        const secondLetter = this.lName.charAt(0).toUpperCase();
        this.initials = firstLetter + secondLetter;
        console.log("Initials:", this.initials);
        
      } else {
        console.log("No valid names found");
        return '';
      }
    },
  },
  mounted() {
    this.fName = (localStorage.getItem("firstName") || "").trim(); 
    this.lName = (localStorage.getItem("lastName") || "").trim();

    this.getUserInitials();
  },

  computed: {},
};
</script>

<style lang="scss" scoped>
.body-div {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 80px;
    object-fit: cover;
    margin-left: 40px;
  }
  .name-div {
    width: 80px;
    height: 80px;
    background-color: whitesmoke;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 40px;
    h1 {
      color: black;
      margin: 0;
    }
  }
}
</style>
