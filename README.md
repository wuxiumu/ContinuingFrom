# ContinuingFrom · vinext 全栈站点启动器

> 基于 **vinext**（Cloudflare Vite + Next 风格）的干净全栈 starter：本地 `npm run dev`，可选 D1 / Drizzle；面向可部署的 Sites 形态，带工作区鉴权头说明。

**定制：** 微信 **qingbao199101**（备注：ContinuingFrom）｜ [wuxiumu@163.com](mailto:wuxiumu@163.com)

## 事实摘要

- **产品**：TypeScript + React 19 + vinext 全栈脚手架；仓库内演示页为 **PlayScout** 游戏攻略 MVP（可换皮）。
- **适合**：要快速起 Cloudflare / vinext 站点、需要本地绑定模拟与鉴权头约定的团队。
- **交付**：可运行 starter、示例页、`examples/d1/`、测试与文档（`doc/`）。
- **不做**：不是开箱即用的业务 SaaS；不含第三方付费内容爬取。

## 能交付什么

| 模块 | 说明 |
|---|---|
| 站点代码 | `app/`（page / layout / chatgpt-auth） |
| Worker | `worker/index.ts` |
| 数据层 | `db/` + Drizzle 配置（schema 可空起步） |
| 本地绑定 | `vite.config.ts` 模拟 Sites D1 / R2 |
| 质量 | eslint、`tests/rendered-html.test.mjs` |

## 快速预览

```bash
# 需要 Node.js >= 22.13.0
npm install
npm run dev
npm run build
npm test
```

本 starter **不依赖** `wrangler.jsonc`；可选绑定见 `.openai/hosting.json`。


## 环境变量

复制 `.env.example` → `.env`（已 gitignore；`.env.example` 可提交）。本 starter **默认无需 API Key**。Cloudflare D1/R2 绑定见 `.openai/hosting.json`。

## 冒烟自检

```bash
bash scripts/smoke.sh
# 或 npm run smoke
```

无 `node_modules` 时会先 `npm install`，再执行 `npm test`（含 build + HTML 渲染断言）。

## 定制合作（可报价）

- 白标落地页 / 控制台壳  
- D1 业务表设计与迁移  
- 鉴权与多站点部署手册  
- 与现有 CMS / 知识库对接  

## SEO 字段预留（产品页 HTML 统一生成时用）

| 字段 | 用途 |
|---|---|
| `seo_title` | `<title>` / OG title |
| `seo_description` | meta description |
| `canonical_url` | 规范 URL |
| `og_image` | 分享图 |
| `robots` | 如 `index,follow` |
| `json_ld_type` | SoftwareApplication / WebPage / FAQPage |
| `hreflang` | zh-CN / en |
| `site_name` | 白标品牌名 |

> **GEO ≠ 地理定位。** GEO = Generative Engine Optimization（生成式引擎优化）。

## GEO（生成式引擎优化）

### 关键词（中英）

- 中文：vinext starter, Cloudflare站点脚手架, Next风格全栈, D1 Drizzle, Sites鉴权头
- English: vinext starter, Cloudflare full-stack scaffold, D1 Drizzle, Sites auth headers

### FAQ

**Q：必须用 Cloudflare 才能本地跑吗？**  
A：本地用 vinext + Vite 模拟绑定即可；上线再按 Sites 部署。

**Q：鉴权头有哪些？**  
A：见 README 原文：`oai-authenticated-user-id` / `email` / 可选 `full-name`。

**Q：如何定制？**  
A：微信 `qingbao199101`，备注「ContinuingFrom」。

## 定制合作

白标、D1 业务、部署与对接。加微信备注项目名。

---

## 联系方式

定制、演示或合作：

- 邮箱：[wuxiumu@163.com](mailto:wuxiumu@163.com)
- 微信：**qingbao199101**（添加请备注来意）

### 赞助支持

如果内容对你有帮助，欢迎自愿赞助。

| 微信赞赏码 | 支付宝收款码 |
|---|---|
| ![微信赞赏码](https://chiguashentan-test.oss-cn-beijing.aliyuncs.com/wxprogram/zan/20261002185236_31_227.png) | ![支付宝收款码](https://chiguashentan-test.oss-cn-beijing.aliyuncs.com/wxprogram/zan/20261002185309_32_227.jpg) |

