# #심심해시
- 해시태그로 표현하는 유저의 감정 취향 분석 서비스

## 1. 프로젝트 소개
### 사용 데이터  
[네이버](https://movie.naver.com/)  
[다음](https://movie.daum.net/main)  
[왓챠피디아](https://pedia.watcha.com/ko-KR)  
[넷플릭스](https://www.netflix.com/kr)  
[씨네21](http://www.cine21.com/)  

    사이트 크롤링을 통해 작품에 대한 정보, 리뷰 데이터 수집

### 기술 스택 & 사용된 라이브러리
Python  
Jupyter  
Javascript  
MySQL  
Flask  
Numpy  
Pandas  
Matplotlib  
Seaborn  

### 웹 서비스 개요
최근 OTT 서비스 수요가 증가하고, 많은 영상 콘텐츠가 제작되고 있습니다.  
이에 따라 사용자는 작품을 고르는데 있어 다음과 같은 어려움을 겪고 있습니다.
첫째, 방대한 양의 콘텐츠 중 취향에 맞는 작품을 검색하기 어렵다.  
둘째, 영화 작품에 대한 사용자들의 리뷰를 제공하는 사이트가 여러 개로 분산되어있다.  
때문에 각 사이트 별로 리뷰가 편향성을 띄고 있을 수 있고, 많은 리뷰를 읽기 위해 여러 사이트를 방문해야 하는 불편을 겪습니다.  

본 웹 서비스는 여러 서비스를 제공하여 이러한 문제점을 해결합니다.  
첫째, 작품의 리뷰와 줄거리를 분석하여 작품의 분위기를 해시태그로 재정의한다.  
이러한 해시태그를 통해 간단한 태그검색으로 작품 검색이 편리해집니다.
둘째, 여러 사이트에 분산된 리뷰를 통합하고 통합 리뷰의 분석 결과를 시각화하여 제공한다.  
여러 사이트에 분산된 작품의 리뷰를 한페이지에서 확인할 수 있고, 분석 데이터를 통해 사용자는 작품을 편리하고 객관적으로 파악할 수 있게 됩니다.  
마지막으로 본 웹 서비스는 코로나 시대 전&후에 따라 작품에 대한 평가가 어떻게 바뀌었는지 분석결과를 제공함으로써 작품에 대한 새로운 시각을 제시합니다.

## 2. 프로젝트 목표

- 코로나19가 장기적으로 지속되는 상황에서 OTT 서비스 이용자 수가 크게 증가하였으며 이에 따른 다양한 컨텐츠를 제공해주는 플랫폼이 활성화되었지만, 이용자가 원하는 취향의 작품이나 특징을 알아내기 어려워졌습니다.
- OTT 서비스와 관련된 데이터를 바탕으로 이용자에게 특정 컨텐츠 관련 해시태그로 표현된 핵심 키워드 및 웹 사이트별 통합된 리뷰 정보를 제공한다면, 보다 더 간편하고 개인화된 취향의 작품을 발견할 수 있고, 기존 문제점에 대한 해결책이 될 수 있습니다.
- 코로나 전후 상황을 비교했을 때 특정 컨텐츠에 대한 선호도나 이용자들의 평가와 반응에서 뚜렷한 차이를 발견한다면,  코로나 시대 유의미한 인사이트를 제공할 수 있을 것입니다.

## 3. 프로젝트 기능 설명

### 주요 기능 및 서브 기능
- 영화 사이트별 평점 데이터를 통합하여 통합 평점과 각 사이트별 평점을 시각화하여 한 페이지에서 제공하는 기능
    - 평점을 취합하여 보여줌으로써 잠재되어 있을 지 모르는 편향성을 줄인 정보를 이용자에게 제공할 수 있습니다.
- 영화 사이트별 리뷰 데이터를 통합하여 추출된 키워드를 해시태그 형식으로 보여주는 기능
    - 이용자가 검색한 콘텐츠의 해시태그를 보고 해당 작품에 대한 일반적인 평가를 알고, 작품의 분위기와 장르를 파악할 수 있습니다.
- 코로나 전후 기준으로 분리하여 핵심 해시태그를 보여주는 기능
    - 코로나 전후로 해당 작품이 재평가되었는지, 그렇지 않은지 확인할 수 있습니다.
- 코로나 이후로 재평가된 작품을 추천해주는 기능
    - 이용자가 포스트 코로나 시대에 새로운 관점으로 감상할 수 있는 작품을 알 수 있습니다.
- 해시태그를 필터로 이용하여 비슷한 작품 검색하는 기능
    - 이용자의 원하는 키워드를 이용하여 취향에 알맞는 작품을 검색할 수 있습니다.
- 해시태그 가공 전 원본 상태의 리뷰를 보여주는 기능
    - 하나의 웹서비스에서 여러 영화 사이트에 업로드된 리뷰를 확인할 수 있습니다.

### 프로젝트만의 차별점, 기대 효과
기존에는 하나의 작품에 대한 평가를 편향됨 없이 알아보고 싶을 때, 여러 사이트를 각각 따로 방문해야 했었다. 하지만 #심심해시 서비스를 이용하면 한 페이지 내에서 통합된 평가를 한 눈에 볼 수 있고, 해시태그나 차트같은 분석 결과를 확인하여 한층 더 깊에 영화에 대한 정보를 알아 볼 수 있습니다.. 이에 더해  마지막으로 코로나 전후로 같은 영화를 다르게 평가했는지도 알아볼 수 있게 됩니다.

## 4. 프로젝트 구성도
  - 와이어프레임/스토리보드 추가

## 5. 프로젝트 팀원 역할 분담
| 이름 | 담당 업무 |
| ------ | ------ |
| 박정윤 | 팀장/데이터 분석 |
| 사은수 | 프론트엔드 개발 |
| 송성곤 | 백엔드 개발/데이터 분석 |
| 박지호 | 프론트엔드 개발/데이터 분석 |
| 김수연 | 데이터 분석 |
| 김가원 | 백엔드 개발/데이터 분석 |

**멤버별 responsibility**

1. 팀장 

- 기획 단계: 자유로운 토론 분위기 조성, 팀원들의 의견 취합 및 최종기획안 도출, 구체적인 설계와 지표에 따른 프로젝트 제안서 작성
- 개발 단계: 팀원간의 일정 등 조율, 데이터 분석, 파트별 개발 현황 파악
- 수정 단계: 기획, 스크럼 진행, 코치님 피드백 반영해서 수정, 발표 준비

2. 프론트엔드 
- 기획 단계 : 와이어프레임 작성, 사용자 친화적인 UI/UX 디자인 설계, 컴포넌트 계층 구조 디자인
- 개발 단계 : 프론트엔드 기술 환경 구성 및 기능 구현, 와이어프레임과 UI/UX 기반으로 화면 구현, 데이터 시각화,  검색 결과 속도 및 페이지 렌더링 최적화, 시멘틱 마크업과 크로스브라우징 지원 작업
- 수정 단계: 피드백을 바탕으로 UI/UX 디자인 수정 및 반영, 테스팅 작업 진행

3. 백엔드 & 데이터 담당
- 기획 단계: 사용자와 프론트엔드 개발자에게 원하는 데이터를 넘겨줄 수 있는 API 구상, 스크래핑 등을 통해 수집한 데이터를 저장할 DB와 ERD 등을 설계
- 개발 단계: 사용자와 프론트엔드 개발자가 원하는 데이터를 보내줄 수 있는 API 개발, DB 구축, 통계적 분석, 감성분석, 시각화
- 수정 단계: 코치님 피드백 반영해서 로직/ 분석/ 시각화 방식 수정

## 6. 버전
  - 프로젝트의 버전 기입

## 7. FAQ
  - 자주 받는 질문 정리