# Book Store FE Today Changes

작성일: 2026-04-03

이 문서는 현재 `book-store-FE` 워킹트리를 기준으로 오늘 추가되거나 변경된 내용을 정리한 문서입니다.

## 1. 책 상세 페이지 추가

- 상세 페이지 라우트 추가
  - `/book/:bookId`
  - 파일: `src/App.tsx`
- 책 목록 아이템에서 상세 페이지로 이동 가능하도록 링크 연결
  - 파일: `src/components/books/BookItem.tsx`
- 책 상세 페이지 UI 추가
  - 책 표지, 제목, 카테고리, 포맷, 페이지 수, ISBN, 출간일, 가격, 요약, 상세 설명, 목차 표시
  - 파일: `src/pages/BookDetail.tsx`

## 2. 책 상세 데이터 조회 기능 추가

- 단건 도서 조회 API 추가
  - `fetchBook(bookId)`
  - 파일: `src/api/books.api.ts`
- 상세 페이지 상태 관리용 훅 추가
  - `useBook(bookId)`
  - 상세 데이터 조회와 로컬 상태 관리를 담당
  - 파일: `src/hooks/useBook.ts`
- 상세 페이지 모델 필드명 정리
  - `pubDate` -> `pub_date`
  - `categoryName` -> `category_name`
  - 파일: `src/models/book.model.ts`

## 3. 좋아요 기능 추가

- 좋아요 버튼 컴포넌트 추가
  - 좋아요 수 표시
  - 좋아요 여부에 따라 버튼 스타일 변경
  - 파일: `src/components/book/LikeButton.tsx`
- 좋아요/좋아요 취소 API 추가
  - `likeBook(bookId)`
  - `unlikeBook(bookId)`
  - 파일: `src/api/books.api.ts`
- 상세 페이지에서 좋아요 토글 연결
  - 파일: `src/pages/BookDetail.tsx`
  - 파일: `src/hooks/useBook.ts`
- 로그인하지 않은 상태에서 좋아요 클릭 시 안내 알림 처리
  - 파일: `src/hooks/useBook.ts`
- 테마에 좋아요 버튼 스킴 추가
  - `ButtonScheme`에 `like` 추가
  - 파일: `src/style/theme.ts`

## 4. 장바구니 담기 기능 추가

- 장바구니 추가 API 추가
  - `addCart({ book_id, quantity })`
  - 파일: `src/api/carts.api.ts`
- 장바구니 담기 UI 컴포넌트 추가
  - 수량 입력
  - 수량 증감 버튼
  - 장바구니 추가 버튼
  - 추가 완료 메시지 및 장바구니 이동 링크
  - 파일: `src/components/book/AddToCart.tsx`
- 상세 페이지에 장바구니 담기 컴포넌트 연결
  - 파일: `src/pages/BookDetail.tsx`

## 5. 상세 설명 말줄임/펼치기 UI 추가

- 공통 컴포넌트 `EllipsisBox` 추가
  - 여러 줄 말줄임 처리
  - 펼치기/접기 버튼 제공
  - 아이콘 회전 처리
  - 파일: `src/components/common/EllipsisBox.tsx`
- styled-components 경고가 나지 않도록 transient prop 사용
  - `$linelimit`
  - `$expanded`

## 6. 날짜 포맷 기능 추가

- `dayjs` 설치
- 날짜 포맷 유틸 추가
  - `formatDate(date, format?)`
  - 기본 포맷: `YYYY년 MM월 DD일`
  - 파일: `src/utils/format.ts`

## 7. 의존성 충돌 정리

- `react-scripts@5`와 맞도록 타입/리액트 버전 정리
- 주요 변경 사항
  - `typescript` -> `4.9.5`
  - `react` -> `18.2.0`
  - `react-dom` -> `18.2.0`
  - `@types/react` -> `18.2.0`
  - `@types/react-dom` -> `18.2.0`
  - `react-icons` -> `4.12.0`
  - `dayjs` 추가
- 파일
  - `package.json`
  - `package-lock.json`

## 8. 로그인 후 좋아요 클릭 시 로그아웃되던 문제 수정

- 원인
  - `httpClient` 생성 시점의 토큰이 고정되어 로그인 후 최신 토큰이 요청 헤더에 반영되지 않음
- 수정 내용
  - 요청 인터셉터에서 매 요청마다 `getToken()`으로 최신 토큰을 읽어서 `Authorization` 헤더에 주입하도록 변경
  - 파일: `src/api/http.ts`

## 9. 현재 남아 있는 참고 사항

- `BookDetail`에서 `bookInfoList.map()` 렌더링 시 `key` prop 경고가 아직 남아 있음
  - 파일: `src/pages/BookDetail.tsx`
- 프로젝트 전반에 ESLint 경고가 남아 있음
  - 사용하지 않는 import/변수
  - `useEffect` dependency 경고

## 10. 오늘 기준 주요 변경 파일

- `package.json`
- `package-lock.json`
- `src/App.tsx`
- `src/api/books.api.ts`
- `src/api/carts.api.ts`
- `src/api/http.ts`
- `src/components/book/AddToCart.tsx`
- `src/components/book/LikeButton.tsx`
- `src/components/books/BookItem.tsx`
- `src/components/common/EllipsisBox.tsx`
- `src/hooks/useBook.ts`
- `src/models/book.model.ts`
- `src/pages/BookDetail.tsx`
- `src/style/theme.ts`
- `src/utils/format.ts`
