/*
 * @Desc:
 * @FilePath: /learn-graphql/packages/gql_author/src/database/role.js
 * @system: liujianwei1
 * @Date: 2021-06-11 16:49:31
 * @LastEditors: liujianwei1
 * @Reference Desc:
 */

// type Role {
// 	_id: ID!
//   name:String!
//   description:String!
//   system:System!
//   permissions:[ Permission!]
// }

export default
  [
    // 供应链系统
    {
      _id: "3bdb4d34-bcc6-8bf4-6004-26f3971db47d",
      name: "生产",
      description: "6月9日，以色列文物管理局宣布，在中部城镇亚夫内发现一枚拜占庭时期的鸡蛋，距今约有上千年之久。由于得到粪坑内“柔软的人类排泄物”保护，这枚鸡蛋保存得较为完好，实属罕见。不过，鸡蛋底部有一道微小裂痕，导致大部分蛋液流失，只留下少量蛋黄。考古人员将尝试从蛋黄中提取DNA物质，为考古遗传学方面的研究提供依据",
      system: "d348abb8-7dd9-b720-564b-cb61d795631b",
      permissions: ['6ab7ea3a-19f1-8899-3060-c54288b9bed1', 'c40b7b0f-72b1-8a1c-6569-f6ee21db3562', '67df0b21-52a5-1fce-c1ee-2e1008eab9e1', '2041547e-dd11-c8f5-803c-1cd8aeda79f3'],
      users: ['2f6bbe1e-f7e2-f02e-97e9-5a0814339d7a', '4edb8f9d-32ff-6375-7152-cb1323828a97']
    },
    {
      _id: "66d5c811-94ba-1059-459d-fc46f6713c1d",
      name: "教研",
      description: "近日，在中国被用来煲汤的乌鸡，已成为新加坡年轻人最流行养的宠物之一。新加坡男子Aaron和家中四个兄弟姐妹，人手一只宠物乌鸡。他称乌鸡性格温和十分亲人，毛茸茸的外表很可爱常被误看成小狗。此外，在欧美也有不少人把乌鸡当成宠",
      system: "d348abb8-7dd9-b720-564b-cb61d795631b",
      permissions: ['6ab7ea3a-19f1-8899-3060-c54288b9bed1', 'c40b7b0f-72b1-8a1c-6569-f6ee21db3562', '67df0b21-52a5-1fce-c1ee-2e1008eab9e1'],
      users: ['2f6bbe1e-f7e2-f02e-97e9-5a0814339d7a', '4edb8f9d-32ff-6375-7152-cb1323828a97', '67df0b21-52a5-1fce-c1ee-2e1008eab9e1', '6b0e0780-3852-3262-dfe5-0e6746c04852']
    },
    {
      _id: "de549491-e839-9a07-f631-47c81e84ee89",
      name: "供应",
      description: "享有鄱阳湖“苍鹭第一村”美誉的江西省都昌县苏山乡达子咀村坐落于鄱阳湖畔，三面环水，植被丰饶。每年，绝佳的栖息环境吸引着万余只苍鹭飞抵达子咀村，完成求偶、筑巢、交配、产卵、孵化、育雏、学飞等全过程，逗留时间长达9个月",
      system: "d348abb8-7dd9-b720-564b-cb61d795631b",
      permissions: ['c40b7b0f-72b1-8a1c-6569-f6ee21db3562', '67df0b21-52a5-1fce-c1ee-2e1008eab9e1', '2041547e-dd11-c8f5-803c-1cd8aeda79f3'],
      users: ['2f6bbe1e-f7e2-f02e-97e9-5a0814339d7a', '4edb8f9d-32ff-6375-7152-cb1323828a97', '67df0b21-52a5-1fce-c1ee-2e1008eab9e1', '6b0e0780-3852-3262-dfe5-0e6746c04852', '005da55c-d598-ff8e-f65d-83c17031025a']
    },
    // 客服工作台
    {
      _id: "b3abf49f-2b10-4da2-995d-9e5ef4b0bc4c",
      name: "客服主管",
      description: "近日，广西南宁。一女子告诉老公下班回家吃馒头，到家后丈夫却傻眼了。从视频中可以看到丈夫拿起“硬疙瘩”馒头去敲钉子，结果居然没两下钉子就嵌入木头里了。扔在地板上，还有“DuangDuang”的声音，好似石头砸掉在地板的声音一样",
      system: "348c32fa-d030-32d5-fd64-918dc4bb7941",
      permissions: ['c9116882-2937-6154-6423-2bfbfc773be8', 'b61b2c8b-937c-bff7-fa7a-e9fd35268257',
        'e3789b55-acb2-cfdd-8ea2-e3edf17d8347',
        '9c07c6ea-65cc-2e0b-3ce0-b6e789459627'],
      users: ['2f6bbe1e-f7e2-f02e-97e9-5a0814339d7a', '4edb8f9d-32ff-6375-7152-cb1323828a97', '67df0b21-52a5-1fce-c1ee-2e1008eab9e1', '6b0e0780-3852-3262-dfe5-0e6746c04852', '005da55c-d598-ff8e-f65d-83c17031025a']
    },
    {
      _id: "bb2d9f4f-b811-796c-e1a3-71b2dd472c02",
      name: "测试人员",
      description: "近日，广西南宁。一女子告诉老公下班回家吃馒头，到家后丈夫却傻眼了。从视频中可以看到丈夫拿起“硬疙瘩”馒头去敲钉子，结果居然没两下钉子就嵌入木头里了。扔在地板上，还有“DuangDuang”的声音，好似石头砸掉在地板的声音一样",
      system: "348c32fa-d030-32d5-fd64-918dc4bb7941",
      permissions: ['c9116882-2937-6154-6423-2bfbfc773be8', 'b61b2c8b-937c-bff7-fa7a-e9fd35268257',
        'e3789b55-acb2-cfdd-8ea2-e3edf17d8347'],
      users: ['2f6bbe1e-f7e2-f02e-97e9-5a0814339d7a', '4edb8f9d-32ff-6375-7152-cb1323828a97', '67df0b21-52a5-1fce-c1ee-2e1008eab9e1', '6b0e0780-3852-3262-dfe5-0e6746c04852', '005da55c-d598-ff8e-f65d-83c17031025a']
    },
    // 交易平台
    {
      _id: "52850939-8a40-ab64-adf6-96c5cacf779a",
      name: "促销看板(测试）",
      description: "6月9日，河南商丘的朱女士与丈夫一起帮高考结束的女儿搬运书籍资料。整理出来的各类书本、资料、试卷摞成好几堆放在墙角，每个都快有一人高",
      system: "1a0d8992-2bc0-b111-7de7-f311424d82b3",
      permissions: ['14d7edf5-f027-17ad-5cb6-f4b58e44aec9', 'de60d4d7-237f-9206-4b5c-d6116594f214',
        'b8ece7c0-6143-d263-939f-41d1819fb80e',
        '7d67002d-04f2-459d-e0aa-b7e6b20007a3'],
      users: ['2f6bbe1e-f7e2-f02e-97e9-5a0814339d7a', '4edb8f9d-32ff-6375-7152-cb1323828a97', '67df0b21-52a5-1fce-c1ee-2e1008eab9e1', '6b0e0780-3852-3262-dfe5-0e6746c04852', '005da55c-d598-ff8e-f65d-83c17031025a']
    },
    {
      _id: "4b35cd27-ff0d-c668-f372-baf19a2dc012",
      name: "订单看板",
      description: "近日，广西南宁。一女子告诉老公下班回家吃馒头，到家后丈夫却傻眼了。从视频中可以看到丈夫拿起“硬疙瘩”馒头去敲钉子，结果居然没两下钉子就嵌入木头里了。扔在地板上，还有“DuangDuang”的声音，好似石头砸掉在地板的声音一样",
      system: "1a0d8992-2bc0-b111-7de7-f311424d82b3",
      permissions: ['de60d4d7-237f-9206-4b5c-d6116594f214',
        'b8ece7c0-6143-d263-939f-41d1819fb80e',
        '7d67002d-04f2-459d-e0aa-b7e6b20007a3'],
      users: ['2f6bbe1e-f7e2-f02e-97e9-5a0814339d7a', '4edb8f9d-32ff-6375-7152-cb1323828a97', '67df0b21-52a5-1fce-c1ee-2e1008eab9e1', '6b0e0780-3852-3262-dfe5-0e6746c04852', '005da55c-d598-ff8e-f65d-83c17031025a']
    },
    // 评论系统管理平台
    {
      _id: "e7be066c-1ffb-0352-44e7-b8c24bddfe0c",
      name: "一线审核人员",
      description: "近日，广西南宁。一女子告诉老公下班回家吃馒头，到家后丈夫却傻眼了。从视频中可以看到丈夫拿起“硬疙瘩”馒头去敲钉子，结果居然没两下钉子就嵌入木头里了。扔在地板上，还有“DuangDuang”的声音，好似石头砸掉在地板的声音一样",
      system: "d1eddf8b-2772-657e-9c72-4f943b2001cc",
      permissions: ['fa311277-14ca-de9a-4d51-9925299de555'],
      users: ['2f6bbe1e-f7e2-f02e-97e9-5a0814339d7a', '4edb8f9d-32ff-6375-7152-cb1323828a97', '67df0b21-52a5-1fce-c1ee-2e1008eab9e1', '6b0e0780-3852-3262-dfe5-0e6746c04852', '005da55c-d598-ff8e-f65d-83c17031025a']
    },
    {
      _id: "5cabc08c-b241-68cf-572b-a84350b19d83",
      name: "内容运营人员",
      description: "近日，广西南宁。一女子告诉老公下班回家吃馒头，到家后丈夫却傻眼了。从视频中可以看到丈夫拿起“硬疙瘩”馒头去敲钉子，结果居然没两下钉子就嵌入木头里了。扔在地板上，还有“DuangDuang”的声音，好似石头砸掉在地板的声音一样",
      system: "d1eddf8b-2772-657e-9c72-4f943b2001cc",
      permissions: ['fa311277-14ca-de9a-4d51-9925299de555', 'd5678120-849d-f82c-6fa9-929da6cc8a31'],
      users: ['2f6bbe1e-f7e2-f02e-97e9-5a0814339d7a', '4edb8f9d-32ff-6375-7152-cb1323828a97', '67df0b21-52a5-1fce-c1ee-2e1008eab9e1', '6b0e0780-3852-3262-dfe5-0e6746c04852', '005da55c-d598-ff8e-f65d-83c17031025a']
    },
    {
      _id: "b9ef820b-58fc-2935-e674-7824af92ad15",
      name: "评论审核运营人员",
      description: "近日，广西南宁。一女子告诉老公下班回家吃馒头，到家后丈夫却傻眼了。从视频中可以看到丈夫拿起“硬疙瘩”馒头去敲钉子，结果居然没两下钉子就嵌入木头里了。扔在地板上，还有“DuangDuang”的声音，好似石头砸掉在地板的声音一样",
      system: "d1eddf8b-2772-657e-9c72-4f943b2001cc",
      permissions: ['fa311277-14ca-de9a-4d51-9925299de555', 'd5678120-849d-f82c-6fa9-929da6cc8a31',
        '83eef75a-fc0d-ba6c-0b50-abe27a917c16',
        '42bf2262-9f51-2ab7-b03b-3a2ef5038669'],
      users: ['2f6bbe1e-f7e2-f02e-97e9-5a0814339d7a', '4edb8f9d-32ff-6375-7152-cb1323828a97', '67df0b21-52a5-1fce-c1ee-2e1008eab9e1', '6b0e0780-3852-3262-dfe5-0e6746c04852', '005da55c-d598-ff8e-f65d-83c17031025a']
    }
  ]