import { ref } from 'vue';

const useCounter = (initialValue = 0) => {
  const counter = ref(initialValue);

  return {
    counter,
    decrease: () => counter.value--,
    increase: () => counter.value++,
  };
};

export default useCounter;
