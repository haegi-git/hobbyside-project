export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 px-6 py-24 text-center">
      <p className="text-sm font-medium tracking-wide text-zinc-500 uppercase">
        hobbyside-project
      </p>
      <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-zinc-900">
        Next.js 환경이 준비되었습니다
      </h1>
      <p className="max-w-md text-lg leading-relaxed text-zinc-600">
        App Router · TypeScript · Tailwind CSS. Supabase는 이후에 연동할 예정입니다.
      </p>
      <p className="mt-4 font-mono text-sm text-zinc-500">
        src/app/page.tsx 를 수정해 시작하세요
      </p>
    </main>
  );
}
