// 站点内容地图模块
const contentMap = {
  siteUrl: "https://homezh-leyu.com.cn",
  primaryKeyword: "乐鱼体育",
  sections: [
    {
      id: "home",
      title: "首页",
      tags: ["乐鱼体育", "首页推荐", "热门赛事"],
      description: "平台最新动态与热门赛事推荐"
    },
    {
      id: "live",
      title: "直播",
      tags: ["乐鱼体育", "直播频道", "实时比分"],
      description: "高清赛事直播与实时数据"
    },
    {
      id: "esports",
      title: "电竞",
      tags: ["乐鱼体育", "电竞赛事", "战队数据"],
      description: "覆盖主流电竞赛事与战队排名"
    },
    {
      id: "news",
      title: "资讯",
      tags: ["乐鱼体育", "体育新闻", "深度分析"],
      description: "最新体育资讯与专家解读"
    },
    {
      id: "promotions",
      title: "活动",
      tags: ["乐鱼体育", "优惠活动", "会员福利"],
      description: "限时活动与会员专属福利"
    }
  ],
  keywords: [
    "乐鱼体育",
    "体育赛事",
    "直播平台",
    "电竞",
    "赛事资讯",
    "会员福利",
    "比分直播",
    "体育新闻"
  ]
};

// 搜索过滤函数
function searchContent(query, sections = contentMap.sections) {
  if (!query || query.trim() === "") {
    return sections;
  }
  const lowerQuery = query.toLowerCase().trim();
  return sections.filter(section => {
    const titleMatch = section.title.toLowerCase().includes(lowerQuery);
    const tagMatch = section.tags.some(tag => tag.toLowerCase().includes(lowerQuery));
    const descMatch = section.description.toLowerCase().includes(lowerQuery);
    return titleMatch || tagMatch || descMatch;
  });
}

// 按关键词获取相关分区
function getSectionsByKeyword(keyword) {
  if (!keyword || keyword.trim() === "") {
    return [];
  }
  const lowerKeyword = keyword.toLowerCase().trim();
  return contentMap.sections.filter(section =>
    section.tags.some(tag => tag.toLowerCase().includes(lowerKeyword))
  );
}

// 获取所有标签（去重）
function getAllTags(sections = contentMap.sections) {
  const tagSet = new Set();
  sections.forEach(section => {
    section.tags.forEach(tag => tagSet.add(tag));
  });
  return Array.from(tagSet);
}

// 示例使用
if (typeof window === "undefined") {
  // Node.js 环境测试
  console.log("站点地图加载完成");
  console.log("站点:", contentMap.siteUrl);
  console.log("核心关键词:", contentMap.primaryKeyword);
  console.log("分区数量:", contentMap.sections.length);
  console.log("搜索'直播'结果:", searchContent("直播").map(s => s.title));
  console.log("关键词'电竞'相关分区:", getSectionsByKeyword("电竞").map(s => s.title));
  console.log("所有标签:", getAllTags());
}

// 导出模块（适用于 ES Module 或 CommonJS）
if (typeof module !== "undefined" && module.exports) {
  module.exports = { contentMap, searchContent, getSectionsByKeyword, getAllTags };
}