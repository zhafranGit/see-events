'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert("events",
      [
        {
          userId: 1,
          categoryId: 1,
          title: "SIRAMAN ROHANI SECARA ISLAMI",
          description: `Dari kata siram yang artinya mengguyur adalah sebuah kata yang dipakai untuk membersihkan sesuatu. Sedangkan jika disambungkan dengan kata rohani yang berarti siraman rohani artinya adalah pembersihan jiwa maupun hati. Dalam agama islam sirman ini diperlukan disaat-saat tertentu, hal ini dikarenakn tidak semua orang percaya dengan adanya siraman tersebut. Siraman  ini biasanya dilakukan oleh orang-orang tertentu, seperti tokoh agama di lingkungan setempat atau bisa memanggil orang yang diyakini bisa melakukan siraman ini. Tidak sembarang orang yang bisa melakukan siraman ini secara islami. Saat ini banyak orang-orang yang melakukan siraman tersebut dengan cara mengucapkan doa-doa yang diyakini dapat mengusir keburukan atau hal-hal negatif lainnya. Tak hanya itu, siraman ini pun telah marak menjadi tontonan di acara tv. Biasanya beberapa chenel tv menyiarkan siraman ini. Tujuannya adalah untuk memberitahukan kepada publik bahwa siraman tersebut penting dan bisa dilakukan secara islami. Tak jarang, orang pun melakukan hal tersebut untuk menghilangkan zat-zat negatif yang ada di dalam tubuh. Namun perlu anda ketahui bawa tidak semua orang bisa melakukan siraman ini. Ketika anda melakukan siraman tersebut terdapat syarat yang harus dilakukan. Seperti halnya melaksanakan puasa sebelum siraman dimulai atau bahkan berkurban binatang halal. Hal ini adalah simbol bersyukur kepada Allah SWT yang telah memberikan banyak nikmat di masa hidupnya. Namun ada pula siraman yang langsung bisa dilakukan kepada orang lain. Siraman ini pun sifatnya terbuka, jadi bisa dilakukan secara individu maupun kelompok.`
        },
        {
          userId: 2,
          categoryId: 2,
          title: "Tahlilan",
          description: `Tahlilan adalah suatu kebudayaan yang dilakukan oleh kalangan orang muslim. Hal ini dilakukan ketika acara-acara tertentu, misal pra maupun pasca acara ceramah, khitan, maupun lainnya. Di kota-kota besar, acara ini sering dilakukan bersama keluarga besar. Di dalam desa, acara ini dilaksakan bersama orang kampung. Hal ini dikarenakan orang-orang di kota lebih memilih menyelesaikan pekerjaan dan aktivitas lainnya. Meski perkerjaan tersebut tidak di malam hari, namun kebanyakan tahlilan dilakukan pada malam hari dan jam malam adalah di mana orang pekerja melaksakan istirahat mengumpulkan tenaga untuk esok harinya.  Tahlilan adalah salah satu bentuk dari siraman rohani dikarenakan dapat menenangkan jiwa dan hati. Biasanya tahlilan ini adalah wujud syukur atas nikmat yang diberikan oleh Allah SWT. Beryukkur dengan cara berbagi dengan sesame umat muslim lainnya. Apakah anda juga seperti itu?. `
        },
      ])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
