/* =====================================================================
   DATA FOR global.html: Chinese IVD companies going global.
   Update this file each quarter. The page (chart, cards, table) is
   built from it automatically. You never need to touch global.html
   to change a number.

   Money is in RMB 亿元 (100 million). The page converts it:
     176.50 → "RMB 17.65bn" (English) / "176.50亿元" (Chinese)
     3.84   → "RMB 384m"
   Growth is year-on-year, in %, as reported.

   To add a company: copy one { ... } block inside `companies`,
   change the values, keep the same keys.
   Every number should have a matching entry in `sources`.
   ===================================================================== */

const DATA = {
  asOf: { en: "November 2026", zh: "2026年11月" },
  fiscalYear: 2025,

  companies: [
    {
      id: "mindray",
      name: { en: "Mindray", zh: "迈瑞医疗" },
      ticker: "300760.SZ",
      total: 332.82,                                  // group revenue, 亿元
      overseas: { revenue: 176.50, growth: 7.40 },
      domestic: { revenue: 156.32, growth: -22.97 },
      signals: {
        en: [
          "Overseas revenue overtook China for the first time.",
          "Europe grew 17% in 2025, on top of strong 2024 growth.",
          "Q1 2026: overseas revenue +15.7% year-on-year.",
          "64 overseas subsidiaries; local production running in 11 countries.",
          "IVD is its largest product line: RMB 12.24bn in 2025 (−9.4%), 36.8% of group revenue."
        ],
        zh: [
          "海外收入首次超过国内。",
          "欧洲市场在2024年高增长的基础上，2025年再增长17%。",
          "2026年一季度海外收入同比增长15.7%。",
          "已设立64家海外子公司，11个国家的本地化生产已投产。",
          "体外诊断是第一大产线：2025年收入122.41亿元（−9.4%），占集团收入36.8%。"
        ]
      },
      caveat: {
        en: "Group-level figures: they include patient monitoring and imaging, not only IVD.",
        zh: "以上为集团整体数据，包含监护、影像等业务，不只是体外诊断。"
      },
      sources: [
        { label: "NBD, 30 Mar 2026 (2025 annual report)", url: "https://www.nbd.com.cn/articles/2026-03-30/4316465.html" },
        { label: "Broker note, 28 May 2026 (domestic revenue, Q1 2026, subsidiaries)", url: "https://pdf.dfcfw.com/pdf/H3_AP202605281822936213_1.pdf" },
        { label: "Harbour Business Observer, 10 Apr 2026 (IVD growth)", url: "https://caifuhao.eastmoney.com/news/20260410184701807929170" }
      ]
    },
    {
      id: "snibe",
      name: { en: "Snibe", zh: "新产业" },
      ticker: "300832.SZ",
      total: 45.77,
      overseas: { revenue: 20.09, growth: 19.13 },
      domestic: { revenue: 25.68, growth: -9.87 },
      signals: {
        en: [
          "Overseas was the main source of growth in 2025.",
          "China fell to 56% of revenue (63% in 2024).",
          "Domestic gross margin fell from 74.9% to 68.3%, which brokers link to chemiluminescence VBP."
        ],
        zh: [
          "海外业务是2025年收入增长的主要来源。",
          "国内收入占比降至56%（2024年为63%）。",
          "国内毛利率从74.9%降至68.3%，券商认为主要反映化学发光集采的影响。"
        ]
      },
      caveat: { en: "", zh: "" },
      sources: [
        { label: "Broker note, 28 Apr 2026 (2025 annual report)", url: "https://pdf.dfcfw.com/pdf/H3_AP202604291821768555_1.pdf" }
      ]
    },
    {
      id: "autobio",
      name: { en: "Autobio", zh: "安图生物" },
      ticker: "603658.SH",
      total: 42.26,
      overseas: { revenue: 3.84, growth: 34.96 },
      domestic: { revenue: 37.57, growth: -8.46 },
      signals: {
        en: [
          "Q1 2026: overseas revenue RMB 107m (+49%). 2026 target: above RMB 600m.",
          "669 products with EU CE marking (end of 2025).",
          "Registrations completed in Indonesia, Saudi Arabia and Brazil.",
          "Already sells microbiology products (RMB 363m in 2025, +0.7%) and launched a new-generation microbial mass spectrometry system (Autof T) in 2024.",
          "Main overseas regions: Asia-Pacific, Europe, Latin America."
        ],
        zh: [
          "2026年一季度海外收入1.07亿元（+49%），2026年目标突破6亿元。",
          "截至2025年底，669项产品取得欧盟CE认证。",
          "已完成印尼、沙特、巴西等市场的注册。",
          "已有微生物检测产品线（2025年收入3.63亿元，+0.7%），并于2024年推出新一代全自动微生物质谱检测系统Autof T。",
          "海外主要销售区域：亚太、欧洲、拉丁美洲。"
        ]
      },
      caveat: {
        en: "Overseas is still small (about 9% of revenue), so high growth rates start from a low base.",
        zh: "海外收入基数仍小（约占9%），高增速建立在低基数之上。"
      },
      sources: [
        { label: "CLS, 1 Jun 2026 (results call: overseas, Q1 2026, target)", url: "https://www.cls.cn/detail/2387479" },
        { label: "Broker note via Gelonghui, Jun 2026 (domestic, registrations)", url: "https://m.gelonghui.com/news/5253172" },
        { label: "Broker note, 3 Jun 2026 (CE certificates)", url: "https://pdf.dfcfw.com/pdf/H3_AP202606031823206428_1.pdf" },
        { label: "Broker note, 18 Apr 2025 (Autof T launch)", url: "https://pdf.dfcfw.com/pdf/H3_AP202504181658473948_1.pdf" }
      ]
    }
  ],

  /* Policy drivers in China, shown in section 01. kind: "fact" or "inference". */
  drivers: [
    {
      kind: "fact",
      en: "Mindray expected chemiluminescence volume-based procurement (VBP) to cut ex-factory prices by about 10–20%.",
      zh: "迈瑞预计化学发光集采执行后，出厂价格整体下调约10%–20%。",
      source: { label: "LatePost via Sina, 10 Aug 2026", url: "https://cj.sina.com.cn/articles/view/7294209083/1b2c4cc3b00101uq90" }
    },
    {
      kind: "fact",
      en: "Autobio's CFO named mutual recognition of test results across hospitals as one of the policies pressuring demand and prices.",
      zh: "安图生物财务总监表示，跨机构检验结果互认等政策叠加，使行业需求和价格承压。",
      source: { label: "CLS, 1 Jun 2026", url: "https://www.cls.cn/detail/2387479" }
    },
    {
      kind: "inference",
      en: "As home revenue shrinks, Chinese IVD leaders are pushing abroad, into Europe and emerging markets, with broader test menus that now include segments such as microbiology.",
      zh: "国内收入收缩，正推动中国IVD龙头加速出海：进入欧洲和新兴市场，产品线也延伸到微生物等领域。",
      source: null
    }
  ]
};
