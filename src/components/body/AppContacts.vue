<template>
  <div class="body-div">
    <div class="left-side">
      <div v-for="contact in SortedContacts" :key="contact.uid" class="name-box">
        <p>{{ contact.firstName }}</p>&nbsp;
        <p>{{ contact.lastName }}</p>
      </div>
    </div>
    <div class="right-side"></div>
  </div>
</template>

<script>
import { ref, onMounted, watch } from "vue";
import { UserService } from "@/services/user-service";

export default {
  name: 'AppContacts',
  setup() {
    const SortedContacts = ref([]);
    const userService = UserService();
    const currentUser = localStorage.getItem('userID');

    const sortByFirstLetter = (contacts) => {
      return contacts.sort((a, b) => {
          const nameA = a.firstName.toUpperCase();
          const nameB = b.firstName.toUpperCase();
          return nameA.localeCompare(nameB);
      });
    };


    // watch "lauscht" auf neue infos
    watch(() => userService.contacts.value, (newContacts) => {
      console.log('New contacts:', newContacts); 
      if (newContacts && Array.isArray(newContacts)) {
        SortedContacts.value = sortByFirstLetter(newContacts);
        console.log('SortedContacts.value:', SortedContacts.value);
      } else {
        console.log('No contacts found or contacts are not an array');
      }
    });
    

    onMounted(() => {
      // init fetch der contacts
      userService.fetchContacts(currentUser);
    });
    return {
      SortedContacts,
    };
  }
};
</script>



<style lang="scss" scoped>
.body-div {
  display: flex;
  height: 100%;
  width: 100%;
  .left-side {
    width: 50%;
    height: auto;
    background-color: orange;
    .name-box{
      display: flex;
    }
  }
  .right-side {
    width: 50%;
    height: auto;
    background-color: blue;
  }
}
</style>
