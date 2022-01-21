'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Events",
      [{
        userId: 1,
        categoryId: 3,
        title: "Siraman Rohani",
        description: `Dari kata siram yang artinya mengguyur adalah sebuah kata yang dipakai untuk membersihkan sesuatu. Sedangkan jika disambungkan dengan kata rohani yang berarti siraman rohani artinya adalah pembersihan jiwa maupun hati. Dalam agama islam sirman ini diperlukan disaat-saat tertentu, hal ini dikarenakn tidak semua orang percaya dengan adanya siraman tersebut. Siraman  ini biasanya dilakukan oleh orang-orang tertentu, seperti tokoh agama di lingkungan setempat atau bisa memanggil orang yang diyakini bisa melakukan siraman ini.`,
        eventDate: "2022-01-19 04:30:00",
        image: "https://i.ytimg.com/vi/vAsWV_Kb1kU/maxresdefault.jpg"
      },
      {
        userId: 2,
        categoryId: 6,
        title: "Tahlilan",
        description: `Tahlilan adalah suatu kebudayaan yang dilakukan oleh kalangan orang muslim. Hal ini dilakukan ketika acara-acara tertentu, misal pra maupun pasca acara ceramah, khitan, maupun lainnya. Di kota-kota besar, acara ini sering dilakukan bersama keluarga besar. Di dalam desa, acara ini dilaksakan bersama orang kampung. Hal ini dikarenakan orang-orang di kota lebih memilih menyelesaikan pekerjaan dan aktivitas lainnya. Meski perkerjaan tersebut tidak di malam hari, namun kebanyakan tahlilan dilakukan pada malam hari dan jam malam adalah di mana orang pekerja melaksakan istirahat mengumpulkan tenaga untuk esok harinya.  Tahlilan adalah salah satu bentuk dari siraman rohani dikarenakan dapat menenangkan jiwa dan hati. Biasanya tahlilan ini adalah wujud syukur atas nikmat yang diberikan oleh Allah SWT. Beryukkur dengan cara berbagi dengan sesame umat muslim lainnya. Apakah anda juga seperti itu?. `,
        eventDate: '2022-01-20 19:30:00',
        image: "https://i.ytimg.com/vi/lmO8QuUbUi4/maxresdefault.jpg"
      },
      {
        userId: 1,
        categoryId: 2,
        title: "Photography Trickshot",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla posuere sollicitudin aliquam ultrices. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam. Urna duis convallis convallis tellus. Consectetur a erat nam at. Imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor. Vitae justo eget magna fermentum iaculis eu non diam. Sit amet nisl suscipit adipiscing bibendum est ultricies integer. Diam donec adipiscing tristique risus. Nisl rhoncus mattis rhoncus urna. Faucibus vitae aliquet nec ullamcorper. Parturient montes nascetur ridiculus mus. Habitant morbi tristique senectus et netus et malesuada. Nulla facilisi cras fermentum odio eu feugiat pretium. Tortor vitae purus faucibus ornare suspendisse. Et malesuada fames ac turpis egestas integer eget aliquet nibh. Est placerat in egestas erat imperdiet sed euismod. Auctor elit sed vulputate mi sit amet.`,
        eventDate: '2022-01-24 00:00:00',
        image: "https://www.thephoblographer.com/wp-content/uploads/2019/10/NczAHI3xxowhd.jpg"
      },
      {
        userId: 2,
        categoryId: 2,
        title: "Tiktok Photography Hacks",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla posuere sollicitudin aliquam ultrices. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam. Urna duis convallis convallis tellus. Consectetur a erat nam at. Imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor. Vitae justo eget magna fermentum iaculis eu non diam. Sit amet nisl suscipit adipiscing bibendum est ultricies integer. Diam donec adipiscing tristique risus. Nisl rhoncus mattis rhoncus urna. Faucibus vitae aliquet nec ullamcorper. Parturient montes nascetur ridiculus mus. Habitant morbi tristique senectus et netus et malesuada. Nulla facilisi cras fermentum odio eu feugiat pretium. Tortor vitae purus faucibus ornare suspendisse. Et malesuada fames ac turpis egestas integer eget aliquet nibh. Est placerat in egestas erat imperdiet sed euismod. Auctor elit sed vulputate mi sit amet.`,
        eventDate: '2022-02-27 19:00:00',
        image: "https://kizisstudio.com/wp-content/uploads/2020/02/maxresdefault-1.jpg"
      },
      {
        userId: 2,
        categoryId: 3,
        title: "Apple Developer Conference 2022",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla posuere sollicitudin aliquam ultrices. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam. Urna duis convallis convallis tellus. Consectetur a erat nam at. Imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor. Vitae justo eget magna fermentum iaculis eu non diam. Sit amet nisl suscipit adipiscing bibendum est ultricies integer. Diam donec adipiscing tristique risus. Nisl rhoncus mattis rhoncus urna. Faucibus vitae aliquet nec ullamcorper. Parturient montes nascetur ridiculus mus. Habitant morbi tristique senectus et netus et malesuada. Nulla facilisi cras fermentum odio eu feugiat pretium. Tortor vitae purus faucibus ornare suspendisse. Et malesuada fames ac turpis egestas integer eget aliquet nibh. Est placerat in egestas erat imperdiet sed euismod. Auctor elit sed vulputate mi sit amet.`,
        eventDate: '2022-02-22 23:30:00',
        image: "https://static01.nyt.com/images/2016/06/14/business/14applelive2/14applelive2-facebookJumbo.jpg"
      },
      {
        userId: 1,
        categoryId: 6,
        title: "Zara EndYear Discount",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla posuere sollicitudin aliquam ultrices. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam. Urna duis convallis convallis tellus. Consectetur a erat nam at. Imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor. Vitae justo eget magna fermentum iaculis eu non diam. Sit amet nisl suscipit adipiscing bibendum est ultricies integer. Diam donec adipiscing tristique risus. Nisl rhoncus mattis rhoncus urna. Faucibus vitae aliquet nec ullamcorper. Parturient montes nascetur ridiculus mus. Habitant morbi tristique senectus et netus et malesuada. Nulla facilisi cras fermentum odio eu feugiat pretium. Tortor vitae purus faucibus ornare suspendisse. Et malesuada fames ac turpis egestas integer eget aliquet nibh. Est placerat in egestas erat imperdiet sed euismod. Auctor elit sed vulputate mi sit amet.`,
        eventDate: '2021-12-21 20:00:00',
        image: "https://www.sgdtips.com/wp-content/uploads/2016/12/ZARA-Singapore-sale-dec-2016.jpg"
      },
      {
        userId: 2,
        categoryId: 6,
        title: "America's Next Top Model",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla posuere sollicitudin aliquam ultrices. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam. Urna duis convallis convallis tellus. Consectetur a erat nam at. Imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor. Vitae justo eget magna fermentum iaculis eu non diam. Sit amet nisl suscipit adipiscing bibendum est ultricies integer. Diam donec adipiscing tristique risus. Nisl rhoncus mattis rhoncus urna. Faucibus vitae aliquet nec ullamcorper. Parturient montes nascetur ridiculus mus. Habitant morbi tristique senectus et netus et malesuada. Nulla facilisi cras fermentum odio eu feugiat pretium. Tortor vitae purus faucibus ornare suspendisse. Et malesuada fames ac turpis egestas integer eget aliquet nibh. Est placerat in egestas erat imperdiet sed euismod. Auctor elit sed vulputate mi sit amet.`,
        eventDate: '2022-01-30 19:00:00',
        image: "https://exstreamist.com/wp-content/uploads/2017/07/Watch-americas-next-top-model-online.jpg"
      },
      {
        userId: 2,
        categoryId: 7,
        title: "Charlie Puth Concert 2022",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla posuere sollicitudin aliquam ultrices. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam. Urna duis convallis convallis tellus. Consectetur a erat nam at. Imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor. Vitae justo eget magna fermentum iaculis eu non diam. Sit amet nisl suscipit adipiscing bibendum est ultricies integer. Diam donec adipiscing tristique risus. Nisl rhoncus mattis rhoncus urna. Faucibus vitae aliquet nec ullamcorper. Parturient montes nascetur ridiculus mus. Habitant morbi tristique senectus et netus et malesuada. Nulla facilisi cras fermentum odio eu feugiat pretium. Tortor vitae purus faucibus ornare suspendisse. Et malesuada fames ac turpis egestas integer eget aliquet nibh. Est placerat in egestas erat imperdiet sed euismod. Auctor elit sed vulputate mi sit amet.`,
        eventDate: '2022-02-10 19:00:00',
        image: "https://static1.purepeople.com/articles/5/17/76/85/@/2171641-charlie-puth-en-concert-a-detroit-dans-l-950x0-1.jpg"
      },
      {
        userId: 1,
        categoryId: 7,
        title: "Djakarta Warehouse Projects 2021",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla posuere sollicitudin aliquam ultrices. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam. Urna duis convallis convallis tellus. Consectetur a erat nam at. Imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor. Vitae justo eget magna fermentum iaculis eu non diam. Sit amet nisl suscipit adipiscing bibendum est ultricies integer. Diam donec adipiscing tristique risus. Nisl rhoncus mattis rhoncus urna. Faucibus vitae aliquet nec ullamcorper. Parturient montes nascetur ridiculus mus. Habitant morbi tristique senectus et netus et malesuada. Nulla facilisi cras fermentum odio eu feugiat pretium. Tortor vitae purus faucibus ornare suspendisse. Et malesuada fames ac turpis egestas integer eget aliquet nibh. Est placerat in egestas erat imperdiet sed euismod. Auctor elit sed vulputate mi sit amet.`,
        eventDate: '2021-12-23 18:00:00',
        image: "https://i.ytimg.com/vi/kXF4UOQdwgw/maxresdefault.jpg"
      },
      {
        userId: 2,
        categoryId: 1,
        title: "Adobe Photoshop Tricks ",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla posuere sollicitudin aliquam ultrices. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam. Urna duis convallis convallis tellus. Consectetur a erat nam at. Imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor. Vitae justo eget magna fermentum iaculis eu non diam. Sit amet nisl suscipit adipiscing bibendum est ultricies integer. Diam donec adipiscing tristique risus. Nisl rhoncus mattis rhoncus urna. Faucibus vitae aliquet nec ullamcorper. Parturient montes nascetur ridiculus mus. Habitant morbi tristique senectus et netus et malesuada. Nulla facilisi cras fermentum odio eu feugiat pretium. Tortor vitae purus faucibus ornare suspendisse. Et malesuada fames ac turpis egestas integer eget aliquet nibh. Est placerat in egestas erat imperdiet sed euismod. Auctor elit sed vulputate mi sit amet.`,
        eventDate: '2022-01-21 20:00:00',
        image: "https://i.ytimg.com/vi/6SWXUDc79iY/maxresdefault.jpg"
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