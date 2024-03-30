export const useDummyData = defineStore("dummyData", () => {
  const dummyData = ref([]);
  const setDummyData = (data) => dummyData.value = data
  return {dummyData, setDummyData}
});
