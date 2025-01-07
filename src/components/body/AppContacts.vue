<template>
  <div class="body-div">
    <div class="left-side">
      <button @click="addUser">Add User</button>
      <div v-for="contact in SortedContacts" :key="contact.uid" class="name-box-forloop">
        <div class="name-box" @click="seeUser(contact.uid)">
          <p>{{ contact.firstName }}</p>&nbsp;
          <p>{{ contact.lastName }}</p>
        </div>
      </div>
    </div>
    <div class="right-side">

      <div class="right-top" v-if="seeUserRightTop">
        <input type="text" v-model="contactName">
        <input type="eamil" v-model="contactMail">
        <input type="number" v-model="contactPhone">
        <div>
          <button>Save</button>
          <button>Cancel</button>
        </div>
      </div>

      <div class="right-bottom" v-if="openAddUserBox">
        <input type="text" v-model="addContactName">
        <input type="eamil" v-model="addContactMail">
        <input type="number" v-model="addContactPhone">
        <div>
          <button>Create</button>
          <button>Cancel</button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { ref, onMounted, watch } from "vue";
import { UserService } from "@/services/user-service";
// import { get } from "core-js/core/dict";

export default {
  name: 'AppContacts',
  setup() {
    const contactName = ref('');
    const contactMail = ref('');
    const contactPhone = ref('');
    const addContactName = ref('');
    const addContactMail = ref('');
    const addContactPhone = ref('');
    const seeUserRightTop = ref(false);
    const openAddUserBox = ref(false);
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
      if (newContacts && Array.isArray(newContacts)) {
        SortedContacts.value = sortByFirstLetter(newContacts);
      } else {
        console.log('No contacts found or contacts are not an array');
      }
    });


    const addUser = () => {
      openAddUserBox.value = true;
    };


    const seeUser = (contactUID) => {
      seeUserRightTop.value = true;
      const getUser = userService.contacts.value.find((user) => user.uid === contactUID);
      if (getUser) {
        console.log('getUser:', getUser);
        contactName.value = getUser.firstName + ' ' + getUser.lastName;
        contactMail.value = getUser.email;
        contactPhone.value = getUser.phoneNumber;
      }
    };
    

    onMounted(() => {
      // init fetch der contacts
      userService.fetchContacts(currentUser);
    });



    return {
      SortedContacts,
      seeUser,
      addUser,
      contactName,
      contactPhone,
      contactMail,
      seeUserRightTop,
      openAddUserBox,
      addContactName,
      addContactMail,
      addContactPhone
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
    .name-box-forloop{
      .name-box{
        display: flex;
        cursor: pointer;
      }
    }
  }
  .right-side {
    width: 50%;
    height: 100%;
    position: relative;
    .right-top{
      display: flex;
      flex-direction: column;
      background-color: limegreen;
      widows: 100%;
      height: 50%;
      position: absolute;
      top: 0;
      right: 0;
      position: relative;
    }
    .right-bottom{
        position: absolute;
        bottom: 0;
        right: 0;
        widows: 100%;
        height: 50%;
        background-color: crimson ;
      }
  }
}
</style>
