import { ref } from 'vue';
import axios from 'axios';

const useUsers = () => {
  const isLoading = ref(false);
  const currentPage = ref(1);
  const users = ref([]);
  const errorMessage = ref('');

  const getUsers = async (page = 1) => {
    if (page <= 0) {
      page = 1;
    }
    isLoading.value = true;
    try {
      const { data } = await axios.get('https://reqres.in/api/users', {
        params: { page },
      });
      if (data.data.length) {
        users.value = data.data;
        currentPage.value = page;
        errorMessage.value = '';
      } else if (currentPage.value > 0) {
        errorMessage.value = 'No more records';
      }
    } catch (e) {
      console.error(e);
      errorMessage.value = 'No more records';
    }
    isLoading.value = false;
  };

  getUsers();

  return {
    isLoading,
    currentPage,
    users,
    errorMessage,
    previousPage: () => getUsers(currentPage.value - 1),
    nextPage: () => getUsers(currentPage.value + 1),
  };
};

export default useUsers;
