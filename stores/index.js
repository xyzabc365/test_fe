export const useDummyData = defineStore("dummyData", () => {
  const dummyArticle = ref([])
  const dummyCategory = ref([])
  const setDummyCategory = (data) => dummyCategory.value = data
  const setDummyArticle = (data) => dummyArticle.value = data
  
  return {dummyArticle, dummyCategory, setDummyCategory, setDummyArticle}
});
