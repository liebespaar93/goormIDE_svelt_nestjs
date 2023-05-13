''' 노마드 코더 nestjs를 기반으로 만듬 '''
https://nomadcoders.co/nestjs-fundamentals/lectures/1941

1. 구름 node 를 최신 버전으로 설치할것

2. npx npm 업데이트

''' npx -v '''
''' npx update '''
''' npm install -g npm@9.6.6 '''

3. nestjs 설치

''' npm i -g @nestjs/cli '''
- 설치 확인
''' nest '''

4. 프로젝트 만들기 
''' nest new '''
'''  이름 쓰기 npm 페키지 설정 '''

5. 패키지 import 문제해결
''' npm install @nestjs/common '''
''' npm install @nestjs/core '''


5. 시작시 자동 재시작 설정 하기
https://velog.io/@kys6879/Nest.JS-Hot-reload-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0
''' next start --watch '''
''' npm run start:dev ''' 


6. 패키지 pipe 추가
''' npm install class-validator class-transformer '''
''' npm install @nestjs/mapped-types '''


7. Http module 요청 패키지 추가
''' npm install @nestjs/axios axios '''
///https://velog.io/@anjinwoong/Nest.js-Http-module



8. svelt 패키지 추가 template 변경 view engin 만 사용
''' npm i svelte '''
메인문 변경 
''' import 'svelte/register'; '''
''' import { NestExpressApplication } from '@nestjs/platform-express'; '''
''' import { svelteViewEngine } from './svelte-view-engine'; '''

''' app.engine('svelte', svelteViewEngine) '''
''' app.setViewEngine('svelte'); '''

https://www.liip.ch/en/blog/mvc-with-nestjs-and-svelte

9. views 폴더에 svelte 파일 만들기


10. css import  하지만 사용 하지 않는것이 좋음 스벨트의 컴파일 관련
''' npm install -D rollup-plugin-css-only '''
''' https://morioh.com/p/d3fe648d79ce '''

# test
''' npm run test:cov '''
''' npm run test:watch '''
