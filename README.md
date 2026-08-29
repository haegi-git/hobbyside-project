# hobbyside-project

Next.js 풀스택 사이드 프로젝트 스타터입니다.  
서버/DB는 이후 [Supabase](https://supabase.com)를 붙일 예정입니다.

## Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19** + **TypeScript**
- **Tailwind CSS 4**
- **ESLint** (`eslint-config-next`)
- Supabase — 추후 연동 예정

## Getting started

```bash
# Node.js 20.9+ 권장
npm install
cp .env.example .env.local
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 을 엽니다.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | 개발 서버 (Turbopack) |
| `npm run build` | 프로덕션 빌드 |
| `npm run start` | 프로덕션 서버 |
| `npm run lint` | ESLint |

## Project structure

```
src/app/          # App Router (페이지, 레이아웃, API routes)
public/           # 정적 자산
.env.example      # 환경 변수 템플릿
.cursor/          # Cloud Agent 환경 설정
```

## Next steps

1. `.env.local`에 필요한 값 채우기
2. 기능/페이지 구현
3. Supabase 프로젝트 생성 후 Auth·DB 연동
