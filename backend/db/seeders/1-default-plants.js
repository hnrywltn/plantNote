'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Plants', [
        {
          name: "Potato",
          binomialName: "Solanum tuberosum",
          imgUrl: "https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/551dbd5a3732390003600100.jpg?1428012376",
          description: "Potatoes are starchy root vegetables in the Solanaceae, or Nightshade, family, which also includes tomatoes, eggplants, and peppers. They originated in South America, and spread to become a worldwide staple. The leaves and fruit are usually poisonous and the stem tuber is the only edible part once it is cooked. The potato can be cooked in many ways, brewed into alcohol, and also used as the basis for creating bioplastics. More growing information is available in individual species entries.",
          sunRequirements: "Full Sun",
          userId: 1,
        },
        {
          name: "Sage",
          binomialName: "Salvia officinalis",
          imgUrl: "https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/58e32bad4bca6f0004000000.jpg?1491282860",
          description: "Sage is an evergreen shrub with woody stems, soft green-gray leaves, and blue to purplish flowers. It is in the Mint family (Lamiaceae), and is perennial in Zones 4-8. It can be used fresh or dried, and has culinary and medicinal uses.",
          sunRequirements: "Full Sun",
          userId: 1,
        },
        {
          name: "Jicama",
          binomialName: "Pachyrhizus erosus",
          imgUrl: "https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/59f283f233d94e0004000004.jpg?1509065711",
          description: "Jicama is an annual, tropical vine species in the bean family (Fabaceae) grown for it's edible tuberous root. The plant is native to Mexico and Central America. The plant's vines can reach heights of 4-5 m and need trellising. The root can grow to 2 m long and weigh up to 20 kg. Each plant produces 4-5 roots. The clusters of blue or white flowers can be pinched off to direct the plant's energy towards tubers rather than seed. The roots have thick brown skin and look like large round turnips. The flesh is creamy white and has a crisp texture and mildly sweet taste like apples or raw green beans. The skin is peeled and the flesh is eaten raw grated or sliced. Jicama is frost-tender and needs at least 5-9 frost-free months after transplanting to develop good sized roots. Seed can be sown any time of the year in tropical regions. In cooler regions, start seeds indoors to extend the growing season, and grow jicama in a greenhouse or in containers. Tubers are the only edible part of the plant: the seeds, vines, leaves, and flowers are poisonous.",
          sunRequirements: "Full Sun",
          userId: 1,
        },
        {
          name: "Kale",
          binomialName: "Brassica oleracea (acephala)",
          imgUrl: "https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/55b6b7ce6465380003910200.jpg?1438037945",
          description: "Kale is a cultivar of the species Brassica oleracea. It has green or purple leaves that branch off from one to multiple upright stems and do not form a head like cabbage. The plant is usually grown as an annual, but if grown as a perennial, it will form seeds in the second year. Current popular varieties include Curly kale, Italian kale, and Red Russian kale (green leaves with pale purple stems). It can be grown as baby salad greens or for bunching adult leaves. Leaves are sweeter after a frost and delicious eaten raw, added to salads, sautéed, or added to stews and casseroles.",
          sunRequirements: "Full Sun",
          userId: 1,
        },
        {
          name: "Mint",
          binomialName: "Mentha spicata / Mentha viridis",
          imgUrl: "https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/58cee0a6aea93d0004000001.jpg?1489952931",
          description: "Mint is a perennial herb with a distinctive taste. It's stems are square-shaped and it has pink, purple, or white flowers. Peppermint, ginger mint, and large apple mint are hybrids of mint. Mint is often grown in pots to prevent it from overtaking the garden with its invasive, spreading rhizome root structure. It's leaves are most aromatic before the plant flowers and can be used fresh, dried, or frozen. Mint's strongly scented leaves confuse the pests of carrots, tomatoes, alliums, and brassicas, and deter flea beetles.",
          sunRequirements: "Partial Sun",
          userId: 1,
        },
        {
          name: "Rosemary",
          binomialName: "Rosmarinus officinalis",
          imgUrl: "https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/58e32c2c4bca6f0004000002.jpg?1491282983",
          description: "Rosmarinus officinalis, commonly known as rosemary, is a woody, perennial herb with fragrant, evergreen, needle-like leaves and white, pink, purple, or blue flowers, native to the Mediterranean region.\nIt is a member of the mint family Lamiaceae, which includes many other herbs. The name \"rosemary\" derives from the Latin for \"dew\" (ros) and \"sea\" (marinus), or \"dew of the sea\". The plant is also sometimes called 'anthos', from the ancient Greek word ἄνθος, meaning \"flower\". Rosemary has a fibrous root system.",
          sunRequirements: "Full Sun",
          userId: 1,
        },

      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Plants', null, {});
  }
};
