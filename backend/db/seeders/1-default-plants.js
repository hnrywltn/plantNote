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
        {
          name: "Grapes",
          binomialName: "Vitis",
          imgUrl: "https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/576b7d46fe8d750003000413.jpg?1466662209",
          description: "Grapes are the clustered fruit of deciduous, perennial woody vines in the Vitis genus. The majority of both table and wine grapes are cultivars of the European grapevine, Vitis vinifera, which is native to the Mediterranean and Central Asia. Other species include Vitis labrusca, the North American table and grape juice species, which is more cold-hardy, and Vitis amurensis, the most important Asian species. There are over 10,000 varieties of wine grapes. Table grape cultivars have large, seedless fruit with thin skin. Wine grapes have smaller fruit with seeds, thicker skin (most of the aroma in wine comes from the skin), and a higher sugar content. Grapes are propagated through cuttings because seeds do not reliably yield the same type of plant as their parent. Most varieties are self-fertile, but some may need another plant for pollination. All grapes need to be trained to a support so they grow upward - this reduces disease risk and facilitates cultivation and harvest. Plants should not be allowed to produce fruit in the first few years - the plant's energy needs to be focused on establishing roots and vines. Grapes only produce fruit on new growth, or canes, and need to be pruned each year in late winter when the vines are still dormant. Heavy pruning results in higher fruit yields. Most grapes need about 150 chilling hours at temperatures below 10°C. Grapes need to be ripened on the vine.",
          sunRequirements: "Full Sun",
          userId: 1,
        },
        {
          name: "Lettuce",
          binomialName: "Lactuca Sativa",
          imgUrl: "https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/551dcbb23732390003790100.jpg?1428016048",
          description: "Lettuce is a cool weather crop and high temperatures will impede germination and/or cause the plant to bolt (go to seed quickly). Some hybrid cultivars have been bred to be more heat-resistant.",
          sunRequirements: "Partial Sun",
          userId: 1,
        },
        {
          name: "Eggplant",
          binomialName: "Solanum melongena",
          imgUrl: "https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/576b79ddfe8d75000300038a.jpg?1466661339",
          description: "Eggplants commonly are egg-shaped with glossy black skin, but can come in a variety of other shapes and colors. They can be white, yellow, and pale to deep purple. Some are as small as goose eggs. The 'Rosa Bianca' cultivar is squat and round, while Asian cultivars can be long and thin. Eggplant stems are often spiny and their flowers range from white to purple. \n\nTheir flesh is generally white with a meaty texture and small seeds in the center. They are delicious grilled, roasted, in soups and stews, and breaded and fried.",
          sunRequirements: "Full Sun",
          userId: 1,
        },
        {
          name: "Onion",
          binomialName: "Allium cepa",
          imgUrl: "https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/56857be71083470003000000.jpg?1451588582",
          description: "The onion, also known as the bulb onion or common onion, is a vegetable that is the most widely cultivated species of the genus Allium. The shallot is a botanical variety of the onion. Until 2010, the shallot was classified as a separate species.",
          sunRequirements: "Full Sun",
          userId: 1,
        },
        {
          name: "Watermelon",
          binomialName: "Citrullus lanatus",
          imgUrl: "https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/591e1e22dfdcf50004000001.jpg?1495146011",
          description: "The watermelon is a species of melon that produces round or oblong fruits with thick skin and sweet, watery flesh. It is a special kind of berry with a hard rind and no internal division, botanically known as a \"pepo.\" The rind is usually dark green with light-green stripes. The flesh can be red or yellow. Like other melons and members of the Cucurbitaceae family, the watermelon grows on sprawling vines.",
          sunRequirements: "Full Sun",
          userId: 1,
        },
        {
          name: "Pumpkin",
          binomialName: "Cucurbita pepo",
          imgUrl: "https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/54b4aa886130650002020000.jpg?1421126278",
          description: "Pumpkins are squash cultivars that are round to oval in shape with thick, slightly ribbed skin that varies from deep yellow to orange in color. Their flesh ranges from yellow to gold and has large seeds. Like other members of the Cucurbitaceae family, they grow on sprawling vines. Different varieties of pumpkins are grown for food or decoration.",
          sunRequirements: "Full Sun",
          userId: 1,
        },
        {
          name: "Sunflower",
          binomialName: "Helianthus annuus",
          imgUrl: "https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/550c827f3730310003ea0000.jpg?1426883198",
          description: "Sunflowers are large flowers with bright to deep yellow ray florets surrounding a large circular grouping of disc florets that mature into seeds. Sunflowers are grown for ornamental purposes, cut flowers, or their edible seeds. They can reach heights of 300cm or more.",
          sunRequirements: "Full Sun",
          userId: 1,
        },
        {
          name: "Rose",
          binomialName: "Rosa",
          imgUrl: "https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/59e68c3ea4beeb00040000c6.jpg?1508281402",
          description: "Roses are flowering woody perennials in the Rosa genus and Rosaceae family. There are over 100 species, most of which are native to Asia, and 1000s of cultivars, which can take the shape of shrubs or climbing plants with sickle-shaped prickles or thorns. Their flowers, which are also known as roses, are large, showy, and fragrant. Roses produce berry-like fruit which are known as rose hips. Domestic cultivars often do not produce fruit because their flowers are so tightly petalled that they cannot be pollinated. The rose hips of the Dog Rose and Rugosa Rose are very high in Vitamin C. Roses are generally propagated through cuttings. If starting from seed, stratify seeds to improve germination. More growing information is available in individual Rose species entries.",
          sunRequirements: "Full Sun",
          userId: 1,
        },
        {
          name: "daisy",
          binomialName: "Bellis perennis",
          imgUrl: "https://images.all-free-download.com/images/graphicthumb/daisies_196008.jpg",
          description: "Bellis perennis, the daisy, is a common European species of the family Asteraceae, often considered the archetypal species of that name. To distinguish this species from other 'daisies' it is sometimes qualified as common daisy, lawn daisy or English daisy.",
          sunRequirements: "Full Sun",
          userId: 1,
        },
        {
          name: "Thyme",
          binomialName: "Thymus vulgaris",
          imgUrl:  "https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/58e32ad6ca5bf60004000164.jpg?1491282642",
          description: "Thyme is a perennial evergreen herb in the Lamiaceae (Mint) family. It is related to Oregano. Thyme is cold-hardy to -28.8 °C and a perennial in US Hardiness zones 5-8. Thyme can live for 5-6 years but needs to be divided or replaced after 3-4 years. It can be used fresh or dried to season dishes.",
          sunRequirements: "Full Sun",
          userId: 1,
        },
        {
          name: "Cactus",
          binomialName: "Cactaceae",
          imgUrl: "https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/576b7547fe8d7500030002f3.jpg?1466660165",
          description: "A cactus is a member of the plant family Cactaceae, a family comprising about 127 genera with some 1750 known species of the order Caryophyllales. The word 'cactus' derives, through Latin, from the Ancient Greek κάκτος, kaktos, a name originally used by Theophrastus for a spiny plant whose identity is now not certain.",
          sunRequirements: "Full Sun",
          userId: 1,
        },
        {
          name: "Strawberry",
          binomialName: "Fragaria × ananassa",
          imgUrl: "https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/551dc6103732390003730100.jpg?1428014606",
          description: "Strawberries are a hybrid species of the genus Fragaria that produce sweet, bright red fruits. There are three main types of strawberries: 1) summer-fruiting: produce a single, large crop of fruit the year after planting. To grow, transplant plugs or crowns in early spring in rows spaced at least 120cm apart. Pinch off all flowers the first season and train the plant's runners, pressing them into the soil 15-22cm apart from the mother plant. Mulch with straw or pine needles in the fall when the plants have died back. When the plants start to grow back in the spring, move the mulch aside. After harvest the second season, set a lawnmower to about 10cm high and mow, being sure not to damage crowns. The other two types are 2) Ever-bearing and 3) Day Neutral, both of which send out less runners and bear several crops of smaller fruit throughout the season. These two types can be grown using raised beds about 20cm high and 60cm wide. Transplant crowns or plugs in staggered double rows, about 30cm apart. Remove runners and flowers until July of the first year to give the roots time to develop, and then allow plants to produce fruit. All types of strawberries begin to produce fewer and less sweet fruit once they are two years or older. Because strawberries are a hybrid, seeds will not breed true. Strawberries are predominantly propagated using bare root plugs or crowns or dividing runners. Make sure not to bury the crown when transplanting plugs.",
          sunRequirements: "Full Sun",
          userId: 1,
        },
        {
          name: "Apple",
          binomialName: "Malus pumila",
          imgUrl: "https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/5939df7401f8790004000005.jpg?1496964975",
          description: "The apple is a deciduous tree in the Rose family grown for it's sweet fruit. The apple originated in Central Asia and has spread across the world. There are now over 7,500 cultivars bred for a variety of climates and characteristics. Apples are propagated through grafting because seeds do not breed true.",
          sunRequirements: "Full Sun",
          userId: 1,
        },
        {
          name: "Orange",
          binomialName: "Citrus × sinensis",
          imgUrl: "https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/54b4aef16130650002050000.jpg?1421127404",
          description: "The Orange is a tropical evergreen tree that produces round orange fruits, also known as \"Oranges.\" Many species are self-pollinating, but having multiple trees for cross pollination can improve fruit size. Trees need temperatures between 21-32° C to grow properly and produce fruit. Oranges can usually withstand winter temperatures down to -6.1° C without experiencing damage to their leaves or trunk. Trees will bear fruit 2-3 years after transplanting.8",
          sunRequirements: "Full Sun",
          userId: 1,
        },
        {
          name: "Celery",
          binomialName: "Apium graveolens",
          imgUrl: "https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/576b75b8fe8d7500030002f7.jpg?1466660278",
          description: "The celery plant has long fibrous stalks that taper into leaves. The stalks and leaves can both be eaten. Celery seed is also used as a spice. Celery seed extracts are used in medicines.",
          sunRequirements: "Full Sun",
          userId: 1,
        },
        {
          name: "Mushroom",
          binomialName: "Agaricus bisporus",
          imgUrl: "https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/576b88b3fe8d75000300042a.jpg?1466665136",
          description: "Mushrooms are the fleshy, spore-bearing, fruiting body of a fungus. Mushrooms often have a stem, a cap, and gills on the underside of the cap - but not always. Commonly cultivated mushrooms include Oyster (the easiest and best for beginners), Shittake, King Stropharia or Wine Cap, Maitake, Lion's Mane, and Reishi. Mushrooms are generally grown by obtaining spores and inoculating a substrate (compost, cardboard, etc. Different types prefer different substrates) with the spores. Mushrooms can be grown indoors or outdoors, but it is often easier to cultivate them indoors because the light and moisture can be more thoroughly controlled. More growing information is available in individual species entries.",
          sunRequirements: "Full Shade",
          userId: 1,
        },
        {
          name: "Olive",
          binomialName: "Olea europaea",
          imgUrl: "https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/576b8b85fe8d750003000430.jpg?1466665857",
          description: "The Olive is an evergreen shrub or tree native to the Mediterranean, Asia, and Africa that is grown for its fruits, which are also known as olives. The plant is short and squat, with a gnarled trunk, rounded crown, oblong silvery green leaves, and shallow roots. Olive trees produce fruit in their third or fourth year from small, white, feathery flowers that bloom on the previous year's wood. There are hundreds of cultivars of olives, most of which are self-sterile and require a secondary cultivar nearby for cross-pollination. Some cultivars are bred for oil production, others for fresh eating. Trees are drought-tolerant and require about 200 hours of temperatures below 10° C to produce flowers. Temperatures below -5.5° C can kill young trees, mature trees cannot survive temperatures below to -9.4° C. Olive fruits are small, oblong drupes 1-2.5 cm long. They are harvested when green to purple and are usually pickled or cured for fresh eating to reduce their bitterness. Olives can be grown in containers and indoors in cooler regions.",
          sunRequirements: "Full Sun",
          userId: 1,
        },
        {
          name: "Squash",
          binomialName: "Cucurbita",
          imgUrl: "https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/54b4a9046130650002010000.jpg?1421125890",
          description: "Squash is a genus of herbaceous vines that have large edible orange flowers that mature into gourds or cucurbits. Squash are commonly divided into two main groups: summer and winter. Summer squash have shorter growing times, a bushy growth habit, tender skin, and are quite prolific. Common types include cucumbers, zucchini, and pattypan squash. Winter squash take longer to mature, have a more sprawling growth habit, and produce gourds with thicker skins that can be stored for a few months. Common winter squash are pumpkins, butternut squash, acorn, and delicata. Most squash transplant poorly. If starting from seed indoors, use peat pots that can be directly transplanted into the soil to reduce root disturbance. More growing information is available in individual species entries.",
          sunRequirements: "Full Sun",
          userId: 1,
        },
        {
          name: "Mango",
          binomialName: "Mangifera",
          imgUrl: "https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/5a036264e4b18f0004000190.jpg?1510171229",
          description: "Mangoes are the juicy stone fruit of a variety of species of tropical trees in the Mangifera genus. The most widely grown species is Mangifera indica. Mango trees have a canopy of glossy dark green leaves, a deep taproot, and pink, red, or yellow flowers. Depending on the cultivar, the fruits can be yellow, orange, red, or green and have tastes that vary from sweet to turpentine-like. All mangoes have a single, flat, oblong pit that does not separate easily from the pulp. Mangoes are in the Cashew family (Anacardiaceae), which also includes Poison Ivy, and their skin can cause contact dermatitis in some individuals. Mangoes require a frost-free tropical or warm subtropical climate where temperatures do not drop below 4° C. They can be grown indoors in containers in cooler regions. Transplanted trees will produce fruit in 3 years; trees started from seed take 6 years to bear fruit. In the right climate, mango trees can grow very large, and some species can produce fruit for 300 years.",
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
