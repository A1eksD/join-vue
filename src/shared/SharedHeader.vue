<template>
  <div class="body-div">
    <img src="../assets/icons/letter-j.png" class="letter-j" alt="" />
    <div class="right-div">
      <div class="name-div">
        <h1>
          {{ initials }}
        </h1>
      </div>
      <img src="../assets/icons/logout.png" @click="logout" class="logoutIcon" alt="">
    </div>
  </div>
</template>

<script>
import { loginService } from "@/services/login-service";
import { useRouter } from "vue-router";

export default {
  name: "SharedHeader",
  data() {
    return {
      fName: "",
      lName: "",
      initials: "",
      loginServiceInstance: null,
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

    async logout() {
      if (this.loginServiceInstance) {
        try {
          await this.loginServiceInstance.logout(); // Aufruf der Service-Methode
        } catch (error) {
          console.error("Fehler beim Logout:", error);
        }
      } else {
        console.error("Login-Service ist nicht initialisiert.");
      }
    },
  },
  mounted() {
    const router = useRouter();   // Router holen und Service initialisieren
    this.loginServiceInstance = loginService(router);

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

  .letter-j {
    width: 80px;
    object-fit: cover;
    margin-left: 40px;
  }

  .right-div{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    .name-div {
    width: 80px;
    height: 80px;
    background-color: whitesmoke;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

      h1 {
        color: black;
        margin: 0;
      }
    }
    .logoutIcon{
      width: 40px;
      object-fit: cover;
      margin-right: 16px;
      cursor: pointer;
    }
  }
}
</style>
