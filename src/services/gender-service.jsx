const GenderService = () => {
  const _genders = require('../mocks/genders.json');

  const _generateNameForGenders = genders =>
    new Promise(resolve => {
      setTimeout(
        () =>
          resolve(
            genders.map(gender => ({
              ...gender,
              name: gender.text.toLowerCase(),
            }))
          ),
        Math.random() * 100
      );
    });

  return {
    getGenders: async function() {
      return await _generateNameForGenders(_genders);
    },
    getGenderForId: async function(genderId) {
      const genders = await this.getGenders();
      return genders.find(gender => gender.id === Number(genderId));
    },
    getGenderForName: async function(genderName) {
      const genders = await this.getGenders();
      return genders.find(gender => gender.name === genderName);
    },
  };
};

export default GenderService();
