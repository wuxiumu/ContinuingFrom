#!/usr/bin/env bash
# 轻量冒烟：结构检查；有 node_modules 时再跑 npm test（含 build）
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

fail() { echo "✗ $1" >&2; exit 1; }
ok() { echo "✓ $1"; }

command -v node >/dev/null || fail "需要 Node.js >= 22.13"
NODE_MAJOR=$(node -p "process.versions.node.split('.')[0]")
[[ "$NODE_MAJOR" -ge 22 ]] || fail "Node 主版本需 >= 22（当前 $(node -v)）"
ok "Node $(node -v)"

[[ -f package.json ]] || fail "缺少 package.json"
[[ -f app/page.tsx ]] || fail "缺少 app/page.tsx"
[[ -f worker/index.ts ]] || fail "缺少 worker/index.ts"
[[ -f vite.config.ts ]] || fail "缺少 vite.config.ts"
[[ -f tests/rendered-html.test.mjs ]] || fail "缺少 tests/rendered-html.test.mjs"
ok "核心文件齐全"

if [[ ! -d node_modules ]]; then
  echo "… 安装依赖（首次较慢）"
  npm install --no-fund --no-audit
fi

# 全量测试依赖 build；失败则明确退出
npm test
ok "npm test 通过"

echo ""
echo "smoke: ok"
